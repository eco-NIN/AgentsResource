from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1 import auth
from app.core.database import engine
from app.models import user

# 创建数据库表
user.Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="上海交通大学智能体星球 API",
    description="智能体星球用户认证和服务API",
    version="1.0.0"
)

# 允许跨域访问
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 路由注册
app.include_router(auth.router, prefix="/api/v1")

@app.get("/")
async def root():
    """根路径健康检查"""
    return {"message": "上海交通大学智能体星球 API 运行正常", "status": "healthy"}