#!/usr/bin/env python3
"""
数据库重置脚本 - 用于添加头像功能后重新创建数据库表
"""
import os
from app.core.database import engine, Base
from app.models.user import User

def reset_database():
    """重置数据库，删除并重新创建所有表"""
    
    # 数据库文件路径
    db_file = "sjtu_agents.db"
    
    print("🗃️  正在重置数据库...")
    
    # 删除现有数据库文件（如果存在）
    if os.path.exists(db_file):
        os.remove(db_file)
        print(f"✅ 已删除旧数据库文件: {db_file}")
    
    # 重新创建所有表
    Base.metadata.create_all(bind=engine)
    print("✅ 已创建新的数据库表结构")
    
    print("🎉 数据库重置完成！新用户表包含头像字段：")
    print("   - avatar: 存储头像数据（base64或URL）")
    print("   - avatar_type: 头像类型（default/preset/upload）")
    print("\n💡 提示：现有用户需要重新注册，因为数据库已重置")

if __name__ == "__main__":
    reset_database() 