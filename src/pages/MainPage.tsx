import { Helmet } from "react-helmet";

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
      </Page>
    </PageWrapper>
  );
};

export default MainPage;
