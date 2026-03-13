---
description: 生产环境打包与检查 (Build and Export)
---

# 打包与导出网站 Workflow (Skill)

当你在本地预览检查完毕，需要准备将网站部署上线（例如交给 Vercel/Nginx/静态服务器托管）时，执行此工作流。

1. **进入项目目录**
// turbo
```bash
cd /Users/rollin/Desktop/website/lindong-robotics
```

2. **清理缓存并执行构建检查**
使用 Vite 原生构建工具，这一步会同时执行代码产物压缩和路径检查。
// turbo
```bash
npm run build
```

3. **打包结果确认**
构建完成后，所有静态产物将会存放在 `/Users/rollin/Desktop/website/lindong-robotics/dist` 文件夹内。
如果有报路径找不到的错误（尤其是在引入本地照片时），返回修改资源饮用路径（确保绝对路径走 public，相对路径走 assets）。

4. **部署建议**
(若适用) 你可以将 `dist/` 压缩为 zip 提供给用户，或推荐用户运行 `git push` 给前端持续集成服务。
