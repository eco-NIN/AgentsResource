import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

export default function Home() {
  const agentCards = [
    {
      title: '智能体探索舱',
      description: '深入智能体宇宙，探索前沿AI技术在学术研究中的无限可能',
      provider: 'SJTU AI Lab',
      rating: '4.8',
      icon: '🚀',
      to: '/paper-to-video',
      launchDate: '2024-04'
    },
    {
      title: '星际研究站',
      description: '智能分析学术成果，将研究转化为精美的星际演示',
      provider: '交大计算机学院',
      rating: '4.5',
      icon: '🛸',
      to: '/paper-to-ppt',
      launchDate: '2024-03'
    },
    {
      title: '星球联盟港',
      description: '为机构提供专属的智能体星球解决方案，共建AI生态',
      provider: 'SJTU Tech',
      rating: '4.9',
      icon: '🏛️',
      to: '/enterprise',
      launchDate: '2023-12'
    },
    {
      title: '星云数据中心',
      description: '智能处理星际数据，提供宇宙级洞察和分析报告',
      provider: '交大数据科学中心',
      rating: '4.7',
      icon: '🌌',
      to: '/',
      launchDate: '2024-02'
    },
    {
      title: '知识引力场',
      description: '智能汇聚和组织学术资源，创建个性化知识体系',
      provider: '交大图书馆',
      rating: '4.6',
      icon: '🧲',
      to: '/',
      launchDate: '2024-01'
    },
    {
      title: '量子思维导图',
      description: '突破传统思维限制，辅助科研人员创新思考',
      provider: '量子计算研究所',
      rating: '4.8',
      icon: '⚛️',
      to: '/',
      launchDate: '2024-05'
    },
    {
      title: '星际翻译官',
      description: '精准翻译专业学术文献，支持多语言实时交流',
      provider: '语言智能实验室',
      rating: '4.7',
      icon: '🔤',
      to: '/',
      launchDate: '2023-11'
    },
    {
      title: '科研助航舱',
      description: '全流程科研辅助系统，从选题到发表一站式支持',
      provider: '科研创新中心',
      rating: '4.9',
      icon: '🔬',
      to: '/',
      launchDate: '2024-06'
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
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight">
                🪐 上海交通大学
                <span className="block text-gradient">智能体星球</span>
              </h1>
            </div>
            <div className="animate-fadeInUp animate-delay-200">
              <p className="text-xl md:text-2xl mb-12 text-slate-200 leading-relaxed">
                探索AI智能体的无限宇宙，在交大智能体星球上<br/>
                <span className="text-lg">🌟 发现创新、🚀 推动科技、🔬 引领未来</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 特色服务 */}
      <section className="py-20 relative">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold mb-6 text-gradient">星球智能体服务站</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              探索各种专业智能体生命形态，为您的学术研究和创新项目提供星际级支持
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {agentCards.map((card) => (
              <div key={card.title} className="animate-fadeInUp animate-delay-100 h-full">
                <Card {...card} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}