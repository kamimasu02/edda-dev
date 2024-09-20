interface Meta {
  charset: string;
  title: string;
  description: string;
  viewport: string;
  url: string;
  author?: string;
  themeColor?: string;
  openGraph?: OpenGraph;
  twitter?: Twitter;
}

interface OpenGraph {
  title: string;
  description: string;
  image: string;
  url: string;
  type: string;
  locale: string;
}

interface Twitter {
  card: string;
  title: string;
  description: string;
  image: string;
  site: string;
  creator?: string;
}

const META: Meta = {
  charset: "utf-8",
  title: "Studio EDDA",
  description: "스튜디오 에다 - DXI 프로젝트를 진행하고 있습니다.",
  viewport: "width=device-width, initial-scale=1.0",
  url: "",
  openGraph: {
    title: "",
    description: "",
    image: "",
    url: "",
    type: "website",
    locale: "ko-kr",
  },
  twitter: {
    card: "",
    title: "",
    description: "",
    image: "",
    site: "",
  },
};

export default META;
