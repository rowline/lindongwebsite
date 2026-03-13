---
description: 添加新的 UI 交互组件 (Add generic UI component)
---

# 添加前端组件 Workflow (Skill)

当你需要为公司网站添加新的 UI 区块（例如：新闻资讯、技术博客、招聘页面）时，请按照此工作流执行，以确保完美融入麟动科技的高端毛玻璃（Glassmorphism）设计规范。

1. **进入项目源码目录**
// turbo
```bash
cd /Users/rollin/Desktop/website/lindong-robotics
```

2. **分析需求与拟议结构**
AI 请先思考要创建的组件层级。对于中大型组件，通常需要在 `src/components/` 下新建。如果只是单页项目内的追加区块，可直接在 `App.jsx` 或同级新建。

3. **执行代码编写规则 (重要)**
当编写 React 代码时，务必强制套用以下预设模板逻辑与样式类：
- **容器样式**: `<section className="py-24 relative overflow-hidden bg-transparent">`
- **标题统一样式**: `<h2 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600 mb-6">`
- **毛玻璃卡片**: `<motion.div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">`
- **Framer Motion 动画**: 统一引入 `import { motion } from 'framer-motion'`，并为每个卡片包裹 `initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}`。

4. **更新主应用**
将新完成的组件 import 并放置在 `App.jsx` 的 `<main>` 结构中的合适位置。如果是新增了导航节点，记得同步更新 `Navbar` 中的 `navLinks` 数组结构。

5. **一键预览检查**
在对话框运行 `/start-preview` 检验实际视觉效果与动画衔接。
