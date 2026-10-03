import { content as softwareContent } from './content'
import type {
  Language,
  PortfolioContent,
  ProjectContent,
} from '../types/content'

export type ProfileSlug = 'software' | 'ai'

export const profileIds = {
  software: '7d9f4a2c',
  ai: 'c3b8e6f1',
} as const satisfies Record<ProfileSlug, string>

export const defaultProfileId = profileIds.software

const aiProjects: Record<Language, ProjectContent[]> = {
  vi: [
    {
      slug: 'healthcare-ai-assistant',
      title: 'Trợ lý AI hỗ trợ theo dõi sức khỏe',
      summary:
        'Trợ lý hội thoại thử nghiệm giúp giải thích dữ liệu sức khỏe và cung cấp hướng dẫn theo ngữ cảnh.',
      description:
        'Prototype kết hợp mô hình ngôn ngữ với dữ liệu sức khỏe có cấu trúc để tạo câu trả lời rõ ràng và có kiểm soát.',
      technologies: ['Python', 'FastAPI', 'LLM', 'PostgreSQL', 'Docker'],
      features: [
        'Hỏi đáp dựa trên dữ liệu theo dõi',
        'Tóm tắt thông tin thành ngôn ngữ dễ hiểu',
        'API tích hợp với ứng dụng mobile',
      ],
      challenges: [
        'Kiểm soát tính chính xác của câu trả lời',
        'Bảo vệ dữ liệu nhạy cảm trong pipeline AI',
      ],
      learnings: [
        'Thiết kế prompt và đầu ra có cấu trúc',
        'Đánh giá chất lượng theo tình huống thực tế',
      ],
    },
    {
      slug: 'multimodal-document-search',
      title: 'Tìm kiếm tài liệu đa phương thức',
      summary:
        'Hệ thống thử nghiệm tìm kiếm nội dung trong văn bản, bảng biểu và hình ảnh.',
      description:
        'Pipeline xử lý tài liệu, tạo embedding và truy xuất các đoạn liên quan để hỗ trợ hỏi đáp trên nhiều loại dữ liệu.',
      technologies: ['Python', 'FastAPI', 'Vector Database', 'OCR', 'Docker'],
      features: [
        'Nhập và phân đoạn tài liệu',
        'Tìm kiếm ngữ nghĩa trên nhiều loại nội dung',
        'Trả lời kèm nguồn tham chiếu',
      ],
      challenges: [
        'Giữ đúng ngữ cảnh giữa văn bản và hình ảnh',
        'Đánh giá độ liên quan của kết quả truy xuất',
      ],
      learnings: [
        'Thiết kế pipeline retrieval theo từng loại dữ liệu',
        'Theo dõi chất lượng bằng tập câu hỏi đánh giá',
      ],
    },
    {
      slug: 'vision-monitoring-system',
      title: 'Hệ thống giám sát bằng Computer Vision',
      summary:
        'Prototype nhận diện đối tượng và tổng hợp sự kiện từ luồng hình ảnh.',
      description:
        'Hệ thống thử nghiệm pipeline xử lý hình ảnh, nhận diện đối tượng và cung cấp kết quả qua API.',
      technologies: ['Python', 'OpenCV', 'Object Detection', 'FastAPI'],
      features: [
        'Nhận diện đối tượng trong hình ảnh',
        'Ghi nhận và tổng hợp sự kiện',
        'Cung cấp kết quả cho dashboard',
      ],
      challenges: [
        'Cân bằng độ chính xác và tốc độ suy luận',
        'Xử lý điều kiện hình ảnh không ổn định',
      ],
      learnings: [
        'Đánh giá mô hình bằng dữ liệu gần thực tế',
        'Tối ưu pipeline suy luận và hậu xử lý',
      ],
    },
  ],
  en: [
    {
      slug: 'healthcare-ai-assistant',
      title: 'Healthcare AI Assistant',
      summary:
        'An experimental assistant for explaining health data and providing contextual guidance.',
      description:
        'A prototype combining a language model with structured health data to generate clear and controlled responses.',
      technologies: ['Python', 'FastAPI', 'LLM', 'PostgreSQL', 'Docker'],
      features: [
        'Question answering grounded in monitoring data',
        'Plain-language information summaries',
        'API integration with a mobile application',
      ],
      challenges: [
        'Controlling response accuracy',
        'Protecting sensitive data in the AI pipeline',
      ],
      learnings: [
        'Designing prompts and structured outputs',
        'Evaluating quality with realistic scenarios',
      ],
    },
    {
      slug: 'multimodal-document-search',
      title: 'Multimodal Document Search',
      summary:
        'An experimental search system for text, tables, and images.',
      description:
        'A pipeline that processes documents, generates embeddings, and retrieves relevant passages across multiple data types.',
      technologies: ['Python', 'FastAPI', 'Vector Database', 'OCR', 'Docker'],
      features: [
        'Document ingestion and chunking',
        'Semantic search across content types',
        'Answers with source references',
      ],
      challenges: [
        'Preserving context across text and images',
        'Evaluating retrieval relevance',
      ],
      learnings: [
        'Designing retrieval pipelines for different data types',
        'Tracking quality with an evaluation question set',
      ],
    },
    {
      slug: 'vision-monitoring-system',
      title: 'Computer Vision Monitoring System',
      summary:
        'A prototype for detecting objects and aggregating events from image streams.',
      description:
        'An experimental image-processing pipeline that detects objects and exposes results through an API.',
      technologies: ['Python', 'OpenCV', 'Object Detection', 'FastAPI'],
      features: [
        'Object detection in images',
        'Event recording and aggregation',
        'Dashboard-ready result API',
      ],
      challenges: [
        'Balancing inference accuracy and speed',
        'Handling inconsistent image conditions',
      ],
      learnings: [
        'Evaluating models with realistic data',
        'Optimizing inference and post-processing',
      ],
    },
  ],
}

