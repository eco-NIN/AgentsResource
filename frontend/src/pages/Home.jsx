import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

export default function Home() {
  const agentCards = [
    {
      title: '教学视频制作团队',
      description: '将学术论文智能转换为精美的视频内容，让研究成果生动展现',
      provider: '上海交通大学人工智能学院',
      rating: '5.0',
      icon: '/imgs/1-D-1.png',
      to: '/paper-to-video',
      launchDate: '2025-07'
    },
    {
      title: '教学文稿制作团队',
      description: '自动将论文内容转化为专业的演示幻灯片，助力教学',
      provider: '上海交通大学人工智能学院',
      rating: '5.0',
      icon: '/imgs/2-D-1.png',
      to: '/paper-to-ppt',
      launchDate: '2025-07'
    },
    {
      title: '科技论文讲解者',
      description: '智能生成论文讲解内容，提供详细的学术解读和分析',
      provider: '上海交通大学人工智能学院',
      rating: '5.0',
      icon: '/imgs/3-D-1.png',
      to: '/enterprise',
      launchDate: '2025-07'
    },
    {
      title: '添加智能体',
      description: '上传配置文件，创建属于您的专属智能体',
      provider: '自定义创建',
      rating: 'NEW',
      icon: '➕',
      to: '/login',
      launchDate: '立即开始'
    }
  ];

  const medicalCards = [
    {
      title: '医学影像分析师',
      description: '智能分析医学影像，辅助医生进行精准诊断和病情评估',
      provider: '上海交通大学人工智能学院',
      rating: '5.0',
      icon: '/imgs/4-D-1.png',
      to: '/medical-imaging',
      launchDate: '2025-07'
    },
    {
      title: '健康数据分析师',
      description: '分析个人健康数据，提供个性化健康建议和风险预警',
      provider: '上海交通大学人工智能学院',
      rating: '5.0',
      icon: '/imgs/5-U-1.png',
      to: '/health-analysis',
      launchDate: '2025-07'
    },
    {
      title: '药物研发助手',
      description: '加速药物发现过程，预测药物效果和副作用',
      provider: '上海交通大学人工智能学院',
      rating: '5.0',
      icon: '/imgs/6-U-1.png',
      to: '/drug-development',
      launchDate: '2025-07'
    },
    {
      title: '添加智能体',
      description: '上传配置文件，创建属于您的专属智能体',
      provider: '自定义创建',
      rating: 'NEW',
      icon: '➕',
      to: '/login',
      launchDate: '立即开始'
    }
  ];

  return (
    <div>
      {/* 英雄区 */}
      <section className="hero-gradient text-white py-24 relative">
        <div className="floating-shapes"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fadeInUp">
              <h1 className="text-5xl md:text-6xl lg:text-7xl cosmic-title mb-8 text-white leading-tight tracking-tighter">
                 上海交通大学
                <span className="block text-gradient">智能体星球</span>
              </h1>
            </div>
            <div className="animate-fadeInUp animate-delay-200">
              <p className="text-xl md:text-2xl mb-12 text-slate-200 leading-relaxed cosmic-subtitle">
              在上海交通大学智能体星球上，探索AI智能体的无限宇宙<br/>
                <span className="text-lg">🌟 发现创新  🚀 推动科技  🔬 引领未来</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 特色服务 */}
      <section className="py-20 relative">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl cosmic-title mb-6 text-gradient tracking-tight">星球智能体服务站</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed cosmic-subtitle">
              探索各种专业智能体生命形态，为您的学术研究和创新项目提供支持
            </p>
          </div>

          {/* 教育科研类别 */}
          <div className="mb-16">
            <div className="mb-8 animate-fadeInUp">
              <h3 className="text-2xl cosmic-title text-slate-100 mb-2">教育科研</h3>
              <div className="w-16 h-1 bg-[--color-primary] rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {agentCards.map((card) => (
                <div key={card.title} className="animate-fadeInUp animate-delay-100 h-full">
                  {card.title === '添加智能体' ? (
                    <Link 
                      to={card.to} 
                      className="card flex flex-col items-center justify-center p-4 h-full w-full transition-all duration-300 hover:-translate-y-1 hover:scale-105 min-h-[180px]"
                    >
                      <div className="text-4xl mb-2 text-[--color-primary] hover:text-[--color-primary-light] transition-colors duration-300">
                        ➕
                      </div>
                      <h3 className="cosmic-title text-xl text-slate-100 text-center">
                        添加智能体
                      </h3>
                    </Link>
                  ) : (
                    <Card {...card} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 医疗健康类别 */}
          <div className="mb-16">
            <div className="mb-8 animate-fadeInUp">
              <h3 className="text-2xl cosmic-title text-slate-100 mb-2">医疗健康</h3>
              <div className="w-16 h-1 bg-[--color-secondary] rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {medicalCards.map((card) => (
                <div key={card.title} className="animate-fadeInUp animate-delay-200 h-full">
                  {card.title === '添加智能体' ? (
                    <Link 
                      to={card.to} 
                      className="card flex flex-col items-center justify-center p-4 h-full w-full transition-all duration-300 hover:-translate-y-1 hover:scale-105 min-h-[180px]"
                    >
                      <div className="text-4xl mb-2 text-[--color-primary] hover:text-[--color-primary-light] transition-colors duration-300">
                        ➕
                      </div>
                      <h3 className="cosmic-title text-xl text-slate-100 text-center">
                        添加智能体
                      </h3>
                    </Link>
                  ) : (
                    <Card {...card} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}