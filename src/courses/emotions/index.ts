import type {Lesson} from '../../types';
export default {
  "kind": "interactive",
  "quizSize": 6,
  "library": {
    "label": "情绪"
  },
  "pages": [
    {
      "title": "开心",
      "text": "这个小朋友笑弯了眼睛，嘴角向上，露出开心的表情。开心的时候，可以和家人分享。",
      "art": "emotion-0",
      "audio": "emotions-intro-0"
    },
    {
      "title": "难过",
      "text": "这个小朋友嘴角向下，眼里有一颗小泪珠，露出难过的表情。难过的时候，可以告诉信任的大人。",
      "art": "emotion-1",
      "audio": "emotions-intro-1"
    },
    {
      "title": "生气",
      "text": "这个小朋友皱着眉毛，嘴巴抿起来，露出生气的表情。生气也可以说出来，先停一停，再慢慢表达。",
      "art": "emotion-2",
      "audio": "emotions-intro-2"
    },
    {
      "title": "害怕",
      "text": "这个小朋友眉毛抬起来，嘴巴轻轻抿着，露出有点害怕的表情。害怕的时候，可以找信任的大人陪伴。",
      "art": "emotion-3",
      "audio": "emotions-intro-3"
    },
    {
      "title": "惊讶",
      "text": "这个小朋友眼睛睁大，嘴巴变成小圆圈，露出惊讶的表情。有了新发现，有时会感到惊讶。",
      "art": "emotion-4",
      "audio": "emotions-intro-4"
    },
    {
      "title": "平静",
      "text": "这个小朋友眉毛舒展，嘴巴轻轻微笑，露出平静的表情。不同感受都可以告诉别人。",
      "art": "emotion-5",
      "audio": "emotions-intro-5"
    }
  ],
  "questions": [
    {
      "prompt": "哪张图的小朋友露出了开心的表情？",
      "audio": "emotions-q-0-0",
      "options": [
        {
          "label": "小朋友的表情",
          "art": "emotion-0"
        },
        {
          "label": "小朋友的表情",
          "art": "emotion-1"
        }
      ],
      "answer": 0
    },
    {
      "prompt": "小朋友说：“我很开心！”哪张表情图和他说的感受相对应？",
      "audio": "emotions-q-0-1",
      "options": [
        {
          "label": "小朋友的表情",
          "art": "emotion-1"
        },
        {
          "label": "小朋友的表情",
          "art": "emotion-0"
        }
      ],
      "answer": 1
    },
    {
      "prompt": "哪张图的小朋友露出了难过的表情？",
      "audio": "emotions-q-1-0",
      "options": [
        {
          "label": "小朋友的表情",
          "art": "emotion-0"
        },
        {
          "label": "小朋友的表情",
          "art": "emotion-1"
        }
      ],
      "answer": 1
    },
    {
      "prompt": "小朋友说：“我有点难过。”哪张表情图和他说的感受相对应？",
      "audio": "emotions-q-1-1",
      "options": [
        {
          "label": "小朋友的表情",
          "art": "emotion-1"
        },
        {
          "label": "小朋友的表情",
          "art": "emotion-0"
        }
      ],
      "answer": 0
    },
    {
      "prompt": "哪张图的小朋友露出了生气的表情？",
      "audio": "emotions-q-2-0",
      "options": [
        {
          "label": "小朋友的表情",
          "art": "emotion-2"
        },
        {
          "label": "小朋友的表情",
          "art": "emotion-5"
        }
      ],
      "answer": 0
    },
    {
      "prompt": "小朋友说：“我现在很生气。”哪张表情图和他说的感受相对应？",
      "audio": "emotions-q-2-1",
      "options": [
        {
          "label": "小朋友的表情",
          "art": "emotion-5"
        },
        {
          "label": "小朋友的表情",
          "art": "emotion-2"
        }
      ],
      "answer": 1
    },
    {
      "prompt": "哪张图的小朋友露出了害怕的表情？",
      "audio": "emotions-q-3-0",
      "options": [
        {
          "label": "小朋友的表情",
          "art": "emotion-2"
        },
        {
          "label": "小朋友的表情",
          "art": "emotion-3"
        }
      ],
      "answer": 1
    },
    {
      "prompt": "小朋友说：“我有一点害怕，想请你陪着我。”哪张表情图和他的感受相对应？",
      "audio": "emotions-q-3-1",
      "options": [
        {
          "label": "小朋友的表情",
          "art": "emotion-3"
        },
        {
          "label": "小朋友的表情",
          "art": "emotion-2"
        }
      ],
      "answer": 0
    },
    {
      "prompt": "哪张图的小朋友露出了惊讶的表情？",
      "audio": "emotions-q-4-0",
      "options": [
        {
          "label": "小朋友的表情",
          "art": "emotion-4"
        },
        {
          "label": "小朋友的表情",
          "art": "emotion-0"
        }
      ],
      "answer": 0
    },
    {
      "prompt": "小朋友说：“哇，我很惊讶！”哪张表情图和他说的感受相对应？",
      "audio": "emotions-q-4-1",
      "options": [
        {
          "label": "小朋友的表情",
          "art": "emotion-0"
        },
        {
          "label": "小朋友的表情",
          "art": "emotion-4"
        }
      ],
      "answer": 1
    },
    {
      "prompt": "哪张图的小朋友露出了平静的表情？",
      "audio": "emotions-q-5-0",
      "options": [
        {
          "label": "小朋友的表情",
          "art": "emotion-2"
        },
        {
          "label": "小朋友的表情",
          "art": "emotion-5"
        }
      ],
      "answer": 1
    },
    {
      "prompt": "小朋友说：“我现在感觉很平静。”哪张表情图和他说的感受相对应？",
      "audio": "emotions-q-5-1",
      "options": [
        {
          "label": "小朋友的表情",
          "art": "emotion-5"
        },
        {
          "label": "小朋友的表情",
          "art": "emotion-2"
        }
      ],
      "answer": 0
    }
  ],
  "sticker": "emotion-cover"
} satisfies Lesson;
