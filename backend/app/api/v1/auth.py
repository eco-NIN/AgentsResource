from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.core.security import create_access_token, verify_token
from app.services.user_service import UserService
from app.models.schemas import UserCreate, UserLogin, TokenResponse, MessageResponse, UserResponse, AvatarUpdate

router = APIRouter(prefix="/auth", tags=["认证"])
security = HTTPBearer()

# 内部邀请码列表
VALID_INVITE_CODES = {
    "SJTU2025",      # 上海交通大学2025
    "AGENTS001",     # 智能体001
    "PLANET123",     # 星球123
    "SMART456",      # 智能456
    "FUTURE789"      # 未来789
}

def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security),
    db: Session = Depends(get_db)
):
    """获取当前登录用户"""
    token = credentials.credentials
    user_id = verify_token(token)
    if user_id is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="无效的认证令牌",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    user_service = UserService(db)
    user = user_service.get_user_by_id(int(user_id))
    if user is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="用户不存在",
        )
    return user

@router.post("/register", response_model=TokenResponse, summary="用户注册")
async def register(user_data: UserCreate, db: Session = Depends(get_db)):
    """
    用户注册接口
    - **username**: 用户名（唯一）
    - **email**: 邮箱地址（唯一）
    - **password**: 密码
    - **full_name**: 全名（必填）
    - **invite_code**: 邀请码（必填）
    """
    # 验证邀请码
    if user_data.invite_code not in VALID_INVITE_CODES:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="无效的邀请码，请联系管理员获取有效的邀请码"
        )
    
    try:
        user_service = UserService(db)
        user = user_service.create_user(user_data)
        
        # 生成访问令牌
        access_token = create_access_token(subject=user.id)
        
        return TokenResponse(
            access_token=access_token,
            token_type="bearer",
            user=UserResponse.from_orm(user)
        )
    except ValueError as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(e)
        )
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="注册失败，请稍后重试"
        )

@router.post("/login", response_model=TokenResponse, summary="用户登录")
async def login(login_data: UserLogin, db: Session = Depends(get_db)):
    """
    用户登录接口
    - **username**: 用户名
    - **password**: 密码
    """
    user_service = UserService(db)
    user = user_service.authenticate_user(login_data.username, login_data.password)
    
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="用户名或密码错误",
        )
    
    if not user.is_active:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="账户已被禁用",
        )
    
    # 生成访问令牌
    access_token = create_access_token(subject=user.id)
    
    return TokenResponse(
        access_token=access_token,
        token_type="bearer",
        user=UserResponse.from_orm(user)
    )

@router.get("/me", response_model=UserResponse, summary="获取当前用户信息")
async def get_current_user_info(current_user = Depends(get_current_user)):
    """获取当前登录用户的信息"""
    return UserResponse.from_orm(current_user)

@router.post("/logout", response_model=MessageResponse, summary="用户登出")
async def logout():
    """
    用户登出接口
    注意：由于使用JWT令牌，服务器端无状态，实际的登出需要前端删除令牌
    """
    return MessageResponse(message="登出成功")

@router.put("/avatar", response_model=UserResponse, summary="更新用户头像")
async def update_avatar(
    avatar_data: AvatarUpdate, 
    current_user = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """
    更新用户头像
    - **avatar**: 头像数据（base64或URL）
    - **avatar_type**: 头像类型（default/preset/upload）
    """
    user_service = UserService(db)
    updated_user = user_service.update_user(
        current_user.id,
        avatar=avatar_data.avatar,
        avatar_type=avatar_data.avatar_type
    )
    
    if not updated_user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="用户不存在"
        )
    
    return UserResponse.from_orm(updated_user) 