import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  artistica,
  disney,
  viddeo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Devlopment",
    icon: web,
  },
  {
    title: "Mobile Developement",
    icon: mobile,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Blockchain Developement",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: "https://img.icons8.com/color/480/000000/c-plus-plus-logo.png",
  },
  {
    name: "CSS 3",
    icon: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png",
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: "https://img.icons8.com/color/480/000000/firebase.png",
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: "https://img.icons8.com/fluency/240/000000/python.png",
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "NetixSol",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKrLx_Z54-gCRqj5sC8FXCqML9Ul1tH-7Hy3jPk2e6sQ&s",
    iconBg: "black",
    date: "Mar 2022 - Present",
    points: [
      "Developing and maintaining web applications using Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Dev Trainer",
    company_name: "StartUps Institute of Programming",
    icon: "https://scontent.flyp2-1.fna.fbcdn.net/v/t39.30808-6/302591806_600532655111861_8648884136478308247_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEwFZ7f1VCleOyxQtK5pJcBGHX3a1erADgYdfdrV6sAOIVbLe0hwJMSEan4_X5qLAHiRuuVnP880IPTKHUykbwE&_nc_ohc=w21RMSBYfZIAb4hdBLv&_nc_ht=scontent.flyp2-1.fna&oh=00_AfCIt-ySpdJ3yYNxhbTHsJdf9nzkm2SVfjPBEEqM9AHtzw&oe=66244CA8",
    iconBg: "#ffffff",
    date: "Aug 2022 - Mar 2023",
    points: [
      "Delivered engaging, interactive training sessions.",
      "Trained students on the latest MERN stack technology.",
      "Assisted students in developing their final projects.",
    ],
  },

  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "The skills & knowledge I gained from the course have helped me immensely in my journey as a web dev.",
    name: "Talha Unas",
    designation: "Student",
    company: "SMIT",
    image: "https://avatars.githubusercontent.com/u/94473513?v=4",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Abu Bakar does.",
    name: "Muhammad Wajid",
    designation: "Team Lead",
    company: "Netixsol",
    image:
      "https://media.licdn.com/dms/image/D4D03AQFI4KHPpoHg_g/profile-displayphoto-shrink_800_800/0/1647540187617?e=1718841600&v=beta&t=yEk38lVhTqEcWubgbxdoRIMWClSUqDvECStm3XsiPoQ",
  },
  {
    testimonial:
      "Abu Bakar was always approachable and available to offer guidance throughout the course.",
    name: "Sheraz Ahmed",
    designation: "Student",
    company: "SMIT",
    image: "https://avatars.githubusercontent.com/u/75482281?s=100&v=4",
  },
];

const projects = [
  {
    name: "Artistica",
    description:
      "Full-stack web application that utilizes OpenAI APIs to generate creative images based on user-provided prompts. The app also features a community platform where users can share and view images.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: artistica,
    source_code_link: "https://github.com/AnasJMirza/artistica",
  },
  {
    name: "Viddio",
    description:
      "Developed a video sharing application that functions similarly to YouTube. This platform also has the dark and light mode themes, Authentication (JWT) and all functionality like youtube. Give it a try!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: viddeo,
    source_code_link: "https://github.com/AnasJMirza/Youtube-MERN-Clone",
  },
  {
    name: "Disney Plus",
    description:
      "Developed a Disney-inspired landing page. The landing page displays a selection of movies and also has the google authentication system powered by firebase. It s a beautiful and responsive UI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: disney,
    source_code_link: "https://github.com/AnasJMirza/DisneyPlus-Clone",
  },
];

export { services, technologies, experiences, testimonials, projects };
