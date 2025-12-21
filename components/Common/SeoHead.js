import Head from "next/head";

const siteUrl = "https://akaaslasermedspa.com";

export default function SeoHead({
  title,
  description,
  canonical = "",
  keywords,
}) {
  const url = `${siteUrl}${canonical || ""}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="AKAAS Laser MedSpa" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="geo.region" content="US-FL" />
      <meta name="geo.placename" content="Orlando" />
      <meta name="geo.position" content="28.5846472;-81.2071182" />
      <meta name="ICBM" content="28.5846472, -81.2071182" />
    </Head>
  );
}
