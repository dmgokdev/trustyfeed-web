import { Helmet } from "react-helmet";

function SEO({ title = "Default Title", description = "Default description", keywords = "", canonical = "" }) {
  return (
    <Helmet>
      <title>{title} | TrustyFeedback </title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
}

export default SEO;
