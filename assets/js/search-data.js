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
          description: "A growing collection of your cool projects.",
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
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-install-mssql-server-on-mac-m2-using-docker-and-azure-data-studio-md",
        
          title: "Install Mssql Server On Mac M2 Using Docker And Azure Data Studio.md",
        
        description: "",
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
          section: "News",},{
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
