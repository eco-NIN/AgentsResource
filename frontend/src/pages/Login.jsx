import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    full_name: '',
    invite_code: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError(''); // 清除错误信息
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      if (isLogin) {
        // 登录
        await authService.login({
          username: formData.username,
          password: formData.password
        });
      } else {
        // 注册
        await authService.register({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          full_name: formData.full_name,
          invite_code: formData.invite_code
        });
      }
      
      // 登录/注册成功后跳转到用户中心
      navigate('/dashboard');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setError('');
    setFormData({
      username: '',
      email: '',
      password: '',
      full_name: '',
      invite_code: ''
    });
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* 头部 */}
        <div className="text-center">
          <div className="mx-auto h-20 w-20 bg-gradient-to-br from-[--color-primary] to-[--color-secondary] rounded-full flex items-center justify-center mb-6">
            <span className="text-2xl">🚀</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-100 mb-2">
            {isLogin ? '登陆星球' : '加入星球'}
          </h2>
          <p className="text-lg text-slate-300">
            {isLogin ? '连接到上海交通大学智能体星球' : '成为上海交通大学智能体星球的一员'}
          </p>
        </div>
        
        {/* 登录/注册表单 */}
        <div className="service-card p-8">
          {/* 错误提示 */}
          {error && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 用户名 */}
            <div>
              <label htmlFor="username" className="block text-slate-200 font-medium mb-2">
                用户名
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                value={formData.username}
                onChange={handleInputChange}
                placeholder="请输入您的用户名"
                className="w-full px-4 py-3 border border-slate-600 bg-slate-800/50 text-slate-200 rounded-lg focus:ring-2 focus:ring-[--color-primary] focus:border-transparent transition-all"
              />
            </div>

            {/* 邮箱 - 仅注册时显示 */}
            {!isLogin && (
              <div>
                <label htmlFor="email" className="block text-slate-200 font-medium mb-2">
                  邮箱地址
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="请输入您的邮箱地址"
                  className="w-full px-4 py-3 border border-slate-600 bg-slate-800/50 text-slate-200 rounded-lg focus:ring-2 focus:ring-[--color-primary] focus:border-transparent transition-all"
                />
              </div>
            )}

            {/* 全名 - 仅注册时显示 */}
            {!isLogin && (
              <div>
                <label htmlFor="full_name" className="block text-slate-200 font-medium mb-2">
                  姓名 <span className="text-red-400">*</span>
                </label>
                <input
                  id="full_name"
                  name="full_name"
                  type="text"
                  required
                  value={formData.full_name}
                  onChange={handleInputChange}
                  placeholder="请输入您的真实姓名"
                  className="w-full px-4 py-3 border border-slate-600 bg-slate-800/50 text-slate-200 rounded-lg focus:ring-2 focus:ring-[--color-primary] focus:border-transparent transition-all"
                />
              </div>
            )}

            {/* 邀请码 - 仅注册时显示 */}
            {!isLogin && (
              <div>
                <label htmlFor="invite_code" className="block text-slate-200 font-medium mb-2">
                  邀请码 <span className="text-red-400">*</span>
                </label>
                <input
                  id="invite_code"
                  name="invite_code"
                  type="text"
                  required
                  value={formData.invite_code}
                  onChange={handleInputChange}
                  placeholder="请输入邀请码"
                  className="w-full px-4 py-3 border border-slate-600 bg-slate-800/50 text-slate-200 rounded-lg focus:ring-2 focus:ring-[--color-primary] focus:border-transparent transition-all"
                />
                <p className="text-slate-400 text-sm mt-2">
                  没有邀请码？请联系管理员获取
                </p>
              </div>
            )}
            
            {/* 密码 */}
            <div>
              <label htmlFor="password" className="block text-slate-200 font-medium mb-2">
                密码
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleInputChange}
                placeholder="请输入您的密码"
                className="w-full px-4 py-3 border border-slate-600 bg-slate-800/50 text-slate-200 rounded-lg focus:ring-2 focus:ring-[--color-primary] focus:border-transparent transition-all"
              />
            </div>
            
            {/* 登录/注册按钮 */}
            <button
              type="submit"
              disabled={loading}
              className="w-full btn btn-primary py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  {isLogin ? '连接星球中...' : '加入星球中...'}
                </div>
              ) : (
                isLogin ? '登陆星球' : '加入星球'
              )}
            </button>
          </form>
          
          {/* 切换登录/注册 */}
          <div className="mt-6 text-center">
            <p className="text-slate-400">
              {isLogin ? '还没有账号？' : '已有账号？'}{' '}
            <button
              type="button"
                onClick={switchMode}
                className="text-[--color-primary] hover:text-[--color-primary-light] transition-colors"
            >
                {isLogin ? '立即注册' : '立即登录'}
            </button>
            </p>
          </div>
        </div>
        
        {/* 底部信息 */}
        <div className="text-center">
          <p className="text-sm text-slate-500">
            {isLogin ? '登录' : '注册'}即表示您同意我们的
            <a href="#" className="text-[--color-primary] hover:text-[--color-primary-light] transition-colors mx-1">
              用户协议
            </a>
            和
            <a href="#" className="text-[--color-primary] hover:text-[--color-primary-light] transition-colors mx-1">
              隐私政策
            </a>
          </p>
        </div>
      </div>
    </div>
  );
} 