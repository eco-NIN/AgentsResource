import React, { useState } from 'react';

export default function PaperToPPT() {
  const [activeTab, setActiveTab] = useState('upload');
  const [file, setFile] = useState(null);
  const [paperUrl, setPaperUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('academic');
  
  const templates = [
    { id: 'academic', name: '�� 学术星云', color: 'bg-blue-900/30', icon: '🎓' },
    { id: 'modern', name: '💼 商务星系', color: 'bg-slate-800/30', icon: '💼' },
    { id: 'creative', name: '🎨 创意星球', color: 'bg-purple-900/30', icon: '🎨' },
    { id: 'minimal', name: '✨ 极简宇宙', color: 'bg-indigo-900/30', icon: '✨' },
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
      alert('🛸 星际研究站：学术成果已接收，正在生成星际演示文稿...');
    }, 2000);
  };

  return (
    <div className="py-12">
      <div className="container-custom">
        {/* 头部区域 */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4 text-slate-100">🛸 星际研究站</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            智能将学术研究转化为专业星际演示文稿，在宇宙中展示您的发现
          </p>
        </div>
        
        {/* 主要内容区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左侧和中间：表单部分 */}
          <div className="lg:col-span-2">
            <div className="service-card overflow-hidden">
              {/* 标签页导航 */}
              <div className="flex bg-slate-900/50">
                <button
                  onClick={() => setActiveTab('upload')}
                  className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                    activeTab === 'upload'
                      ? 'bg-slate-800 text-[--color-primary] border-b-2 border-[--color-primary]'
                      : 'text-slate-300 hover:text-slate-100'
                  }`}
                >
                  📄 文档上传
                </button>
                <button
                  onClick={() => setActiveTab('template')}
                  className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                    activeTab === 'template'
                      ? 'bg-slate-800 text-[--color-primary] border-b-2 border-[--color-primary]'
                      : 'text-slate-300 hover:text-slate-100'
                  }`}
                >
                  🎨 模板选择
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                    activeTab === 'settings'
                      ? 'bg-slate-800 text-[--color-primary] border-b-2 border-[--color-primary]'
                      : 'text-slate-300 hover:text-slate-100'
                  }`}
                >
                  ⚙️ 高级设置
                </button>
              </div>

              <div className="p-8">
                {/* 文档上传标签页 */}
                {activeTab === 'upload' && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-6 text-slate-100">🌟 上传您的学术成果</h2>
                    
                    <form onSubmit={handleSubmit}>
                      {/* 文件上传 */}
                      <div className="mb-6">
                        <label className="block text-slate-200 font-medium mb-2">
                          📄 学术文档
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
                            <div className="text-6xl mb-4">📎</div>
                            <p className="text-lg text-slate-200 mb-2">点击选择文件或拖拽上传</p>
                            <p className="text-sm text-slate-400">支持 PDF, Word, PowerPoint 格式</p>
                          </label>
                          {file && (
                            <div className="mt-4 p-3 bg-emerald-900/30 border border-emerald-600 rounded">
                              <p className="text-emerald-300">✅ 已选择: {file.name}</p>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* URL输入 */}
                      <div className="mb-6">
                        <div className="text-center my-4">
                          <span className="bg-slate-700 px-4 py-1 rounded-full text-slate-300">或者</span>
                        </div>
                        <label className="block text-slate-200 font-medium mb-2">
                          🔗 学术资源链接
                        </label>
                        <input
                          type="url"
                          value={paperUrl}
                          onChange={(e) => setPaperUrl(e.target.value)}
                          placeholder="粘贴论文链接 (ArXiv, ResearchGate等)"
                          className="w-full px-4 py-3 border border-slate-600 bg-slate-800/50 text-slate-200 rounded-lg focus:ring-2 focus:ring-[--color-primary] focus:border-transparent"
                        />
                      </div>
                    </form>
                  </div>
                )}

                {/* 模板选择标签页 */}
                {activeTab === 'template' && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-6 text-slate-100">🎨 选择您的星际演示模板</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {templates.map((template) => (
                        <div
                          key={template.id}
                          onClick={() => setSelectedTemplate(template.id)}
                          className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                            selectedTemplate === template.id
                              ? 'border-[--color-primary] bg-blue-900/20'
                              : 'border-slate-600 hover:border-slate-500'
                          }`}
                        >
                          <div className="flex items-center mb-4">
                            <span className="text-3xl mr-3">{template.icon}</span>
                            <h3 className="text-lg font-semibold text-slate-100">{template.name}</h3>
                          </div>
                          
                          <div className={`h-20 rounded-lg ${template.color} mb-4 flex items-center justify-center border border-slate-600`}>
                            <span className="text-2xl">{template.icon}</span>
                          </div>
                          
                          <div className="text-sm text-slate-300">
                            {template.id === 'academic' && '专业学术风格，适合会议演示'}
                            {template.id === 'modern' && '现代商务风格，简洁大方'}
                            {template.id === 'creative' && '创意设计风格，生动有趣'}
                            {template.id === 'minimal' && '极简主义风格，突出内容'}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 高级设置标签页 */}
                {activeTab === 'settings' && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-6 text-slate-100">⚙️ 星际演示高级设置</h2>
                    
                    <div className="space-y-6">
                      {/* 语言设置 */}
                      <div>
                        <label className="block text-slate-200 font-medium mb-2">🌍 语言设置</label>
                        <select className="w-full px-4 py-3 border border-slate-600 bg-slate-800/50 text-slate-200 rounded-lg focus:ring-2 focus:ring-[--color-primary] focus:border-transparent">
                          <option value="zh">中文</option>
                          <option value="en">English</option>
                          <option value="ja">日本語</option>
                        </select>
                      </div>
                      
                      {/* 幻灯片数量 */}
                      <div>
                        <label className="block text-slate-200 font-medium mb-2">📊 最大幻灯片数量</label>
                        <input
                          type="range"
                          min="10"
                          max="50"
                          defaultValue="20"
                          className="w-full accent-[--color-primary]"
                        />
                        <div className="flex justify-between text-sm text-slate-400 mt-1">
                          <span>10</span>
                          <span>50</span>
                        </div>
                      </div>
                      
                      {/* 动画效果 */}
                      <div>
                        <label className="block text-slate-200 font-medium mb-2">✨ 动画效果</label>
                        <div className="space-y-2">
                          <label className="flex items-center text-slate-300">
                            <input type="checkbox" className="mr-2 accent-[--color-primary]" defaultChecked />
                            <span>启用星际过渡动画</span>
                          </label>
                          <label className="flex items-center text-slate-300">
                            <input type="checkbox" className="mr-2 accent-[--color-primary]" defaultChecked />
                            <span>自动播放效果</span>
                          </label>
                          <label className="flex items-center text-slate-300">
                            <input type="checkbox" className="mr-2 accent-[--color-primary]" />
                            <span>3D空间效果</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 提交按钮 */}
                <div className="mt-8 pt-6 border-t border-slate-600">
                  <button
                    onClick={handleSubmit}
                    disabled={(!file && !paperUrl) || loading}
                    className="w-full btn btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        🛸 星际制作中...
                      </div>
                    ) : (
                      '🌟 生成星际演示文稿'
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* 右侧：功能介绍 */}
          <div className="space-y-6">
            {/* 功能特色 */}
            <div className="service-card p-6">
              <h3 className="text-xl font-semibold mb-4 text-slate-100">⚡ 星际研究站特色</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[--color-primary] mr-2">🤖</span>
                  <span className="text-slate-300">智能内容提取与结构化</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[--color-primary] mr-2">🎨</span>
                  <span className="text-slate-300">专业星际设计模板</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[--color-primary] mr-2">📊</span>
                  <span className="text-slate-300">自动图表与数据可视化</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[--color-primary] mr-2">🌟</span>
                  <span className="text-slate-300">多语言星际演示支持</span>
                </li>
              </ul>
            </div>
            
            {/* 生成进度 */}
            <div className="service-card p-6">
              <h3 className="text-xl font-semibold mb-4 text-slate-100">🚀 制作进度</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-slate-300">
                  <span>文档分析</span>
                  <span className="text-emerald-400">✓</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>内容提取</span>
                  <span className="text-slate-500">⏳</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>模板应用</span>
                  <span className="text-slate-500">⏳</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>最终生成</span>
                  <span className="text-slate-500">⏳</span>
                </div>
              </div>
            </div>
            
            {/* 使用统计 */}
            <div className="service-card p-6">
              <h3 className="text-xl font-semibold mb-4 text-slate-100">📊 星球数据</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[--color-primary]">800+</div>
                  <div className="text-sm text-slate-300">成功制作</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[--color-secondary]">4.9★</div>
                  <div className="text-sm text-slate-300">用户评分</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 模板预览区域 */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-100">🎨 星际演示模板预览</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {templates.map((template) => (
              <div key={template.id} className="service-card p-4">
                <div className={`h-32 rounded-lg ${template.color} mb-4 flex items-center justify-center border border-slate-600`}>
                  <span className="text-4xl">{template.icon}</span>
                </div>
                <h3 className="font-semibold text-center text-slate-100">{template.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}