import React from 'react';

export default function Enterprise() {
  const solutions = [
    {
      title: '智能客服团队',
      description: '全天候在线客服智能体团队，提供多语言、多渠道客户支持',
      features: ['7x24小时在线服务', '多语言支持', '情感分析', '问题自动升级'],
      icon: '💬'
    },
    {
      title: '数据分析师团队',
      description: '数据处理与分析智能体团队，自动生成报告和可视化图表',
      features: ['自动数据清洗', '多维度分析', '自定义报表', 'BI集成'],
      icon: '📊'
    },
    {
      title: '内容创作团队',
      description: '多领域内容创作智能体团队，生成各类专业内容',
      features: ['SEO优化文章', '产品描述', '社交媒体内容', '邮件营销文案'],
      icon: '✍️'
    },
    {
      title: '研发辅助团队',
      description: '代码审查、测试和文档编写智能体团队',
      features: ['代码质量分析', '自动化测试', 'API文档生成', '技术问题解答'],
      icon: '💻'
    },
  ];
  
  const benefits = [
    { title: '降低人力成本', description: '相比传统雇佣减少高达70%的成本' },
    { title: '提高工作效率', description: '7x24小时不间断工作，比人类快3-5倍' },
    { title: '智能扩展', description: '根据业务需求随时扩展或缩减智能体团队规模' },
    { title: '持续学习', description: '智能体团队会随着使用不断学习和优化' },
  ];

  return (
    <div>
      {/* 英雄区 */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6 text-white">企业智能体解决方案</h1>
            <p className="text-xl mb-8 text-gray-300">
              为您的企业打造专属AI智能体团队，提高效率，降低成本，实现业务增长
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn btn-secondary px-6">联系我们</button>
              <button className="btn bg-white text-gray-900 hover:bg-gray-100 px-6">
                了解服务
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* 解决方案 */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">企业智能体方案</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              我们提供各种专业领域的智能体团队，满足不同企业需求
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-8 transition-all hover:shadow-lg">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <span className="text-primary mr-2">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 优势 */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">为什么选择智能体团队</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              相比传统人力资源，我们的智能体团队具有显著优势
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="h-1 w-16 bg-primary mb-6"></div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 客户案例 */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">成功案例</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              看看其他企业如何利用我们的智能体团队提升业务效率
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="mb-4">
                <svg className="h-8 w-auto text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-6">
                "部署智能客服团队后，我们的响应时间减少了85%，客户满意度提升了40%，同时节省了60%的客服成本。"
              </p>
              <div>
                <p className="font-medium">张明</p>
                <p className="text-sm text-gray-500">某电商平台客服总监</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="mb-4">
                <svg className="h-8 w-auto text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-6">
                "我们的内容创作团队现在能够每天生成超过100篇高质量的产品描述，这在以前需要一个月的时间。"
              </p>
              <div>
                <p className="font-medium">李华</p>
                <p className="text-sm text-gray-500">某品牌营销总监</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="mb-4">
                <svg className="h-8 w-auto text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-6">
                "智能数据分析团队每周为我们生成详细报告，帮助我们发现了多个以前忽略的业务增长点。"
              </p>
              <div>
                <p className="font-medium">王强</p>
                <p className="text-sm text-gray-500">某金融科技公司CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 联系我们 */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">开始定制您的企业智能体团队</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              填写下面的表格，我们的专家将联系您，为您的企业量身定制智能体解决方案
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 text-gray-800">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">公司名称</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">联系人姓名</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">联系电话</label>
                  <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">电子邮箱</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">您感兴趣的智能体团队</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">请选择...</option>
                  <option value="customer-service">智能客服团队</option>
                  <option value="data-analysis">数据分析师团队</option>
                  <option value="content">内容创作团队</option>
                  <option value="rd">研发辅助团队</option>
                  <option value="custom">定制解决方案</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">需求描述</label>
                <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
              </div>
              
              <button type="submit" className="w-full btn btn-primary py-3 text-lg font-medium">
                提交需求
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}