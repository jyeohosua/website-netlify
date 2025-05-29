import {
  gdsc,
  genesis,
  devfolio,
  ama,
  sti,
  slhs,
  citi,
  tp,
  jfmls,
  tp1,
  github,
  blackbelt,
  greenbelt,
  lexpert,
  project,
  yellowbelt,
  specialist,
  whitebelt
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiVite,
  SiDotnet,
  SiOracle,
  SiGoogleanalytics,
  SiTableau,
  SiSap,
  SiZoho,
  SiPostgresql,
  SiGooglecloud,
} from "react-icons/si";

import { FaRust } from "react-icons/fa";


import { FaGolang } from "react-icons/fa6";

import { DiCss3, DiJava, DiRuby } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import { BiLogoVisualStudio } from "react-icons/bi";
import { PiMicrosoftExcelLogoFill, PiMicrosoftPowerpointLogoFill } from "react-icons/pi";
import { TiVendorMicrosoft } from "react-icons/ti";

export const resumeLink =
  "https://drive.google.com/uc?export=download&id=1nAN10oa-MCzDRB4a3Gg_gz-0fSmN8PA6";
export const repoLink = "https://www.linkedin.com/in/joshua-huqueriza/";

export const callToAction = "https://www.linkedin.com/in/joshua-huqueriza/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Certifications",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: sti,
    title: "STI College",
    degree: "College",
    duration: "August 2024",
    content1: "Major: Bachelor of Science in Information Technology",
    content2: "Studied software-related subjects such as Data Structures, Java, Python, C++, Visual Studio, and others.",
  },
  {
    id: "education-2",
    icon: ama,
    title: "AMA Computer College",
    degree: "College & Senior High School",
    duration: "June 2018 - April 2020",
    content1: "I have done courses on Web Development, Data Science, Cloud Computing and Full Stack Development.",
    content2: "Selected to receive one of the Excellence Awards, which are given to the top 10% of students in college. Additionally, I received an award from the respected school director for outstanding academic performance.",
  },
  {
    id: "education-3",
    icon: slhs,
    title: "Sta. Lucia High School",
    degree: "Junior High School",
    duration: "June 2014 - March 2018",
    content1: "Contributed to organizing school pageants, managing our school's anniversary celebrations, participating in journalism contests, and participating in various other activities.",
    content2: "Completed a variety of courses related to computer system servicing, related in software development, machine learning, computer vision, and more",
  },
];

