/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Albashir Ali",
  title: "Hi all, I'm Albashr",
  subTitle: emoji(
    "I am Albashir Ali, a passionate leader and technologist with a rich background in software development, entrepreneurship, and innovation. As the CEO of Founders, I connect entrepreneurs, venture capitalists, and mentors to foster groundbreaking collaborations. My technical expertise includes developing software with Hedge to streamline trading workflows for hedge funds and partnering with Abubakr LLC to create advanced fleet management and ride scheduling solutions. With experience as a Software Engineer Intern at Northrop Grumman, leadership roles in NSBE, and academic pursuits in Computer Science and Business at the University of Colorado Boulder, I bring a dynamic and multifaceted approach to solving complex problems and driving impactful change."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1O1orsQQy1c53rMJZhzBT9tcCfk0Jp_9v/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/albashirAli",
  linkedin: "https://www.linkedin.com/in/albashir-ali/",
  gmail: "albashir.altaib.ali@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "html-5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "css3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
    skillName: "sass",
    fontAwesomeClassname: "fab fa-sass"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "reactjs",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "nodejs",
    fontAwesomeClassname: "fab fa-node"
  },
  {
    skillName: "npm",
    fontAwesomeClassname: "fab fa-npm"
  },
  {
    skillName: "sql-database",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "aws",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "firebase",
    fontAwesomeClassname: "fas fa-fire"
  },
  {
    skillName: "python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: "scala",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: "c++",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: "java",
    fontAwesomeClassname: "fab fa-java"
  },
  {
    skillName: "bash",
    fontAwesomeClassname: "fas fa-terminal"
  },
  {
    skillName: "git",
    fontAwesomeClassname: "fab fa-git-alt"
  }
],
display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
display: true, // Set false to hide this section, defaults to true
schools: [
  {
    schoolName: "University of Colorado Boulder",
    logo: require("./assets/images/coloradoLogo.png"),
    subHeader: "Bachelor of Science in Computer Science, Business Minor",
    duration: "May 2025 (Expected)",
    desc: "Focused on software development, artificial intelligence, and product development.",
    descBullets: [
      "Earned an Engineering Leadership Certificate",
      "Gained hands-on experience through projects in data structures and software development."
    ]
  }
]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
viewSkillBars: true, //Set it to true to show Proficiency Section
experience: [
  {
    Stack: "Frontend/Design",
    progressPercentage: "85%"
  },
  {
    Stack: "Backend Development",
    progressPercentage: "95%"
  },
  {
    Stack: "Data Structures & Algorithms",
    progressPercentage: "95%"
  },
  {
    Stack: "System Engineering Tools",
    progressPercentage: "85%"
  },
  {
    Stack: "Artificial Intelligence & Machine Learning",
    progressPercentage: "90%"
  },
  {
    Stack: "Network Systems & Security",
    progressPercentage: "95%"
  },
],
displayCodersrank: false // Set true to display codersrank badges section
};

// Work experience section

