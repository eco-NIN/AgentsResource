import React from 'react';

export default function Docs() {
  return (
    <div className="py-12">
      <div className="container-custom">
        {/* 头部区域 */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4 text-slate-100">📚 星球文档</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            探索智能体星球的完整指南，了解如何使用各种智能体服务
          </p>
        </div>
        
        {/* 主要内容区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 左侧导航 */}
          <div className="lg:col-span-1">
            <div className="service-card p-6 sticky top-24">
              <h3 className="text-lg font-semibold mb-4 text-slate-100">文档导航</h3>
              <nav className="space-y-2">
                <a href="#getting-started" className="block text-slate-300 hover:text-[--color-primary] py-2 px-3 rounded hover:bg-slate-700/30 transition-colors">
                  快速开始
                </a>
                <a href="#paper-to-video" className="block text-slate-300 hover:text-[--color-primary] py-2 px-3 rounded hover:bg-slate-700/30 transition-colors">
                  论文视频生成
                </a>
                <a href="#paper-to-ppt" className="block text-slate-300 hover:text-[--color-primary] py-2 px-3 rounded hover:bg-slate-700/30 transition-colors">
                  论文幻灯片生成
                </a>
                <a href="#paper-explanation" className="block text-slate-300 hover:text-[--color-primary] py-2 px-3 rounded hover:bg-slate-700/30 transition-colors">
                  论文讲解生成
                </a>
                <a href="#custom-agent" className="block text-slate-300 hover:text-[--color-primary] py-2 px-3 rounded hover:bg-slate-700/30 transition-colors">
                  自定义智能体
                </a>
                <a href="#api-reference" className="block text-slate-300 hover:text-[--color-primary] py-2 px-3 rounded hover:bg-slate-700/30 transition-colors">
                  API 参考
                </a>
              </nav>
            </div>
          </div>
          
          {/* 右侧内容 */}
          <div className="lg:col-span-3 space-y-8">
            {/* 快速开始 */}
            <section id="getting-started" className="service-card p-8">
              <h2 className="text-2xl font-semibold mb-6 text-slate-100">🚀 快速开始</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 mb-4">
                  欢迎来到上海交通大学智能体星球！这里提供了多种先进的AI智能体服务，帮助您处理学术研究和内容创作任务。
                </p>
                <div className="bg-slate-800/50 border border-slate-600 rounded-lg p-4 mb-4">
                  <h4 className="text-lg font-medium text-slate-100 mb-2">主要功能</h4>
                  <ul className="text-slate-300 space-y-1">
                    <li>• 论文视频生成：将学术论文转换为精美视频</li>
                    <li>• 论文幻灯片生成：自动创建专业演示文稿</li>
                    <li>• 论文讲解生成：智能生成详细解读内容</li>
                    <li>• 自定义智能体：上传配置创建专属智能体</li>
                  </ul>
                </div>
              </div>
            </section>
            
            {/* 论文视频生成 */}
            <section id="paper-to-video" className="service-card p-8">
              <h2 className="text-2xl font-semibold mb-6 text-slate-100">🎬 论文视频生成</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 mb-4">
                  论文视频生成器能够将您的学术论文智能转换为生动的视频内容，让复杂的研究成果以直观的方式展现。
                </p>
                <div className="bg-slate-800/50 border border-slate-600 rounded-lg p-4 mb-4">
                  <h4 className="text-lg font-medium text-slate-100 mb-2">使用步骤</h4>
                  <ol className="text-slate-300 space-y-2 list-decimal list-inside">
                    <li>上传PDF格式的学术论文</li>
                    <li>选择生成模式（概览/详细/演示）</li>
                    <li>等待AI处理和视频生成</li>
                    <li>下载或分享生成的视频</li>
                  </ol>
                </div>
              </div>
            </section>
            
            {/* API参考 */}
            <section id="api-reference" className="service-card p-8">
              <h2 className="text-2xl font-semibold mb-6 text-slate-100">🔗 API 参考</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 mb-4">
                  智能体星球提供RESTful API，方便开发者集成我们的服务到自己的应用中。
                </p>
                <div className="bg-slate-900/50 border border-slate-600 rounded-lg p-4 mb-4">
                  <h4 className="text-lg font-medium text-slate-100 mb-2">基础URL</h4>
                  <code className="text-[--color-primary] bg-slate-800 px-2 py-1 rounded">
                    https://api.sjtu-agents.edu.cn/v1
                  </code>
                </div>
                <div className="bg-slate-900/50 border border-slate-600 rounded-lg p-4">
                  <h4 className="text-lg font-medium text-slate-100 mb-2">认证</h4>
                  <p className="text-slate-300">
                    所有API请求需要在请求头中包含API密钥：
                  </p>
                  <code className="text-[--color-secondary] bg-slate-800 px-2 py-1 rounded block mt-2">
                    Authorization: Bearer YOUR_API_KEY
                  </code>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 