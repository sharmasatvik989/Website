/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Satvik Sharma",
  title: "Satvik Sharma",
  subTitle: emoji(
    "Software Engineer with experience of working on back-end using Java and Spring for Rest API Development with deployment to cloud technologies such as Azure, AWS with strong proficiency in software development, database management, and collaborative problem-solving in Agile environments."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1y1wxQh6Lz-lt4qdecVJCQJvWh1-Av9oo/view?usp=sharing",// Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sharmasatvik989",
  linkedin: "https://www.linkedin.com/in/sharmasatvik/",
  gmail: "satviksharma457989@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "A little about myself",
  subTitle: "Working as a Software Engineer 3 for Sam's Club.",
  skills: [
    emoji(
      "⚡ Pioneered backend architecture improvements for Sam's Club for higher savings."
    ),
    emoji("⚡ Software development using python and Java to increase the robustness and efficiency."),

  ],
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

    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
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
      descBullets: [
        "Graduate Courses - Cloud Computing, Secure Progrmming, Advanced database and Software engineering."
      ] 
    },
    {
      schoolName: "Amity University",
      logo: require("./assets/images/amity.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2016 - August 2020",
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
      Stack: "Azure",
      progressPercentage: "70%"
    },
    {
      Stack: "Java",
      progressPercentage: "70%"
    },
    {
      Stack: "Terraform",
      progressPercentage: "60%"
    },
    {
      Stack: "C/C++",
      progressPercentage: "60%"
    },
    {
      Stack: "Spring",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer 3",
      company: "Walmart Global Tech",
      companylogo: require("./assets/images/walmart.png"),
      date: "February 2023-Present",
      desc: "Developed back-end microservices using Java and Spring for Sam’s Club, integrating computer vision and machine learning models recommendation to identify and recommend shrink items, contributing to an estimated shrink reduction of 200 million. Engineered robust, high-performing architectures that substantially increased operational efficiency and user satisfaction with collaborative teamwork"
    },
    {
      role: "Software Engineer Intern",
      company: "National Informatics Center",
      companylogo: require("./assets/images/nic.png"),
      date: "May 2019 – August 2019",
      desc: "Integrated AWS cloud infrastructure using Jenkins and Kubernetes, enhancing development efficiency by 26% for a national cloud serving public schools and government entities in India.",

    }
  ]
};


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
      projectDesc: "Developed a full-stack web application using Flask to serve a REST API that captures data from over 5,000 earthquakes, with visualizations rendered using ChartJs.",

    },
    {
      image: require("./assets/images/meta.png"),
      projectName: "Antiviruses",
      projectDesc: "Conducted a Metasploit-based project, generating 2,500 .sh payloads to evaluate the efficacy of various antivirus programs. Developed an automated API to execute virus checks and used Matplotlib to visualize the comparative effectiveness of the antivirus solutions.",

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
        "First Indian Origin to be appointed as CFO for the Cyber Security Club at University of Texas at Arlington",
      image: require("./assets/images/codeInLogo.webp"),

    },

    {
      title: "Best Athelete of the year 2018-2020 ",
      subtitle: "Awarded as the best performer in soccer for two consecutive years 2018,2019.",
      image: require("./assets/images/pwaLogo.webp"),

    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "",
      description:
        ""
    },
    {
      url: "",
      title: "",
      description:
        ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [
    ""
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
