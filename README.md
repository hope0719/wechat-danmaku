# 🎬 微信小程序弹幕 · WeChat Mini-Program Danmaku

[![GitHub stars](https://img.shields.io/github/stars/hope0719/wechat-danmaku?style=social)](https://github.com/hope0719/wechat-danmaku/stargazers)

If this project helps you, please consider giving it a ⭐ star!  
如果本项目对你有帮助，欢迎点个 ⭐ Star 支持一下！



> 微信弹幕、微信手持弹幕、微信应援弹幕、微信小程序弹幕组件 —— 一个适用于**微信小程序**的开源弹幕/手持弹幕/应援打 Call 组件。

如果你正在找「微信弹幕怎么做」「微信小程序弹幕组件」「手持弹幕小程序源码」「微信应援弹幕」「演唱会弹幕小程序」，这个项目就是为你准备的。

支持逐字竖排滚动、全屏舞台、LED/霓虹/彩虹/闪烁等 7 种视觉特效，适合演唱会应援、活动现场互动、直播间氛围营造、粉丝打 Call 等场景。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Platform: WeChat Mini-Program](https://img.shields.io/badge/Platform-WeChat%20Mini--Program-07C160.svg)](#)
[![Stars](https://img.shields.io/badge/Star-%E2%AD%90%20%E6%B1%82Star-yellow.svg)](#给个star吧)

## ✨ 核心功能

- **逐字竖排滚动** — 文字拆成单个字符竖排展示，顺时针旋转 90°，从底部升入、顶部升出
- **全屏舞台模式** — 一键进入全屏，双击退出，适合投影到大屏幕
- **7 种视觉特效** — LED 点阵、霓虹发光、彩虹渐变、闪烁、镜像翻转、随机特效、静止定格
- **颜色自定义** — 内置 8 种常用颜色 + 自由取色器，支持文字颜色和背景色独立设置
- **速度/字号调节** — 滑块自由调节滚动速度和文字大小
- **预设主题** — 一键切换「荧光绿」「霓虹粉」「赛博蓝」「火焰橙」「纯净白」5 种主题
- **实时预览** — 输入文字即刻预览效果，所见即所得
- **快捷短语** — 内置「即兴现场」「燃爆全场」「为你打 call」等常用语

## 📸 效果预览

| 预览区 | 全屏舞台 |
|--------|----------|
| 底部输入栏输入文字，上方实时预览 | 点击播放进入全屏，文字从底部滚动升起 |

## 🚀 快速开始

### 适用场景

微信小程序弹幕、手持弹幕、应援打 Call、粉丝互动、现场活动、演唱会、音乐会、Livehouse、电竞比赛、年会、婚礼、毕业典礼等一切需要文字上墙的场合。

### 1. 复制文件

将以下文件复制到你的微信小程序项目的页面目录中（例如 `pages/danmaku/`）：

```
danmaku.wxml    — 页面模板
danmaku.less    — 样式文件（已内联所需变量，无需外部依赖）
danmaku.ts      — TypeScript 逻辑
danmaku.js      — JavaScript 逻辑（与 .ts 二选一）
danmaku.json    — 页面配置
```

### 2. 注册页面

在 `app.json` 中注册页面路径：

```json
{
  "pages": [
    "pages/danmaku/danmaku"
  ]
}
```

> 💡 **提示**：如果你使用 TypeScript，只需 `.ts` 文件；如果使用原生 JavaScript，只需 `.js` 文件。两者功能完全一致。

### 3. 编译运行

用微信开发者工具打开项目，编译即可看到弹幕页面。

> ⚠️ **注意**：`.less` 文件需要在微信开发者工具中开启「LESS 编译」插件，或将 `.less` 编译为 `.wxss` 后使用。

## 🎮 使用方式

1. 在底部输入框输入你想展示的文字
2. 预览区会实时显示效果
3. 点击左下角 ⚙️ 按钮打开设置面板，调整颜色、特效、速度、字号
4. 点击右下角 ▶️ 播放按钮进入全屏舞台
5. 全屏模式下**双击屏幕**退出

## 🎨 特效说明

| 特效 | 关键词 | 效果描述 |
|------|--------|----------|
| LED | 点阵屏 | 模拟 LED 点阵屏效果，文字带圆点纹理 |
| 霓虹 | 发光字 | 文字多层发光效果，夜间/暗场氛围感炸裂 |
| 彩虹 | 渐变字 | 文字颜色在彩虹色之间循环渐变流动 |
| 闪烁 | 频闪 | 文字间歇闪烁，节奏感强 |
| 镜像 | 翻转 | 文字水平镜像翻转 |
| 随机 | 盲盒 | 随机切换上述特效 |
| 静止 | 定格 | 暂停滚动动画，定格当前画面 |

## 🏗️ 技术栈

- **平台**：微信小程序（WeChat Mini-Program）
- **框架**：原生 WXML + LESS/WXSS + TypeScript / JavaScript
- **动画**：CSS Animations（GPU 加速，will-change 优化）
- **架构**：纯前端实现，无后端依赖，零配置

## 📂 文件结构

```
wechat-danmaku/
├── danmaku.wxml    # WXML 页面模板
├── danmaku.less    # LESS 样式文件（变量已内联，开箱即用）
├── danmaku.ts      # TypeScript 页面逻辑
├── danmaku.js      # JavaScript 页面逻辑
├── danmaku.json    # 页面配置
├── LICENSE         # MIT 开源协议
└── README.md       # 项目说明
```

## ❓ 常见问题

**Q: 为什么弹幕不滚动？**  
A: 确认输入了文字后点击了播放按钮，或在输入框中直接输入文字触发实时预览。

**Q: 如何在全屏模式下退出？**  
A: 双击屏幕即可退出全屏。

**Q: LESS 文件编译报错？**  
A: 确保微信开发者工具已开启「LESS 编译」插件（设置 → 编辑器设置 → 编译 LESS）。

**Q: 颜色不生效？**  
A: 检查是否开启了 LED 或彩虹特效，这些特效会覆盖文字颜色。

## ⭐ 给个 Star 吧！

如果这个微信小程序弹幕组件对你有帮助，**请给项目点个 Star ⭐**！

你的每一个 Star 都是我们持续维护和更新的动力 💜

## 📞 联系作者

如有问题、建议或定制需求，欢迎联系：

**微信：18124221616**

## 📄 License

MIT © [hope0719](https://github.com/hope0719)

---

> 来自「即兴游戏库」微信小程序项目 — 更多即兴互动小工具持续开源中
