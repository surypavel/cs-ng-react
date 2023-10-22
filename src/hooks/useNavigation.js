const navigation = {
  en: [
    {
      title: "Home",
      link: "/en/",
    },
    // {
    //   title: "About us",
    //   link: "/en/about",
    // },
    // {
    //   title: "Pricing",
    //   link: "/en/pricing",
    // },
    // {
    //   title: "Blog",
    //   link: "/en/blog",
    // },
    // {
    //   title: "Contact",
    //   link: "/en/contact",
    // },
  ],
  cs: [
    {
      title: "Úvod",
      link: "/",
    },
    {
      title: "Kdo jsme",
      link: "/about",
    },
    {
      title: "Ceník",
      link: "/pricing",
    },
    {
      title: "Blog",
      link: "/blog",
    },
    {
      title: "Kontakt",
      link: "/contact",
    },
  ],
};

export const useNavigation = (language) => {
  return {
    navigation: navigation[language ?? 'cs'],
  };
};
