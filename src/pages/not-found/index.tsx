import { Helmet } from "react-helmet";

const NotFoundPage = () => {
  const TITLE = "Studio EDDA - 404";

  return (
    <main className="page__404">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
    </main>
  );
};

export default NotFoundPage;
