import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // 模拟表单提交
    setTimeout(() => {
      setLoading(false);
      alert('感谢您的留言！我们会尽快回复您。');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };
  
  return (
    <div className="py-12">
      <div className="container-custom">
        {/* 头部区域 */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4 text-slate-100">📞 联系我们</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            与上海交通大学智能体星球团队取得联系，我们随时为您提供帮助
          </p>
        </div>
        
        {/* 主要内容区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 左侧联系信息 */}
          <div className="space-y-8">
            {/* 联系方式 */}
            <div className="service-card p-8">
              <h2 className="text-2xl font-semibold mb-6 text-slate-100">📍 联系方式</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[--color-primary] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">📧</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-slate-100 mb-1">电子邮箱</h3>
                    <p className="text-slate-300">agents@sjtu.edu.cn</p>
                    <p className="text-slate-400 text-sm">我们会在24小时内回复您的邮件</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[--color-secondary] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">📞</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-slate-100 mb-1">联系电话</h3>
                    <p className="text-slate-300">(021) 3420-4560</p>
                    <p className="text-slate-400 text-sm">工作时间：周一至周五 9:00-17:00</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[--color-accent] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">📍</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-slate-100 mb-1">办公地址</h3>
                    <p className="text-slate-300">上海交通大学闵行校区</p>
                    <p className="text-slate-300">人工智能学院大楼 A座 5层</p>
                    <p className="text-slate-400 text-sm">上海市闵行区东川路800号</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 团队信息 */}
            <div className="service-card p-8">
              <h2 className="text-2xl font-semibold mb-6 text-slate-100">👥 团队信息</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-slate-100 mb-2">项目负责人</h3>
                  <p className="text-slate-300">上海交通大学人工智能学院</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-100 mb-2">技术支持</h3>
                  <p className="text-slate-300">智能体星球技术团队</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-100 mb-2">开放时间</h3>
                  <p className="text-slate-300">7×24小时在线服务</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* 右侧联系表单 */}
          <div className="service-card p-8">
            <h2 className="text-2xl font-semibold mb-6 text-slate-100">💬 在线留言</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 姓名 */}
              <div>
                <label htmlFor="name" className="block text-slate-200 font-medium mb-2">
                  姓名 *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="请输入您的姓名"
                  className="w-full px-4 py-3 border border-slate-600 bg-slate-800/50 text-slate-200 rounded-lg focus:ring-2 focus:ring-[--color-primary] focus:border-transparent transition-all"
                />
              </div>
              
              {/* 邮箱 */}
              <div>
                <label htmlFor="email" className="block text-slate-200 font-medium mb-2">
                  邮箱 *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="请输入您的邮箱地址"
                  className="w-full px-4 py-3 border border-slate-600 bg-slate-800/50 text-slate-200 rounded-lg focus:ring-2 focus:ring-[--color-primary] focus:border-transparent transition-all"
                />
              </div>
              
              {/* 主题 */}
              <div>
                <label htmlFor="subject" className="block text-slate-200 font-medium mb-2">
                  主题 *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-600 bg-slate-800/50 text-slate-200 rounded-lg focus:ring-2 focus:ring-[--color-primary] focus:border-transparent transition-all"
                >
                  <option value="">请选择咨询主题</option>
                  <option value="technical">技术支持</option>
                  <option value="collaboration">合作咨询</option>
                  <option value="feedback">意见反馈</option>
                  <option value="bug">问题报告</option>
                  <option value="other">其他</option>
                </select>
              </div>
              
              {/* 留言内容 */}
              <div>
                <label htmlFor="message" className="block text-slate-200 font-medium mb-2">
                  留言内容 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="请详细描述您的问题或建议..."
                  className="w-full px-4 py-3 border border-slate-600 bg-slate-800/50 text-slate-200 rounded-lg focus:ring-2 focus:ring-[--color-primary] focus:border-transparent transition-all resize-none"
                />
              </div>
              
              {/* 提交按钮 */}
              <button
                type="submit"
                disabled={loading}
                className="w-full btn btn-primary py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    发送中...
                  </div>
                ) : (
                  '发送留言'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 