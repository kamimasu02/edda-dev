import { Helmet } from "react-helmet";

import SectionTitle from "@components/commons/section-title";

import type { FC } from "react";

const MainPage: FC = () => {
  const TITLE = "Studio EDDA - 메인";

  return (
    <main className="page__main">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          rowGap: "16px",
        }}
      >
        <SectionTitle title="hello" />
        <SectionTitle title="Studio EDDA" subTitle="About" direction="left" />
        <SectionTitle title="EDDA Story" subTitle="Story" direction="right" />
      </div>
    </main>
  );
};

export default MainPage;
