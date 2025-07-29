import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import authService from '../services/authService';
import AvatarSelector from '../components/AvatarSelector';

export default function UserDashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('profile');
  const [showAvatarSelector, setShowAvatarSelector] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      if (!authService.isAuthenticated()) {
        setLoading(false);
        return;
      }

      try {
        const userData = await authService.getCurrentUser();
        setUser(userData);
      } catch (error) {
        console.error('获取用户信息失败:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const handleAvatarUpdate = (updatedUser) => {
    setUser(updatedUser);
    setShowAvatarSelector(false);
  };

  const getAvatarDisplay = (user, size = 'w-28 h-28') => {
    if (user?.avatar_type === 'upload' && user?.avatar) {
      return (
        <img 
          src={user.avatar} 
          alt="用户头像" 
          className={`${size} rounded-3xl object-cover shadow-2xl`}
        />
      );
    } else if (user?.avatar_type === 'preset' && user?.avatar) {
      const presetAvatars = [
        { id: 'robot1', emoji: '🤖', color: 'from-blue-500 to-purple-600' },
        { id: 'astronaut', emoji: '👨‍🚀', color: 'from-purple-500 to-pink-600' },
        { id: 'scientist', emoji: '👨‍🔬', color: 'from-green-500 to-blue-600' },
        { id: 'robot2', emoji: '🤖', color: 'from-yellow-500 to-orange-600' },
        { id: 'alien', emoji: '👽', color: 'from-green-400 to-cyan-600' },
        { id: 'cyborg', emoji: '🦾', color: 'from-gray-500 to-blue-600' },
        { id: 'rocket', emoji: '🚀', color: 'from-red-500 to-purple-600' },
        { id: 'satellite', emoji: '🛰️', color: 'from-indigo-500 to-purple-600' },
        { id: 'planet', emoji: '🪐', color: 'from-purple-400 to-pink-600' },
      ];
      
      const presetAvatar = presetAvatars.find(a => a.id === user.avatar);
      if (presetAvatar) {
        return (
          <div className={`${size} bg-gradient-to-br ${presetAvatar.color} rounded-3xl flex items-center justify-center shadow-2xl`}>
            <span className="text-4xl">{presetAvatar.emoji}</span>
          </div>
        );
      }
    }
    
    // 默认显示用户名首字母
    return (
      <div className={`${size} bg-gradient-to-br from-[--color-primary] via-[--color-secondary] to-[--color-accent] rounded-3xl flex items-center justify-center shadow-2xl`}>
        <span className="text-4xl text-white font-bold tracking-wider">
          {(user?.full_name || user?.username)?.charAt(0)?.toUpperCase()}
        </span>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="relative">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[--color-primary]"></div>
          <div className="absolute inset-0 rounded-full border-2 border-[--color-primary]/20"></div>
        </div>
      </div>
    );
  }

  if (!authService.isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  const tabs = [
    { 
      id: 'profile', 
      name: '个人信息', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    { 
      id: 'activity', 
      name: '活动历史', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    { 
      id: 'settings', 
      name: '账户设置', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-8">
            {/* 个人信息卡片 */}
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-[--color-primary]/20 rounded-xl mr-4">
                  <svg className="w-6 h-6 text-[--color-primary]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-slate-100">基本信息</h3>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="group">
                    <label className="block text-slate-400 text-sm font-medium mb-2 uppercase tracking-wider">用户名</label>
                    <div className="flex items-center p-4 bg-slate-700/30 rounded-xl border border-slate-600/50 group-hover:border-[--color-primary]/50 transition-colors">
                      <svg className="w-5 h-5 text-slate-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <p className="text-slate-100 text-lg font-medium">{user?.username}</p>
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="block text-slate-400 text-sm font-medium mb-2 uppercase tracking-wider">邮箱地址</label>
                    <div className="flex items-center p-4 bg-slate-700/30 rounded-xl border border-slate-600/50 group-hover:border-[--color-primary]/50 transition-colors">
                      <svg className="w-5 h-5 text-slate-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                      <p className="text-slate-100 text-lg">{user?.email}</p>
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="block text-slate-400 text-sm font-medium mb-2 uppercase tracking-wider">姓名</label>
                    <div className="flex items-center p-4 bg-slate-700/30 rounded-xl border border-slate-600/50 group-hover:border-[--color-primary]/50 transition-colors">
                      <svg className="w-5 h-5 text-slate-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <p className="text-slate-100 text-lg">{user?.full_name || '未设置'}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="group">
                    <label className="block text-slate-400 text-sm font-medium mb-2 uppercase tracking-wider">账户状态</label>
                    <div className="flex items-center p-4 bg-slate-700/30 rounded-xl border border-slate-600/50">
                      <div className={`w-3 h-3 rounded-full mr-3 ${user?.is_active ? 'bg-emerald-400' : 'bg-red-400'}`}></div>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                        user?.is_active 
                          ? 'bg-emerald-400/20 text-emerald-300 border border-emerald-400/30' 
                          : 'bg-red-400/20 text-red-300 border border-red-400/30'
                      }`}>
                        {user?.is_active ? '活跃' : '已禁用'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="block text-slate-400 text-sm font-medium mb-2 uppercase tracking-wider">邮箱验证</label>
                    <div className="flex items-center p-4 bg-slate-700/30 rounded-xl border border-slate-600/50">
                      <div className={`w-3 h-3 rounded-full mr-3 ${user?.is_verified ? 'bg-emerald-400' : 'bg-amber-400'}`}></div>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                        user?.is_verified 
                          ? 'bg-emerald-400/20 text-emerald-300 border border-emerald-400/30' 
                          : 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                      }`}>
                        {user?.is_verified ? '已验证' : '未验证'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="block text-slate-400 text-sm font-medium mb-2 uppercase tracking-wider">注册时间</label>
                    <div className="flex items-center p-4 bg-slate-700/30 rounded-xl border border-slate-600/50 group-hover:border-[--color-primary]/50 transition-colors">
                      <svg className="w-5 h-5 text-slate-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-slate-100 text-lg">
                        {new Date(user?.created_at).toLocaleDateString('zh-CN', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'activity':
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-[--color-secondary]/20 rounded-xl mr-4">
                  <svg className="w-6 h-6 text-[--color-secondary]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-slate-100">最近活动</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-[--color-primary]/10 to-transparent rounded-xl border-l-4 border-[--color-primary]">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[--color-primary]/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-[--color-primary]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-lg font-semibold text-slate-100 mb-1">登录星球</p>
                    <p className="text-slate-400 text-sm">刚刚 · 来自浏览器</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-400/20 text-emerald-300">
                      活跃
                    </span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-[--color-secondary]/10 to-transparent rounded-xl border-l-4 border-[--color-secondary]">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[--color-secondary]/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-[--color-secondary]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-lg font-semibold text-slate-100 mb-1">注册账户</p>
                    <p className="text-slate-400 text-sm">
                      {new Date(user?.created_at).toLocaleDateString('zh-CN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })} · 欢迎来到星球
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-400/20 text-blue-300">
                      里程碑
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="space-y-8">
            {/* 偏好设置 */}
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-[--color-accent]/20 rounded-xl mr-4">
                  <svg className="w-6 h-6 text-[--color-accent]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-slate-100">偏好设置</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-6 bg-slate-700/30 rounded-xl border border-slate-600/50 hover:border-[--color-primary]/50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-slate-100 font-semibold text-lg">邮箱通知</h4>
                      <p className="text-slate-400 text-sm">接收系统通知和重要更新</p>
                    </div>
                  </div>
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-[--color-primary] transition-colors focus:outline-none focus:ring-2 focus:ring-[--color-primary]/50 focus:ring-offset-2 focus:ring-offset-slate-800">
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6 shadow-lg" />
                  </button>
                </div>
                
                <div className="flex items-center justify-between p-6 bg-slate-700/30 rounded-xl border border-slate-600/50 hover:border-[--color-primary]/50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-slate-100 font-semibold text-lg">数据分析</h4>
                      <p className="text-slate-400 text-sm">允许收集使用数据用于改进服务</p>
                    </div>
                  </div>
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500/50 focus:ring-offset-2 focus:ring-offset-slate-800">
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1 shadow-lg" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* 危险操作 */}
            <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 backdrop-blur-xl rounded-2xl p-8 border border-red-500/30 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-red-500/20 rounded-xl mr-4">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.963-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-red-400">危险操作</h3>
              </div>
              
              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                <h4 className="text-red-300 font-semibold text-lg mb-3">删除账户</h4>
                <p className="text-red-200/80 text-sm mb-6 leading-relaxed">
                  删除账户将永久移除您的所有数据，包括个人信息、活动历史等。此操作不可撤销，请谨慎考虑。
                </p>
                <button className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:ring-offset-2 focus:ring-offset-slate-800">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  删除账户
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="py-16">
      <div className="container-custom">
        {/* 头部 */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            <div className="relative group">
              {getAvatarDisplay(user)}
              
              {/* 头像编辑按钮 */}
              <button
                onClick={() => setShowAvatarSelector(true)}
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-3xl flex items-center justify-center"
              >
                <div className="bg-white/90 rounded-xl p-2">
                  <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </button>
              
              {/* 在线状态指示器 */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full border-4 border-slate-900 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-slate-100 tracking-tight">
              欢迎回来
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {user?.full_name || user?.username}，管理您在智能体星球的账户信息与个性化设置
            </p>
          </div>
        </div>

        {/* 内容区域 */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
          {/* 侧边栏 */}
          <div className="xl:col-span-1">
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 shadow-2xl sticky top-24">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-6 py-4 rounded-xl transition-all duration-200 font-medium ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-[--color-primary] to-[--color-primary]/80 text-white shadow-lg shadow-[--color-primary]/25'
                        : 'text-slate-300 hover:bg-slate-700/50 hover:text-slate-100'
                    }`}
                  >
                    <div className={`${activeTab === tab.id ? 'text-white' : 'text-slate-400'}`}>
                      {tab.icon}
                    </div>
                    <span className="text-base">{tab.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* 主内容 */}
          <div className="xl:col-span-4">
            {renderTabContent()}
          </div>
        </div>
      </div>
      
      {/* 头像选择器 */}
      {showAvatarSelector && (
        <AvatarSelector
          user={user}
          onAvatarUpdate={handleAvatarUpdate}
          onClose={() => setShowAvatarSelector(false)}
        />
      )}
    </div>
  );
} 