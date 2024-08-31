import astroGoods from "../assets/astro-goods.png";
import rogueIsle from "../assets/rogue-isle.png";
import todoApp from "../assets/todo-app.png";
import portfolio from "../assets/portfolio.png";
import minimal from "../assets/minimal.png";
import MG from "../assets/mg.png";
const UserProjects = [
  {
    title: "Astro-Goods",
    about:
      "A modern e-commerce web application designed to offer a seamless shopping experience. Built with React, Tailwind CSS, and Redux for a dynamic and responsive interface.",
    description:
      "Astro-Goods is a feature-rich e-commerce platform developed using React for a fast and interactive user experience. Tailwind CSS ensures the application is visually appealing and fully responsive across all devices. State management is handled efficiently with Redux and @reduxjs/toolkit, allowing for smooth data flow and user interactions. The app also integrates React Router for dynamic page navigation and React Toastify for real-time notifications. With a robust backend powered by Express, MongoDB, and JWT for secure authentication, Astro-Goods delivers a complete and reliable online shopping solution.",
    image: astroGoods,
    live: true,
    technologies: [
      "React",
      "Tailwind",
      "Redux",
      "React Router",
      "Express",
      "MongoDB",
      "JWT",
    ],
    link: "https://astro-goods.vercel.app/",
    github: "https://github.com/Z-i-n-k-s/MERN-STACK-E-COMMERCE-PROJECT",
  },
  {
    title: "Rogue Isles",
    about:
      "A 2D platformer game inspired by the classic Super Mario Bros. Developed using C++ with i-Graphics for a nostalgic yet fresh gaming experience.",
    description:
      "Rogue Isles is a captivating 2D platformer that takes inspiration from the legendary Super Mario Bros, offering players a blend of retro gaming with modern enhancements. Built with C++, the game leverages the i-Graphics library to create vibrant, pixel-art landscapes and smooth animations. Players navigate through challenging levels, avoiding obstacles and enemies while collecting power-ups. The gameplay is designed to be both nostalgic and engaging, with a focus on precision and timing. Rogue Isles stands as a tribute to classic platformers, bringing the essence of the genre to a new generation.",
    image: rogueIsle,
    live: true,
    technologies: ["C++", "i-Graphics"],
    link: "https://www.youtube.com/watch?v=znPhjLjEdQw&t=8s",
    github:
      "https://github.com/Z-i-n-k-s/iGraphics_Project_A_2D_Platformer_Game.git",
  },

  {
    title: "To-Do App",
    about:
      "A simple and efficient web app for managing daily tasks. Built with HTML, CSS, and JavaScript, it utilizes local storage to maintain task history.",
    description:
      "The To-Do App is a straightforward web application designed to help users organize their tasks efficiently. Developed using HTML, CSS, and JavaScript, it features a clean and intuitive interface for adding, editing, and deleting tasks. The app leverages local storage to save tasks, ensuring that users can easily access their to-do lists even after closing the browser. This lightweight app is perfect for anyone looking to keep track of daily activities without the need for complex features. Its simplicity and functionality make it a reliable tool for personal task management.",
    image: todoApp,
    live: true,
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://todo-app-html-css-javascript.vercel.app",
    github: "https://github.com/Z-i-n-k-s/TODO-APP_HTML-CSS-JAVASCRIPT.git",
  },
  {
    title: "Merchandise-Galaxy",
    about:
      "A comprehensive e-commerce app designed to enhance the shopping experience with advanced features and a sleek design. Developed using Flutter and powered by Firebase for robust backend support.",
    description:
      "Merchandise-Galaxy is built with Flutter, providing a responsive and cross-platform user interface that ensures a smooth shopping experience. Firebase Core integrates seamlessly, offering reliable backend services like authentication via Firebase Auth and secure data handling with Cloud Firestore. The app also supports Google Sign-In for easy account management, and the Curved Navigation Bar enhances user navigation within the app. Additional features include the use of Line Awesome Icons for a modern look and Fluttertoast for user feedback. With these technologies, Merchandise-Galaxy is both functional and visually appealing, making it a go-to app for online shopping.",
    image: MG,
    live: false,
    technologies: [
      "flutter",
      "firebase_core",
      "firebase_auth",
      "cloud_firestore",
      "fluttertoast",
      "provider",
      "curved_navigation_bar",
      "line_awesome_flutter",
      "google_sign_in",
    ],
    link: "https://github.com/Z-i-n-k-s/Merchandise-Galaxy-FLUTTER-PROJECT.git",
    github:
      "https://github.com/Z-i-n-k-s/Merchandise-Galaxy-FLUTTER-PROJECT.git",
  },

  {
    title: "Minimal Shopping App",
    about:
      "A lightweight and efficient shopping app designed to streamline the online shopping experience with a simple and intuitive interface. Built with Flutter and Firebase, this app focuses on delivering core functionalities with minimal distractions.",
    description:
      "The Minimal Shopping App is crafted using Flutter to ensure smooth performance across platforms, providing users with a seamless shopping experience. Firebase is integrated for backend services, offering real-time data sync, authentication, and secure storage. The app features essential shopping functionalities such as product browsing, adding items to the cart, and a straightforward checkout process. Its clean UI is optimized for both speed and usability, making it easy for users to navigate and complete their purchases. With a focus on minimalism, this app is ideal for users who prefer a clutter-free shopping experience.",
    image: minimal,
    live: false,
    technologies: [
      "React",
      "Springboot",
      "Tailwind",
      "Heroicons",
      "Firebase",
      "MongoDB",
    ],
    link: "https://github.com/Z-i-n-k-s/test_app_flutter.git",
    github: "https://github.com/Z-i-n-k-s/test_app_flutter.git",
  },
  {
    title: "Portfolio",
    about:
      "A personal portfolio website showcasing projects and skills in a responsive and visually appealing design. Built with React, Tailwind CSS, and Redux for efficient state management.",
    description:
      "The Portfolio is a responsive web application developed to present personal projects, skills, and experience in a clean and organized manner. Utilizing React for the core framework, the site is both dynamic and interactive. Tailwind CSS ensures a polished, modern look across all devices, while Redux manages the application's state seamlessly. Additional features include smooth animations powered by Framer Motion and SVG support for high-quality icons. The site also incorporates React Router for smooth navigation and Swiper for interactive project carousels, making it a comprehensive tool to highlight professional achievements.",
    image: portfolio,
    live: true,
    technologies: [
      "React",
      "Tailwind",
      "Redux",
      "Framer Motion",
      "React Router",
      "Swiper",
    ],
    link: "https://zishan-rezwan.vercel.app",
    github: "https://github.com/Z-i-n-k-s/Portfolio.git",
  },
];

export default UserProjects;
