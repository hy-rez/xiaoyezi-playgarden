"""Rebuild the public photo credit page from the checked-in source manifest."""
import html
import json
from pathlib import Path

folder = Path(__file__).resolve().parents[1] / 'public/images/encyclopedia'
sources = json.loads((folder / 'sources.json').read_text())
def e(value):
    return html.escape(" ".join(value.split()))
sections = []
for source in sources:
    sections.append(
        f'<section><h2>{e(source["name"])}</h2>'
        f'<img src="{e(source["file"])}" alt="{e(source["name"])}" width="240" loading="lazy">'
        f'<p>{e(source["title"])} · {e(source["creator"] or "来源记录未标注作者")}</p>'
        f'<p><a href="{e(source["page"])}">Wikimedia Commons 来源</a> · '
        f'<a href="{e(source["licenseUrl"])}">{e(source["license"])}</a></p>'
        f'<p>{e(source["changes"])}</p></section>'
    )
(folder / 'credits.html').write_text(
    '<!doctype html><html lang="zh-CN"><meta charset="utf-8">'
    '<meta name="viewport" content="width=device-width,initial-scale=1">'
    '<title>百科照片来源与许可</title><style>'
    'body{font:16px/1.7 system-ui;max-width:900px;margin:auto;padding:24px;color:#354c40;background:#f8f5ec}'
    'main{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:24px}'
    'img{max-width:100%;height:180px;object-fit:contain}a{text-underline-offset:4px}p{overflow-wrap:anywhere}'
    '</style><a href="../../index.html#/encyclopedia">返回认识百科</a><h1>百科照片来源与许可</h1>'
    '<p>真实照片来自 Wikimedia Commons。照片版权属于原作者，各图片按下列许可使用；CC BY-SA 照片继续适用原许可。</p>'
    '<main>' + ''.join(sections) + '</main></html>'
)
