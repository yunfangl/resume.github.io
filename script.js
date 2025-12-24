// script.js - 修复核心项目布局问题
// 全局变量
let resumeData = {};

// DOM 加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('简历页面初始化...');

    // 加载简历数据
    loadResumeData();

    // 绑定事件监听器
    const downloadBtn = document.getElementById('downloadPdfBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', downloadAsPdf);
        console.log('下载按钮绑定成功');
    } else {
        console.warn('下载按钮未找到');
    }

    console.log('初始化完成');
});

// 加载简历数据（修复版本）
function loadResumeData() {
    console.log('开始加载假数据...');

    resumeData = {
        "personalInfo": {
            "name": "林晓薇",
            "jobTarget": "前端开发专家 / 前端架构师",
            "summary": "5年前端开发经验，专注复杂业务系统架构与性能优化，具备从0到1技术体系建设能力。擅长Vue生态、TypeScript工程化、微前端架构，主导多个大型项目性能优化与团队技术升级。",
            "contact": {
                "phone": "13800138000",
                "email": "frontend.dev@example.com",
                "github": "https://github.com/example-frontend",
                "blog": "https://blog.frontend-tech.com"
            }
        },
        "coreProjects": [
            {
                "name": "智能制造ERP系统重构",
                "link": "https://erp.smartfactory.com",
                "period": "2022.08-2023.12",
                "role": "前端负责人 / 架构师",
                "description": "为大型智能制造企业重构的数字化管理平台，替代原有12+独立系统，实现生产全流程数字化管理。",
                "challenges": [
                    {
                        "problem": "单体应用6年历史代码，编译时间4min+，团队协作效率低下",
                        "solution": "主导微前端架构改造，基于qiankun按业务域拆分8个子应用",
                        "result": "编译时间↓80%，独立部署，团队并行开发效率↑45%"
                    },
                    {
                        "problem": "生产数据模块10w+数据行表格渲染，页面卡顿严重",
                        "solution": "虚拟滚动 + Web Worker计算 + Canvas渲染优化",
                        "result": "FPS稳定在60，内存占用↓75%，用户体验评分大幅提升"
                    },
                    {
                        "problem": "300+业务表单重复开发，维护困难，代码复用率低",
                        "solution": "设计JSON Schema表单配置系统 + 可视化表单设计器",
                        "result": "开发效率↑350%，代码复用率90%+，维护成本↓70%"
                    }
                ],
                "techStack": ["Vue 3 + Composition API", "TypeScript", "微前端(qiankun)", "Vite", "Pinia状态管理", "ECharts大数据可视化"],
                "results": [
                    { "value": "68%", "label": "系统响应时间优化" },
                    { "value": "45%", "label": "团队开发效率提升" },
                    { "value": "65%", "label": "线上Bug率降低" },
                    { "value": "350%", "label": "表单开发效率提升" }
                ],
                "isCore": true
            },
            {
                "name": "智慧医疗管理系统",
                "link": "https://medical.smarthealth.com",
                "period": "2021.03-2022.07",
                "role": "核心开发工程师",
                "description": "面向三甲医院的智慧医疗管理平台，支持电子病历、药品管理、医患互动等核心功能，日均访问量50万+。",
                "challenges": [
                    {
                        "problem": "医疗数据安全性要求极高，传统方案存在泄露风险",
                        "solution": "设计前端数据加密方案 + 水印系统 + 操作日志追溯",
                        "result": "通过医疗安全等级测评，0数据泄露事件"
                    },
                    {
                        "problem": "复杂病历表单验证逻辑混乱，代码维护困难",
                        "solution": "基于TypeScript实现类型安全的表单验证引擎",
                        "result": "验证逻辑代码量↓55%，维护效率↑220%"
                    },
                    {
                        "problem": "医疗影像加载缓慢，用户体验差",
                        "solution": "图片懒加载 + WebP格式转换 + CDN加速",
                        "result": "影像加载时间从5s→0.8s，用户满意度提升40%"
                    }
                ],
                "techStack": ["React 18 + Hooks", "TypeScript", "Ant Design Pro", "Redux Toolkit", "WebRTC视频会诊", "WebSocket实时通信"],
                "results": [
                    { "value": "99.99%", "label": "系统可用性" },
                    { "value": "80%", "label": "影像加载优化" },
                    { "value": "220%", "label": "维护效率提升" },
                    { "value": "0", "label": "数据安全事故" }
                ],
                "isCore": true
            },
            {
                "name": "智慧园区物联网平台",
                "link": "https://iot.smartpark.com",
                "period": "2020.11-2021.10",
                "role": "前端技术负责人",
                "description": "基于物联网的智慧园区管理平台，实时监测5000+设备状态，异常实时预警，实现园区智能化管理。",
                "challenges": [
                    {
                        "problem": "实时数据量大（5000+设备/s），传统轮询方案压力大",
                        "solution": "WebSocket + 数据聚合 + 增量更新策略",
                        "result": "服务器压力↓85%，数据传输量优化70%"
                    },
                    {
                        "problem": "园区设备定位精度要求高，传统地图方案不满足",
                        "solution": "Mapbox GL + 自定义图层 + 实时轨迹渲染",
                        "result": "定位精度提升至0.3米，轨迹渲染流畅60FPS"
                    },
                    {
                        "problem": "移动端监测App性能差，耗电量大",
                        "solution": "PWA技术 + 离线缓存 + 后台同步",
                        "result": "首屏加载时间1.1s，离线可用性100%，电量消耗↓45%"
                    }
                ],
                "techStack": ["Vue.js + Vuex", "WebSocket实时通信", "Mapbox GL地理可视化", "ECharts大数据展示", "PWA离线应用", "Three.js 3D可视化"],
                "results": [
                    { "value": "85%", "label": "服务器压力降低" },
                    { "value": "0.3米", "label": "定位精度" },
                    { "value": "60FPS", "label": "实时渲染帧率" },
                    { "value": "45%", "label": "移动端电量优化" }
                ],
                "isCore": true
            },
            {
                "name": "金融风控数据分析平台",
                "link": "https://risk.finance.com",
                "period": "2021.09-2022.12",
                "role": "前端架构师",
                "description": "为金融机构打造的风险控制数据分析平台，支持实时交易监控、风险预警、数据建模、可视化报告等功能。",
                "challenges": [
                    {
                        "problem": "金融数据实时性要求高，传统轮询无法满足毫秒级更新",
                        "solution": "WebSocket + Server-Sent Events双通道实时通信",
                        "result": "数据更新延迟从3s降至50ms，实时性提升98%"
                    },
                    {
                        "problem": "大数据量图表渲染性能差，页面卡顿严重",
                        "solution": "Canvas渲染优化 + 数据分片加载 + GPU加速",
                        "result": "10w+数据点图表渲染时间从5s降至0.3s"
                    },
                    {
                        "problem": "复杂权限控制逻辑混乱，代码维护困难",
                        "solution": "基于RBAC的权限管理系统 + 动态路由配置",
                        "result": "权限验证性能提升300%，代码维护成本降低60%"
                    }
                ],
                "techStack": ["Vue 3 + TypeScript", "WebSocket + SSE", "ECharts + Canvas", "微前端架构", "RBAC权限系统", "Web Worker"],
                "results": [
                    { "value": "98%", "label": "实时性提升" },
                    { "value": "94%", "label": "渲染性能优化" },
                    { "value": "300%", "label": "权限验证性能" },
                    { "value": "60%", "label": "维护成本降低" }
                ],
                "isCore": true
            }
        ],
        "workExperience": [
            {
                "company": "数科科技有限公司",
                "position": "高级前端开发工程师 → 前端技术负责人",
                "period": "2022.03-至今",
                "promotion": "2023.06晋升技术负责人",
                "responsibilities": "负责公司前端技术体系建设，带领12人前端团队，主导技术选型、架构设计和工程化落地，推动团队技术升级。",
                "achievements": [
                    "建立完整的前端工程化体系：CI/CD流水线、代码规范、组件库、监控体系",
                    "主导微前端架构落地，解决6年历史单体应用的技术债务问题",
                    "建立技术分享文化，团队整体技术水平显著提升",
                    "推动TypeScript全面落地，类型覆盖率从10%提升至95%+"
                ]
            },
            {
                "company": "云创科技集团",
                "position": "前端开发工程师 → 高级前端工程师",
                "period": "2020.09-2022.02",
                "promotion": "2021.06晋升高级工程师",
                "responsibilities": "参与多个大型企业级项目开发，负责复杂业务模块设计与实现，开始承担技术决策职责，指导初级工程师。",
                "achievements": [
                    "主导性能优化专项，将核心产品首屏加载时间从3.5s优化至1.3s",
                    "设计并实现企业级组件库，团队代码复用率从25%提升至75%",
                    "建立Code Review机制，代码质量评分显著提升",
                    "培养3名初级工程师，指导其掌握复杂业务开发能力"
                ]
            },
            {
                "company": "智软科技有限公司",
                "position": "前端开发工程师",
                "period": "2019.06-2020.08",
                "responsibilities": "负责公司产品前端开发，快速学习业务，建立工程化思维，培养解决问题的能力，完成多个中型项目开发。",
                "achievements": [
                    "从0到1独立完成4个中型项目前端架构设计与开发",
                    "主导响应式设计规范，移动端适配评分达98+",
                    "建立前端构建优化方案，打包时间缩短65%",
                    "参与产品需求评审，提出15+技术优化建议被采纳"
                ]
            }
        ],
        "otherProjects": [
            {
                "name": "企业数字化官网重构",
                "link": "https://www.digital-company.com",
                "description": "现代化响应式企业官网，支持多语言切换、SEO优化、内容管理系统集成，展示企业数字化能力。",
                "techStack": ["Next.js", "TypeScript", "Tailwind CSS", "GraphQL", "Headless CMS", "SSR渲染"],
                "result": "性能评分98+，SEO流量提升250%，多语言支持8种，首屏加载时间1.2s"
            },
            {
                "name": "在线教育平台",
                "link": "https://edu.online-learning.com",
                "description": "一站式在线教育平台，支持直播授课、在线考试、作业提交、学习社区等功能，服务10万+学员。",
                "techStack": ["Vue.js", "Vant UI", "WebRTC直播", "WebSocket即时通讯", "PWA", "IndexedDB"],
                "result": "日活跃用户5万+，课程完成率提升35%，用户满意度4.8/5.0"
            },
            {
                "name": "电商营销中台",
                "link": "https://marketing.ecommerce.com",
                "description": "电商营销活动管理平台，支持优惠券、拼团、秒杀、分销等营销功能，日均处理订单50万+。",
                "techStack": ["Vue 2", "Element UI", "微信生态", "Redis缓存", "WebSocket", "微服务架构"],
                "result": "日活用户8万+，营销活动转化率18%，峰值QPS支持10万+"
            },
            {
                "name": "智能客服系统",
                "link": "https://service.ai-chat.com",
                "description": "基于AI的智能客服系统，支持机器人客服、人工坐席、工单管理、数据分析等功能。",
                "techStack": ["Vue.js", "WebRTC", "WebSocket", "Element UI", "Agora SDK", "AI集成"],
                "result": "客服效率提升60%，用户问题解决率85%，支撑5万+并发会话"
            },
            {
                "name": "智慧停车小程序",
                "link": "https://parking.smart-city.com",
                "description": "城市级智慧停车平台，支持车位查询、预约停车、无感支付、电子发票等功能，覆盖500+停车场。",
                "techStack": ["微信小程序", "Vant Weapp", "云开发", "支付体系", "地图API", "物联网"],
                "result": "覆盖500+停车场，月交易额800万+，用户日活3万+"
            },
            {
                "name": "智慧交通管理平台",
                "link": "https://traffic.smart-city.com",
                "description": "城市智慧交通综合管理平台，支持实时路况监测、信号灯智能控制、违章识别、交通流量预测等功能。",
                "techStack": ["Vue 3 + TypeScript", "地图API集成", "WebSocket实时通信", "ECharts数据可视化", "AI图像识别", "大数据处理"],
                "result": "覆盖全市3000+路口，交通拥堵率降低25%，违章识别准确率95%+"
            }
        ]
    };

    console.log('假数据加载完成', {
        coreProjectsCount: resumeData.coreProjects?.length || 0,
        workExperienceCount: resumeData.workExperience?.length || 0,
        otherProjectsCount: resumeData.otherProjects?.length || 0
    });

    // 渲染数据到页面
    renderResume();
}

