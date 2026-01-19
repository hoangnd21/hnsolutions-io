import {
  IPage,
  IService,
  IPortfolioItem,
  IBlogPost,
  ITeamMember,
  ITestimonial,
  Locale,
  IGenericPage,
} from '@/types';

// Mock API service with professional bilingual content
// Based on comprehensive service structure for Website Development, Digital Marketing, and Managed Services
// Fallback when CONTENT_SOURCE=mock (Sanity is the primary CMS)

const content = {
  en: {
    services: [
      {
        id: '1',
        title: 'Website Development',
        description: 'Build powerful, scalable, and conversion-focused websites tailored to your business goals with cutting-edge technologies and proven methodologies.',
        icon: '🌐',
        features: [
          'Landing Page Development',
          'Ecommerce Solutions',
          'Custom Web Applications',
          'Responsive & Mobile-First Design',
          'Performance Optimization',
          'SEO-Friendly Architecture',
        ],
        slug: 'website-development',
      },
      {
        id: '2',
        title: 'Digital Marketing',
        description: 'Data-driven digital marketing strategies that deliver measurable results through targeted campaigns, audience insights, and continuous optimization.',
        icon: '📊',
        features: [
          'Google Ads Management',
          'Facebook & Instagram Ads',
          'Search Engine Marketing (SEM)',
          'Social Media Marketing',
          'Analytics & ROI Tracking',
          'Multi-Channel Campaign Strategy',
        ],
        slug: 'digital-marketing',
      },
      {
        id: '3',
        title: 'Managed Service & Optimization',
        description: 'Ongoing support, monitoring, and continuous improvement to ensure your digital assets perform at their peak and deliver maximum value.',
        icon: '⚙️',
        features: [
          'Conversion Rate Optimization (CRO)',
          '24/7 Monitoring & Support',
          'Performance Analytics',
          'A/B Testing & Experimentation',
          'Security & Maintenance',
          'Scalability Planning',
        ],
        slug: 'managed-service-optimization',
      },
    ],
    portfolio: [
      {
        id: '1',
        title: 'High-Converting Landing Page for SaaS Startup',
        description: 'Designed and developed a conversion-optimized landing page that increased signups by 245% in 3 months. Features include A/B tested hero sections, social proof integration, and seamless CRM connectivity.',
        images: [
          '/portfolio/landing-page-saas.jpg',
          '/portfolio/landing-page-saas-mobile.jpg',
          '/portfolio/landing-page-analytics.jpg',
        ],
        client: 'CloudTech Solutions',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Google Analytics', 'HubSpot'],
        slug: 'saas-landing-page',
        category: 'Website Development',
      },
      {
        id: '2',
        title: 'Full-Scale Ecommerce Platform for Fashion Retailer',
        description: 'Built a complete ecommerce solution with payment gateway integration, inventory management, customer reviews, and personalized recommendations engine. Achieved $2M+ in first-year sales.',
        images: [
          '/portfolio/ecommerce-fashion.jpg',
          '/portfolio/ecommerce-dashboard.jpg',
          '/portfolio/ecommerce-mobile.jpg',
        ],
        client: 'Luxe Fashion Co.',
        technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis', 'AWS S3'],
        slug: 'fashion-ecommerce-platform',
        category: 'Website Development',
      },
      {
        id: '3',
        title: 'Google Ads Campaign for B2B Lead Generation',
        description: 'Managed comprehensive Google Ads strategy across Search, Display, and Performance Max campaigns. Generated 450+ qualified leads with 180% ROI in 6 months.',
        images: [
          '/portfolio/google-ads-dashboard.jpg',
          '/portfolio/google-ads-performance.jpg',
        ],
        client: 'Enterprise Software Group',
        technologies: ['Google Ads', 'Google Tag Manager', 'Google Analytics 4', 'Looker Studio'],
        slug: 'b2b-google-ads-campaign',
        category: 'Digital Marketing',
      },
      {
        id: '4',
        title: 'Multi-Channel Social Media Campaign',
        description: 'Executed data-driven Facebook and Instagram ad campaigns with precision audience targeting, creative optimization, and retargeting funnels. Achieved 5.2x ROAS and 30% lower CPA.',
        images: [
          '/portfolio/social-media-campaign.jpg',
          '/portfolio/facebook-ads-results.jpg',
          '/portfolio/instagram-creatives.jpg',
        ],
        client: 'Wellness & Beauty Brand',
        technologies: ['Facebook Ads Manager', 'Meta Pixel', 'Hotjar', 'Canva'],
        slug: 'social-media-marketing-campaign',
        category: 'Digital Marketing',
      },
      {
        id: '5',
        title: 'CRO & Optimization for Fintech Platform',
        description: 'Comprehensive conversion rate optimization program including user behavior analysis, heatmapping, A/B testing, and UX improvements. Increased conversion rate from 2.1% to 4.8%.',
        images: [
          '/portfolio/cro-fintech.jpg',
          '/portfolio/ab-testing-results.jpg',
          '/portfolio/heatmap-analysis.jpg',
        ],
        client: 'PayFlow Financial Services',
        technologies: ['Google Optimize', 'Hotjar', 'Crazy Egg', 'Mixpanel'],
        slug: 'fintech-cro-optimization',
        category: 'Managed Service & Optimization',
      },
      {
        id: '6',
        title: '24/7 Managed Services for Healthcare Portal',
        description: 'Provided round-the-clock monitoring, security updates, performance optimization, and technical support for a critical healthcare patient portal serving 50,000+ users.',
        images: [
          '/portfolio/healthcare-portal.jpg',
          '/portfolio/monitoring-dashboard.jpg',
        ],
        client: 'MediCare Health Systems',
        technologies: ['AWS CloudWatch', 'New Relic', 'PagerDuty', 'Docker', 'Kubernetes'],
        slug: 'healthcare-managed-services',
        category: 'Managed Service & Optimization',
      },
    ],
    blog: [
      {
        id: '1',
        title: 'Building High-Converting Landing Pages: A Complete Guide',
        slug: 'building-high-converting-landing-pages',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        excerpt: 'Learn the proven strategies and best practices for creating landing pages that convert visitors into customers, with actionable tips for design, copywriting, and optimization.',
        author: 'Sarah Mitchell',
        date: '2026-01-12',
        featuredImage: '/blog/landing-page-guide.jpg',
        tags: ['Website Development', 'Landing Pages', 'CRO', 'Conversion Optimization'],
      },
      {
        id: '2',
        title: 'Ecommerce Website Best Practices for 2026',
        slug: 'ecommerce-website-best-practices-2026',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel sapien ac nunc ultricies consectetur. Mauris at tortor vel nunc facilisis venenatis. Integer sed augue nec diam fermentum tincidunt ut non mauris.',
        excerpt: 'Discover the essential features and strategies for building a successful ecommerce website in 2026, from mobile optimization to personalization and seamless checkout experiences.',
        author: 'Michael Chen',
        date: '2026-01-10',
        featuredImage: '/blog/ecommerce-best-practices.jpg',
        tags: ['Website Development', 'Ecommerce', 'UX Design', 'Online Sales'],
      },
      {
        id: '3',
        title: 'Google Ads Strategy: Maximizing ROI with Performance Max Campaigns',
        slug: 'google-ads-performance-max-strategy',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur leo. In hac habitasse platea dictumst. Aliquam erat volutpat.',
        excerpt: 'Master Google Ads Performance Max campaigns with this comprehensive guide covering setup, optimization strategies, and best practices for maximizing ROI across all Google advertising channels.',
        author: 'David Rodriguez',
        date: '2026-01-08',
        featuredImage: '/blog/google-ads-performance-max.jpg',
        tags: ['Digital Marketing', 'Google Ads', 'PPC', 'Performance Max', 'ROI'],
      },
      {
        id: '4',
        title: 'Facebook Ads Targeting: Advanced Audience Strategies for 2026',
        slug: 'facebook-ads-targeting-strategies-2026',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.',
        excerpt: 'Navigate the evolving Facebook advertising landscape with advanced targeting strategies, creative testing frameworks, and optimization techniques that drive results in 2026.',
        author: 'Emily Thompson',
        date: '2026-01-06',
        featuredImage: '/blog/facebook-ads-targeting.jpg',
        tags: ['Digital Marketing', 'Facebook Ads', 'Social Media Marketing', 'Audience Targeting'],
      },
      {
        id: '5',
        title: 'Conversion Rate Optimization: Data-Driven Strategies That Work',
        slug: 'conversion-rate-optimization-strategies',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod, nunc sit amet aliquam lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc sit amet aliquam lacinia.',
        excerpt: 'Transform your website\'s performance with proven conversion rate optimization strategies, including user research methods, A/B testing frameworks, and high-impact optimization opportunities.',
        author: 'Sarah Mitchell',
        date: '2026-01-04',
        featuredImage: '/blog/conversion-optimization.jpg',
        tags: ['Optimization', 'CRO', 'A/B Testing', 'User Experience', 'Analytics'],
      },
      {
        id: '6',
        title: 'Why 24/7 Website Monitoring and Support Matters',
        slug: 'importance-of-247-website-monitoring',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel risus commodo, viverra nisl vel, tincidunt nunc. Sed euismod, nunc sit amet aliquam lacinia, nisl nisl aliquam nisl.',
        excerpt: 'Discover why continuous website monitoring and round-the-clock technical support are essential for business success, with real-world examples and cost-benefit analysis.',
        author: 'Michael Chen',
        date: '2026-01-02',
        featuredImage: '/blog/247-monitoring.jpg',
        tags: ['Managed Services', '24/7 Support', 'Website Monitoring', 'DevOps', 'Uptime'],
      },
      {
        id: '7',
        title: 'The Complete Guide to Website Performance Optimization',
        slug: 'website-performance-optimization-guide',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel sapien elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur leo, sed aliquam nunc.',
        excerpt: 'Master website performance optimization with this complete guide covering Core Web Vitals, optimization strategies, tools, and best practices for creating lightning-fast web experiences.',
        author: 'David Rodriguez',
        date: '2025-12-30',
        featuredImage: '/blog/performance-optimization.jpg',
        tags: ['Website Development', 'Performance', 'Core Web Vitals', 'Optimization', 'SEO'],
      },
      {
        id: '8',
        title: 'Building Scalable Ecommerce Platforms: Technical Considerations',
        slug: 'scalable-ecommerce-platform-architecture',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam tempus mollis. Sed nisi.',
        excerpt: 'Learn the technical architecture and best practices for building ecommerce platforms that scale effortlessly from startup to enterprise, covering databases, caching, security, and more.',
        author: 'Emily Thompson',
        date: '2025-12-28',
        featuredImage: '/blog/scalable-ecommerce.jpg',
        tags: ['Website Development', 'Ecommerce', 'Scalability', 'Architecture', 'Technical'],
      },
    ],
    testimonials: [
      {
        id: '1',
        clientName: 'Jennifer Martinez',
        company: 'CloudTech Solutions (SaaS)',
        quote: 'HNSolutions built us a landing page that increased our signups by 245% in just 3 months. Their attention to conversion optimization and user experience is exceptional. The project was delivered on time, and they provided excellent ongoing support.',
        photo: '/testimonials/jennifer-martinez.jpg',
        rating: 5,
      },
      {
        id: '2',
        clientName: 'Robert Chen',
        company: 'Luxe Fashion Co. (Ecommerce)',
        quote: 'We needed a complete ecommerce platform that could scale with our growing business. HNSolutions delivered beyond our expectations—the site is fast, beautiful, and has generated over $2M in sales in the first year. Their technical expertise is world-class.',
        photo: '/testimonials/robert-chen.jpg',
        rating: 5,
      },
      {
        id: '3',
        clientName: 'Amanda Stevens',
        company: 'Enterprise Software Group (B2B)',
        quote: 'The Google Ads campaign managed by HNSolutions generated 450+ qualified leads with a 180% ROI in just 6 months. Their data-driven approach and transparent reporting made them a true partner in our growth. I cannot recommend them highly enough.',
        photo: '/testimonials/amanda-stevens.jpg',
        rating: 5,
      },
      {
        id: '4',
        clientName: 'Marcus Thompson',
        company: 'Wellness & Beauty Brand',
        quote: 'HNSolutions completely transformed our social media advertising. They achieved a 5.2x ROAS on our Facebook and Instagram campaigns while reducing our cost per acquisition by 30%. Their creative testing and audience targeting strategies are incredibly effective.',
        photo: '/testimonials/marcus-thompson.jpg',
        rating: 5,
      },
      {
        id: '5',
        clientName: 'Lisa Park',
        company: 'PayFlow Financial Services (Fintech)',
        quote: 'The CRO program implemented by HNSolutions more than doubled our conversion rate from 2.1% to 4.8%. Their systematic approach to testing and optimization, combined with deep user research, unlocked revenue we didn\'t know we were leaving on the table.',
        photo: '/testimonials/lisa-park.jpg',
        rating: 5,
      },
      {
        id: '6',
        clientName: 'Dr. James Wilson',
        company: 'MediCare Health Systems',
        quote: 'Our patient portal serves 50,000+ users and requires 24/7 uptime. HNSolutions\' managed services team provides exceptional monitoring, rapid issue resolution, and proactive optimization. We\'ve had 99.98% uptime since partnering with them. True peace of mind.',
        photo: '/testimonials/james-wilson.jpg',
        rating: 5,
      },
      {
        id: '7',
        clientName: 'Sofia Rodriguez',
        company: 'GreenLife Organic Foods (Ecommerce)',
        quote: 'From website development to digital marketing to ongoing optimization, HNSolutions has been our complete digital partner. They understand our business goals and consistently deliver results that drive growth. Their team feels like an extension of our company.',
        photo: '/testimonials/sofia-rodriguez.jpg',
        rating: 5,
      },
      {
        id: '8',
        clientName: 'David Kim',
        company: 'TechVentures Capital',
        quote: 'We\'ve worked with many agencies, but HNSolutions stands out for their combination of technical excellence and business acumen. They don\'t just execute—they think strategically about how digital initiatives drive business outcomes. Exceptional partner.',
        photo: '/testimonials/david-kim.jpg',
        rating: 5,
      },
    ],
    team: [
      {
        id: '1',
        name: 'Huy Nguyen',
        role: 'CEO & Founder',
        bio: 'Visionary leader with 15+ years of experience building scalable web applications and driving digital transformation. Passionate about leveraging technology to solve real business problems and create measurable impact.',
        photo: '/team/huy-nguyen.jpg',
        socialLinks: {
          linkedin: 'https://linkedin.com/in/huynguyen',
          twitter: 'https://twitter.com/huynguyen',
        },
      },
      {
        id: '2',
        name: 'Sarah Mitchell',
        role: 'Head of Web Development',
        bio: 'Full-stack architect specializing in high-performance ecommerce platforms and conversion-optimized landing pages. Expert in Next.js, React, and scalable cloud infrastructure. Led development of 50+ successful web projects.',
        photo: '/team/sarah-mitchell.jpg',
        socialLinks: {
          linkedin: 'https://linkedin.com/in/sarahmitchell',
          github: 'https://github.com/sarahmitchell',
        },
      },
      {
        id: '3',
        name: 'David Rodriguez',
        role: 'Director of Digital Marketing',
        bio: 'Performance marketing expert with proven track record managing $10M+ in annual ad spend across Google Ads, Facebook Ads, and other platforms. Specializes in data-driven strategies that maximize ROI and scale profitably.',
        photo: '/team/david-rodriguez.jpg',
        socialLinks: {
          linkedin: 'https://linkedin.com/in/davidrodriguez',
          twitter: 'https://twitter.com/davidrodriguez',
        },
      },
      {
        id: '4',
        name: 'Emily Thompson',
        role: 'CRO & Analytics Lead',
        bio: 'Conversion optimization specialist and data analyst with expertise in user behavior analysis, A/B testing, and UX research. Increased conversion rates by an average of 127% across client portfolio through systematic experimentation.',
        photo: '/team/emily-thompson.jpg',
        socialLinks: {
          linkedin: 'https://linkedin.com/in/emilythompson',
        },
      },
      {
        id: '5',
        name: 'Michael Chen',
        role: 'Head of Managed Services',
        bio: 'DevOps and infrastructure specialist with 12+ years experience in 24/7 monitoring, performance optimization, and scalability planning. Expert in AWS, Docker, Kubernetes, and ensuring 99.9%+ uptime for mission-critical applications.',
        photo: '/team/michael-chen.jpg',
        socialLinks: {
          linkedin: 'https://linkedin.com/in/michaelchen',
          github: 'https://github.com/michaelchen',
        },
      },
      {
        id: '6',
        name: 'Jessica Park',
        role: 'Senior UX/UI Designer',
        bio: 'Award-winning designer focused on creating beautiful, intuitive interfaces that drive conversions. Combines aesthetic excellence with data-driven design decisions. Expert in user research, wireframing, and visual design.',
        photo: '/team/jessica-park.jpg',
        socialLinks: {
          linkedin: 'https://linkedin.com/in/jessicapark',
          twitter: 'https://twitter.com/jessicapark',
        },
      },
    ],
  },
  vn: {
    services: [
      {
        id: '1',
        title: 'Phát Triển Website',
        description: 'Xây dựng website mạnh mẽ, có khả năng mở rộng và tập trung vào chuyển đổi, được tùy chỉnh theo mục tiêu kinh doanh của bạn với công nghệ tiên tiến và phương pháp đã được chứng minh.',
        icon: '🌐',
        features: [
          'Phát Triển Landing Page',
          'Giải Pháp Thương Mại Điện Tử',
          'Ứng Dụng Web Tùy Chỉnh',
          'Thiết Kế Responsive & Mobile-First',
          'Tối Ưu Hiệu Suất',
          'Kiến Trúc Thân Thiện SEO',
        ],
        slug: 'website-development',
      },
      {
        id: '2',
        title: 'Marketing Kỹ Thuật Số',
        description: 'Chiến lược marketing kỹ thuật số dựa trên dữ liệu mang lại kết quả có thể đo lường thông qua các chiến dịch có mục tiêu, thông tin chi tiết về đối tượng và tối ưu hóa liên tục.',
        icon: '📊',
        features: [
          'Quản Lý Google Ads',
          'Quảng Cáo Facebook & Instagram',
          'Marketing Công Cụ Tìm Kiếm (SEM)',
          'Marketing Mạng Xã Hội',
          'Theo Dõi Phân Tích & ROI',
          'Chiến Lược Chiến Dịch Đa Kênh',
        ],
        slug: 'digital-marketing',
      },
      {
        id: '3',
        title: 'Dịch Vụ Quản Lý & Tối Ưu',
        description: 'Hỗ trợ liên tục, giám sát và cải tiến không ngừng để đảm bảo tài sản kỹ thuật số của bạn hoạt động ở mức cao nhất và mang lại giá trị tối đa.',
        icon: '⚙️',
        features: [
          'Tối Ưu Tỷ Lệ Chuyển Đổi (CRO)',
          'Giám Sát & Hỗ Trợ 24/7',
          'Phân Tích Hiệu Suất',
          'Thử Nghiệm A/B',
          'Bảo Mật & Bảo Trì',
          'Lập Kế Hoạch Mở Rộng',
        ],
        slug: 'managed-service-optimization',
      },
    ],
    portfolio: [
      {
        id: '1',
        title: 'Landing Page Chuyển Đổi Cao Cho Startup SaaS',
        description: 'Thiết kế và phát triển landing page tối ưu hóa chuyển đổi đã tăng số lượng đăng ký 245% trong 3 tháng. Bao gồm phần hero được thử nghiệm A/B, tích hợp bằng chứng xã hội và kết nối CRM liền mạch.',
        images: [
          '/portfolio/landing-page-saas.jpg',
          '/portfolio/landing-page-saas-mobile.jpg',
          '/portfolio/landing-page-analytics.jpg',
        ],
        client: 'CloudTech Solutions',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Google Analytics', 'HubSpot'],
        slug: 'saas-landing-page',
        category: 'Phát Triển Website',
      },
      {
        id: '2',
        title: 'Nền Tảng Thương Mại Điện Tử Quy Mô Lớn Cho Nhà Bán Lẻ Thời Trang',
        description: 'Xây dựng giải pháp thương mại điện tử hoàn chỉnh với tích hợp cổng thanh toán, quản lý kho, đánh giá khách hàng và công cụ đề xuất cá nhân hóa. Đạt doanh thu hơn 2 triệu đô la trong năm đầu tiên.',
        images: [
          '/portfolio/ecommerce-fashion.jpg',
          '/portfolio/ecommerce-dashboard.jpg',
          '/portfolio/ecommerce-mobile.jpg',
        ],
        client: 'Luxe Fashion Co.',
        technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis', 'AWS S3'],
        slug: 'fashion-ecommerce-platform',
        category: 'Phát Triển Website',
      },
      {
        id: '3',
        title: 'Chiến Dịch Google Ads Cho Tạo Khách Hàng Tiềm Năng B2B',
        description: 'Quản lý chiến lược Google Ads toàn diện trên các chiến dịch Tìm kiếm, Hiển thị và Performance Max. Tạo ra hơn 450 khách hàng tiềm năng đủ điều kiện với ROI 180% trong 6 tháng.',
        images: [
          '/portfolio/google-ads-dashboard.jpg',
          '/portfolio/google-ads-performance.jpg',
        ],
        client: 'Enterprise Software Group',
        technologies: ['Google Ads', 'Google Tag Manager', 'Google Analytics 4', 'Looker Studio'],
        slug: 'b2b-google-ads-campaign',
        category: 'Marketing Kỹ Thuật Số',
      },
      {
        id: '4',
        title: 'Chiến Dịch Mạng Xã Hội Đa Kênh',
        description: 'Thực hiện các chiến dịch quảng cáo Facebook và Instagram dựa trên dữ liệu với nhắm mục tiêu đối tượng chính xác, tối ưu hóa sáng tạo và phễu retargeting. Đạt ROAS 5.2x và CPA thấp hơn 30%.',
        images: [
          '/portfolio/social-media-campaign.jpg',
          '/portfolio/facebook-ads-results.jpg',
          '/portfolio/instagram-creatives.jpg',
        ],
        client: 'Wellness & Beauty Brand',
        technologies: ['Facebook Ads Manager', 'Meta Pixel', 'Hotjar', 'Canva'],
        slug: 'social-media-marketing-campaign',
        category: 'Marketing Kỹ Thuật Số',
      },
      {
        id: '5',
        title: 'CRO & Tối Ưu Cho Nền Tảng Fintech',
        description: 'Chương trình tối ưu hóa tỷ lệ chuyển đổi toàn diện bao gồm phân tích hành vi người dùng, heatmapping, thử nghiệm A/B và cải tiến UX. Tăng tỷ lệ chuyển đổi từ 2.1% lên 4.8%.',
        images: [
          '/portfolio/cro-fintech.jpg',
          '/portfolio/ab-testing-results.jpg',
          '/portfolio/heatmap-analysis.jpg',
        ],
        client: 'PayFlow Financial Services',
        technologies: ['Google Optimize', 'Hotjar', 'Crazy Egg', 'Mixpanel'],
        slug: 'fintech-cro-optimization',
        category: 'Dịch Vụ Quản Lý & Tối Ưu',
      },
      {
        id: '6',
        title: 'Dịch Vụ Quản Lý 24/7 Cho Cổng Thông Tin Y Tế',
        description: 'Cung cấp giám sát 24/7, cập nhật bảo mật, tối ưu hóa hiệu suất và hỗ trợ kỹ thuật cho cổng thông tin bệnh nhân y tế quan trọng phục vụ hơn 50.000 người dùng.',
        images: [
          '/portfolio/healthcare-portal.jpg',
          '/portfolio/monitoring-dashboard.jpg',
        ],
        client: 'MediCare Health Systems',
        technologies: ['AWS CloudWatch', 'New Relic', 'PagerDuty', 'Docker', 'Kubernetes'],
        slug: 'healthcare-managed-services',
        category: 'Dịch Vụ Quản Lý & Tối Ưu',
      },
    ],
    blog: [
      {
        id: '1',
        title: 'Xây Dựng Landing Page Chuyển Đổi Cao: Hướng Dẫn Đầy Đủ',
        slug: 'building-high-converting-landing-pages',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        excerpt: 'Tìm hiểu các chiến lược và phương pháp hay nhất đã được chứng minh để tạo landing page chuyển đổi khách truy cập thành khách hàng, với các mẹo hành động về thiết kế, copywriting và tối ưu hóa.',
        author: 'Sarah Mitchell',
        date: '2026-01-12',
        featuredImage: '/blog/landing-page-guide.jpg',
        tags: ['Phát Triển Website', 'Landing Page', 'CRO', 'Tối Ưu Chuyển Đổi'],
      },
      {
        id: '2',
        title: 'Thực Hành Tốt Nhất Cho Website Thương Mại Điện Tử Năm 2026',
        slug: 'ecommerce-website-best-practices-2026',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel sapien ac nunc ultricies consectetur. Mauris at tortor vel nunc facilisis venenatis.',
        excerpt: 'Khám phá các tính năng và chiến lược thiết yếu để xây dựng website thương mại điện tử thành công vào năm 2026, từ tối ưu hóa di động đến cá nhân hóa và trải nghiệm thanh toán liền mạch.',
        author: 'Michael Chen',
        date: '2026-01-10',
        featuredImage: '/blog/ecommerce-best-practices.jpg',
        tags: ['Phát Triển Website', 'Thương Mại Điện Tử', 'Thiết Kế UX', 'Bán Hàng Trực Tuyến'],
      },
      {
        id: '3',
        title: 'Chiến Lược Google Ads: Tối Đa Hóa ROI Với Chiến Dịch Performance Max',
        slug: 'google-ads-performance-max-strategy',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur leo. In hac habitasse platea dictumst.',
        excerpt: 'Làm chủ chiến dịch Google Ads Performance Max với hướng dẫn toàn diện này bao gồm thiết lập, chiến lược tối ưu hóa và phương pháp hay nhất để tối đa hóa ROI trên tất cả các kênh quảng cáo của Google.',
        author: 'David Rodriguez',
        date: '2026-01-08',
        featuredImage: '/blog/google-ads-performance-max.jpg',
        tags: ['Marketing Kỹ Thuật Số', 'Google Ads', 'PPC', 'Performance Max', 'ROI'],
      },
      {
        id: '4',
        title: 'Nhắm Mục Tiêu Facebook Ads: Chiến Lược Đối Tượng Nâng Cao Năm 2026',
        slug: 'facebook-ads-targeting-strategies-2026',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.',
        excerpt: 'Điều hướng bối cảnh quảng cáo Facebook đang phát triển với các chiến lược nhắm mục tiêu nâng cao, khung thử nghiệm sáng tạo và kỹ thuật tối ưu hóa mang lại kết quả vào năm 2026.',
        author: 'Emily Thompson',
        date: '2026-01-06',
        featuredImage: '/blog/facebook-ads-targeting.jpg',
        tags: ['Marketing Kỹ Thuật Số', 'Facebook Ads', 'Marketing Mạng Xã Hội', 'Nhắm Mục Tiêu Đối Tượng'],
      },
      {
        id: '5',
        title: 'Tối Ưu Tỷ Lệ Chuyển Đổi: Chiến Lược Dựa Trên Dữ Liệu Hiệu Quả',
        slug: 'conversion-rate-optimization-strategies',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod, nunc sit amet aliquam lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl.',
        excerpt: 'Chuyển đổi hiệu suất website của bạn với các chiến lược tối ưu hóa tỷ lệ chuyển đổi đã được chứng minh, bao gồm các phương pháp nghiên cứu người dùng, khung thử nghiệm A/B và cơ hội tối ưu hóa tác động cao.',
        author: 'Sarah Mitchell',
        date: '2026-01-04',
        featuredImage: '/blog/conversion-optimization.jpg',
        tags: ['Tối Ưu', 'CRO', 'Thử Nghiệm A/B', 'Trải Nghiệm Người Dùng', 'Phân Tích'],
      },
      {
        id: '6',
        title: 'Tại Sao Giám Sát Và Hỗ Trợ Website 24/7 Quan Trọng',
        slug: 'importance-of-247-website-monitoring',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel risus commodo, viverra nisl vel, tincidunt nunc. Sed euismod, nunc sit amet aliquam lacinia.',
        excerpt: 'Khám phá tại sao giám sát website liên tục và hỗ trợ kỹ thuật 24/7 là điều cần thiết cho thành công kinh doanh, với các ví dụ thực tế và phân tích chi phí-lợi ích.',
        author: 'Michael Chen',
        date: '2026-01-02',
        featuredImage: '/blog/247-monitoring.jpg',
        tags: ['Dịch Vụ Quản Lý', 'Hỗ Trợ 24/7', 'Giám Sát Website', 'DevOps', 'Thời Gian Hoạt Động'],
      },
      {
        id: '7',
        title: 'Hướng Dẫn Đầy Đủ Về Tối Ưu Hóa Hiệu Suất Website',
        slug: 'website-performance-optimization-guide',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel sapien elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur leo.',
        excerpt: 'Làm chủ tối ưu hóa hiệu suất website với hướng dẫn đầy đủ này bao gồm Core Web Vitals, chiến lược tối ưu hóa, công cụ và phương pháp hay nhất để tạo ra trải nghiệm web cực nhanh.',
        author: 'David Rodriguez',
        date: '2025-12-30',
        featuredImage: '/blog/performance-optimization.jpg',
        tags: ['Phát Triển Website', 'Hiệu Suất', 'Core Web Vitals', 'Tối Ưu', 'SEO'],
      },
      {
        id: '8',
        title: 'Xây Dựng Nền Tảng Thương Mại Điện Tử Có Khả Năng Mở Rộng: Các Cân Nhắc Kỹ Thuật',
        slug: 'scalable-ecommerce-platform-architecture',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam tempus mollis.',
        excerpt: 'Tìm hiểu kiến trúc kỹ thuật và phương pháp hay nhất để xây dựng nền tảng thương mại điện tử mở rộng dễ dàng từ startup đến doanh nghiệp, bao gồm cơ sở dữ liệu, caching, bảo mật và nhiều hơn nữa.',
        author: 'Emily Thompson',
        date: '2025-12-28',
        featuredImage: '/blog/scalable-ecommerce.jpg',
        tags: ['Phát Triển Website', 'Thương Mại Điện Tử', 'Khả Năng Mở Rộng', 'Kiến Trúc', 'Kỹ Thuật'],
      },
    ],
    testimonials: [
      {
        id: '1',
        clientName: 'Jennifer Martinez',
        company: 'CloudTech Solutions (SaaS)',
        quote: 'HNSolutions đã xây dựng cho chúng tôi một landing page tăng số lượng đăng ký 245% chỉ trong 3 tháng. Sự chú ý của họ đến tối ưu hóa chuyển đổi và trải nghiệm người dùng là đặc biệt. Dự án được giao đúng hạn và họ cung cấp hỗ trợ liên tục tuyệt vời.',
        photo: '/testimonials/jennifer-martinez.jpg',
        rating: 5,
      },
      {
        id: '2',
        clientName: 'Robert Chen',
        company: 'Luxe Fashion Co. (Thương Mại Điện Tử)',
        quote: 'Chúng tôi cần một nền tảng thương mại điện tử hoàn chỉnh có thể mở rộng cùng với doanh nghiệp đang phát triển của chúng tôi. HNSolutions đã cung cấp vượt quá mong đợi của chúng tôi—trang web nhanh, đẹp và đã tạo ra hơn 2 triệu đô la doanh số trong năm đầu tiên. Chuyên môn kỹ thuật của họ là đẳng cấp thế giới.',
        photo: '/testimonials/robert-chen.jpg',
        rating: 5,
      },
      {
        id: '3',
        clientName: 'Amanda Stevens',
        company: 'Enterprise Software Group (B2B)',
        quote: 'Chiến dịch Google Ads được quản lý bởi HNSolutions đã tạo ra hơn 450 khách hàng tiềm năng đủ điều kiện với ROI 180% chỉ trong 6 tháng. Phương pháp dựa trên dữ liệu và báo cáo minh bạch của họ đã biến họ thành đối tác thực sự trong sự phát triển của chúng tôi. Tôi không thể giới thiệu họ đủ.',
        photo: '/testimonials/amanda-stevens.jpg',
        rating: 5,
      },
      {
        id: '4',
        clientName: 'Marcus Thompson',
        company: 'Wellness & Beauty Brand',
        quote: 'HNSolutions đã hoàn toàn chuyển đổi quảng cáo truyền thông xã hội của chúng tôi. Họ đạt được ROAS 5.2x trên các chiến dịch Facebook và Instagram của chúng tôi trong khi giảm chi phí mỗi mua hàng 30%. Chiến lược thử nghiệm sáng tạo và nhắm mục tiêu đối tượng của họ cực kỳ hiệu quả.',
        photo: '/testimonials/marcus-thompson.jpg',
        rating: 5,
      },
      {
        id: '5',
        clientName: 'Lisa Park',
        company: 'PayFlow Financial Services (Fintech)',
        quote: 'Chương trình CRO được triển khai bởi HNSolutions đã tăng gấp đôi tỷ lệ chuyển đổi của chúng tôi từ 2.1% lên 4.8%. Phương pháp có hệ thống của họ đối với thử nghiệm và tối ưu hóa, kết hợp với nghiên cứu người dùng sâu, đã mở khóa doanh thu mà chúng tôi không biết chúng tôi đang để lại trên bàn.',
        photo: '/testimonials/lisa-park.jpg',
        rating: 5,
      },
      {
        id: '6',
        clientName: 'Dr. James Wilson',
        company: 'MediCare Health Systems',
        quote: 'Cổng thông tin bệnh nhân của chúng tôi phục vụ hơn 50.000 người dùng và yêu cầu thời gian hoạt động 24/7. Nhóm dịch vụ quản lý của HNSolutions cung cấp giám sát đặc biệt, giải quyết vấn đề nhanh chóng và tối ưu hóa chủ động. Chúng tôi đã có 99.98% thời gian hoạt động kể từ khi hợp tác với họ. Yên tâm thực sự.',
        photo: '/testimonials/james-wilson.jpg',
        rating: 5,
      },
      {
        id: '7',
        clientName: 'Sofia Rodriguez',
        company: 'GreenLife Organic Foods (Thương Mại Điện Tử)',
        quote: 'Từ phát triển website đến marketing kỹ thuật số đến tối ưu hóa liên tục, HNSolutions đã là đối tác kỹ thuật số hoàn chỉnh của chúng tôi. Họ hiểu mục tiêu kinh doanh của chúng tôi và liên tục cung cấp kết quả thúc đẩy tăng trưởng. Nhóm của họ cảm thấy như một phần mở rộng của công ty chúng tôi.',
        photo: '/testimonials/sofia-rodriguez.jpg',
        rating: 5,
      },
      {
        id: '8',
        clientName: 'David Kim',
        company: 'TechVentures Capital',
        quote: 'Chúng tôi đã làm việc với nhiều agency, nhưng HNSolutions nổi bật với sự kết hợp giữa xuất sắc kỹ thuật và kinh nghiệm kinh doanh. Họ không chỉ thực thi—họ suy nghĩ chiến lược về cách các sáng kiến kỹ thuật số thúc đẩy kết quả kinh doanh. Đối tác đặc biệt.',
        photo: '/testimonials/david-kim.jpg',
        rating: 5,
      },
    ],
    team: [
      {
        id: '1',
        name: 'Huy Nguyen',
        role: 'CEO & Nhà Sáng Lập',
        bio: 'Lãnh đạo có tầm nhìn với hơn 15 năm kinh nghiệm xây dựng ứng dụng web có khả năng mở rộng và thúc đẩy chuyển đổi kỹ thuật số.',
        photo: '/team/huy-nguyen.jpg',
        socialLinks: {
          linkedin: 'https://linkedin.com/in/huynguyen',
          twitter: 'https://twitter.com/huynguyen',
        },
      },
      {
        id: '2',
        name: 'Sarah Mitchell',
        role: 'Trưởng Phòng Phát Triển Web',
        bio: 'Kiến trúc sư full-stack chuyên về nền tảng thương mại điện tử hiệu suất cao và landing page tối ưu chuyển đổi.',
        photo: '/team/sarah-mitchell.jpg',
        socialLinks: {
          linkedin: 'https://linkedin.com/in/sarahmitchell',
          github: 'https://github.com/sarahmitchell',
        },
      },
      {
        id: '3',
        name: 'David Rodriguez',
        role: 'Giám Đốc Marketing Kỹ Thuật Số',
        bio: 'Chuyên gia marketing hiệu suất với thành tích đã được chứng minh quản lý hơn 10 triệu đô la chi tiêu quảng cáo hàng năm.',
        photo: '/team/david-rodriguez.jpg',
        socialLinks: {
          linkedin: 'https://linkedin.com/in/davidrodriguez',
          twitter: 'https://twitter.com/davidrodriguez',
        },
      },
      {
        id: '4',
        name: 'Emily Thompson',
        role: 'Trưởng Phòng CRO & Phân Tích',
        bio: 'Chuyên gia tối ưu hóa chuyển đổi và phân tích dữ liệu với chuyên môn trong phân tích hành vi người dùng và thử nghiệm A/B.',
        photo: '/team/emily-thompson.jpg',
        socialLinks: {
          linkedin: 'https://linkedin.com/in/emilythompson',
        },
      },
      {
        id: '5',
        name: 'Michael Chen',
        role: 'Trưởng Phòng Dịch Vụ Quản Lý',
        bio: 'Chuyên gia DevOps và cơ sở hạ tầng với hơn 12 năm kinh nghiệm trong giám sát 24/7 và tối ưu hóa hiệu suất.',
        photo: '/team/michael-chen.jpg',
        socialLinks: {
          linkedin: 'https://linkedin.com/in/michaelchen',
          github: 'https://github.com/michaelchen',
        },
      },
      {
        id: '6',
        name: 'Jessica Park',
        role: 'Nhà Thiết Kế UX/UI Cấp Cao',
        bio: 'Nhà thiết kế đoạt giải thưởng tập trung vào tạo ra giao diện đẹp, trực quan thúc đẩy chuyển đổi.',
        photo: '/team/jessica-park.jpg',
        socialLinks: {
          linkedin: 'https://linkedin.com/in/jessicapark',
          twitter: 'https://twitter.com/jessicapark',
        },
      },
    ],
  },
};

