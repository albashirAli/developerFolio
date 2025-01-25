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
    progressPercentage: "90%"
  },
  {
    Stack: "Backend Development",
    progressPercentage: "85%"
  },
  {
    Stack: "Data Structures & Algorithms",
    progressPercentage: "80%"
  }
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
      "Utilized SQL, Java, and bash scripting to enhance functionality and performance.",
      "Implemented JUnit testing and SonarQube for code quality assurance.",
      "Conducted code reviews and optimized system design diagrams."
    ]
  },
  {
    role: "CEO",
    company: "Founders",
    companylogo: require("./assets/images/foundersLogo.png"),
    date: "December 2024 – Present",
    desc: "Led a platform connecting entrepreneurs, venture capitalists, and mentors for impactful collaborations.",
    descBullets: [
      "Built a network fostering entrepreneurial innovation and mentorship.",
      "Oversaw product vision and strategic growth initiatives."
    ]
  },
  {
    role: "Collaborator",
    company: "Hedge",
    companylogo: require("./assets/images/hedgeLogo.png"),
    date: "June 2024 – Present",
    desc: "Developing software to enhance traders' experience at hedge funds.",
    descBullets: [
      "Designed user-friendly tools to optimize trading workflows.",
      "Utilized advanced algorithms to analyze financial data for trading efficiency."
    ]
  },
  {
    role: "Collaborator",
    company: "Abubakr LLC",
    companylogo: require("./assets/images/abubakrLogo.png"),
    date: "July 2024 – Present",
    desc: "Created fleet management and ride scheduling software solutions.",
    descBullets: [
      "Developed a system for efficient driver assignments and optimized routes.",
      "Implemented features for dynamic fleet tracking and real-time scheduling."
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
      image: require("./assets/images/foundersLogo.png"),
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
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
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
