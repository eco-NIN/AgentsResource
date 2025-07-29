from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

# 用户注册请求
class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str
    full_name: str  # 必填字段
    invite_code: str  # 邀请码必填

# 用户登录请求
class UserLogin(BaseModel):
    username: str
    password: str

# 用户信息响应
class UserResponse(BaseModel):
    id: int
    username: str
    email: str
    full_name: Optional[str] = None
    avatar: Optional[str] = None
    avatar_type: Optional[str] = 'default'
    is_active: bool
    is_verified: bool
    created_at: datetime

    class Config:
        from_attributes = True

# 头像更新请求
class AvatarUpdate(BaseModel):
    avatar: str
    avatar_type: str  # 'default', 'preset', 'upload'

# 令牌响应
class TokenResponse(BaseModel):
    access_token: str
    token_type: str
    user: UserResponse

# 通用响应消息
class MessageResponse(BaseModel):
    message: str
    success: bool = True 