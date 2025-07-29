import React, { useState } from 'react';

export default function PaperToVideo() {
  const [file, setFile] = useState(null);
  const [pdfUrl, setPdfUrl] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };
  
  const handleUrlChange = (e) => {
    setPdfUrl(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // 模拟API调用
    setTimeout(() => {
      setLoading(false);
      alert('星球功能演示：学术内容已接收，智能体正在转换中...');
    }, 2000);
  };
  
  return (
    <div className="py-12">
      <div className="container-custom">
        {/* 头部区域 */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/imgs/1-D-1.png" 
              alt="教学视频制作团队" 
              className="w-12 h-12 object-contain mr-4"
            />
            <h1 className="text-3xl font-bold text-slate-100">教学视频制作团队</h1>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            轻松将学术研究转化为专业级教学视频，让知识以直观的方式传播
          </p>
        </div>
        
        {/* 主要内容区域 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 左侧表单 */}
          <div className="service-card p-8">
            <h2 className="text-2xl font-semibold mb-6 text-slate-100">上传您的学术成果</h2>
            
            <form onSubmit={handleSubmit}>
              {/* 文件上传 */}
              <div className="mb-6">
                <label className="block text-slate-200 font-medium mb-2">
                  学术文档上传
                </label>
                <div className="border-2 border-dashed border-slate-600 hover:border-[--color-primary] rounded-lg p-6 text-center transition-colors">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <div className="w-16 h-16 bg-slate-700 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <p className="text-slate-200">点击选择文件或拖拽上传</p>
                    <p className="text-sm text-slate-400 mt-2">支持 PDF, Word 格式</p>
                  </label>
                  {file && (
                    <div className="mt-4 p-3 bg-emerald-900/30 border border-emerald-600 rounded">
                      <p className="text-emerald-300">已选择: {file.name}</p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* 或者使用URL */}
              <div className="mb-6">
                <div className="text-center my-4">
                  <span className="bg-slate-700 px-4 py-1 rounded-full text-slate-300">或者</span>
                </div>
                <label className="block text-slate-200 font-medium mb-2">
                  学术资源链接
                </label>
                <input
                  type="url"
                  value={pdfUrl}
                  onChange={handleUrlChange}
                  placeholder="粘贴论文链接 (ArXiv, ResearchGate等)"
                  className="w-full px-4 py-3 border border-slate-600 bg-slate-800/50 text-slate-200 rounded-lg focus:ring-2 focus:ring-[--color-primary] focus:border-transparent"
                />
              </div>
              
              {/* 生成选项 */}
              <div className="mb-6">
                <label className="block text-slate-200 font-medium mb-2">生成偏好</label>
                <select className="w-full px-4 py-3 border border-slate-600 bg-slate-800/50 text-slate-200 rounded-lg focus:ring-2 focus:ring-[--color-primary] focus:border-transparent">
                  <option value="overview">概览模式 - 快速了解核心内容</option>
                  <option value="detailed">详细模式 - 深入解析每个章节</option>
                  <option value="presentation">演示模式 - 适合会议展示</option>
                </select>
              </div>
              
              {/* 提交按钮 */}
              <button
                type="submit"
                disabled={(!file && !pdfUrl) || loading}
                className="w-full btn btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    转换中...
                  </div>
                ) : (
                  '开始转换'
                )}
              </button>
            </form>
          </div>
          
          {/* 右侧预览/说明 */}
          <div className="space-y-8">
            {/* 功能特色 */}
            <div className="service-card p-6">
              <h3 className="text-xl font-semibold mb-4 text-slate-100">核心功能特色</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[--color-primary] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-300">智能内容理解与知识提取</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[--color-primary] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-300">自动生成精美视觉效果</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[--color-primary] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-300">智能配音</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[--color-primary] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-300">多平台适配与分享</span>
                </li>
              </ul>
            </div>
            
            {/* 示例展示 */}
            <div className="service-card p-6">
              <h3 className="text-xl font-semibold mb-4 text-slate-100">成果预览</h3>
              <div className="bg-slate-800/50 rounded-lg p-4 text-center border border-slate-600">
                <div className="w-16 h-16 bg-slate-700 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-slate-400">▶</span>
                </div>
                <p className="text-slate-300">您的视频将在这里生成</p>
                <p className="text-sm text-slate-400 mt-2">预计处理时间: 3-5分钟</p>
              </div>
            </div>
            
            {/* 使用统计 */}
            <div className="service-card p-6">
              <h3 className="text-xl font-semibold mb-4 text-slate-100">使用统计</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[--color-primary]">500+</div>
                  <div className="text-sm text-slate-300">成功转换</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[--color-secondary]">5.0★</div>
                  <div className="text-sm text-slate-300">用户评分</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 工作流程 */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-100">转换流程</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[--color-primary] text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2 text-slate-100">上传文档</h3>
              <p className="text-slate-300 text-sm">选择您的学术成果</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[--color-secondary] text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2 text-slate-100">智能分析</h3>
              <p className="text-slate-300 text-sm">AI理解核心内容</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[--color-accent] text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2 text-slate-100">生成视频</h3>
              <p className="text-slate-300 text-sm">创建精美视觉体验</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[--color-primary-light] text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">4</div>
              <h3 className="font-semibold mb-2 text-slate-100">完成分享</h3>
              <p className="text-slate-300 text-sm">下载或在线分享</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}