export interface SocialLink {
  name: string;
  url: string;
  class: string;
  hoverColor: string;
  title?: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Cristality0",
    class: "github",
    hoverColor: "#B6BFB8",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/jovaraszigmantas/",
    class: "linkedin",
    hoverColor: "#0A66C2",
  },
  {
    name: "Strava",
    url: "https://www.strava.com/athletes/133091337",
    class: "strava",
    hoverColor: "#FC4C02",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/jovaras.z",
    class: "instagram",
    hoverColor: "#E1306C",
  },
  {
    name: "kur.zigmantas",
    url: "https://kur.zigmantas.com",
    class: "kurzigmantas",
    hoverColor: "#B6BFB8",
    title: "Friends use this to find me",
  },
];
