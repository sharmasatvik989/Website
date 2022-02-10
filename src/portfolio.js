/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Satvik Sharma",
  title: "Hola Soy, I am Satvik Sharma",
  subTitle: emoji(
    "A passionate Cloud Devops Engineer experience of working on cloud technologies such as AWS, Terraform, Docker and Kubernetes. Familiarity with devops principles of deploying and automation."
  ),
  resumeLink:
    "https://drive.google.com/file/d/16Tins4TEL60OHSKe1Bmmf27mgt7h96te/view?usp=sharing",// Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sharmasatvik989",
  linkedin: "https://www.linkedin.com/in/sharmasatvik/",
  gmail: "satviksharma457989@gmail.com",
//   gitlab: "https://gitlab.com/saadpasta",
//   facebook: "https://www.facebook.com/saad.pasta7",
//   medium: "https://medium.com/@saadpasta",
//   stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "A little about myself",
  subTitle: "Working towards masters in computer science focussing on Cloud Devops technologies.",
  skills: [
    emoji(
      "⚡ Deploying and automating the cloud infrastructure for AWS using Jenkins and Kubernetes"
    ),
    emoji("⚡ Software development using python in backend and increasing the response performance for the web applications"),
    emoji(
      "⚡ Developing full-stack web application using Flask serving REST API "
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
//     {
//       skillName: "Kubernetes",
//       fontAwesomeClassname: "fab fa-kubernetes"
//     },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
//     {
//       skillName: "Azure",
//       fontAwesomeClassname: "fab fa-Azure"
//     },
//     {
//       skillName: "C/C++",
//       fontAwesomeClassname: "fab fa-C/C++"
//     },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
//     {
//       skillName: "Terraform",
//       fontAwesomeClassname: "fas fa-Terraform"
//     },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Texas at Arlington",
      logo: require("./assets/images/uta.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "January 2021- Present",
//       desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Graduate Courses - Cloud Computing, Secure Progrmming, Advanced database and Software engineering."
      ]
    },
    {
      schoolName: "Amity University",
      logo: require("./assets/images/amity.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2016 - August 2020",
//       desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Undergraduate Courses - Dynamic routing and Troubleshooting, Software Engineering, Object Oriented Programming and Data analytic using Python"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Kubernetes",
      progressPercentage: "70%"
    },
    {
      Stack: "AWS/Devops",
      progressPercentage: "70%"
    },
    {
      Stack: "Data structures",
      progressPercentage: "60%"
    },
    {
      Stack: "Terraform",
      progressPercentage: "60%"
    },
    {
      Stack: "C/C++",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "National Informatics Center",
      companylogo: require("./assets/images/nic.png"),
      date: "May 2019 – August 2019",
      desc: "Tasked with cloud technologies and as a software engineer intern tasked with deploying and automating the cloud infrastructure for AWS using Jenkins and Kubernetes for the national cloud used by public schools and government bodies.",
//       descBullets: [
//         "As a software engineer intern tasked with deploying and automating the cloud infrastructure for AWS using Jenkins and Kubernetes for the national cloud used by public schools and government bodies."
//       ]
    },
    {
      role: "Software Engineer Intern",
      company: "Resbird Technologies",
      companylogo: require("./assets/images/resbird.png"),
      date: "May 2018 – July 2018",
      desc: "Assisting with software development using python in backend and increasing the response performance by 38% for the web application in flight booking deployed using Azure and built on Node js."
    }
//     {
//       role: "Software Engineer Intern",
//       company: "Airbnb",
//       companylogo: require("./assets/images/airbnbLogo.png"),
//       date: "Jan 2015 – Sep 2015",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//     }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
//   subtitle: "Own Projects",
  projects: [
    {
      image: require("./assets/images/chart.png"),
      projectName: "Graphometer",
      projectDesc: "Developed full-stack web application using Flask serving REST API to capture the data for 5000+ earthquakes and project a visually depiction of the earthquake data using various Chart.Js",
//       footerLink: [
//         {
//           name: "Visit Website",
//           url: "http://saayahealth.com/"
//         }
//         //  you can add extra buttons here.
//       ]
    },
    {
      image: require("./assets/images/meta.png"),
      projectName: "Antiviruses",
      projectDesc: "Metasploit based project of generating 2500 .sh pay loads to check the efficiency of 3 Antivirus McAfee, Windows Defender and Calm Av. Automated API to run the virus check and plot the graph of reference between the viruses using Matplotlib.",
//       footerLink: [
//         {
//           name: "Visit Website",
//           url: "http://nextu.se/"
//         }
//       ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Accomplishments 🏆 "),
  subtitle:
    "Accomplishments",

  achievementsCards: [
    {
      title: "Chief Financial Officer",
      subtitle:
        "First Indian to be appointed as CFO for the Cyber Security Club at University of Texas at Arlington",
      image: require("./assets/images/codeInLogo.webp"),
//       footerLink: [
//         {
//           name: "Certification",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
//         },
//         {
//           name: "Award Letter",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
//         },
//         {
//           name: "Google Code-in Blog",
//           url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
//         }
//       ]
    },
//     {
//       title: "Google Assistant Action",
//       subtitle:
//         "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
//       image: require("./assets/images/googleAssistantLogo.webp"),
//       footerLink: [
//         {
//           name: "View Google Assistant Action",
//           url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
//         }
//       ]
//     },

    {
      title: "Best Athelete of the year 2018-2019 ",
      subtitle: "Awarded as the best performer in soccer for two consecutive years 2018,2019.",
      image: require("./assets/images/pwaLogo.webp"),
//       footerLink: [
//         {name: "Certification", url: ""},
//         {
//           name: "Final Project",
//           url: "https://pakistan-olx-1.firebaseapp.com/"
//         }
//       ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
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

const contactInfo = {
  title: emoji("Connect with me"),
  subtitle:
    "Actively looking for opportunities in the domain of software engineering and Cloud Devops.",
  number: "+1-4695705615",
  email_address: "satviksharma457989@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
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
  twitterDetails
};
