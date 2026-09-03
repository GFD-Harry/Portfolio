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
      experience: 'Kinh nghiệm',
      skills: 'Kỹ năng',
      education: 'Học vấn',
      contact: 'Liên hệ',
    },

    intro: {
      eyebrow: 'Portfolio',
      name: 'Nguyễn Trường Duy - Harry Nguyễn',
      title: 'Software Engineer',
      tagline: 'Tôi là ai?',
      description:
        'Tôi là một Software Engineer tập trung vào phát triển Odoo và ERP, đồng thời có kinh nghiệm xây dựng ứng dụng web và mobile. Tôi sử dụng Python, Odoo, PostgreSQL, React, React Native, TypeScript và Docker để tạo ra những sản phẩm ổn định, dễ sử dụng và phù hợp với nhu cầu thực tế.',
      viewProjects: 'Khám phá thêm',
      downloadResume: 'Xem CV',
    },

    about: {
      heading: 'Về tôi',
      tagline: 'Biến những quy trình phức tạp thành giải pháp rõ ràng.',
      description: [
        'Tôi là một Software Engineer tập trung vào phát triển Odoo và ERP. Tôi sử dụng Python, Odoo, PostgreSQL và Docker để xây dựng, tùy chỉnh các ứng dụng hỗ trợ nhu cầu vận hành thực tế.',
        'Qua các dự án thực tế, tôi đã có kinh nghiệm phát triển module, thiết kế mô hình dữ liệu, tùy chỉnh quy trình, phân quyền và tích hợp Odoo với các ứng dụng web, mobile cùng dịch vụ backend. Tôi đang tiếp tục nâng cao khả năng phân tích yêu cầu nghiệp vụ và thiết kế hệ thống ERP.',
        'Tôi thích làm việc cùng mọi người để phân tích vấn đề và chuyển yêu cầu thành những tính năng rõ ràng, dễ bảo trì. Mục tiêu của tôi là đóng góp vào các dự án ERP thực tế và tiếp tục phát triển với vai trò Odoo Developer.',
      ],
    },

    experience: {
      heading: 'Kinh nghiệm',
      tagline:
        'Mỗi trải nghiệm là một bước tiến trong cách tôi xây dựng phần mềm tốt hơn.',
      description: 
        'Kinh nghiệm của tôi kết hợp giữa phát triển phần mềm và nghiên cứu AI. Tại HCDC, tôi tham gia phát triển một nền tảng quản lý tăng huyết áp, làm việc với các dịch vụ backend, ứng dụng mobile, Odoo và các thành phần tích hợp AI. Trong thời gian học đại học, tôi làm việc với vai trò AI Research Assistant tại AI Lab, tập trung vào việc nghiên cứu và đánh giá các giải pháp AI thông qua các dự án nghiên cứu. \n\nNhững trải nghiệm này đã giúp tôi nâng cao khả năng giải quyết vấn đề và hiểu rõ hơn cách phần mềm và AI có thể được ứng dụng vào các bài toán thực tế.',
      items: [
        {
          role: 'Software Engineer Intern',
          organization: 'Tên công ty',
          period: '12/2025 – 05/2026',
          description:
            'Tham gia phát triển hệ thống HealthTech, xây dựng API, tích hợp các dịch vụ AI và hỗ trợ đồng bộ dữ liệu giữa ứng dụng mobile, backend và hệ thống quản lý bệnh nhân.',
          isLatest: true,
        },
        {
          role: 'AI Research Assistant',
          organization: 'Đại học Quốc tế Sài Gòn',
          period: '01/2025 – 05/2025',
          description:
            'Nghiên cứu và thử nghiệm các giải pháp chatbot, multimodal retrieval và computer vision; hỗ trợ chuẩn bị dữ liệu, đánh giá mô hình và phân tích kết quả.',
        },
      ],
    },

    projects: {
      heading: 'Dự án',
      tagline: 'Mỗi dự án là một cơ hội biến ý tưởng thành giải pháp thực tế.',
      description:
        'Ba dự án tiêu biểu thể hiện kinh nghiệm của tôi trong phát triển ứng dụng web, mobile và hệ thống quản lý dữ liệu.',
      items: [
        {
          slug: 'patient-management-dashboard',
          title: 'Hệ thống quản lý và theo dõi bệnh nhân tăng huyết áp',
          summary:
            'Một hệ thống quản lý và theo dõi bệnh nhân tăng huyết áp được xây dựng trên Odoo trong khuôn khổ dự án HCDC.',
          description:
            'Hệ thống tập trung vào việc tạo ra một không gian làm việc thống nhất cho nhân viên y tế, với quy trình vận hành rõ ràng và dữ liệu nhất quán giữa dashboard và ứng dụng mobile. Dự án thể hiện khả năng tùy chỉnh Odoo, thiết kế quy trình nghiệp vụ và tích hợp nhiều thành phần trong một hệ thống thực tế.',
          organization: {
            name: 'HCDC',
            url: 'https://hcdc.vn/',
          },
          technologies: [
            'Python',
            'Odoo',
            'PostgreSQL',
            'Supabase',
            'Docker',
          ],
          features: [
            'Quản lý hồ sơ, lịch sử huyết áp và kết quả đánh giá của bệnh nhân',
            'Tiếp nhận, phân loại, ưu tiên và cập nhật trạng thái ca theo quy trình',
            'Đồng bộ dữ liệu giữa dashboard Odoo và ứng dụng mobile',
          ],
          challenges: [
            'Chuẩn hóa và duy trì dữ liệu nhất quán giữa Odoo, Supabase và ứng dụng mobile',
            'Thiết kế mô hình dữ liệu và quy trình Odoo phù hợp với nghiệp vụ theo dõi bệnh nhân',
          ],
          learnings: [
            'Phân tích yêu cầu nghiệp vụ trước khi thiết kế module và mô hình dữ liệu',
            'Tùy chỉnh model, view, phân quyền và quy trình nghiệp vụ trên Odoo',
            'Thiết kế tích hợp và kiểm tra tính nhất quán của dữ liệu giữa các hệ thống',
          ],
          githubUrl:
            'https://github.com/GFD-Harry/hcdc-blood-pressure-monitoring-management-system/tree/main/Odoo-Doctor-Dashboard',
        },
        {
          slug: 'blood-pressure-mobile-app',
          title: 'Ứng dụng di động quản lý và theo dõi huyết áp',
          summary:
            'Một ứng dụng di động hỗ trợ người dùng quản lý và theo dõi huyết áp được phát triển trong khuôn khổ dự án HCDC.',
          description:
            'Ứng dụng hướng đến việc hỗ trợ người dùng chủ động hơn trong quá trình theo dõi sức khỏe, đặc biệt đối với người cao tuổi và người cần kiểm soát huyết áp thường xuyên. Hệ thống giúp dữ liệu huyết áp được ghi nhận và theo dõi một cách liên tục, tạo nền tảng để người dùng hiểu rõ hơn về tình trạng sức khỏe của mình và hỗ trợ nhân viên y tế có thêm thông tin trong quá trình theo dõi và quản lý bệnh nhân.',
          technologies: [
            'React Native',
            'Expo',
            'TypeScript',
            'Node.js',
            'Python',
            'Supabase',
          ],
          features: [
          'Ghi nhận và quản lý dữ liệu huyết áp theo quá trình theo dõi',
          'Theo dõi biến động huyết áp và tình trạng sức khỏe theo thời gian',
          'Hỗ trợ đánh giá tình trạng và mức độ nguy cơ từ dữ liệu sức khỏe',
          'Hỗ trợ người dùng tiếp cận thông tin và hướng dẫn theo dõi sức khỏe',
          ],

          challenges: [
          'Thiết kế trải nghiệm sử dụng phù hợp với người cao tuổi và người dùng không quen công nghệ',
          'Đảm bảo dữ liệu được đồng bộ nhất quán giữa ứng dụng mobile và hệ thống quản lý của nhân viên y tế',
          'Chuyển đổi dữ liệu và kết quả đánh giá sức khỏe thành thông tin dễ hiểu đối với người dùng',
          'Tích hợp nhiều dịch vụ và thành phần backend trong cùng một luồng sử dụng ổn định',
          ],

          learnings: [
          'Thiết kế kiến trúc ứng dụng mobile theo hướng module và dễ mở rộng',
          'Xây dựng luồng quản lý dữ liệu xuyên suốt giữa mobile, backend và hệ thống quản lý',
          'Tích hợp các dịch vụ phân tích và AI vào một ứng dụng thực tế',
          'Thiết kế sản phẩm phần mềm dựa trên cả yêu cầu kỹ thuật và quy trình nghiệp vụ y tế',
          ],
          githubUrl:
            'https://github.com/GFD-Harry/hcdc-blood-pressure-monitoring-management-system/tree/main/MobileLifestyle',
        },
        {
          slug: 'product-management-dashboard',
          title: 'Hệ thống quản lý và tư vấn sản phẩm',
          summary:
            'Dashboard nội bộ được xây dựng cho một nhóm kinh doanh quy mô nhỏ nhằm hỗ trợ quản lý thông tin sản phẩm và tư vấn khách hàng hiệu quả hơn.',
          description:
            'Hệ thống tập trung dữ liệu sản phẩm vào một nơi thống nhất, giúp các thành viên dễ dàng tra cứu, cập nhật và so sánh thông tin trong quá trình làm việc. Qua đó, đội ngũ kinh doanh có thể tiếp cận thông tin sản phẩm nhanh hơn, hạn chế sai lệch dữ liệu và đưa ra tư vấn phù hợp hơn với nhu cầu của khách hàng.',
          technologies: [
            'Python',
            'Odoo',
            'Docker',
            'PostgreSQL',
          ],
          features: [
            'Quản lý và cập nhật thông tin sản phẩm tập trung',
            'Tìm kiếm, lọc và so sánh sản phẩm theo nhiều tiêu chí',
            'Hỗ trợ tra cứu thông tin nhanh trong quá trình tư vấn khách hàng'
          ],
          challenges: [
        'Tổ chức dữ liệu sản phẩm để vừa đầy đủ vừa dễ tra cứu',
        'Thiết kế luồng tìm kiếm và so sánh phù hợp với quá trình tư vấn'
          ],
          learnings: [
            'Phân tích quy trình quản lý và tư vấn sản phẩm từ nhu cầu thực tế',
            'Thiết kế mô hình dữ liệu và API phù hợp với nghiệp vụ',
            'Xây dựng giao diện quản trị tập trung vào tốc độ tra cứu và thao tác',
          ],
          githubUrl:
            'https://github.com/GFD-Harry/Product-Management',
          liveUrl: 
            'http://160.250.187.247:8069/odoo/action-82/1'
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
      githubUrl: 'https://github.com/GFD-Harry/',
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
      experience: 'Experience',
      skills: 'Skills & Tools',
      education: 'Education',
      contact: 'Contact',
    },

    intro: {
      eyebrow: 'Portfolio',
      name: 'Nguyen Truong Duy - Harry Nguyen',
      title: 'Software Engineer',
      tagline: 'Who am I?',
      description:
        'I am a Software Engineer focused on Odoo and ERP development, with experience building web and mobile applications. I use Python, Odoo, PostgreSQL, React, React Native, TypeScript, and Docker to create reliable, user-friendly software that meets practical needs.',
      viewProjects: 'Explore more',
      downloadResume: 'Get Resume',
    },

    about: {
      heading: 'About Me',
      tagline: 'Turning complex workflows into clear solutions.',
      description: [
        'I am a Software Engineer focused on Odoo and ERP development. I use Python, Odoo, PostgreSQL, and Docker to build and customize business applications that support real operational needs.',
        'Through practical projects, I have gained experience in module development, data modeling, workflow customization, access control, and integrating Odoo with web applications, mobile apps, and backend services. I am continuing to improve my understanding of business requirements and ERP system design.',
        'I enjoy working with others to analyze problems and turn requirements into clear, maintainable features. My goal is to contribute to practical ERP projects while growing as an Odoo Developer.',
      ],
    },

    experience: {
      heading: 'Experience',
      tagline:
        'Experience is built through the real problems we learn to solve.',
      description:
        'My experience combines software engineering and AI research. At HCDC, I contributed to a hypertension management platform across backend services, mobile applications, Odoo, and AI-integrated components. At university, I worked as an AI Research Assistant at the AI Lab, exploring and evaluating AI solutions through research projects. \n\nThese experiences strengthened my problem-solving skills and showed me how software and AI can be applied to real-world problems.',
      items: [
        {
          role: 'Software Engineer Intern',
          organization: 'Company name',
          period: 'Jun. 2025 – Present',
          description:
            'Contributed to a HealthTech platform by developing APIs, integrating AI services, and supporting data synchronization across the mobile application, backend services, and patient management system.',
          isLatest: true,
        },
        {
          role: 'AI Research Assistant',
          organization: 'Saigon International University',
          period: 'Jan. 2025 – May 2025',
          description:
            'Researched and evaluated chatbot, multimodal retrieval, and computer vision solutions while supporting data preparation, model evaluation, and result analysis.',
        },
      ],
    },

    projects: {
      heading: 'Projects',
      tagline: 'Every project is an opportunity to turn an idea into a practical solution.',
      description:
        'Three featured projects that demonstrate my experience in web, mobile, and data-management application development.',
      items: [
        {
        slug: 'patient-management-dashboard',
        title: 'Hypertension Patient Management and Monitoring System',
        summary:
        'An Odoo-based hypertension patient management and monitoring system developed as part of the HCDC project.',
        description:
        'The system focuses on providing healthcare staff with a unified workspace, clear operational workflows, and consistent data across the dashboard and mobile application. The project demonstrates Odoo customization, business workflow design, and the integration of multiple components into a practical software system.',
        organization: {
        name: 'HCDC',
        url: 'https://hcdc.vn/',
        },
        technologies: [
        'Python',
        'Odoo',
        'PostgreSQL',
        'Supabase',
        'Docker',
        ],
        features: [
        'Manage patient records, blood pressure history, and assessment results',
        'Receive, classify, prioritize, and update cases through a defined workflow',
        'Synchronize data between the Odoo dashboard and mobile application',
        ],
        challenges: [
        'Standardizing and maintaining consistent data across Odoo, Supabase, and the mobile application',
        'Designing Odoo data models and workflows that align with patient-monitoring operations',
        ],
        learnings: [
        'Analyzing business requirements before designing modules and data models',
        'Customizing Odoo models, views, access controls, and business workflows',
        'Designing integrations and validating data consistency across systems',
        ],
        githubUrl:
        'https://github.com/GFD-Harry/hcdc-blood-pressure-monitoring-management-system/tree/main/Odoo-Doctor-Dashboard',
        },
        {
        slug: 'blood-pressure-mobile-app',
        title: 'Blood Pressure Management and Monitoring Mobile App',
        summary:
        'A mobile application that helps users manage and monitor their blood pressure, developed as part of the HCDC project.',
        description:
        'The application is designed to help users take a more active role in monitoring their health, particularly older adults and people who need regular blood pressure monitoring. It provides a foundation for continuously recording and tracking blood pressure data, helping users better understand their health status while giving healthcare staff additional information for patient monitoring and management.',
        technologies: [
        'React Native',
        'Expo',
        'TypeScript',
        'Node.js',
        'Python',
        'Supabase',
        ],
        features: [
        'Record and manage blood pressure data throughout the monitoring process',
        'Track changes in blood pressure and health status over time',
        'Support health-status and risk assessment based on collected data',
        'Provide accessible information and guidance for blood pressure monitoring',
        ],
        challenges: [
        'Designing an accessible experience for older adults and users with limited technical familiarity',
        'Maintaining consistent data synchronization between the mobile application and healthcare management system',
        'Presenting health data and assessment results in a clear and understandable way',
        'Integrating multiple backend services into a stable end-to-end user flow',
        ],
        learnings: [
        'Designing a modular and extensible mobile application architecture',
        'Building end-to-end data flows across mobile, backend, and management systems',
        'Integrating analytics and AI services into a practical mobile application',
        'Designing software based on both technical requirements and healthcare workflows',
        ],
        githubUrl:
        'https://github.com/GFD-Harry/hcdc-blood-pressure-monitoring-management-system/tree/main/MobileLifestyle',
        },
        {
        slug: 'product-management-dashboard',
        title: 'Product Management and Consultation System',
        summary:
        'An internal system built for a small sales team to support product information management and more effective customer consultation.',
        description:
        'The system centralizes product data in a unified workspace, allowing team members to easily search, update, and compare product information during daily operations. This helps the sales team access product information faster, reduce inconsistencies, and provide recommendations that better match customer needs.',
        technologies: [
        'Python',
        'Odoo',
        'Docker',
        'PostgreSQL',
        ],
        features: [
        'Manage and update product information in a centralized system',
        'Search, filter, and compare products using multiple criteria',
        'Quickly retrieve product information during customer consultation',
        ],
        challenges: [
        'Organizing product data so that it remains comprehensive and easy to retrieve',
        'Designing search and comparison workflows that support the consultation process',
        ],
        learnings: [
        'Analyzing real-world product management and consultation workflows',
        'Designing data models and APIs that align with business requirements',
        'Building an administration interface optimized for fast information retrieval and daily operations',
        ],
        githubUrl:
        'https://github.com/GFD-Harry/Product-Management',
        liveUrl:
        'http://160.250.187.247:8069/odoo/action-82/1',
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
      githubUrl: 'https://github.com/GFD-Harry/',
      linkedinLabel: 'LinkedIn',
      linkedinUrl: 'https://www.linkedin.com/in/duynguyen-ai',
      footerText: 'Built with React, TypeScript, and Tailwind CSS.',
    },
  },
} satisfies Record<Language, PortfolioContent>
