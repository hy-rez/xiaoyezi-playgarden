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

首页包含常识认知、生活技能、故事天地与睡前故事。互动课按介绍、测试、奖励推进，选错可重试。贴纸和静音偏好只保存在当前浏览器；隐私模式或清理数据后可能丢失。

## 新增课程

1. 复制 `docs/course-template.ts` 至 `src/courses/<新ID>/index.ts`。
2. 填写内容，音频放到 `public/audio/<audio字段>.m4a`。插画可扩展 `src/Art.tsx`，或在自定义组件使用自己的本地素材。
3. 在 `src/courses/registry.ts` 登记唯一 ID、标题、分类、主题、适龄月份、封面和动态导入入口。年龄只是参考，不锁课。
4. 运行测试和构建，在手机浏览器检查后提交到 main；GitHub Actions 自动发布。

`src/types.ts` 定义三种内容格式：interactive（介绍页、二选一测试、贴纸）、storybook（分页图文语音）、bedtime（完整音频）。扩展特殊玩法可在 Player 中增加类型分支，仍须复用音频清理和导航约定。页面地址使用 `#/课程ID`，可直接分享。

## 音频与行为

旁白是 macOS Tingting 中文语音预先合成的 AAC 文件，不调用在线 TTS。`scripts/generate-audio.py` 可在 macOS 重新生成，`public/audio/transcripts.json` 记录完整文本。所有语音均为合成语音，后续可直接替换为家长录音。

普通课切后台暂停，点击继续后播放；睡前故事尝试保持后台播放，受浏览器与系统限制。定时器使用绝对截止时间，后台被系统挂起时会在恢复后重新检查；网页无法保证所有设备锁屏时准时停止。

## 部署

仓库 Settings → Pages → Source 选择 GitHub Actions。推送 main 后构建、测试并部署。相对资源路径和哈希路由兼容 GitHub 项目子路径。

## 内容与素材

故事《小兔找月亮》、课程文案和 SVG 插画为本项目原创。未引入第三方图片、音乐或字体文件；字体使用系统字体。React、Vite、Lucide 等依赖按各自开源许可证使用。本站不收集孩子资料，无账号、广告和第三方统计。
