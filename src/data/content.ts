import type {
  Language,
  PortfolioContent,
} from '../types/content'

export const content = {
  vi: {
    navigation: {
      intro: 'Giới thiệu',
      about: 'Về tôi',
      projects: 'Dự án',
      skills: 'Kỹ năng',
      education: 'Học vấn',
      contact: 'Liên hệ',
    },

    intro: {
      eyebrow: 'Portfolio',
      name: 'Nguyễn Trường Duy',
      title: 'Software Engineer',
      tagline: 'Biến những vấn đề thực tế thành sản phẩm bằng từng dòng code.',
      description:
        'Tôi xây dựng các sản phẩm phần mềm giải quyết vấn đề thực tế, với trọng tâm vào HealthTech và trí tuệ nhân tạo như AI Agent, chatbot và thị giác máy tính.',
      viewProjects: 'Khám phá thêm',
      downloadResume: 'Tải CV',
    },

    about: {
      heading: 'Về tôi',
      tagline: 'Tò mò để học hỏi, kiên trì để xây dựng và luôn sẵn sàng sửa bug.',
      description: [
        'Tôi là Nguyễn Trường Duy, một sinh viên năm cuối theo định hướng Software Engineer. Tôi quan tâm đến việc xây dựng các sản phẩm phần mềm có cấu trúc rõ ràng, dễ bảo trì và giải quyết được những vấn đề thực tế.',
        'Mục tiêu của tôi là phát triển toàn diện về frontend, backend và thiết kế hệ thống, đồng thời tích lũy kinh nghiệm làm việc trong các dự án phần mềm thực tế.',
        'Tôi đặc biệt quan tâm đến HealthTech và trí tuệ nhân tạo, bao gồm AI Agent, chatbot và Computer Vision. Tôi muốn tìm hiểu cách kết hợp những công nghệ này với kỹ thuật phần mềm để tạo ra các sản phẩm hữu ích cho người dùng.',
      ],
    },

    projects: {
      heading: 'Dự án',
      tagline: 'Mỗi dự án là một vấn đề thực tế đang chờ một lời giải tốt hơn.',
      description:
        'Ba dự án tiêu biểu thể hiện kinh nghiệm của tôi trong phát triển ứng dụng web, mobile và hệ thống quản lý dữ liệu.',
      items: [
        {
          slug: 'patient-management-dashboard',
          title: 'Web Dashboard quản lý bệnh nhân',
          summary:
            'Dashboard HealthTech hỗ trợ bác sĩ quản lý hồ sơ, theo dõi chỉ số và điều phối quá trình chăm sóc bệnh nhân.',
          description:
            'Hệ thống tập trung dữ liệu bệnh nhân trên một giao diện quản trị, giúp đội ngũ y tế theo dõi tình trạng sức khỏe, phân loại ca cần ưu tiên và cập nhật kết quả đánh giá. Dashboard được thiết kế để giảm thao tác thủ công và giúp thông tin giữa các bộ phận được đồng bộ nhất quán.',
          technologies: [
            'Python',
            'Odoo',
            'PostgreSQL',
            'Supabase',
            'Docker',
          ],
          features: [
            'Quản lý hồ sơ và lịch sử sức khỏe bệnh nhân',
            'Phân loại, ưu tiên và theo dõi trạng thái xử lý ca bệnh',
            'Tổng hợp chỉ số và báo cáo hỗ trợ bác sĩ đánh giá',
            'Đồng bộ dữ liệu với các dịch vụ HealthTech liên quan',
          ],
          challenges: [
            'Chuẩn hóa dữ liệu đến từ nhiều nguồn khác nhau',
            'Đảm bảo quyền truy cập phù hợp cho từng nhóm người dùng',
            'Thiết kế quy trình xử lý ca bệnh rõ ràng và dễ theo dõi',
          ],
          learnings: [
            'Tùy biến module và quy trình nghiệp vụ trên Odoo',
            'Thiết kế mô hình dữ liệu cho hệ thống quản lý y tế',
            'Tích hợp và đồng bộ dữ liệu giữa nhiều dịch vụ',
          ],
        },
        {
          slug: 'blood-pressure-mobile-app',
          title: 'Ứng dụng mobile quản lý huyết áp',
          summary:
            'Ứng dụng di động giúp người dùng ghi nhận huyết áp, theo dõi xu hướng sức khỏe và nhận hỗ trợ cá nhân hóa.',
          description:
            'Ứng dụng được xây dựng hướng đến người cao tuổi và người cần theo dõi huyết áp thường xuyên. Người dùng có thể nhập chỉ số hằng ngày, xem lịch sử và báo cáo, theo dõi mức độ rủi ro và trao đổi với chatbot hỗ trợ sức khỏe trên cùng một nền tảng.',
          technologies: [
            'React Native',
            'Expo',
            'TypeScript',
            'Node.js',
            'Python',
            'Supabase',
          ],
          features: [
            'Ghi nhận huyết áp và các thông tin sức khỏe liên quan',
            'Hiển thị lịch sử, thống kê và báo cáo theo thời gian',
            'Đánh giá nguy cơ dựa trên dữ liệu người dùng cung cấp',
            'Chatbot hỗ trợ giải đáp và hướng dẫn theo dõi sức khỏe',
          ],
          challenges: [
            'Thiết kế trải nghiệm đơn giản cho người dùng lớn tuổi',
            'Đồng bộ trạng thái giữa ứng dụng và các dịch vụ backend',
            'Trình bày thông tin sức khỏe rõ ràng nhưng không gây hoang mang',
          ],
          learnings: [
            'Tổ chức mã nguồn React Native theo từng tính năng',
            'Xây dựng luồng xác thực và quản lý trạng thái người dùng',
            'Tích hợp dịch vụ AI vào ứng dụng mobile',
          ],
        },
        {
          slug: 'product-management-dashboard',
          title: 'Web Dashboard quản lý sản phẩm',
          summary:
            'Dashboard quản trị giúp doanh nghiệp quản lý danh mục, tồn kho và trạng thái kinh doanh của sản phẩm.',
          description:
            'Hệ thống cung cấp một khu vực quản trị tập trung để tạo và cập nhật sản phẩm, tổ chức danh mục, kiểm soát số lượng tồn kho và theo dõi các số liệu tổng quan. Giao diện ưu tiên khả năng tìm kiếm, lọc dữ liệu và thực hiện các thao tác quản lý nhanh chóng.',
          technologies: [
            'React',
            'TypeScript',
            'Tailwind CSS',
            'Node.js',
            'Express',
            'PostgreSQL',
          ],
          features: [
            'Thêm, sửa, xóa và tìm kiếm sản phẩm',
            'Quản lý danh mục, giá bán và số lượng tồn kho',
            'Lọc và sắp xếp dữ liệu theo nhiều tiêu chí',
            'Hiển thị thống kê tổng quan trên dashboard',
          ],
          challenges: [
            'Tổ chức bảng dữ liệu lớn nhưng vẫn dễ sử dụng',
            'Đồng bộ dữ liệu sau các thao tác tạo và cập nhật',
            'Kiểm tra dữ liệu đầu vào ở cả frontend và backend',
          ],
          learnings: [
            'Xây dựng component bảng và biểu mẫu có thể tái sử dụng',
            'Thiết kế REST API cho các thao tác quản lý sản phẩm',
            'Tối ưu trải nghiệm cho giao diện quản trị',
          ],
        },
      ],
    },

    skills: {
      heading: 'Kỹ năng và công cụ',
      tagline: 'Học qua những đêm viết code và trưởng thành sau mỗi lần sửa bug.',
      description:
        'Những công nghệ tôi đã sử dụng trong các dự án phần mềm, nghiên cứu AI và quá trình phát triển hệ thống từ backend đến triển khai.',
      groups: [
        {
          title: 'Ngôn ngữ lập trình',
          items: ['Python', 'JavaScript', 'TypeScript', 'SQL'],
        },
        {
          title: 'Frontend & Mobile',
          items: ['React', 'React Native', 'Expo', 'Tailwind CSS', 'HTML', 'CSS'],
        },
        {
          title: 'Backend, ERP & Dữ liệu',
          items: [
            'Odoo',
            'FastAPI',
            'REST APIs',
            'PostgreSQL',
            'MongoDB',
            'Supabase',
            'Data Modeling',
          ],
        },
        {
          title: 'AI & Computer Vision',
          items: [
            'AI Agents',
            'Chatbots',
            'Multimodal Retrieval',
            'Vector Databases',
            'NLP',
            'T5 Fine-tuning',
            'Object Detection',
            'Model Evaluation',
          ],
        },
        {
          title: 'Công cụ phát triển & DevOps',
          items: [
            'Git',
            'GitHub',
            'Linux',
            'Docker',
            'Docker Compose',
            'GitHub Actions',
            'GitLab CI/CD',
            'Testing',
            'Debugging',
            'UAT',
          ],
        },
      ],
    },

    education: {
      tagline: 'Kiến thức bắt đầu từ giảng đường, còn sự trưởng thành đến từ từng dòng code.',
      heading: 'Học vấn',
      school: 'Đại học Quốc tế Sài Gòn',
      degree: 'Cử nhân Khoa học Máy tính',
      period: '2022 – Hiện tại',
      status: 'Sinh viên năm cuối',
      gpa: 'GPA 3.20 / 4.00',
      description:
        'Chương trình học xây dựng nền tảng về khoa học máy tính và kỹ thuật phần mềm, được củng cố qua các dự án thực tế về phát triển web, ứng dụng di động, cơ sở dữ liệu và DevOps.',
      courseworkLabel: 'Môn học liên quan',
      coursework: [
        'Lập trình hướng đối tượng',
        'Phát triển Web & Mobile',
        'Hệ quản trị cơ sở dữ liệu',
        'DevOps',
      ],
    },

    contact: {
      tagline: 'Hãy kết nối trước khi tôi bắt đầu viết thêm một dòng code!',
      heading: 'Liên hệ',
      description:
        'Tôi luôn sẵn sàng trao đổi về cơ hội Software Engineer, các dự án HealthTech và những ý tưởng ứng dụng AI vào sản phẩm thực tế.',
      ctaHeading: 'Bạn đang có một dự án hoặc cơ hội phù hợp?',
      ctaDescription:
        'Hãy gửi cho tôi một email. Tôi sẽ phản hồi sớm nhất có thể.',
      ctaButton: 'Gửi email cho tôi',
      emailLabel: 'Email',
      email: 'duyngyn1204.04@gmail.com',
      githubLabel: 'GitHub',
      githubUrl: 'https://github.com/ntdbouque',
      linkedinLabel: 'LinkedIn',
      linkedinUrl: 'https://www.linkedin.com/in/duynguyen-ai',
      footerText: 'Được xây dựng bằng React, TypeScript và Tailwind CSS.',
    },
    
  },

  en: {
    navigation: {
      intro: 'Introduction',
      about: 'About Me',
      projects: 'Projects',
      skills: 'Skills & Tools',
      education: 'Education',
      contact: 'Contact',
    },

    intro: {
      eyebrow: 'Portfolio',
      name: 'Nguyen Truong Duy',
      title: 'Software Engineer',
      tagline: 'Turning real-world problems into products, one line of code at a time.',
      description:
        'I build software products that solve real-world problems, with a focus on HealthTech and artificial intelligence, including AI agents, chatbots, and computer vision.',      
      viewProjects: 'Explore more',
      downloadResume: 'Download resume',
    },

    about: {
      heading: 'About Me',
      tagline: 'Curious enough to learn, persistent enough to build, and always ready to debug.',
      description: [
        'I am Nguyen Truong Duy, a final-year student pursuing a career as a Software Engineer. I enjoy building well-structured, maintainable software products that solve real-world problems.',
        'My goal is to strengthen my skills across frontend development, backend development, and system design while gaining practical experience through real software projects.',
        'I am particularly interested in HealthTech and artificial intelligence, including AI agents, chatbots, and computer vision. I want to explore how these technologies can be combined with software engineering to create useful products for users.',
      ],
    },

    projects: {
      heading: 'Projects',
      tagline: 'Every project is a real-world problem waiting for a better solution.',
      description:
        'Three featured projects that demonstrate my experience in web, mobile, and data-management application development.',
      items: [
        {
          slug: 'patient-management-dashboard',
          title: 'Patient Management Web Dashboard',
          summary:
            'A HealthTech dashboard that helps clinicians manage records, monitor health indicators, and coordinate patient care.',
          description:
            'The system brings patient information together in one administrative interface, enabling healthcare teams to monitor health status, prioritize cases, and update assessment outcomes. It is designed to reduce manual work and keep information synchronized across services.',
          technologies: [
            'Python',
            'Odoo',
            'PostgreSQL',
            'Supabase',
            'Docker',
          ],
          features: [
            'Manage patient profiles and health histories',
            'Triage, prioritize, and track patient cases',
            'Aggregate measurements and reports for clinical review',
            'Synchronize data with related HealthTech services',
          ],
          challenges: [
            'Normalizing data received from multiple sources',
            'Providing appropriate access for different user roles',
            'Designing a clear and traceable case-management workflow',
          ],
          learnings: [
            'Customizing Odoo modules and business workflows',
            'Designing data models for healthcare management systems',
            'Integrating and synchronizing multiple services',
          ],
        },
        {
          slug: 'blood-pressure-mobile-app',
          title: 'Blood Pressure Management Mobile App',
          summary:
            'A mobile application for recording blood pressure, monitoring health trends, and receiving personalized support.',
          description:
            'The application is designed for older adults and people who need to monitor their blood pressure regularly. Users can record daily measurements, review histories and reports, monitor risk levels, and communicate with a health-support chatbot from one platform.',
          technologies: [
            'React Native',
            'Expo',
            'TypeScript',
            'Node.js',
            'Python',
            'Supabase',
          ],
          features: [
            'Record blood pressure and related health information',
            'Display measurement history, statistics, and reports',
            'Assess health risks using user-provided data',
            'Provide chatbot-based health guidance and support',
          ],
          challenges: [
            'Creating a simple experience for older users',
            'Synchronizing state across the app and backend services',
            'Presenting health information clearly without causing alarm',
          ],
          learnings: [
            'Organizing a React Native codebase by feature',
            'Building authentication and user-state flows',
            'Integrating AI services into a mobile application',
          ],
        },
        {
          slug: 'product-management-dashboard',
          title: 'Product Management Web Dashboard',
          summary:
            'An administration dashboard for managing product catalogs, inventory, and business status.',
          description:
            'The system provides a centralized workspace for creating and updating products, organizing categories, controlling inventory, and reviewing summary metrics. Its interface emphasizes fast search, flexible filtering, and efficient management workflows.',
          technologies: [
            'React',
            'TypeScript',
            'Tailwind CSS',
            'Node.js',
            'Express',
            'PostgreSQL',
          ],
          features: [
            'Create, update, delete, and search products',
            'Manage categories, pricing, and inventory quantities',
            'Filter and sort data using multiple criteria',
            'Display high-level statistics on the dashboard',
          ],
          challenges: [
            'Keeping large data tables easy to navigate',
            'Synchronizing data after create and update operations',
            'Validating input consistently on the frontend and backend',
          ],
          learnings: [
            'Building reusable table and form components',
            'Designing REST APIs for product-management operations',
            'Improving usability in administration interfaces',
          ],
        },
      ],
    },

    skills: {
      heading: 'Skills & Tools',
      tagline: 'Learning through late-night coding and growing with every bug fixed.',
      description:
        'Technologies I have used across software projects, AI research, and end-to-end system development—from backend implementation to deployment.',
      groups: [
        {
          title: 'Programming Languages',
          items: ['Python', 'JavaScript', 'TypeScript', 'SQL'],
        },
        {
          title: 'Frontend & Mobile',
          items: ['React', 'React Native', 'Expo', 'Tailwind CSS', 'HTML', 'CSS'],
        },
        {
          title: 'Backend, ERP & Data',
          items: [
            'Odoo',
            'FastAPI',
            'REST APIs',
            'PostgreSQL',
            'MongoDB',
            'Supabase',
            'Data Modeling',
          ],
        },
        {
          title: 'AI & Computer Vision',
          items: [
            'AI Agents',
            'Chatbots',
            'Multimodal Retrieval',
            'Vector Databases',
            'NLP',
            'T5 Fine-tuning',
            'Object Detection',
            'Model Evaluation',
          ],
        },
        {
          title: 'Development Tools & DevOps',
          items: [
            'Git',
            'GitHub',
            'Linux',
            'Docker',
            'Docker Compose',
            'GitHub Actions',
            'GitLab CI/CD',
            'Testing',
            'Debugging',
            'UAT',
          ],
        },
      ],
    },

    education: {
      tagline: 'Knowledge starts in the classroom; growth happens one line of code at a time.',
      heading: 'Education',
      school: 'The Saigon International University',
      degree: 'Bachelor of Science in Computer Science',
      period: '2022 – Present',
      status: 'Final-year student',
      gpa: 'GPA 3.20 / 4.00',
      description:
        'The program provides a foundation in computer science and software engineering, strengthened through hands-on projects in web development, mobile applications, database systems, and DevOps.',
      courseworkLabel: 'Relevant coursework',
      coursework: [
        'Object-Oriented Programming',
        'Web & Mobile Development',
        'Database Systems',
        'DevOps',
      ],
    },

    contact: {
      tagline: 'Let’s connect before I write another line of code!',
      heading: 'Contact',
      description:
        'I am open to discussing Software Engineer opportunities, HealthTech projects, and ideas that bring AI into practical products.',
      ctaHeading: 'Have a project or opportunity in mind?',
      ctaDescription:
        'Send me an email and I will get back to you as soon as possible.',
      ctaButton: 'Send me an email',
      emailLabel: 'Email',
      email: 'duyngyn1204.04@gmail.com',
      githubLabel: 'GitHub',
      githubUrl: 'https://github.com/ntdbouque',
      linkedinLabel: 'LinkedIn',
      linkedinUrl: 'https://www.linkedin.com/in/duynguyen-ai',
      footerText: 'Built with React, TypeScript, and Tailwind CSS.',
    },
  },
} satisfies Record<Language, PortfolioContent>
