// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Selected AI/ML, data science, edge AI, and ICT4D projects aligned with production deployment and applied research roles.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Current role-focused CV for AI/ML Engineer, Data Scientist, AgTech, ICT4D, and mission-aligned technology opportunities.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-install-microsoft-sql-server-on-mac-m2-air-using-docker-and-azure-data-studio",
        
          title: "Install Microsoft SQL Server on Mac M2 Air using Docker and Azure Data...",
        
        description: "Complete guide to setting up MSSQL Server using Docker on Mac M2 with Azure Data Studio and AdventureWorks sample database",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/install-mssql-server-on-mac-m2-using-docker-and-azure-data-studio.md/";
          
        },
      },{id: "post-meditation-habbit",
        
          title: "meditation habbit",
        
        description: "how I started meditation habit using Atomic Habbit&#39;s method",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/meditation-habbit/";
          
        },
      },{id: "post-tweaking-macos-for-1080p-external-display",
        
          title: "tweaking macos for 1080p external display",
        
        description: "command-line for font smoothing in mac os to see crisp text on 1080p external display",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/macos-with-1080p/";
          
        },
      },{id: "post-habbit-stacking-အကြောင်း",
        
          title: "habbit stacking အကြောင်း",
        
        description: "testing article",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/habbit-stacking/";
          
        },
      },{id: "books-ကိုယ်ကျင့်အဘိဓမ္မာ",
          title: 'ကိုယ်ကျင့်အဘိဓမ္မာ',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/KoKyintAbhidhamma/";
            },},{id: "books-the-courage-to-be-disliked",
          title: 'The Courage To Be Disliked',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/TheCourageToBeDisliked/";
            },},{id: "books-atomic-habits",
          title: 'Atomic Habits',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/atomic_habits/";
            },},{id: "books-practical-deep-learning-for-cloud-mobile-and-edge",
          title: 'Practical Deep Learning for Cloud, Mobile and Edge',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/practicaldeeplearning/";
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
          section: "News",},{id: "projects-a2c-myanmar-address-to-coordinates",
          title: 'A2C Myanmar Address-to-Coordinates',
          description: "Transformer-based geospatial NLP system predicting latitude/longitude from Myanmar addresses with a live Streamlit map demo",
          section: "Projects",handler: () => {
              window.location.href = "/projects/a2c_myanmar_geocoding/";
            },},{id: "projects-bean-disease-classification",
          title: 'Bean Disease Classification',
          description: "Stepwise CNN fine-tuning achieving 98.86% test accuracy — MSDS coursework research",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bean_disease_classification/";
            },},{id: "projects-chickpea-fusarium-wilt-detector",
          title: 'Chickpea Fusarium Wilt Detector',
          description: "Hybrid lightweight CNN for on-device plant disease detection — MSc Thesis, Batangas State University (2024–2026)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/chickpea_fusarium_wilt/";
            },},{id: "projects-ml-algorithms-from-scratch",
          title: 'ML Algorithms from Scratch',
          description: "Linear Regression, Logistic Regression, Decision Tree, KNN, and Naive Bayes implemented from scratch using NumPy — MSDS Coursework",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ml_algorithms_from_scratch/";
            },},{id: "projects-mmdt-intro-to-deep-learning-projects",
          title: 'MMDT Intro to Deep Learning Projects',
          description: "Applied deep-learning coursework covering tabular regression, NLP classification, CNN benchmarking, and a separately featured geospatial NLP capstone",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mmdt_deep_learning_projects/";
            },},{id: "projects-shwe-taungthuu",
          title: 'Shwe Taungthuu',
          description: "Gemini 2.5 Flash-powered bilingual agricultural advisory agent for Myanmar farmers — Google Build with AI MMDT 2026",
          section: "Projects",handler: () => {
              window.location.href = "/projects/shwe_taungthuu/";
            },},{id: "projects-wikipedia-web-traffic-prediction",
          title: 'Wikipedia Web Traffic Prediction',
          description: "Comparative time-series forecasting study on 145,000 Wikipedia articles — co-authored research paper under revision",
          section: "Projects",handler: () => {
              window.location.href = "/projects/wikipedia_traffic_prediction/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/tklwin", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/theinkyawlwin", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0006-3761-0365", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=W0FWE4gAAAAJ&hl", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@tklwin1", "_blank");
        },
      },{
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
