import React, { useState } from 'react';

export default function PaperToPPT() {
  const [activeTab, setActiveTab] = useState('upload');
  const [file, setFile] = useState(null);
  const [paperUrl, setPaperUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('academic');
  
  const templates = [
    { id: 'academic', name: '学术星云', color: 'bg-blue-900/30' },
    { id: 'modern', name: '商务星系', color: 'bg-slate-800/30' },
    { id: 'creative', name: '创意星球', color: 'bg-purple-900/30' },
    { id: 'minimal', name: '极简宇宙', color: 'bg-indigo-900/30' },
  ];
  
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // 模拟API调用
    setTimeout(() => {
      setLoading(false);
      alert('星际研究站：学术成果已接收，正在生成星际演示文稿...');
    }, 2000);
  };

  return (
    <div className="py-12">
      <div className="container-custom">
        {/* 头部区域 */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/imgs/2-D-1.png" 
              alt="教学文稿制作团队" 
              className="w-12 h-12 object-contain mr-4"
            />
            <h1 className="text-3xl font-bold text-slate-100">教学文稿制作团队</h1>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            智能将学术研究转化为专业演示文稿，让您的发现以最佳方式呈现
          </p>
        </div>
        
        {/* 主要内容区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左侧和中间：表单部分 */}
          <div className="lg:col-span-2">
            <div className="service-card overflow-hidden">
              {/* 标签页导航 */}
              <div className="flex border-b border-slate-600">
                <button
                  onClick={() => setActiveTab('upload')}
                  className={`px-6 py-4 font-medium transition-colors ${
                    activeTab === 'upload' 
                      ? 'text-[--color-primary] border-b-2 border-[--color-primary] bg-slate-800/30'
                      : 'text-slate-300 hover:text-slate-100'
                  }`}
                >
                  上传文档
                </button>
                <button
                  onClick={() => setActiveTab('template')}
                  className={`px-6 py-4 font-medium transition-colors ${
                    activeTab === 'template'
                      ? 'text-[--color-primary] border-b-2 border-[--color-primary] bg-slate-800/30'
                      : 'text-slate-300 hover:text-slate-100'
                  }`}
                >
                  选择模板
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`px-6 py-4 font-medium transition-colors ${
                    activeTab === 'settings'
                      ? 'text-[--color-primary] border-b-2 border-[--color-primary] bg-slate-800/30'
                      : 'text-slate-300 hover:text-slate-100'
                  }`}
                >
                  生成设置
                </button>
              </div>
              
              {/* 标签页内容 */}
              <div className="p-8">
                {/* 上传文档标签页 */}
                {activeTab === 'upload' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-slate-100">上传您的学术成果</h2>
                    
                      {/* 文件上传 */}
                    <div>
                      <label className="block text-slate-200 font-medium mb-3">
                        学术文档上传
                        </label>
                        <div className="border-2 border-dashed border-slate-600 hover:border-[--color-primary] rounded-lg p-8 text-center transition-colors">
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx,.ppt,.pptx"
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
                          <p className="text-slate-200 text-lg mb-2">点击选择文件或拖拽上传</p>
                          <p className="text-slate-400">支持 PDF, Word, PowerPoint 格式</p>
                          </label>
                          {file && (
                          <div className="mt-6 p-4 bg-emerald-900/30 border border-emerald-600 rounded-lg">
                            <p className="text-emerald-300">已选择: {file.name}</p>
                            </div>
                          )}
                        </div>
                      </div>
                      
                    {/* 或者使用URL */}
                    <div>
                      <div className="text-center my-6">
                        <span className="bg-slate-700 px-4 py-2 rounded-full text-slate-300">或者</span>
                        </div>
                      <label className="block text-slate-200 font-medium mb-3">
                        学术资源链接
                        </label>
                        <input
                          type="url"
                          value={paperUrl}
                          onChange={(e) => setPaperUrl(e.target.value)}
                        placeholder="粘贴论文链接 (ArXiv, ResearchGate, IEEE等)"
                          className="w-full px-4 py-3 border border-slate-600 bg-slate-800/50 text-slate-200 rounded-lg focus:ring-2 focus:ring-[--color-primary] focus:border-transparent"
                        />
                      </div>
                  </div>
                )}
                
                {/* 选择模板标签页 */}
                {activeTab === 'template' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-slate-100">选择演示模板</h2>
                    <p className="text-slate-300">选择最适合您研究主题的模板风格</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {templates.map((template) => (
                        <div 
                          key={template.id}
                          onClick={() => setSelectedTemplate(template.id)}
                          className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                            selectedTemplate === template.id 
                              ? 'border-[--color-primary] bg-[--color-primary]/10'
                              : 'border-slate-600 hover:border-slate-500'
                          } ${template.color}`}
                        >
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-slate-100">{template.name}</h3>
                            {selectedTemplate === template.id && (
                              <div className="w-6 h-6 bg-[--color-primary] rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                          </div>
                            )}
                          </div>
                          <div className="h-24 bg-slate-700/50 rounded border-2 border-dashed border-slate-500 flex items-center justify-center">
                            <span className="text-slate-400">模板预览</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* 生成设置标签页 */}
                {activeTab === 'settings' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-slate-100">生成设置</h2>
                    
                    <div className="space-y-6">
                      {/* 内容深度 */}
                      <div>
                        <label className="block text-slate-200 font-medium mb-3">内容深度</label>
                        <select className="w-full px-4 py-3 border border-slate-600 bg-slate-800/50 text-slate-200 rounded-lg focus:ring-2 focus:ring-[--color-primary] focus:border-transparent">
                          <option value="overview">概述模式 - 突出核心观点</option>
                          <option value="detailed">详细模式 - 包含完整论证</option>
                          <option value="technical">技术模式 - 专注方法和结果</option>
                        </select>
                      </div>
                      
                      {/* 幻灯片数量 */}
                      <div>
                        <label className="block text-slate-200 font-medium mb-3">幻灯片数量</label>
                        <select className="w-full px-4 py-3 border border-slate-600 bg-slate-800/50 text-slate-200 rounded-lg focus:ring-2 focus:ring-[--color-primary] focus:border-transparent">
                          <option value="10-15">10-15页 (简洁版)</option>
                          <option value="15-25">15-25页 (标准版)</option>
                          <option value="25-35">25-35页 (详细版)</option>
                        </select>
                      </div>
                      
                      {/* 语言设置 */}
                      <div>
                        <label className="block text-slate-200 font-medium mb-3">语言设置</label>
                        <select className="w-full px-4 py-3 border border-slate-600 bg-slate-800/50 text-slate-200 rounded-lg focus:ring-2 focus:ring-[--color-primary] focus:border-transparent">
                          <option value="zh">中文</option>
                          <option value="en">English</option>
                          <option value="both">中英双语</option>
                        </select>
                      </div>
                      
                      {/* 高级选项 */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium text-slate-100">高级选项</h3>
                        <div className="space-y-3">
                          <label className="flex items-center">
                            <input type="checkbox" className="w-4 h-4 text-[--color-primary] bg-slate-700 border-slate-600 rounded focus:ring-[--color-primary] focus:ring-2" defaultChecked />
                            <span className="ml-3 text-slate-300">包含图表和数据可视化</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="w-4 h-4 text-[--color-primary] bg-slate-700 border-slate-600 rounded focus:ring-[--color-primary] focus:ring-2" />
                            <span className="ml-3 text-slate-300">生成演讲备注</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="w-4 h-4 text-[--color-primary] bg-slate-700 border-slate-600 rounded focus:ring-[--color-primary] focus:ring-2" />
                            <span className="ml-3 text-slate-300">添加动画效果</span>
                        </label>
                      </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 生成按钮 */}
              <div className="px-8 pb-8">
                  <button
                    onClick={handleSubmit}
                    disabled={(!file && !paperUrl) || loading}
                    className="w-full btn btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      生成中...
                      </div>
                    ) : (
                    '开始生成演示文稿'
                    )}
                  </button>
              </div>
            </div>
          </div>
          
          {/* 右侧：预览和信息 */}
          <div className="space-y-6">
            {/* 功能特色 */}
            <div className="service-card p-6">
              <h3 className="text-xl font-semibold mb-4 text-slate-100">核心功能特色</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[--color-primary] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-300">智能结构化内容提取</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[--color-primary] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-300">专业模板自动适配</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[--color-primary] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-300">数据图表智能生成</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[--color-primary] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-300">多格式导出支持</span>
                </li>
              </ul>
            </div>
            
            {/* 预览区域 */}
            <div className="service-card p-6">
              <h3 className="text-xl font-semibold mb-4 text-slate-100">预览效果</h3>
              <div className="bg-slate-800/50 rounded-lg p-6 text-center border border-slate-600">
                <div className="w-16 h-12 bg-slate-700 rounded mx-auto mb-4 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="w-2 h-2 bg-slate-500 rounded-sm"></div>
                    <div className="w-2 h-1 bg-slate-500 rounded-sm"></div>
                    <div className="w-2 h-1 bg-slate-500 rounded-sm"></div>
                    <div className="w-2 h-2 bg-slate-500 rounded-sm"></div>
                </div>
                </div>
                <p className="text-slate-300">您的演示文稿将在这里生成</p>
                <p className="text-sm text-slate-400 mt-2">预计处理时间: 2-4分钟</p>
              </div>
            </div>
            
            {/* 使用统计 */}
            <div className="service-card p-6">
              <h3 className="text-xl font-semibold mb-4 text-slate-100">使用统计</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[--color-primary]">800+</div>
                  <div className="text-sm text-slate-300">成功生成</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[--color-secondary]">5.0★</div>
                  <div className="text-sm text-slate-300">用户评分</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}