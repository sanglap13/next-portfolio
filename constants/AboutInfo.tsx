import {
  Calendar,
  GraduationCap,
  HomeIcon,
  MailIcon,
  PhoneCall,
  User2,
} from "lucide-react";

export const ABOUT_INFO = [
  {
    icon: <User2 size={20} />,
    text: "Sanglap Mridha",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+91 coming soon",
  },
  {
    icon: <MailIcon size={20} />,
    text: "sanglapmridhawork@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Age 22+",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "B.Tech in Computer Science & Engineering",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Kolkata, India",
  },
];

export const ABOUT_QUALIFICATION = [
  {
    title: "experience",
    data: [
      {
        organization: "Cozeva - Applied Research Works",
        degree_or_role: "SDE I",
        years: "April 2025 - Present",
      },
      {
        organization: "Altor Smart Mobility",
        degree_or_role: "Software Engineer",
        years: "September 2024 - April 2025",
      },
      {
        organization: "Scriptures Research and Development",
        degree_or_role: "Full-Stack Developer (Freelance)",
        years: "May 2024 - June 2024",
      },
      {
        organization: "Aeonix Research and Innovations",
        degree_or_role: "Frontend Developer Intern",
        years: "Aug 2023 - Feb 2024",
      },
    ],
  },
  {
    title: "education",
    data: [
      {
        organization: "Future Institute of Engineering and Mangement",
        degree_or_role: "B.Tech in Computer Science & Engineering",
        years: "2020 - 2024",
      },
      {
        organization: "Future Campus School",
        degree_or_role: "Class 12 (Computer Science)",
        years: "2018 - 2020",
      },
      {
        organization: "B. D. M. International",
        degree_or_role: "Class 10",
        years: "2018",
      },
    ],
  },
];

export const ABOUT_SKILLS = [
  {
    title: "skills",
    data: [
      {
        name_or_img:
          "HTML, CSS, Javascript, Typescript, SQL, C/C++, Python, Java.",
      },
      {
        name_or_img:
          "React.js, Next.js, TailwindCSS, Sass, Material UI, Shadcn UI, Firebase, Zustand, Tanstack Query.",
      },
      {
        name_or_img: "Node.js, Express.js, Flask, Django.",
      },
      {
        name_or_img: "PostgreSQL, MySQL, MongoDB",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        name_or_img: "/about/vscode.svg",
      },
      {
        name_or_img: "/about/figma.svg",
      },
    ],
  },
];

export const ABOUT_COMMUNITY = [
  {
    organization: "DevRelSquad",
    position: "Chapter Lead - Kolkata",
    years: "Apr 2024 - Present",
  },
  {
    organization: "Google Developer Student Clubs",
    position: "Lead - FIEM",
    years: "Jul 2023 - Jul 2024",
  },
];
