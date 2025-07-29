#!/usr/bin/env python3
"""
上海交通大学智能体星球后端服务器启动脚本
"""
import uvicorn
from app.main import app

if __name__ == "__main__":
    print("🚀 启动上海交通大学智能体星球后端服务器...")
    print("📍 API文档地址: http://localhost:8000/docs")
    print("🌐 前端地址: http://localhost:5173")
    print("=" * 50)
    
    uvicorn.run(
        "app.main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        log_level="info"
    ) 