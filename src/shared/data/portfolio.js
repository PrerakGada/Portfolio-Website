/* Change this file to get your personal Portfolio */

// To change portfolio colors globally, edit the CSS variables in src/index.css

import emoji from "react-easy-emoji";
import splashAnimation from "../../assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Import images for education
import aceImage from "../../assets/images/ace.jpeg";
import sbmpImage from "../../assets/images/sbmp.jpeg";

// Import images for work experience
import engazeImage from "../../assets/images/engaze.png";
import freelancerImage from "../../assets/images/freelancer.jpeg";
import gdscImage from "../../assets/images/gdsc.png";
import ieeeLogoImage from "../../assets/images/ieee-logo.jpeg";
import expetcImage from "../../assets/images/expetc.jpeg";
import citjoImage from "../../assets/images/citjo.png";
import hbImage from "../../assets/images/hb.jpg";

// Import images for big projects
import boultImage from "../../assets/images/boult.png";
import netajiappImage from "../../assets/images/netajiapp.jpeg";

// Import images for achievements
import kjsceImage from "../../assets/certificates/kjsce.jpeg";
import unscriptRookiesImage from "../../assets/certificates/unscript_rookies.png";
import spitImage from "../../assets/certificates/spit.png";
import loc4Image from "../../assets/certificates/loc4.png";
import iotPaperImage from "../../assets/certificates/iot_paper.png";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Prerak Gada",
  title: "Heyllo, I'm Prerak Gada",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with Flutter  / Reactjs / Nodejs / Django and some other cool libraries and frameworks."
  ),
  resumeLink: "https://prerakgada.in/resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/PrerakGada",
  linkedin: "https://www.linkedin.com/in/prerakgada/",
  gmail: "mail@prerakgada.in",
  // gitlab: "https://gitlab.com/prerakgada07",
  // facebook: "https://www.facebook.com/prerak.gada.7",
  medium: "https://medium.com/@prerakgada",
  // stackoverflow: "https://stackoverflow.com/users/12530978/prerak",
  twitter: "https://twitter.com/prerakgada",
  instagram: "https://www.instagram.com/prerakgada",
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
    // {
    //   skillName: "Flutter",
    //   fontAwesomeClassname: "./assets/skills/flutter.svg",
    //   logo: require("../../assets/skills/flutter.svg")
    // },
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
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
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
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [

    {
      schoolName: "University of Mumbai",
      logo: aceImage,
      subHeader: "B.E. in Electronics and Computer Science",
      duration: "October 2022 - May 2024 (Dropped Out)",
      desc: "",
      descBullets: [
        "GDSC App Lead and IEEE Techithon Tech Head",
        "Organised a 24 hour hackathon for 100+ participants for the first time in college's history",
        "Led the technical team of 100+ members to organize various technical events and projects for the college's annual TechFest",
        "Participated in Technoxian 2023, World's largest Robotics competition held in IIT Delhi"
      ]
    },
    {
      schoolName: "Shri Bhagubhai Mafatlal Polytechnic",
      logo: sbmpImage,
      subHeader: "Diploma in Computer Science Engineering",
      duration: "August 2019 - July 2022",
      desc: "Class Representative and SIH Student Coordinator",
      descBullets: [
        "Participated in Smart India Hackathon 2022",
        "Participated in various hackathons and won prizes",
        "Volunteered at Multicon 2020 Hackathon and other tech events"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
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
      role: "Founder and CEO",
      company: "Engaze",
      companylogo: engazeImage,
      date: "June 2024 - Present",
      desc: "Developing Full Stack Web and Mobile Applications for clients",
      descBullets: [
        "Managing Client Relations",
        "Developing and Maintaining Web and Mobile Applications",
        "Working on a variety of projects using different technologies",
      ]
    },
    {
      role: "Software Development Freelancer",
      company: "Freelancing",
      companylogo: freelancerImage,
      date: "April 2023 - July 2024",
      desc: "Developing Full Stack Web and Mobile Applications for clients",
      descBullets: [
        "Managing Client Relations",
        "Developing and Maintaining Web and Mobile Applications",
        "Working on a variety of projects using different technologies",
      ]
    },
    {
      role: "Google Developer Student Club",
      company: "App Lead",
      companylogo: gdscImage,
      date: "Aug 2023 - June 2024",
      desc: "Leading a team of flutter developers to develop robust mobile application projects for the community",
      descBullets: [
        "Teaching and guiding the team of student developers",
        "Taking sessions on various topics related to flutter and mobile application development",
        "Organising events and workshops for the community",
      ]
    },
    {
      role: "IEEE Techithon 2023",
      company: "Techinical Head",
      companylogo: ieeeLogoImage,
      date: "Aug 2023 - June 2024",
      desc: "Leading the technical team of 100+ members to organize various technical events and projects for the college's annual TechFest",
      descBullets: [
        "Organising a 24 hour hackathon for 150+ participants for the first time in college's history",
        "Making 10+ Hardware/Software projects for the college's annual TechFest",
        "Managing the technical team and guiding them to make projects and organize events",
      ]
    },
    {
      role: "IoT Systems Developer Intern",
      company: "ExperientialEtc",
      companylogo: expetcImage,
      date: "April 2023 - Sep 2023",
      desc: "Working on IoT based projects using Arduino, Raspberry Pi and other microcontrollers",
      descBullets: [
        "Developing IoT based projects for clients",
        "Customising exisiting IoT products and replacing their controllers with our own"
      ]
    },

    {
      role: "Flutter Developer Lead",
      company: "CitJo",
      companylogo: citjoImage,
      date: "April 2022 - Sep 2022",
      desc: "Developing a mobile application for a startup using Flutter and AWS",
      descBullets: [
        "Learning and implementing Flutter and AWS on a live project",
        "Leading a team of developer interns and designers to develop the application",
        "Exploring the market of mobile applications and Flutter"
      ]
    },
    {
      role: "Business Operations and Digital Marketing Specialist",
      company: "hungry brain",
      companylogo: hbImage,
      date: "June 2020 - Present",
      desc: "Fueling the success of our family-owned company through innovative digital strategies and operational excellence.",
      descBullets: [
        "Managing the company's social media accounts and website",
        "Developing and implementing digital marketing strategies",
        "Managing the company's operations and customer relations",
        "Learning about business operations and product development",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: boultImage,
      projectName: "Boult Audio",
      projectDesc: "All in one Fitness Smart Watch App for India's fastest growing wearable brand",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://boultaudio.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: netajiappImage,
      projectName: "Netaji: Political Poster Maker App",
      projectDesc: "Netaji Political Poster Maker helps you to create eye-catching festival poster maker, festival banners, or political campaign materials, all at one place",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://netajiapp.com/"
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
      title: "Winner of KJSCE Hacks 7.0",
      subtitle:
        "1st place at KJSCE Hacks 7.0, 24-hour hackathon conducted by K.J. Somaiya College of Engineering on 1st-2nd April 2023",
      image: kjsceImage,
      imageAlt: "Prerak Gada KJSCE Hacks 7.0 Certificate",
      footerLink: [
        // {
        //   name: "View Google Assistant Action",
        //   url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        // }
      ]
    },
    {
      title: "Winner of Unscript Rookies Hackathon",
      subtitle:
        "1st place in App Domain of Unscript Rookie's Hackathon 2023 Organised By Fr. Conceicao Rodrigues College Of Engineering On 11th-12th February 2023.",
      image: unscriptRookiesImage,
      imageAlt: "Prerak Gada Unscript Rookies Hackathon Certificate",
      footerLink: [
      ]
    },
    {
      title: "Runner Up of S.P.I.T. Hackathon 2023 ",
      subtitle: "2nd place at S.P.I.T. Hackathon 2023, 24-hour hackathon conducted by Sardar Patel Institute of Technology on 4th-5th February 2023",
      image: spitImage,
      imageAlt: "Prerak Gada S.P.I.T. Hackathon Certificate",
      footerLink: [
        // { name: "Certification", url: "" },
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },
    {
      title: "Runner Up of LOC 4.0 Hackathon",
      subtitle:
        "2nd place at LOC 4.0, 24-hour hackathon conducted by DJSCE ACM Student Chapter on 12th-13th March 2022",
      image: loc4Image,
      imageAlt: "Prerak Gada LOC 4.0 Certificate",
      footerLink: [
        // {
        //   name: "View Google Assistant Action",
        //   url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        // }
      ]
    },
    {
      title: "Paper Publication: Fundamentals of IoT",
      subtitle:
        "Published a research paper on Fundamentals of IoT (Internet of Things) in International Journal of Innovative Research in Computer Science and Engineering (IJIRCSE)",
      image: iotPaperImage,
      imageAlt: "Prerak Gada IoT Paper Publication Certificate",
      footerLink: [
        {
          name: "View Paper Abstract",
          url: "https://ijarsct.co.in/A2201.pdf"
        }
      ]
    },

  ],
  display: true // Set false to hide this section, defaults to true
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
      title: "Workshop on Flutter App Development",
      subtitle: "Hands on workshop on Flutter App Development from scratch",
      slides_url: "https://prerakgada.in/flutter.pdf",
      // event_url: ""
    },
    {
      title: "Freelancing from Scratch",
      subtitle: "Session on Freelancing and how to get started with it",
      slides_url: "https://prerakgada.in/freelance.pdf",
      // event_url: ""
    },
    {
      title: "Exploring Computer Science Domains",
      subtitle: "Session on Computer Science Essential Domains and Subjects for FE and SE students",
      slides_url: "https://prerakgada.in/explore.pdf",
      event_url: "https://gdsc.community.dev/events/details/developer-student-clubs-atharva-college-of-engineering-mumbai-presents-session-on-1-computer-science-essentials-2-freelancing-in-web-and-the-future-of-startups/"
    },
    {
      title: "Foundations and Beyound",
      subtitle: "Workshop on Computer Science Essential Domains and Subjects for TE and BE students",
      slides_url: "https://prerakgada.in/explore.pdf",
      event_url: "https://atharvacoe.ac.in/wp-content/uploads/ECS-Dept-workshop-Report-23-08-2023.pdf"
    },
    {
      title: "Workshop on Django REST Framework",
      subtitle: "Session on Django REST Framework for Diploma students",
      slides_url: "https://prerakgada.in/django.pdf",
      // event_url: ""
    },
  ],
  display: true // Set false to hide this section, defaults to true
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
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+91-9224598850",
  email_address: "mail@prerakgada.in"
};

// Twitter Section

const twitterDetails = {
  userName: "prerakgada", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  achievementSection, bigProjects, blogSection, contactInfo, educationInfo, greeting, illustration, isHireable, openSource, podcastSection, skillsSection, socialMediaLinks,
  splashScreen, talkSection, techStack, twitterDetails, workExperiences
};

