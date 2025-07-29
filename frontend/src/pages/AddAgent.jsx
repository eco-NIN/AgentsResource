import React, { useState } from 'react';

export default function AddAgent() {
  const [configFile, setConfigFile] = useState(null);
  const [agentName, setAgentName] = useState('');
  const [agentDescription, setAgentDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [configContent, setConfigContent] = useState('');
  
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setConfigFile(selectedFile);
      
      // 读取文件内容
      const reader = new FileReader();
      reader.onload = (event) => {
        setConfigContent(event.target.result);
      };
      reader.readAsText(selectedFile);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // 模拟API调用
    setTimeout(() => {
      setLoading(false);
      alert('🚀 智能体配置已接收！正在部署到星球网络中...');
    }, 2000);
  };
  
  return (
    <div className="py-12">
      <div className="container-custom">
        {/* 头部区域 */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4 text-slate-100">➕ 添加智能体</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            通过上传配置文件，创建属于您的专属智能体，扩展星球生态系统
          </p>
        </div>
        
        {/* 主要内容区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 左侧表单 */}
          <div className="service-card p-8">
            <h2 className="text-2xl font-semibold mb-6 text-slate-100">🛠️ 智能体配置</h2>
            
            <form onSubmit={handleSubmit}>
              {/* 智能体名称 */}
              <div className="mb-6">
                <label className="block text-slate-200 font-medium mb-2">
                  🏷️ 智能体名称
                </label>
                <input
                  type="text"
                  value={agentName}
                  onChange={(e) => setAgentName(e.target.value)}
                  placeholder="为您的智能体取一个名字"
                  className="w-full px-4 py-3 border border-slate-600 bg-slate-800/50 text-slate-200 rounded-lg focus:ring-2 focus:ring-[--color-primary] focus:border-transparent"
                  required
                />
              </div>
              
              {/* 智能体描述 */}
              <div className="mb-6">
                <label className="block text-slate-200 font-medium mb-2">
                  📝 功能描述
                </label>
                <textarea
                  value={agentDescription}
                  onChange={(e) => setAgentDescription(e.target.value)}
                  placeholder="简要描述您的智能体的功能和特色"
                  rows="3"
                  className="w-full px-4 py-3 border border-slate-600 bg-slate-800/50 text-slate-200 rounded-lg focus:ring-2 focus:ring-[--color-primary] focus:border-transparent"
                  required
                />
              </div>
              
              {/* 配置文件上传 */}
              <div className="mb-6">
                <label className="block text-slate-200 font-medium mb-2">
                  ⚙️ 配置文件上传
                </label>
                <div className="border-2 border-dashed border-slate-600 hover:border-[--color-primary] rounded-lg p-6 text-center transition-colors">
                  <input
                    type="file"
                    accept=".json,.yaml,.yml,.toml,.config"
                    onChange={handleFileChange}
                    className="hidden"
                    id="config-upload"
                    required
                  />
                  <label htmlFor="config-upload" className="cursor-pointer">
                    <div className="text-4xl mb-4">📂</div>
                    <p className="text-slate-200">点击选择配置文件或拖拽上传</p>
                    <p className="text-sm text-slate-400 mt-2">支持 JSON, YAML, TOML 格式</p>
                  </label>
                  {configFile && (
                    <div className="mt-4 p-3 bg-emerald-900/30 border border-emerald-600 rounded">
                      <p className="text-emerald-300">✅ 已选择: {configFile.name}</p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* 配置预览 */}
              {configContent && (
                <div className="mb-6">
                  <label className="block text-slate-200 font-medium mb-2">
                    👀 配置预览
                  </label>
                  <div className="bg-slate-900/50 border border-slate-600 rounded-lg p-4 max-h-40 overflow-y-auto">
                    <pre className="text-sm text-slate-300 whitespace-pre-wrap font-mono">
                      {configContent.substring(0, 500)}
                      {configContent.length > 500 && '...'}
                    </pre>
                  </div>
                </div>
              )}
              
              {/* 部署选项 */}
              <div className="mb-6">
                <label className="block text-slate-200 font-medium mb-2">🌍 部署环境</label>
                <select className="w-full px-4 py-3 border border-slate-600 bg-slate-800/50 text-slate-200 rounded-lg focus:ring-2 focus:ring-[--color-primary] focus:border-transparent">
                  <option value="development">🧪 开发环境 - 测试和调试</option>
                  <option value="staging">🎭 预发布环境 - 预览效果</option>
                  <option value="production">🚀 生产环境 - 正式部署</option>
                </select>
              </div>
              
              {/* 提交按钮 */}
              <button
                type="submit"
                disabled={(!configFile || !agentName || !agentDescription) || loading}
                className="w-full btn btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    🚀 部署中...
                  </div>
                ) : (
                  '🌟 创建智能体'
                )}
              </button>
            </form>
          </div>
          
          {/* 右侧说明 */}
          <div className="space-y-8">
            {/* 配置指南 */}
            <div className="service-card p-6">
              <h3 className="text-xl font-semibold mb-4 text-slate-100">📋 配置文件指南</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[--color-primary] mr-2">📄</span>
                  <span className="text-slate-300">支持JSON、YAML、TOML等格式</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[--color-primary] mr-2">🔧</span>
                  <span className="text-slate-300">包含智能体的参数和行为配置</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[--color-primary] mr-2">🛡️</span>
                  <span className="text-slate-300">自动验证配置文件格式</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[--color-primary] mr-2">⚡</span>
                  <span className="text-slate-300">即时部署到星球网络</span>
                </li>
              </ul>
            </div>
            
            {/* 示例配置 */}
            <div className="service-card p-6">
              <h3 className="text-xl font-semibold mb-4 text-slate-100">💡 配置示例</h3>
              <div className="bg-slate-900/50 border border-slate-600 rounded-lg p-4">
                <pre className="text-sm text-slate-300 font-mono">
{`{
  "name": "MyAgent",
  "version": "1.0.0",
  "description": "智能助手",
  "capabilities": [
    "text_processing",
    "data_analysis"
  ],
  "parameters": {
    "temperature": 0.7,
    "max_tokens": 2048
  }
}`}
                </pre>
              </div>
            </div>
            
            {/* 部署状态 */}
            <div className="service-card p-6">
              <h3 className="text-xl font-semibold mb-4 text-slate-100">📊 部署统计</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[--color-primary]">12</div>
                  <div className="text-sm text-slate-300">活跃智能体</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[--color-secondary]">98%</div>
                  <div className="text-sm text-slate-300">部署成功率</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 