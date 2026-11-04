# 小叶子的乐园

手机和平板上的中文幼儿启蒙小乐园。React + TypeScript + Vite，纯静态网站。

公开访问：https://hy-rez.github.io/xiaoyezi-playgarden/

## 本地开发

需要 Node.js 22.12+。

```sh
npm ci
npm run dev
npm test
npm run build
```

首页包含常识认知、生活技能、故事天地与睡前故事。常识认知包含《认识小动物》（50种动物，可点选浏览，每轮随机六题）、《听声音猜动物》（真实录音二选一，每轮随机三题）、《认识百科》（50张来自网上的真实照片，涵盖自然景象、植物、交通工具和蔬果，可点选浏览、听中文介绍，每轮随机六题）和《认识颜色》（25种颜色分别对应25种生活物品（如红苹果、黄香蕉），双色、三色各10种物品均有图文语音介绍，可分组点选浏览，每轮六题，依次为单色、双色物品、三色物品各两题，双色和三色题库各含10种物品，两组物品互不重复）。互动课按介绍、测试、奖励推进，选错可重试。课程入口可返回乐园；介绍、测试和奖励页均有文字返回按钮，回到课程介绍或选择列表，同时停止声音及睡前定时。贴纸和静音偏好只保存在当前浏览器；隐私模式或清理数据后可能丢失。

## 新增课程

1. 复制 `docs/course-template.ts` 至 `src/courses/<新ID>/index.ts`。
2. 填写内容，音频放到 `public/audio/<audio字段>.m4a`。插画可扩展 `src/Art.tsx`，或在自定义组件使用自己的本地素材。
3. 在 `src/courses/registry.ts` 登记唯一 ID、标题、分类、主题、适龄月份、封面和动态导入入口。年龄只是参考，不锁课。
4. 运行测试和构建，在手机浏览器检查后提交到 main；GitHub Actions 自动发布。

`src/types.ts` 定义三种内容格式：interactive（介绍页、二选一测试、贴纸）、storybook（分页图文语音）、bedtime（完整音频）。interactive 可配置 `mode: 'sound-quiz'`，不设介绍页，听完真实录音后选择图片，重听不会清除答题进度。扩展特殊玩法可在 Player 中增加类型分支，仍须复用音频清理和导航约定。页面地址使用 `#/课程ID`，可直接分享。

## 音频与行为

旁白是 macOS Tingting 中文语音预先合成的 AAC 文件，不调用在线 TTS。`scripts/generate-audio.py` 可在 macOS 重新生成，`public/audio/transcripts.json` 记录完整文本。答对配有短促鼓掌和鼓励语音、轻跳动画，答错配有柔和双音与鼓励语音、轻晃动画；反馈遵循静音和减少动态效果设置。提示音由项目脚本合成。所有语音均为合成语音，后续可直接替换为家长录音。

普通课切后台暂停，点击继续后播放；睡前故事尝试保持后台播放，受浏览器与系统限制。定时器使用绝对截止时间，后台被系统挂起时会在恢复后重新检查；网页无法保证所有设备锁屏时准时停止。

## 部署

仓库 Settings → Pages → Source 选择 GitHub Actions。推送 main 后构建、测试并部署。相对资源路径和哈希路由兼容 GitHub 项目子路径。

## 内容与素材

故事《小兔找月亮》、课程文案和 SVG 插画为本项目原创。动物叫声为第三方授权真实录音，点击动物介绍的大图播放；会停止当前旁白，继续听介绍可点击“听一听”。来源、作者、录音物种和各自许可见 `public/audio/animal-calls/credits.html` 与 `sources.json`，改编录音沿用原许可。`scripts/prepare-animal-calls.py` 按来源清单处理下载好的原始录音，需要 ffmpeg。百科照片来自 Wikimedia Commons，已下载到 `public/images/encyclopedia/`，不依赖外站热链。图片作者、来源与许可见该目录的 `credits.html` 和 `sources.json`，课程底部提供入口；照片保持原图比例、未裁剪或改色，各自沿用原许可。运行 `python3 scripts/encyclopedia-credits.py` 可根据来源清单重新生成图片署名页。百科卡片使用统一 4:3 图片框和等高标题区，照片完整等比展示。百科旁白文本见 `scripts/encyclopedia-narration.json`，可用现有音频脚本重新生成。未引入第三方音乐或字体文件；字体使用系统字体。React、Vite、Lucide 等依赖按各自开源许可证使用。本站不收集孩子资料，无账号、广告和第三方统计。
