import { Helmet } from "react-helmet";

import TypoSection from "@components/main/TypoSection";
import SynopsysSection from "@components/main/SynopsysSection";

import { PageWrapper, Page } from "@styles/main/index.style";

import type { FC } from "react";

const MainPage: FC = () => {
  const TITLE = "Studio EDDA - 메인";

  return (
    <PageWrapper>
      <Page>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
        <TypoSection />
        <SynopsysSection />
      </Page>
    </PageWrapper>
  );
};

export default MainPage;