export async function getServices(locale: Locale = 'en'): Promise<IService[]> {
  return content[locale].services;
}

export async function getPortfolioItems(locale: Locale = 'en'): Promise<IPortfolioItem[]> {
  return content[locale].portfolio;
}

export async function getBlogPosts(locale: Locale = 'en'): Promise<IBlogPost[]> {
  return content[locale].blog;
}

export async function getBlogPost(slug: string, locale: Locale = 'en'): Promise<IBlogPost | null> {
  const posts = content[locale].blog;
  return posts.find((post) => post.slug === slug) || null;
}

export async function getTestimonials(locale: Locale = 'en'): Promise<ITestimonial[]> {
  return content[locale].testimonials;
}

export async function getTeamMembers(locale: Locale = 'en'): Promise<ITeamMember[]> {
  return content[locale].team;
}

export async function getPage(slug: string): Promise<IPage | null> {
  return {
    id: slug,
    title: 'Page Title',
    slug,
    content: 'Page content here...',
  };
}

export async function getGenericPage(
  pagePath: string,
  locale: Locale = 'en'
): Promise<IGenericPage | null> {
  const normalizedPath = pagePath === '/' || pagePath === '' ? '' : pagePath.replace(/^\//, '');

  if (normalizedPath === '') {
    const services = await getServices(locale);
    const testimonials = await getTestimonials(locale);

    return {
      _id: 'mock-home-page',
      _type: 'genericPage',
      internalName: 'Home Page',
      pagePath: '/',
      seoTitle: 'HNSolutions - IT Development & Digital Marketing Services',
      seoDescription: 'Professional IT development and digital marketing services. Build powerful websites, run effective campaigns, and optimize your digital presence.',
      seoImage: '/og-image.jpg',
      generalTranslations: {
        heroTitle: locale === 'vn' ? 'Giải Pháp Công Nghệ & Marketing Kỹ Thuật Số' : 'IT Solutions & Digital Marketing',
        heroSubtitle: locale === 'vn' ? 'Xây dựng website mạnh mẽ, chạy chiến dịch hiệu quả và tối ưu hóa sự hiện diện kỹ thuật số của bạn.' : 'Build powerful websites, run effective campaigns, and optimize your digital presence.',
        heroCta: locale === 'vn' ? 'Bắt Đầu Ngay' : 'Get Started',
        servicesTitle: locale === 'vn' ? 'Dịch Vụ Của Chúng Tôi' : 'Our Services',
        servicesSubtitle: locale === 'vn' ? 'Giải pháp toàn diện phù hợp với nhu cầu kinh doanh của bạn' : 'Comprehensive solutions tailored to your business needs',
        testimonialsTitle: locale === 'vn' ? 'Khách Hàng Nói Gì' : 'What Our Clients Say',
        testimonialsSubtitle: locale === 'vn' ? 'Phản hồi từ những khách hàng đã tin tưởng chúng tôi' : 'Feedback from clients who trust us',
      },
      blocks: [
        {
          _type: 'hero',
          _id: 'home-hero',
          internalName: 'Home Hero',
          data: {
            title: locale === 'vn' ? 'Giải Pháp Công Nghệ & Marketing Kỹ Thuật Số' : 'IT Solutions & Digital Marketing',
            subtitle: locale === 'vn' ? 'Xây dựng website mạnh mẽ, chạy chiến dịch hiệu quả và tối ưu hóa sự hiện diện kỹ thuật số của bạn.' : 'Build powerful websites, run effective campaigns, and optimize your digital presence.',
            ctaText: locale === 'vn' ? 'Bắt Đầu Ngay' : 'Get Started',
            ctaLink: '/contact',
          },
        },
        {
          _type: 'services',
          _id: 'home-services',
          internalName: 'Home Services',
          data: {
            services,
            title: locale === 'vn' ? 'Dịch Vụ Của Chúng Tôi' : 'Our Services',
            subtitle: locale === 'vn' ? 'Giải pháp toàn diện phù hợp với nhu cầu kinh doanh của bạn' : 'Comprehensive solutions tailored to your business needs',
          },
        },
        {
          _type: 'testimonials',
          _id: 'home-testimonials',
          internalName: 'Home Testimonials',
          data: {
            testimonials,
            title: locale === 'vn' ? 'Khách Hàng Nói Gì' : 'What Our Clients Say',
            subtitle: locale === 'vn' ? 'Phản hồi từ những khách hàng đã tin tưởng chúng tôi' : 'Feedback from clients who trust us',
          },
        },
      ],
    };
  }

  if (normalizedPath === 'services') {
    const services = await getServices(locale);

    return {
      _id: 'mock-services-page',
      _type: 'genericPage',
      internalName: 'Services Page',
      pagePath: '/services',
      seoTitle: 'Our Services - HNSolutions',
      seoDescription: 'Explore our comprehensive IT development and digital marketing services.',
      seoImage: '/og-image.jpg',
      generalTranslations: {
        heroTitle: locale === 'vn' ? 'Dịch Vụ' : 'Our Services',
        heroSubtitle: locale === 'vn' ? 'Giải pháp toàn diện phù hợp với nhu cầu kinh doanh của bạn' : 'Comprehensive solutions tailored to your business needs',
        ctaText: locale === 'vn' ? 'Liên Hệ Chúng Tôi' : 'Contact Us',
      },
      blocks: [
        {
          _type: 'hero',
          _id: 'services-hero',
          internalName: 'Services Hero',
          data: {
            title: locale === 'vn' ? 'Dịch Vụ' : 'Our Services',
            subtitle: locale === 'vn' ? 'Giải pháp toàn diện phù hợp với nhu cầu kinh doanh của bạn' : 'Comprehensive solutions tailored to your business needs',
          },
        },
        {
          _type: 'services',
          _id: 'services-grid',
          internalName: 'Services Grid',
          data: {
            services,
            layout: 'grid',
          },
        },
        {
          _type: 'cta',
          _id: 'services-cta',
          internalName: 'Services CTA',
          data: {
            title: locale === 'vn' ? 'Hãy Xây Dựng Điều Gì Đó Tuyệt Vời Cùng Nhau' : "Let's Build Something Amazing Together",
            description: locale === 'vn' ? 'Sẵn sàng đưa doanh nghiệp của bạn lên tầm cao mới? Liên hệ với chúng tôi ngay hôm nay.' : 'Ready to take your business to the next level? Contact us today.',
            buttonText: locale === 'vn' ? 'Liên Hệ Chúng Tôi' : 'Contact Us',
            buttonLink: '/contact',
          },
        },
      ],
    };
  }

  if (normalizedPath === 'portfolio') {
    const portfolioItems = await getPortfolioItems(locale);

    return {
      _id: 'mock-portfolio-page',
      _type: 'genericPage',
      internalName: 'Portfolio Page',
      pagePath: '/portfolio',
      seoTitle: 'Portfolio - HNSolutions',
      seoDescription: 'View our portfolio of successful projects and case studies.',
      seoImage: '/og-image.jpg',
      generalTranslations: {
        heroTitle: locale === 'vn' ? 'Portfolio' : 'Portfolio',
        heroSubtitle: locale === 'vn' ? 'Xem danh mục các dự án thành công và nghiên cứu điển hình của chúng tôi' : 'View our portfolio of successful projects and case studies',
      },
      blocks: [
        {
          _type: 'hero',
          _id: 'portfolio-hero',
          internalName: 'Portfolio Hero',
          data: {
            title: locale === 'vn' ? 'Portfolio' : 'Portfolio',
            subtitle: locale === 'vn' ? 'Xem danh mục các dự án thành công và nghiên cứu điển hình của chúng tôi' : 'View our portfolio of successful projects and case studies',
          },
        },
        {
          _type: 'portfolio',
          _id: 'portfolio-grid',
          internalName: 'Portfolio Grid',
          data: {
            items: portfolioItems,
          },
        },
      ],
    };
  }

  if (normalizedPath === 'blog') {
    const blogPosts = await getBlogPosts(locale);

    return {
      _id: 'mock-blog-page',
      _type: 'genericPage',
      internalName: 'Blog Page',
      pagePath: '/blog',
      seoTitle: 'Blog - HNSolutions',
      seoDescription: 'Insights, tips, and news about IT development and digital marketing.',
      seoImage: '/og-image.jpg',
      generalTranslations: {
        heroTitle: locale === 'vn' ? 'Blog' : 'Blog',
        heroSubtitle: locale === 'vn' ? 'Thông tin chi tiết, mẹo và tin tức về phát triển IT và marketing kỹ thuật số' : 'Insights, tips, and trends in IT and digital marketing',
      },
      blocks: [
        {
          _type: 'hero',
          _id: 'blog-hero',
          internalName: 'Blog Hero',
          data: {
            title: locale === 'vn' ? 'Blog' : 'Blog',
            subtitle: locale === 'vn' ? 'Thông tin chi tiết, mẹo và tin tức về phát triển IT và marketing kỹ thuật số' : 'Insights, tips, and trends in IT and digital marketing',
          },
        },
        {
          _type: 'blog-list',
          _id: 'blog-list',
          internalName: 'Blog List',
          data: {
            posts: blogPosts,
          },
        },
      ],
    };
  }

  if (normalizedPath.startsWith('blog/')) {
    const slug = normalizedPath.replace('blog/', '');
    const post = await getBlogPost(slug, locale);

    if (!post) {
      return null;
    }

    return {
      _id: `mock-blog-post-${slug}`,
      _type: 'genericPage',
      internalName: `Blog Post: ${post.title}`,
      pagePath: `/blog/${slug}`,
      seoTitle: `${post.title} - HNSolutions`,
      seoDescription: post.excerpt,
      seoImage: post.featuredImage,
      generalTranslations: {
        backToBlog: locale === 'vn' ? '← Quay lại Blog' : '← Back to Blog',
        authorLabel: locale === 'vn' ? 'Tác giả' : 'Author',
        dateLabel: locale === 'vn' ? 'Ngày' : 'Date',
      },
      blocks: [
        {
          _type: 'hero',
          _id: 'blog-post-hero',
          internalName: 'Blog Post Hero',
          data: {
            title: post.title,
            subtitle: post.excerpt,
            metadata: {
              author: post.author,
              date: post.date,
            },
          },
        },
        {
          _type: 'blog-post',
          _id: 'blog-post-content',
          internalName: 'Blog Post Content',
          data: {
            post,
          },
        },
      ],
    };
  }

  if (normalizedPath === 'about') {
    const teamMembers = await getTeamMembers(locale);

    return {
      _id: 'mock-about-page',
      _type: 'genericPage',
      internalName: 'About Page',
      pagePath: '/about',
      seoTitle: 'About Us - HNSolutions',
      seoDescription: 'Meet our team of experts in IT development and digital marketing.',
      seoImage: '/og-image.jpg',
      generalTranslations: {
        heroTitle: locale === 'vn' ? 'Về Chúng Tôi' : 'About Us',
        heroSubtitle: locale === 'vn' ? 'Gặp gỡ đội ngũ chuyên gia của chúng tôi về phát triển IT và marketing kỹ thuật số' : 'Meet our team of experts in IT development and digital marketing',
      },
      blocks: [
        {
          _type: 'hero',
          _id: 'about-hero',
          internalName: 'About Hero',
          data: {
            title: locale === 'vn' ? 'Về Chúng Tôi' : 'About Us',
            subtitle: locale === 'vn' ? 'Gặp gỡ đội ngũ chuyên gia của chúng tôi về phát triển IT và marketing kỹ thuật số' : 'Meet our team of experts in IT development and digital marketing',
          },
        },
        {
          _type: 'team',
          _id: 'team-grid',
          internalName: 'Team Grid',
          data: {
            members: teamMembers,
          },
        },
      ],
    };
  }

  if (normalizedPath === 'contact') {
    return {
      _id: 'mock-contact-page',
      _type: 'genericPage',
      internalName: 'Contact Page',
      pagePath: '/contact',
      seoTitle: 'Contact Us - HNSolutions',
      seoDescription: 'Get in touch with us for your IT development and digital marketing needs.',
      seoImage: '/og-image.jpg',
      generalTranslations: {
        heroTitle: locale === 'vn' ? 'Liên Hệ' : 'Contact Us',
        heroSubtitle: locale === 'vn' ? 'Liên hệ với chúng tôi cho nhu cầu phát triển IT và marketing kỹ thuật số của bạn' : 'Get in touch with us for your IT development and digital marketing needs',
      },
      blocks: [
        {
          _type: 'hero',
          _id: 'contact-hero',
          internalName: 'Contact Hero',
          data: {
            title: locale === 'vn' ? 'Liên Hệ' : 'Contact Us',
            subtitle: locale === 'vn' ? 'Liên hệ với chúng tôi cho nhu cầu phát triển IT và marketing kỹ thuật số của bạn' : 'Get in touch with us for your IT development and digital marketing needs',
          },
        },
        {
          _type: 'contact-form',
          _id: 'contact-form',
          internalName: 'Contact Form',
          data: {},
        },
      ],
    };
  }

  return null;
}