// 渲染简历数据
function renderResume() {
    console.log('开始渲染简历数据');

    // 渲染左侧工作经历
    renderWorkExperience();

    // 渲染核心项目
    renderCoreProjects();

    // 渲染其他项目
    renderOtherProjects();

    console.log('简历数据渲染完成');
}

// 渲染左侧工作经历
function renderWorkExperience() {
    const workExperienceContainer = document.getElementById('workExperience');
    if (!workExperienceContainer) {
        console.error('找不到工作经历容器元素！');
        return;
    }

    workExperienceContainer.innerHTML = '';

    if (!resumeData.workExperience || resumeData.workExperience.length === 0) {
        workExperienceContainer.innerHTML = '<div class="error-message">暂无工作经历数据</div>';
        return;
    }

    console.log('渲染左侧工作经历，数量:', resumeData.workExperience.length);

    resumeData.workExperience.forEach(work => {
        const workItem = document.createElement('div');
        workItem.className = 'work-item';

        const achievementsList = work.achievements ? work.achievements.map(achievement => `<li>${achievement}</li>`).join('') : '';

        const promotionHTML = work.promotion ? `<span class="work-promotion">${work.promotion}</span>` : '';

        workItem.innerHTML = `
            <div class="work-date">${work.period}</div>
            <div class="work-content">
                <h4>
                    <i class="fas fa-building"></i>
                    ${work.company}
                </h4>
                <div class="work-position">
                    ${work.position}
                    ${promotionHTML}
                </div>
                ${achievementsList ? `
                <ul class="work-achievements">
                    ${achievementsList}
                </ul>
                ` : ''}
            </div>
        `;

        workExperienceContainer.appendChild(workItem);
    });

    console.log('左侧工作经历渲染完成');
}