const workExperiences = {
display: true, //Set it to true to show workExperiences Section
experience: [
  {
    role: "Software Engineer Intern",
    company: "Northrop Grumman",
    companylogo: require("./assets/images/northropLogo.png"),
    date: "May 2023 – August 2024",
    desc: "Collaborated on multidisciplinary teams to design and develop electronic data processing systems.",
    descBullets: [
      "Updated TRD requirements and refining sequence, class, and UML package diagrams.",
      "Utilized SQL, Java, and bash scripting to design and implement efficient algorithms, enhancing program functionality, performance, and access for cross-functional teams.",
      "Implemented J Unit and SonarQube to ensure code reliability,performance, and continuous code quality inspection.",
      "Led efforts to develop Lean Agile engineering and management best practices, metrics, and audit practices."
    ]
  },
  {
    role: "CEO",
    company: "Founders",
    companylogo: require("./assets/images/foundersLogo.png"),
    date: "December 2024 – Present",
    desc: "Led a platform connecting entrepreneurs, venture capitalists, and mentors for impactful collaborations.",
    descBullets: [
      "Pioneered AI-driven solutions to analyze and summarize critical documents for hedge funds, delivering tailored insights based on trading history and client-defined priorities.",
      "Led cross-functional teams in developing personalized AI tools for individual trading desks, ensuring bespoke solutions for enhanced decision-making.",
      "Managed financial strategies and pitching efforts, securing buy-in from stakeholders and aligning AI innovations with business objectives.",
      "Directed strategic planning and implementation, bridging the gap between technical development and financial applications to streamline hedge fund operations."
    ]
  },
  {
    role: "Collaborator",
    company: "Hedge",
    companylogo: require("./assets/images/hedgeLogo.png"),
    date: "June 2024 – Present",
    desc: "Developing software to enhance traders' experience at hedge funds.",
    descBullets: [
      "Pioneered AI-driven solutions to analyze and summarize critical documents for hedge funds, delivering tailored insights based on trading history and client-defined priorities.",
      "Led cross-functional teams in developing personalized AI tools for individual trading desks, ensuring bespoke solutions for enhanced decision-making.",
      "Managed financial strategies and pitching efforts, securing buy-in from stakeholders and aligning AI innovations with business objectives.",
      "Directed strategic planning and implementation, bridging the gap between technical development and financial applications to streamline hedge fund operations."
    ]
  },
  {
    role: "Collaborator",
    company: "Abubakr LLC",
    companylogo: require("./assets/images/abubakrLogo.png"),
    date: "July 2024 – Present",
    desc: "Created fleet management and ride scheduling software solutions.",
    descBullets: [
      "Optimized daily vehicle routing schedules for 300+ trips using Google OR tools and custom algorithms, reducing driver requirements and operational costs.",
      "Designed and implemented a fleet management system to track fuel usage, vehicle maintenance, and real-time locations, enhancing operational transparency and efficiency.",
      "Developed a machine learning algorithm to adapt schedules dynamically based on real-time ride cancellations or additions, ensuring optimal resource allocation.",
      "Built a comprehensive application for dispatch, management, and mechanics to streamline communication and vehicle performance monitoring."
    ]
  },
  {
    role: "Store Leader (Manager)",
    company: "7-Eleven",
    companylogo: require("./assets/images/7elevenLogo.png"),
    date: "November 2020 – August 2021",
    desc: "Managed cross-functional team and improved operational efficiency.",
    descBullets: [
      "Supervised a team of 9 employees to handle store supply, customer relations, and finances.",
      "Drafted a 6-month plan to reconstruct the facility to increase customer satisfaction.",
      "Analyzed and implemented marketing strategies that increased store income by 15%."
    ]
  },
  {
    role: "Chair",
    company: "Colorado Youth Congress",
    companylogo: require("./assets/images/cycLogo.png"),
    date: "October 2018 – August 2021",
    desc: "Led social outreach and funding initiatives to support community programs.",
    descBullets: [
      "Orchestrated over 90 members to fulfill social outreach and funding objectives.",
      "Provided education policy recommendations to the Denver Board of Education and Denver Mayor Michael Hancock."
    ]
  },
  {
    role: "Rocky Mountain Zone Chair (Regional Board)",
    company: "National Society of Black Engineers (NSBE)",
    companylogo: require("./assets/images/nsbeLogo.png"),
    date: "May 2024 – Present",
    desc: "Provided guidance and leadership for NSBE chapters within Zone 6.",
    descBullets: [
      "Oversaw 14 NSBE chapters, offering guidance on securing funding and best leadership practices.",
      "Coordinated large-scale events, including FRC with 3,000 attendees and a national convention with over 20,000 attendees."
    ]
  },
  {
    role: "Senator",
    company: "National Society of Black Engineers @ University of Colorado Boulder",
    companylogo: require("./assets/images/nsbeLogo.png"),
    date: "April 2022 – May 2024",
    desc: "Engaged in decision-making processes to support NSBE’s mission and initiatives.",
    descBullets: [
      "Allocated a $40,000 budget for the University of Colorado Boulder NSBE chapter.",
      "Voted on critical issues including budget allocations, organizational policies, and strategic initiatives."
    ]
  }
]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/collegeMindspace.png"),
      projectName: "College MindSpace",
      projectDesc:
        "Led a cross-functional team to develop a diverse educational content library, integrated AI-driven essay editing tools, and created personalized learning algorithms.",
      footerLink: [
        {
          name: "Learn More",
          url: "https://example-collegemindspace.com" // Replace with the actual URL if available
        }
      ]
    },
    {
      image: require("./assets/images/udpLogo.png"),
      projectName: "Reliable UDP File Transfer System (RuFTP)",
      projectDesc:
        "Implemented the Go-Back-N ARQ protocol for optimized network bandwidth and developed core FTP operations using UDP sockets.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/example-rudftp" // Replace with the actual URL if available
        }
      ]
    },
    {
      image: require("./assets/images/blockchainLogo.png"),
      projectName: "Mock Cryptocurrency",
      projectDesc:
        "Developed a basic blockchain to simulate cryptocurrency operations, including transaction validation and mining functionalities.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/example-cryptocurrency" // Replace with the actual URL if available
        }
      ]
    },
    {
      image: require("./assets/images/battleshipLogo.png"),
      projectName: "Battleship Desktop Game",
      projectDesc:
        "Implemented multiplayer and single-player modes featuring pattern identification to enhance user engagement. Managed game data for progress tracking, statistics, and leaderboards using C++ and Qt.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/example-battleship" // Replace with the actual URL if available
        }
      ]
    },
    {
      image: require("./assets/images/crashSimulatorLogo.png"),
      projectName: "Crash Simulator Video Game",
      projectDesc:
        "Designed a 2D map simulating traffic laws and crash scenarios. Built a main class referencing eight integrated classes for vehicle stats, scenario outcomes, and user information.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/example-crash-simulator" // Replace with the actual URL if available
        }
      ]
    },
    {
      image: require("./assets/images/foodFinderLogo.png"),
      projectName: "Food Finder",
      projectDesc:
        "Conceptualized and led the development of a crowd-sourced dining recommendation website using SQL, Java, HTML, and CSS. Created a responsive UI and implemented location-based search functionality for improved user experience.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/example-foodfinder" // Replace with the actual URL if available
        }
      ]
    },
    {
      image: require("./assets/images/pagerPredictLogo.png"),
      projectName: "Pager Predict",
      projectDesc:
        "Developed an LRU-based paging algorithm for optimized memory management in a multi-process environment. Implemented adaptive prefetching, eviction strategies, and artificial time simulation to handle complex memory paging scenarios.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/example-pagerpredict" // Replace with the actual URL if available
        }
      ]
    },
    {
      image: require("./assets/images/cyberSecurityLogo.png"), // Replace with the actual image file name
      projectName: "Cyber Security Enforcement",
      projectDesc:
        "Conducted comprehensive security assessments, identifying and mitigating vulnerabilities such as SQL Injection, Cross-Site Scripting (XSS), and form manipulation. Designed and implemented server-side validation mechanisms, token-based authentication, and secure coding practices to enhance transactional security.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/example-cybersecurity" // Replace with the actual URL if available
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "720-419-7314",
  email_address: "Albashir.Altaib.Ali@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer


export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
