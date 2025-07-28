import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function MainLayout({ children }) {
  const location = useLocation();
  
  const navItems = [
    { name: '星球首页', path: '/' },
    { name: '智能体探索', path: '/paper-to-video' },
    { name: '星际研究', path: '/paper-to-ppt' },
    { name: '星球联盟', path: '/enterprise' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* 导航栏 */}
      <header className="nav-blur shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="container-custom py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🪐</span>
              <h1 className="text-2xl font-bold text-[--color-primary]">上海交通大学智能体星球</h1>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {navItems.map(item => (
                <Link 
                  key={item.path} 
                  to={item.path}
                  className={`font-medium ${
                    location.pathname === item.path 
                      ? 'text-[--color-primary]' 
                      : 'text-slate-300 hover:text-slate-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            <div className="hidden md:flex items-center space-x-4">
              <button className="btn btn-primary">🚀 登陆星球</button>
              <button className="border border-[--color-primary] text-[--color-primary] px-4 py-2 rounded-lg hover:bg-[--color-primary] hover:text-white transition-colors">
                ⭐ 加入星球
              </button>
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
      <main className="flex-grow pt-20">
        {children}
      </main>
      
      {/* 页脚 */}
      <footer className="footer-gradient text-white py-12 relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">🪐 上海交通大学智能体星球</h3>
              <p className="text-slate-300">
                探索无限智能体宇宙，在交大智能体星球上发现前沿AI技术，推动学术创新与科技进步。
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">🌌 星球服务</h4>
              <ul className="space-y-2 text-slate-300">
                <li><Link to="/paper-to-video" className="hover:text-[--color-primary]">🎬 智能体探索</Link></li>
                <li><Link to="/paper-to-ppt" className="hover:text-[--color-primary]">📊 星际研究</Link></li>
                <li><Link to="/enterprise" className="hover:text-[--color-primary]">🏢 星球联盟</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">🛸 星球资源</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-[--color-primary]">📚 星球指南</a></li>
                <li><a href="#" className="hover:text-[--color-primary]">🔬 技术文档</a></li>
                <li><a href="#" className="hover:text-[--color-primary]">🌟 API银河</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">📡 星际通讯</h4>
              <ul className="space-y-2 text-slate-300">
                <li>📧 星际邮箱: agents@sjtu.edu.cn</li>
                <li>📞 星球热线: (021) 3420-4560</li>
                <li>🏫 星球坐标: 上海交通大学闵行校区</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-600 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} 上海交通大学智能体星球. 探索无限可能.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 