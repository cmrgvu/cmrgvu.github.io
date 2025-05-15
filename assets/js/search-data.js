// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-what-we-do",
          title: "What We Do",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/What%20We%20Do/";
          },
        },{id: "nav-study",
          title: "Study",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/study/";
          },
        },{id: "nav-team",
          title: "Team",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/team/";
          },
        },{id: "dropdown-regulatory-design",
              title: "Regulatory Design",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/regulatorydesign/";
              },
            },{id: "dropdown-law-and-economics",
              title: "Law and Economics",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/lawandeconomics/";
              },
            },{id: "dropdown-utilities-amp-infrastructure-regulation",
              title: "Utilities &amp; Infrastructure Regulation",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/utilitiesandinfrastructure/";
              },
            },{id: "dropdown-financial-regulation",
              title: "Financial Regulation",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/financialregulation/";
              },
            },{id: "dropdown-regulating-innovation-amp-technology",
              title: "Regulating Innovation &amp; Technology",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/regulatinginnovationandtechnology/";
              },
            },{id: "dropdown-social-amp-environmental-regulation",
              title: "Social &amp; Environmental Regulation",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/socialandenvironmentalregulation/";
              },
            },{id: "nav-media",
          title: "Media",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/media/";
          },
        },{id: "nav-contact-us",
          title: "Contact Us",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Contact%20Us/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