// 渲染核心项目
function renderCoreProjects() {
    const coreProjectsContainer = document.getElementById('coreProjects');
    if (!coreProjectsContainer) {
        console.error('找不到核心项目容器元素！');
        return;
    }

    console.log('渲染核心项目，数量:', resumeData.coreProjects?.length || 0);

    coreProjectsContainer.innerHTML = '';

    if (!resumeData.coreProjects || resumeData.coreProjects.length === 0) {
        coreProjectsContainer.innerHTML = `
            <div class="error-message" style="grid-column: 1/-1; text-align: center; padding: 40px; color: #666;">
                <i class="fas fa-exclamation-triangle" style="font-size: 48px; margin-bottom: 20px; color: #ff9800;"></i>
                <h3 style="margin-bottom: 10px;">暂无核心项目数据</h3>
                <p>请检查数据文件是否正确加载</p>
            </div>
        `;
        return;
    }

    resumeData.coreProjects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card core';

        const techTags = project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('');

        const challengesHTML = project.challenges.map(challenge => `
            <li class="challenge-item">
                <div class="challenge-problem">${challenge.problem}</div>
                <div class="challenge-solution">${challenge.solution}</div>
                <div class="challenge-result">${challenge.result}</div>
            </li>
        `).join('');

        const resultsHTML = project.results.map(result => `
            <div class="result-item">
                <div class="result-value">${result.value}</div>
                <div class="result-label">${result.label}</div>
            </div>
        `).join('');

        // 使用统一的HTML结构，确保所有项目布局一致
        projectCard.innerHTML = `
            <div class="project-header">
                <h3 class="project-title">${project.name}</h3>
                <span class="project-role">${project.role}</span>
            </div>
            <div class="project-period">
                <i class="far fa-calendar"></i> ${project.period || '2021.03-2022.07'}
            </div>
            <p class="project-description">${project.description}</p>
            
            <div class="challenge-section">
                <div class="challenge-title">
                    <i class="fas fa-puzzle-piece"></i>
                    技术挑战与解决方案
                </div>
                <ul class="challenge-list">
                    ${challengesHTML}
                </ul>
            </div>
            
            <div class="tech-stack">
                ${techTags}
            </div>
            
            <div class="results-section">
                <div class="results-title">
                    <i class="fas fa-chart-line"></i>
                    量化成果
                </div>
                <div class="results-grid">
                    ${resultsHTML}
                </div>
            </div>
        `;

        coreProjectsContainer.appendChild(projectCard);
    });

    console.log('核心项目渲染完成');
}

