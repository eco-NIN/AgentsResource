```
AgentsResource/
│
├── frontend/              # React 项目
│   ├── public/
│   ├── src/
│   │   ├── assets/        # 图片、图标等
│   │   ├── components/    # 可复用组件（卡片等）
│   │   ├── pages/         # 页面级组件（卡片功能页）
│   │   │   ├── Home/
│   │   │   ├── PaperToVideo/
│   │   │   ├── PaperToPPT/
│   │   │   └── ...
│   │   ├── layout/        # 布局组件（导航栏、页脚等）
│   │   ├── router/        # 路由配置（React Router）
│   │   ├── services/      # 前端接口请求封装（axios）
│   │   ├── utils/         # 工具函数
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── package.json
│
├── backend/               # FastAPI 后端
│   ├── app/
│   │   ├── api/
│   │   │   ├── v1/
│   │   │   │   ├── paper_to_video.py
│   │   │   │   ├── paper_to_ppt.py
│   │   │   │   └── ...
│   │   ├── core/          # 配置（CORS、日志、设置）
│   │   ├── models/        # 数据模型（Pydantic）
│   │   ├── services/      # 各功能业务逻辑
│   │   ├── utils/         # 工具库
│   │   └── main.py        # 启动入口
│   ├── requirements.txt
│
├── README.md
└── .gitignore
```

vite初始化项目
<!-- npm create vite@latest frontend -- --template react-ts -->
npm create vite@latest . -- --template react


<!-- 安装 Tailwind CSS + Shadcn UI
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p -->

npm install react-router-dom