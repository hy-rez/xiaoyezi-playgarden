"""Build short, deterministic feedback sounds followed by the spoken encouragement."""
import array, math, random, subprocess, tempfile, wave
from pathlib import Path

def render_feedback(source, target, kind):
    rate=44100
    with tempfile.TemporaryDirectory() as folder:
        speech=Path(folder)/'speech.wav'
        subprocess.run(['afconvert','-f','WAVE','-d','LEI16@44100',str(source),str(speech)],check=True)
        with wave.open(str(speech),'rb') as voice:
            if voice.getnchannels()!=1: raise ValueError('Expected mono narration')
            frames=voice.readframes(voice.getnframes())
        duration=.85 if kind=='correct' else .42
        rng=random.Random(42)
        samples=array.array('h')
        previous=0
        for i in range(int(rate*duration)):
            t=i/rate
            if kind=='correct':
                # Gentle applause: several overlapping, rapidly decaying claps.
                noise=rng.uniform(-1,1); bright=(noise-previous)*.5; previous=noise
                envelope=sum(math.exp(-(t-onset)*65) for onset in [0,.12,.25,.39,.54] if 0<=t-onset<.14)
                value=bright*envelope*.28
            else:
                # Two quiet wooden notes, deliberately avoiding a harsh error buzzer.
                value=0
                for onset,freq in [(0,659.25),(.16,523.25)]:
                    dt=t-onset
                    if 0<=dt<.2:value+=math.sin(2*math.pi*freq*dt)*math.exp(-dt*24)*min(1,dt/.008)*.13
            samples.append(int(max(-.8,min(.8,value))*32767))
        samples.extend([0]*int(rate*.12))
        joined=Path(folder)/'feedback.wav'
        with wave.open(str(joined),'wb') as out:
            out.setparams((1,2,rate,0,'NONE','not compressed'))
            out.writeframes(samples.tobytes()+frames)
        subprocess.run(['afconvert','-f','m4af','-d','aac@44100','-b','96000',str(joined),str(target)],check=True)
