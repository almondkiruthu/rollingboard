type Siteconfig = {
  name: string;
  description: string;
  url: string;
  links: {
    github: string;
  };
};

export const siteConfig: Siteconfig = {
  name: "Rollingboard",
  description:
    "An open-source project management tool powered by Next.js for an efficient and collaborative workflow.",
  url: "http://localhost:3000/",
  links: {
    github: "https://github.com/almondkiruthu/rollingboard",
  },
};