// 渲染其他项目
function renderOtherProjects() {
    const otherProjectsContainer = document.getElementById('otherProjects');
    if (!otherProjectsContainer) {
        console.error('找不到其他项目容器元素！');
        return;
    }

    otherProjectsContainer.innerHTML = '';

    if (!resumeData.otherProjects || resumeData.otherProjects.length === 0) {
        otherProjectsContainer.innerHTML = '<div class="error-message">暂无其他项目数据</div>';
        return;
    }

    console.log('渲染其他项目，数量:', resumeData.otherProjects.length);

    resumeData.otherProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        const techTags = project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('');

        projectCard.innerHTML = `
            <div class="project-header">
                <h3 class="project-title">${project.name}</h3>
                ${project.link ? `<a href="${project.link}" target="_blank" class="project-link">
                    <i class="fas fa-external-link-alt"></i>
                    访问演示
                </a>` : ''}
            </div>
            <p class="project-description">${project.description}</p>
            <div class="tech-stack">
                ${techTags}
            </div>
            <div class="results-section" style="padding: 15px; margin-top: 15px;">
                <div class="result-item" style="text-align: left; padding: 0; background: transparent; box-shadow: none;">
                    <div class="result-label" style="color: #2e7d32; font-weight: 600;">项目成果:</div>
                    <div class="result-value" style="font-size: 14px; color: #555; font-weight: 400; margin-top: 5px;">${project.result}</div>
                </div>
            </div>
        `;

        otherProjectsContainer.appendChild(projectCard);
    });

    console.log('其他项目渲染完成');
}