// Add your past achievements here for example - rankings in hackathons/events
export const achievements = [
  {
    id: "a-1",
    icon: blackbelt,
    event: "Lean Six Sigma - Black Belt",
    position: "Certified",
    content1: "March 3, 2025",
    content2: "Credential# 96344685721996",
    content3: "Certification# ZSSBB121146335",
    project:
      "https://digitalcredentials.aigproexcellence.com/en/verify/96344685721996",
  },
  {
    id: "a-2",
    icon: lexpert,
    event: "Lean Expert",
    position: "Certified",
    content1: "January 12, 2025",
    content2: "Credential# 52435369664581",
    content3: "Certification# ZSSL2121145212",
    project: "https://digitalcredentials.aigproexcellence.com/en/verify/52435369664581",
  },
  {
    id: "a-3",
    icon: project,
    event: "Project Charter Specialist",
    position: "Certified",
    content1: "January 13, 2025",
    content2: "Credential# 01338475847842",
    content3: "Certification# ZSSPC121143909",
    project: "https://digitalcredentials.aigproexcellence.com/en/verify/01338475847842",
  },
    {
    id: "a-4",
    icon: greenbelt,
    event: "Lean Six Sigma - Green Belt",
    position: "Certified",
    content1: "December 17, 2024",
    content2: "Credential# 75922107750645",
    content3: "Certification# ZSSGB121154616",
    project: "https://digitalcredentials.aigproexcellence.com/en/verify/75922107750645",
  },
  {
    id: "a-5",
    icon: specialist,
    event: "Lean Specialist",
    position: "Certified",
    content1: "January 13, 2025",
    content2: "Credential# 64502850278283",
    content3: "Certification# ZSSL1121147220",
    project: "https://digitalcredentials.aigproexcellence.com/en/verify/64502850278283",
  },
    {
    id: "a-6",
    icon: yellowbelt,
    event: "Lean Six Sigma - Yellow Belt",
    position: "Certified",
    content1: "November 21, 2024",
    content2: "Credential# 66555520489775",
    content3: "Certification# ZSSYB121160155",
    project: "https://digitalcredentials.aigproexcellence.com/en/verify/66555520489775",
  },
    {
    id: "a-7",
    icon: whitebelt,
    event: "Lean Six Sigma - White Belt",
    position: "Certified",
    content1: "November 20, 2024",
    content2: "Credential# 27462100432013",
    content3: "Certification# ZSSWB121168237",
    project: "https://digitalcredentials.aigproexcellence.com/en/verify/27462100432013",
  },
];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Business Intelligence",
    items: [
      {
        id: "bi-1",
        icon: SiOracle,
        name: "Oracle BI",
      },
      {
        id: "bi-2",
        icon: SiGoogleanalytics,
        name: "PowerBI",
      },
      {
        id: "bi-3",
        icon: SiTableau,
        name: "Tableau",
      },
      {
        id: "bi-4",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "bi-5",
        icon: SiSap,
        name: "SAP",
      },
      {
        id: "bi-6",
        icon: SiZoho,
        name: "Zoho",
      },
            {
        id: "bi-7",
        icon: PiMicrosoftExcelLogoFill,
        name: "Excel",
      },
      {
        id: "bi-8",
        icon: PiMicrosoftPowerpointLogoFill,
        name: "Powerpoint",
      },
      {
        id: "bi-9",
        icon: TiVendorMicrosoft,
        name: "Office365",
      },
    ],
  },
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: DiRuby,
        name: "Ruby",
      },
      {
        id: "pl-2",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-3",
        icon: SiCplusplus,
        name: "C++",
      },
      {
        id: "pl-4",
        icon: FaGolang,
        name: "Go",
      },
      {
        id: "pl-5",
        icon: FaRust,
        name: "Rust",
      },
      {
        id: "pl-6",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-7",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-8",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-9",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-10",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-11",
        icon: SiSolidity,
        name: "Solidity",
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiDjango,
        name: "Django",
      },
      {
        id: "f-2",
        icon: SiRubyonrails,
        name: "Ruby on Rails",
      },
      {
        id: "f-3",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-4",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-5",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-6",
        icon: SiJquery,
        name: "jQuery",
      },
      {
        id: "f-7",
        icon: SiGraphql,
        name: "GraphQL",
      },
      {
        id: "f-8",
        icon: SiDotnet,
        name: ".NET",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiOracle,
        name: "Oracle Cloud",
      },
      {
        id: "t-1",
        icon: VscAzure,
        name: "Azure",
      },
      {
        id: "t-2",
        icon: SiPostgresql,
        name: "PostgreSQL",
      },
      {
        id: "t-3",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-4",
        icon: BiLogoVisualStudio,
        name: "VS Code",
      },
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-7",
        icon: AiOutlineGitlab,
        name: "Gitlab",
      },
      {
        id: "t-8",
        icon: SiNetlify,
        name: "Netlify",
      },
      {
        id: "t-9",
        icon: SiVite,
        name: "ViteJS",
      },
    ],
  },
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "Citibank, Philippines",
    logo: citi,
    link: "https://www.citigroup.com/global",
    positions: [
      {
        title: "Operations Analyst",
        duration: "September 2023 - Present",
        content: [
          {
            text: "▪ Managed consumer banking, private banking, and providing services to clients internationally.",
            link: "",
          },
          {
            text: "▪ Applied expertise in IT business processes to develop and implement strategic solutions that optimize workflows and drive operational efficiency, utilizing business intelligence tools.",
            link: "",
          },
          {
            text: "▪ Supported data analysis initiatives to identify gaps in processes and data, contributing to crisis management and continuous improvement efforts.",
            link: "",
          },
          { 
            text: "▪ Led strategic initiatives to align with the company’s operational objectives, contributing to the development and refinement of business processes across multiple departments and functions.",
            link: "",
          },
          {
            text: "▪ Designed, implemented, and monitored programs aimed at optimizing key processes, including financial operations, data management, and administrative functions.",
            link: "",
          },
          {
            text: "▪ Analyzed business needs to identify issues and provide actionable recommendations that enhance operational efficiency and streamline processes.",
            link: "",
          },
          {
            text: " ",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Teleperformance, Philippines",
    logo: tp,
    link: "https://www.tp.com/en-us/why-tp/about-tp/",
    positions: [
      {
        title: "Subject Matter Expert",
        duration: "September 2022 - July 2023",
        content: [
          {
            text: "▪ Promoted as subject matter expert and successfully handled 3 teams, helping advisors understand the nuances of the business ensuring the details are correct and will meet the needs of operations, processes, and best practices.",
            link: "",
          },
          {
            text: "▪ Updates daily reports concerning performance metrics/stack ranks/production summary reports using business intelligence tools such as Power BI & Tableau. Ensures that data is accurate and delivered on time to all internal clients.",
            link: "",
          },
        ],
      },
      {
        title: "Senior Program Specialist",
        duration: "September 2022 - July 2023",
        content: [
          {
            text: "▪ Responsible for handling technical escalations and more advanced inquiries, including payment transactions, logistics handling, warehouse processes, and escalated concerns.",
            link: "",
          },
        ],
      },
      {
        title: "Client Relations Specialist",
        duration: "June 2021 - June 2023",
        content: [
          {
            text: "▪ Started as a tier 1 advisor providing frontline retail services for inquiries about products and logistics.",
            link: "",
          },
          {
            text: "",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "JF Microcomputer Learning Services, Philippines",
    logo: jfmls,
    link: "https://www.depedimuscity.com/portal/uploads/DA_192_s_2019.pdf",
    positions: [
      {
        title: "Marketing Analyst",
        duration: "May 2020 - May 2021",
        content: [
          {
            text: "▪ Develop technical-related programs/projects enhancements for management approval for training and lessons about software, equipment, and computer usage. ",
            link: "",
          },
          {
            text: "▪ Conceptualize training materials based on data and research, responsible for continuous improvement based on learner feedback and best practices.",
            link: "",
          },
          {
            text: "▪ Contributed to implementing marketing strategies to drive sales and enhance brand visibility in retail settings.",
            link: "",
          },
          {
            text: "",
            link: "",
          },
        ],
      },
    ],
  },
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "Automated Sales Calculator",
    github: "",
    link: "",
    image: tp1,
    content: "Designed and launched to streamline the sales process and support our officers with a smarter daily toolkit. This tool automates rate calculations, provides pre-approved pitch scripts, and integrates with backend systems to reduce errors and boost efficiency — ultimately enhancing both productivity and the client experience.",
    
    stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "icon-2",
        icon: SiMysql,
        name: "MySQL",
      },
     {
        id: "icon-3",
        icon: SiGooglecloud,
        name: "Cloud Platform",
      },
      {
        id: "icon-4",
        icon: PiMicrosoftExcelLogoFill,
        name: "Excel",
      },
      {
        id: "icon-5",
        icon: TiVendorMicrosoft,
        name: "Office365",
      },
      {
        id: "icon-6",
        icon: SiDotnet,
        name: ".Net",
      },
      {
        id: "icon-7",
        icon: SiJavascript,
        name: "JavaScript",
      },
    ],
  },
  {
    id: "project-2",
    title: "Accelerate Save Rate",
    github: "",
    link: "",
    image: tp1,
    content:
      "Led a project to streamline workflows for the Retention and Sales teams. Key improvements include automated dispute tracking, enhanced award accuracy, reduced reversals, and better visibility of retention memos — boosting overall efficiency and client service.",
    stack: [
      {
        id: "icon-1",
        icon: SiGoogleanalytics,
        name: "PowerBI",
      },
      {
        id: "icon-2",
        icon: SiTableau,
        name: "Tableau",
      },
      {
        id: "icon-3",
        icon: PiMicrosoftPowerpointLogoFill,
        name: "Powerpoint",
      },
      {
        id: "icon-4",
        icon: SiSap,
        name: "SAP",
      },
      {
        id: "icon-4",
        icon: TiVendorMicrosoft,
        name: "Office365",
      },
    ],
  },
  {
    id: "project-3",
    title: "Personal Website Portfolio",
    github: "",
    link: "",
    image: github,
    content:
      "Designed and developed to showcase my skills in web development, UI/UX design, and problem-solving. Features include a responsive layout, interactive JavaScript elements, detailed project case studies, and GitHub integration—demonstrating both technical proficiency and a passion for user-focused design.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "icon-3",
        icon: SiPython,
        name: "Python",
      },
    ],
  },
];

// Add links to blogs here
export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

// List out the extra curricular activities you have indulged in, like - student clubs, research groups etc.
export const extraCurricular = [
  {
    id: 1,
    organisation: "Devfolio",
    title: "UniDAO Lead",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Selected among 5 students across the country to lead the initiative and grow the culture of Blockchain and Ethereum, powered by Devfolio.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7097977924686942209/",
      },
      {
        text: "Led a cohort of 37 selected students over 6 weeks to learn and build in the Ethereum ecosystem.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7095310520282480641/",
      },
    ],
    logo: devfolio,
  },
  {
    id: 2,
    organisation: "Google Developer Student Club, NITK",
    title: "Co-Chair",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Started HackClub to promote and spread the culture of Hackathons in the college. 20+ hackathons particiaptions, 15+ wins over the year.",
        link: "",
      },
      {
        text: "Co-designed and developed the official website of Incident, NITK with 15K+ visitors",
        link: "https://incident.nitk.ac.in/",
      },
    ],
    logo: gdsc,
  },
  {
    id: 3,
    organisation: "Genesis, NITK",
    title: "Competitions Head",
    duration: "Sep 2021 - Present",
    content: [
      {
        text: "Qualified for the nationals of Indian Hip Hop Dance Championship",
        link: "",
      },
      {
        text: "Won 7 inter-college solo dance competitions",
        link: "",
      },
    ],
    logo: genesis,
  },
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/joshua-huqueriza/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/jyeohosua",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:JHuqueriza8@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiOutlineTwitter,
    link: "http://twitter.com/jyeohosua",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/jyeohosua/",
  },
];

// Your professional summary
export const aboutMe = {
  name: "Joshua Huqueriza",
  githubUsername: "jyeohosua",
  tagLine:
    "Operations Analyst | Certified Lean Six Sigma Black Belt | Process Improvement and Automation | IT Operations",
  intro:
    " Detail-oriented analyst specializing in data analysis, process optimization, and strategic decision-making. Skilled in leveraging analytical tools to optimize efficiency and drive improvements.",
};

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format.
export const includedRepos = [
  "publiclab/plots2",
  "zulip/zulip",
  "paritytech/polkadot-sdk",
];
