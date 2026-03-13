---
description: 启动网站本地预览服务器
---
通过内置的 Vite 环境快速在本地拉起 React 网站开发服务器并进行预览。

1. 进入网站项目所在目录。
// turbo
```bash
cd /Users/rollin/Desktop/website/lindong-robotics
```

2. 启动 Vite 本地预览服务（因为先前的依赖环境问题，直接使用安全缓存和绝对路径保证 Vite 可用性）。
// turbo
```bash
/tmp/lindong-robotics/node_modules/.bin/vite --port 5174
```
