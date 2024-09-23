import { Helmet } from "react-helmet";

import { PageWrapper, Page } from "@styles/intro/index.style";

import type { FC } from "react";

const IntroPage: FC = () => {
  const TITLE = "Studio EDDA - 스튜디오 소개";

  return (
    <PageWrapper>
      <Page>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
      </Page>
    </PageWrapper>
  );
};

export default IntroPage;
