---
description: 梳理项目最佳实践，总结通用 AI 规则 (Rules)
---

# Lindong Robotics AI 核心开发规则

本文档定义了在与 AI (如 Cursor, Gemini, Claude) 协作开发 Lindong Robotics 项目时的核心系统规则和编码规范。AI 在编辑和生成代码时应该严格遵守这些规则。

## 一、 技术栈规范 (Tech Stack)
1. **Core**: React 19 + Vite。
2. **Styling**: Tailwind CSS v3。**绝对禁止**使用原生 CSS 写冗余的重复样式，必须最大化使用 Tailwind 的 Utility Classes。
3. **Animation**: Framer Motion。所有的交互动画、页面进入动画需统一使用 Framer Motion 实现。
4. **Icons**: Lucide React。

## 二、 视觉与 UI 规范 (Aesthetics & UI)
### 1. 核心设计语言：高端 Glassmorphism (毛玻璃)
- 关键词：未来科技感、深色模式 (Dark/Blue gradient)、沉浸式、极简主义。
- 通用背景：应采用深蓝或暗黑混色渐变，例如 `bg-gradient-to-b from-gray-900 via-blue-900 to-indigo-950`。
- 毛玻璃效果必备 Class组合：`bg-white/5 backdrop-blur-md border border-white/10 shadow-xl` (深色毛玻璃)。

### 2. 动效设计 (Animations & Interactions)
- **不可突兀**：任何卡片、按钮的出现应伴随着平滑的 `opacity` 和 `y` 轴偏移效果。
- **Hover 回馈**：所有的可交互元素 (Button, Cards) 必须有明显的 Hover 反馈，例如 `hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300`。
- **全局入场**：每个独立区块 (Section) 必须使用 `whileInView` 实现滚动进入视野时的动效。

## 三、 代码架构规范 (Architecture)
1. **组件粒度**：保持组件的小巧与单一职责。如果一个 Section 代码超过 150 行，必须拆分为独立的子组件。
2. **语义化与命名**：
   - 必须使用 TypeScript/JavaScript 现代语法 (ES6+)。
   - 变量命名需具备自解释性。
   - Tailwind class 建议按逻辑顺序排列：定位 -> 盒模型 -> 排版 -> 视觉 -> 动效。
3. **资源引入**：图片资源优先考虑直接通过 `/public/` 绝对路径引用（例如 `src="/logo-dark.png"`）。

## 四、 协作指令建议 (Prompting)
当 AI 添加新功能时，需参考以下步骤检查：
1. 检查新需求是否涉及新图文排版，如果是，必须应用毛玻璃体系和 Framer Motion 动效。
2. 尽量不破坏 `App.jsx` 的顶层滚动监听和路由逻辑。
3. 在提交代码前，需确认未使用废弃的 API 或引起控制台警告。