// 下载为PDF - 简化版本，修复所有问题
async function downloadAsPdf() {
    const downloadBtn = document.getElementById('downloadPdfBtn');
    const originalHTML = downloadBtn.innerHTML;

    try {
        // 显示加载状态
        downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 生成中...';
        downloadBtn.disabled = true;

        console.log('开始生成PDF...');

        // 获取简历容器
        const element = document.querySelector('.resume-wrapper');

        // 保存原始边距和内边距
        const originalBodyPadding = document.body.style.padding;
        const originalMargin = element.style.margin;

        // 移除边距和内边距，确保PDF无空白
        document.body.style.padding = '0';
        element.style.margin = '0';

        // 修复姓名显示问题 - 改为白色纯色文本
        const nameElement = document.querySelector('.name');
        const originalNameStyle = nameElement.style.cssText;
        nameElement.style.background = 'none';
        nameElement.style.color = '#ffffff';
        nameElement.style.webkitBackgroundClip = 'initial';
        nameElement.style.backgroundClip = 'initial';
        nameElement.style.webkitTextFillColor = 'initial';

        // 简单直接的html2canvas配置
        const canvas = await html2canvas(element, {
            scale: 1.5,
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff',
            removeContainer: false,
            allowTaint: true
        });

        // 恢复原始样式
        document.body.style.padding = originalBodyPadding;
        element.style.margin = originalMargin;
        nameElement.style.cssText = originalNameStyle;

        console.log('Canvas生成完成，尺寸:', canvas.width, 'x', canvas.height);

        // 创建PDF
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');

        // 计算PDF页面尺寸（毫米）
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        // 计算图片在PDF中的尺寸（保持宽高比）
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;

        // 将图片尺寸转换为毫米（假设96DPI）
        const pxToMm = 25.4 / 96;
        const imgWidthMm = imgWidth * pxToMm;
        const imgHeightMm = imgHeight * pxToMm;

        // 计算缩放比例以适合A4纸（减少边距）
        const scale = Math.min(
            (pdfWidth - 10) / imgWidthMm, // 左右各留5mm边距
            (pdfHeight - 10) / imgHeightMm // 上下各留5mm边距
        );

        const scaledWidth = imgWidthMm * scale;
        const scaledHeight = imgHeightMm * scale;

        // 居中放置
        const x = (pdfWidth - scaledWidth) / 2;
        const y = (pdfHeight - scaledHeight) / 2;

        // 添加图片到PDF
        const imgData = canvas.toDataURL('image/jpeg', 0.9);
        pdf.addImage(imgData, 'JPEG', x, y, scaledWidth, scaledHeight);

        // 保存PDF文件
        pdf.save('林晓薇-前端开发专家-简历.pdf');

        console.log('PDF生成完成');

        // 显示成功提示
        showNotification('简历PDF已成功生成并下载', 'success');

    } catch (error) {
        console.error('生成PDF时出错:', error);
        showNotification('生成PDF时出错，请重试', 'error');
    } finally {
        // 恢复按钮状态
        downloadBtn.innerHTML = originalHTML;
        downloadBtn.disabled = false;
    }
}

// 显示通知
function showNotification(message, type = 'success') {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
    `;

    // 添加到页面
    document.body.appendChild(notification);

    // 3秒后移除通知
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px)';
        notification.style.transition = 'all 0.3s ease';

        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// 页面加载完成后的额外检查
window.addEventListener('load', function() {
    console.log('页面完全加载完成');

    // 检查各个部分是否渲染成功
    const coreProjects = document.querySelectorAll('.project-card.core');
    const otherProjects = document.querySelectorAll('.projects-grid.compact .project-card');
    const workItems = document.querySelectorAll('.work-item');

    console.log('检查结果:', {
        coreProjects: coreProjects.length,
        otherProjects: otherProjects.length,
        workItems: workItems.length
    });

    if (coreProjects.length === 0) {
        console.warn('警告：核心项目未渲染成功');
    }

    if (workItems.length === 0) {
        console.warn('警告：工作经历未渲染成功');
    }
});