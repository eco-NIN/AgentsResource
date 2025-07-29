import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import authService from '../services/authService';

export default function MainLayout({ children }) {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const navItems = [
    { name: '首页', path: '/' },
    { name: '智能体探索', path: '/paper-to-video' },
    { name: '星球文档', path: '/docs' },
    { name: '联系我们', path: '/contact' },
  ];

  useEffect(() => {
    // 检查用户登录状态
    const checkAuthStatus = () => {
      const authenticated = authService.isAuthenticated();
      setIsAuthenticated(authenticated);
      if (authenticated) {
        setUser(authService.getUser());
      }
    };

    checkAuthStatus();
    
    // 监听存储变化（跨标签页同步）
    const handleStorageChange = () => {
      checkAuthStatus();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleLogout = () => {
    authService.logout();
    setIsAuthenticated(false);
    setUser(null);
  };

  const getUserAvatarDisplay = (user, size = 'w-8 h-8') => {
    if (user?.avatar_type === 'upload' && user?.avatar) {
      return (
        <img 
          src={user.avatar} 
          alt="用户头像" 
          className={`${size} rounded-full object-cover`}
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
          <div className={`${size} bg-gradient-to-br ${presetAvatar.color} rounded-full flex items-center justify-center`}>
            <span className="text-xs">{presetAvatar.emoji}</span>
          </div>
        );
      }
    }
    
    // 默认显示用户名首字母
    return (
      <div className={`${size} bg-gradient-to-br from-[--color-primary] to-[--color-secondary] rounded-full flex items-center justify-center`}>
        <span className="text-white text-sm font-medium">
          {(user?.full_name || user?.username)?.charAt(0)?.toUpperCase()}
        </span>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* 背景水印 */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
        <img 
          src="/imgs/SAI-icon.png" 
          alt="上海交通大学人工智能学院" 
          className="w-screen h-screen object-contain opacity-5"
        />
      </div>
      
      {/* 导航栏 */}
      <header className="nav-blur shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="container-custom py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="text-xl cosmic-title text-slate-100 font-light tracking-wide">
                上海交通大学智能体星球
              </Link>
            </div>
            
            <nav className="flex space-x-8">
              {navItems.map(item => (
                <Link 
                  key={item.path} 
                  to={item.path}
                  className={`cosmic-subtitle ${
                    location.pathname === item.path 
                      ? 'text-[--color-primary]' 
                      : 'text-slate-300 hover:text-slate-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <>
                  <div className="flex items-center space-x-3">
                    <div className="flex flex-col text-right">
                      <span className="text-slate-200 text-sm">
                        欢迎回来, {user?.full_name || user?.username}
                      </span>
                      <span className="text-slate-400 text-xs">{user?.email}</span>
                    </div>
                                         <Link 
                       to="/dashboard"
                       className="hover:scale-105 transition-transform"
                     >
                       {getUserAvatarDisplay(user)}
                     </Link>
                  </div>
                  <button 
                    onClick={handleLogout}
                    className="border border-red-500/50 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500/20 hover:text-red-300 transition-colors"
                  >
                    登出
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="btn btn-primary">登陆星球</Link>
                  <Link 
                    to="/login" 
                    className="border border-[--color-primary] text-[--color-primary] px-4 py-2 rounded-lg hover:bg-[--color-primary] hover:text-white transition-colors"
                  >
                加入星球
                  </Link>
                </>
              )}
            </div>
            
            {/* 移动端菜单按钮 */}
            <button className="md:hidden text-slate-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      
      {/* 主要内容 */}
      <main className="flex-grow pt-20 relative z-10">
        {children}
      </main>
      
      {/* 页脚 */}
      <footer className="footer-gradient text-white py-12 relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* 关于栏 */}
            <div className="px-6 py-4 backdrop-blur-md bg-slate-800/20 rounded-xl border border-slate-700/30">
              <h3 className="cosmic-title text-xl mb-4 text-white flex items-center">
                <span className="inline-block mr-2 text-[--color-primary]"></span>
                上海交通大学智能体星球
              </h3>
              <p className="cosmic-subtitle text-slate-300 leading-relaxed">
                在交大智能体星球上发现前沿AI技术，推动学术创新与科技进步。
              </p>
            </div>
            
            {/* 服务栏 */}
            <div className="px-6 py-4 backdrop-blur-md bg-slate-800/20 rounded-xl border border-slate-700/30">
              <h4 className="cosmic-title text-xl mb-4 text-white flex items-center">
                <span className="inline-block mr-2 text-[--color-secondary]"></span>
                服务指南
              </h4>
              <ul className="space-y-3 text-slate-300">
                <li className="transition-all hover:translate-x-1">
                  <Link to="/paper-to-video" className="cosmic-subtitle hover:text-[--color-primary] flex items-center">
                    <span className="w-5 h-5 inline-flex items-center justify-center mr-2 text-xs rounded-full bg-[--color-primary]/20 text-[--color-primary]">•</span>
                    智能体探索
                  </Link>
                </li>
                <li className="transition-all hover:translate-x-1">
                  <Link to="/paper-to-ppt" className="cosmic-subtitle hover:text-[--color-primary] flex items-center">
                    <span className="w-5 h-5 inline-flex items-center justify-center mr-2 text-xs rounded-full bg-[--color-primary]/20 text-[--color-primary]">•</span>
                    使用文档
                  </Link>
                </li>
                <li className="transition-all hover:translate-x-1">
                  <Link to="/enterprise" className="cosmic-subtitle hover:text-[--color-primary] flex items-center">
                    <span className="w-5 h-5 inline-flex items-center justify-center mr-2 text-xs rounded-full bg-[--color-primary]/20 text-[--color-primary]">•</span>
                    加入我们
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* 联系栏 */}
            <div className="px-6 py-4 backdrop-blur-md bg-slate-800/20 rounded-xl border border-slate-700/30">
              <h4 className="cosmic-title text-xl mb-4 text-white flex items-center">
                <span className="inline-block mr-2 text-[--color-accent]"></span>
                联系我们
              </h4>
              <ul className="cosmic-subtitle space-y-3 text-slate-300">
                <li className="flex items-center">
                  <span className="w-5 h-5 inline-flex items-center justify-center mr-2 text-xs rounded-full bg-[--color-accent]/20 text-[--color-accent]">@</span>
                  邮箱: agents@sjtu.edu.cn
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 inline-flex items-center justify-center mr-2 text-xs rounded-full bg-[--color-accent]/20 text-[--color-accent]">☎</span>
                  热线: (021) 3420-4560
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 inline-flex items-center justify-center mr-2 text-xs rounded-full bg-[--color-accent]/20 text-[--color-accent]">📍</span>
                  坐标: 上海交通大学徐汇校区
                </li>
              </ul>
            </div>
          </div>
          
          {/* 版权信息 */}
          <div className="mt-10 pt-6 border-t border-slate-700/50 text-center text-slate-400 max-w-4xl mx-auto">
            <div className="cosmic-subtitle flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0">
              <span>&copy; {new Date().getFullYear()} 上海交通大学智能体星球</span>
              <span className="hidden sm:inline mx-3">•</span>
              <span>探索无限可能</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 