const aiContent = {
  vi: {
    ...softwareContent.vi,
    intro: {
      ...softwareContent.vi.intro,
      title: 'AI Engineer',
      description:
        'Tôi là một AI Engineer tập trung vào AI Agent, chatbot, hệ thống truy xuất đa phương thức và Computer Vision. Tôi sử dụng Python, FastAPI, mô hình ngôn ngữ lớn và cơ sở dữ liệu vector để xây dựng các giải pháp AI có thể tích hợp vào sản phẩm thực tế.',
    },
    about: {
      heading: 'Về tôi',
      tagline: 'Biến dữ liệu và mô hình AI thành sản phẩm có giá trị.',
      description: [
        'Tôi quan tâm đến việc xây dựng các hệ thống AI giải quyết bài toán thực tế, từ chatbot có khả năng truy xuất tri thức đến các ứng dụng phân tích hình ảnh.',
        'Tôi có kinh nghiệm thử nghiệm mô hình, chuẩn bị dữ liệu, xây dựng API suy luận và tích hợp các thành phần AI vào ứng dụng web, mobile và hệ thống backend.',
        'Mục tiêu của tôi là phát triển với vai trò AI Engineer, tập trung vào chất lượng đầu ra, khả năng đánh giá và tính ổn định khi đưa mô hình vào sản phẩm.',
      ],
    },
    experience: {
      heading: 'Kinh nghiệm AI',
      tagline: 'Từ thử nghiệm mô hình đến một luồng AI có thể sử dụng.',
      description:
        'Dữ liệu dưới đây đang là nội dung minh họa cho phiên bản AI Engineer của portfolio.',
      items: [
        {
          role: 'AI Engineer Intern',
          organization: 'AI Product Team',
          period: '12/2025 – 05/2026',
          description:
            'Xây dựng API cho các tính năng AI, thử nghiệm pipeline RAG và hỗ trợ tích hợp mô hình vào sản phẩm HealthTech.',
          isLatest: true,
        },
        {
          role: 'AI Research Assistant',
          organization: 'Đại học Quốc tế Sài Gòn',
          period: '01/2025 – 05/2025',
          description:
            'Nghiên cứu chatbot, multimodal retrieval và computer vision; chuẩn bị dữ liệu và đánh giá mô hình.',
        },
      ],
    },
    projects: {
      heading: 'Dự án AI',
      tagline: 'Các thử nghiệm AI được định hướng thành sản phẩm thực tế.',
      description: 'Dữ liệu dự án AI hiện là dữ liệu minh họa.',
      items: aiProjects.vi,
    },
    contact: {
      ...softwareContent.vi.contact,
      description:
        'Tôi sẵn sàng trao đổi về cơ hội AI Engineer, AI Agent, chatbot, retrieval và Computer Vision.',
    },
  },
  en: {
    ...softwareContent.en,
    intro: {
      ...softwareContent.en.intro,
      title: 'AI Engineer',
      description:
        'I am an AI Engineer focused on AI agents, chatbots, multimodal retrieval, and computer vision. I use Python, FastAPI, large language models, and vector databases to build AI capabilities for practical products.',
    },
    about: {
      heading: 'About Me',
      tagline: 'Turning data and AI models into useful products.',
      description: [
        'I enjoy building AI systems that address practical problems, from knowledge-grounded chatbots to image-analysis applications.',
        'I have experience experimenting with models, preparing data, building inference APIs, and integrating AI components into applications.',
        'My goal is to grow as an AI Engineer with a focus on output quality, evaluation, and reliable model integration.',
      ],
    },
    experience: {
      heading: 'AI Experience',
      tagline: 'From model experiments to usable AI workflows.',
      description:
        'The entries below are placeholder content for the AI Engineer version of this portfolio.',
      items: [
        {
          role: 'AI Engineer Intern',
          organization: 'AI Product Team',
          period: 'Dec. 2025 – May 2026',
          description:
            'Built APIs for AI features, experimented with RAG pipelines, and supported model integration into a HealthTech product.',
          isLatest: true,
        },
        {
          role: 'AI Research Assistant',
          organization: 'Saigon International University',
          period: 'Jan. 2025 – May 2025',
          description:
            'Researched chatbots, multimodal retrieval, and computer vision while preparing data and evaluating models.',
        },
      ],
    },
    projects: {
      heading: 'AI Projects',
      tagline: 'AI experiments shaped toward practical products.',
      description: 'The AI projects currently use placeholder content.',
      items: aiProjects.en,
    },
    contact: {
      ...softwareContent.en.contact,
      description:
        'I am open to AI Engineer opportunities involving AI agents, chatbots, retrieval systems, and computer vision.',
    },
  },
} satisfies Record<Language, PortfolioContent>

export const profileContent = {
  software: softwareContent,
  ai: aiContent,
} satisfies Record<
  ProfileSlug,
  Record<Language, PortfolioContent>
>

export function getProfileSlug(
  profileId: string | undefined,
): ProfileSlug | undefined {
  return (Object.entries(profileIds) as [ProfileSlug, string][])
    .find(([, id]) => id === profileId)?.[0]
}
