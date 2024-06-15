export const personalInfo = {
  name: "Zheyuan (Andy) Ma",
  profilePicture: "/profile.jpeg", //optional
  role: "Ph.D. Student",
  university: "SUNY University at Buffalo",
  universityWebsite: "https://www.buffalo.edu/",
  socialMedia: [
    { name: "Email", url: "mailto:zheyuanm@buffalo.edu" },
    { name: "Scholar", url: "https://scholar.google.com/citations?user=3ZKnS6EAAAAJ&hl=en" },
    {
      name: "GitHub",
      url: "https://github.com/monsterandy",
    },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/zheyuan-ma-ab3189193/" },
  ],
};

export const websiteInfo = {
  title: personalInfo.name,
  description: "Ph.D. Student",
  // teaserImage: "/teaser.jpg",
};

export const navigation = [
  { name: "Projects", route: "/projects" },
  { name: "Publications", route: "/publications" },
  { name: "CV", route: "/cv.pdf" },
  // { name: "About", route: "/about" },
  // { name: "News", route: "/news" },
];

export const homepageSection = {
  AboutSection: true,
  SelectedPublicationsSection: true,
  ProjectSection: false,
  NewsSection: true,
};
