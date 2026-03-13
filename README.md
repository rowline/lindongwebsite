# 麟动具身智能科技 (Lindong Robotics) - 官方网站

![Lindong Robotics](/public/logo-dark.png)

欢迎来到 **深圳麟动具身科技有限公司 (Lindong AI)** 的官方网站项目代码库。本项目旨在展示麟动科技作为顶尖具身智能机器人的企业形象、核心产品与前沿技术。

## ✨ 项目特色

- **高端视觉体验**：采用现代化的 Glassmorphism (毛玻璃) 风格，结合深空蓝与紫色渐变，提供极具科技感和未来感的视觉呈现。
- **流畅交互动效**：通过 `framer-motion` 实现全局平滑的滚动侦测动画（Scroll Animations），带给用户呼吸感与沉浸感。
- **响应式设计**：完美适配从移动端到超大屏幕的各种设备分辨率，所有核心组件均深度打磨过移动端呈现逻辑。
- **组件化架构**：基于 React 现代函数式组件开发，高度可复用的 UI 设计（如 Navbar, Product Card, Tech Showcase 等）。

## 🚀 技术栈

本项目基于以下前端技术栈构建：

- **框架**：[React 19](https://react.dev/)
- **构建工具**：[Vite](https://vitejs.dev/) - 追求极致的冷启动速度与热更新体验。
- **样式方案**：[Tailwind CSS](https://tailwindcss.com/) - 实用优先的 CSS 框架，支持快速构建定制化 UI。
- **动画引擎**：[Framer Motion](https://www.framer.com/motion/) - 强大的 React 声明式动画库。
- **图标矢量图标**：[Lucide React](https://lucide.dev/) - 简洁美观的一致性开源图标集。

## 📦 目录结构简析

```text
lindong-robotics/
├── public/                 # 静态资源 (存放公司原生 Logo: logo-dark.png & logo-light.png 等)
├── src/                    # 源码核心目录
│   ├── assets/             # 预编译涉及的媒体资源
│   ├── index.css           # 全局样式入口 (包含 Tailwind directives 与自定义 CSS base)
│   ├── App.jsx             # 核心单页面入口，包含独立封装的所有 Sections 和交互逻辑
│   └── main.jsx            # React 挂载入口
├── .agents/                # 自动化协作或工作流增强脚本 (如 start-preview.md)
├── tailwind.config.js      # Tailwind 自定义配置文件 (含扩展的关键帧和色彩变量)
├── vite.config.js          # Vite 构建与开发环境配置
└── package.json            # 依赖与脚本清单
```

## 🛠️ 本地运行开发环境

### 前置要求
- 需要安装 [Node.js](https://nodejs.org/) (推荐 LTS 版本)。
- 推荐使用 `pnpm` 或 `npm` 进行依赖管理。

### 1. 安装依赖

```bash
# 进入项目目录
cd lindong-robotics

# 安装依赖
npm install
# 或者使用您的包管理器，如: pnpm install
```

### 2. 启动本地预览服务器

```bash
# 启动 Vite 开发服务器
npm run dev
```
如果你在协作工作流中，可以使用已经封装好的 Skill 指令极速启动预览：
在终端机器人对话框发送：`/start-preview` 即可。

启动后，访问形如 `http://localhost:5173` 或随提示弹出的本地地址，即可在浏览器中预览网站。

### 3. 构建生产版本

代码修改与联调完毕后，可以通过以下命令打包准备上线：

```bash
npm run build
```
这将在根目录生成 `dist/` 文件夹，您可以将其部署到 Vercel、Netlify 或任意 Nginx/Apache 静态托管服务器上。

---

*© 2025 深圳麟动具身科技有限公司 版权所有.*