interface MenuItem {
  href: string;
  name: string;
}

export const menuItem: MenuItem[] = [
  {
    href: "#about",
    name: "About",
  },
  {
    href: "#services",
    name: "Services",
  },
  {
    href: "#projects",
    name: "Projects",
  },
  {
    href: "#testimonials",
    name: "Testimonials",
  },
  {
    href: "#contacts",
    name: "Contacts",
  },
];

export const footerMenuItem: MenuItem[] = [
  {
    href: "#about",
    name: "About",
  },
  {
    href: "#services",
    name: "Services",
  },
  {
    href: "#projects",
    name: "Projects",
  },
  {
    href: "#contacts",
    name: "Contacts",
  },
  {
    href: "#testimonials",
    name: "Testimonials",
  },
];

interface ServicesItem {
  id: string;
  label: string;
}

export const servicesItems: ServicesItem[] = [
  { id: "website", label: "Website Development" },
  { id: "mobile", label: "Mobile App Development" },
  { id: "design", label: "UI/UX Design" },
  { id: "consulting", label: "Technical Consulting" },
  { id: "other", label: "Other services" },
];

export const socials = [
  { name: "Discord", href: "https://discord.gg/ZxqW2y8Z" },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/e-sridhar-1720721a8/",
  },
  { name: "Telegram", href: "https://t.me/Srioffcl" },
  {
    name: "Whatsapp",
    href: "https://wa.me/919843849354?text=Hello!%20I%27m%20interested%20in%20your%20web%20development%20services.%20Could%20you%20please%20provide%20more%20details%3F",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/sridhar._.official/?igsh=NnhpNTR5MnI4Nzg5#",
  },
];

interface CardCarouselData {
  src: string;
  heading: string;
  description?: string;
}

export const cardCarouselData: CardCarouselData[] = [
  {
    src: "https://lottie.host/13d7c02a-8070-4fe1-ac44-617151c8ee72/TIn3RoTP6Q.lottie",
    heading: "website designing",
    description:
      "Creating sleek, modern websites that bring your vision to life.",
  },
  {
    src: "https://lottie.host/31fbf91b-f14d-436a-a96b-f449267c093f/jITmGRvjEj.lottie",
    heading: "E-commerce Solutions",
    description:
      "Powering your online store with seamless and scalable solutions.",
  },
  {
    src: "https://lottie.host/cafaa3ff-69e1-4dd9-b07f-16e1d66843d7/8N1Z6wzNkn.lottie",
    heading: "Deployment and Hosting",
    description:
      "Reliable deployment and hosting for smooth, worry-free operations.",
  },
  {
    src: "https://lottie.host/c25383ca-9288-4141-bd37-2d68e14b0282/pkma0hC5ov.lottie",
    heading: "C.M.S Management",
    description:
      "Effortless CMS management to keep your content fresh and engaging.",
  },
  {
    src: "https://lottie.host/5cac3316-31a5-4213-9645-455edfe6fa75/FGUvnraSaJ.lottie",
    heading: "Boost Traffic with SEO",
  },
  {
    src: "https://lottie.host/63d2f59b-40b8-4240-a579-25d5c20eb253/Tg6ONBypmm.lottie",
    heading: "And much more...",
  },
];

export interface TestimonialCardDetails {
  name: string;
  position: string;
  src: string;
  blockquote: string;
  testimonialVideo: string;
}

export const testimonialCardDetails: TestimonialCardDetails[] = [
  {
    name: "Mejules",
    position: "Founder & CEO, Maria Cars",
    src: "https://images.pexels.com/photos/30247059/pexels-photo-30247059/free-photo-of-close-up-portrait-of-a-domestic-tabby-cat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    blockquote:
      "This service transformed my business! The team was incredibly helpful, and the results speak for themselves. Highly recommended!",
    testimonialVideo: "/Testimonials/video.mp4",
  },
  {
    name: "Sarah Thompson",
    position: "Marketing Director, TechInnovate",
    src: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    blockquote:
      "A game-changing solution that exceeded our expectations. Their strategic approach delivered remarkable results and transformed our marketing strategy.",
    testimonialVideo: "/Testimonials/sarah-video.mp4",
  },
  {
    name: "Michael Rodriguez",
    position: "Founder & CEO, GreenSpark Solutions",
    src: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    blockquote:
      "Absolutely phenomenal service! Their innovative approach and attention to detail helped us scale our startup more efficiently than we ever imagined.",
    testimonialVideo: "/Testimonials/michael-video.mp4",
  },
  {
    name: "Emily Chen",
    position: "Chief Operations Officer, DataDrive",
    src: "https://images.pexels.com/photos/3775534/pexels-photo-3775534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    blockquote:
      "Incredibly professional and results-oriented. Their expertise has been instrumental in optimizing our operational processes and driving business growth.",
    testimonialVideo: "/Testimonials/emily-video.mp4",
  },
  {
    name: "David Kim",
    position: "Head of Product, InnovateTech",
    src: "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    blockquote:
      "A truly transformative partnership. Their insights and strategic guidance have been crucial in reshaping our product development approach.",
    testimonialVideo: "/Testimonials/david-video.mp4",
  },
  {
    name: "Rachel Green",
    position: "Lead Designer, CreativeSphere",
    src: "https://images.pexels.com/photos/3756616/pexels-photo-3756616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    blockquote:
      "Their creative solutions and deep understanding of our brand have been extraordinary. They've elevated our design strategy to new heights.",
    testimonialVideo: "/Testimonials/rachel-video.mp4",
  },
  {
    name: "Alex Nguyen",
    position: "CTO, CloudTech Solutions",
    src: "https://images.pexels.com/photos/2092474/pexels-photo-2092474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    blockquote:
      "Cutting-edge technology meets exceptional service. They've been a critical partner in our digital transformation journey.",
    testimonialVideo: "/Testimonials/alex-video.mp4",
  },
];

// Projects
interface Project {
  title: string;
  color: string;
  link?: string;
}

export const projects: Project[] = [
  {
    title: "maria cars",
    color: "#FFD1DC",
    link: "https://www.maria-cars.com/",
  },
  { title: "p8.io", color: "#C1FFC1" },
  { title: "Sky Blue", color: "#B0E2FF" },
  { title: "Light Lavender", color: "#E6E0F8" },
  { title: "Light Yellow", color: "#FFFFC0" },
  { title: "Light Orange", color: "#FFE4B5" },
  { title: "Soft Salmon", color: "#FFA07A" },
  { title: "Misty Rose", color: "#FFE4E1" },
];