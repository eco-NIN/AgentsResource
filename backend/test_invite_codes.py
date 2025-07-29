#!/usr/bin/env python3
"""
邀请码功能测试脚本
"""
from app.api.v1.auth import VALID_INVITE_CODES

def test_invite_codes():
    """测试邀请码功能"""
    print("🧪 测试邀请码验证功能...")
    print(f"📋 当前有效邀请码数量: {len(VALID_INVITE_CODES)}")
    print("📝 有效邀请码列表:")
    
    for i, code in enumerate(sorted(VALID_INVITE_CODES), 1):
        print(f"   {i}. {code}")
    
    print("\n✅ 测试有效邀请码:")
    for code in VALID_INVITE_CODES:
        is_valid = code in VALID_INVITE_CODES
        status = "✅ 有效" if is_valid else "❌ 无效"
        print(f"   {code} - {status}")
    
    print("\n❌ 测试无效邀请码:")
    invalid_codes = ["INVALID123", "WRONG456", "FAKE789", "", "sjtu2025"]  # 注意大小写
    for code in invalid_codes:
        is_valid = code in VALID_INVITE_CODES
        status = "✅ 有效" if is_valid else "❌ 无效"
        print(f"   '{code}' - {status}")
    
    print("\n🎉 邀请码功能测试完成！")
    print(f"💡 提示：邀请码验证区分大小写")

if __name__ == "__main__":
    test_invite_codes() 