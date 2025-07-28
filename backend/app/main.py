from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1 import paper_to_video, paper_to_ppt

app = FastAPI(title="上海交通大学智能体星球 API")

# 允许跨域访问
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 路由注册
app.include_router(paper_to_video.router, prefix="/api/v1")
app.include_router(paper_to_ppt.router, prefix="/api/v1")