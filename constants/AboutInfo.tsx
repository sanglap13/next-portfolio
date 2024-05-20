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
    text: "Sanglap Mridha",
  },
  {
    icon: <MailIcon size={20} />,
    text: "sanglapmridha@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Age 21+",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelor of Technology in Computer Science and Engineering",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Kolkata, India",
  },
];

export const ABOUT_QUALIFICATION = [
  {
    title: "education",
    data: [
      {
        university: "Future Insititute of Engineering and Mangement",
        qualification: "Bachelor of Technology in CSE",
        years: "2020 - 2024",
      },
      {
        university: "Future Campus School",
        qualification: "Class 12 (Computer Science)",
        years: "2018 - 2020",
      },
      {
        university: "B. D. M. International",
        qualification: "Class 10",
        years: "2018",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Helix Research and Development",
        role: "Software Developer",
        years: "May 2024 - Present",
      },
      {
        company: "Aeonix Research and Innovations",
        role: "Frontend Developer Intern",
        years: "Aug 2023 - Feb 2024",
      },
    ],
  },
];

export const ABOUT_SKILLS = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS, Javascript, Typescript, SQL, C/C++",
      },
      {
        name: "React.js, Next.js, TailwindCss, Sass, ",
      },
      {
        name: "Node.js, Express.js",
      },
      {
        name: "MongoDB",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
    ],
  },
];
