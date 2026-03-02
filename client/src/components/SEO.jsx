import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
}) => {
  const siteTitle = "Vijay Reddy Vennam";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const siteDescription =
    "Vijay Reddy Vennam - A leader in leadership, social impact, and innovation in South India.";
  const metaDescription = description || siteDescription;
  const siteKeywords =
    "Vijay Reddy Vennam, Leadership, Social Impact, South India, Innovation, Big TV";
  const metaKeywords = keywords ? `${keywords}, ${siteKeywords}` : siteKeywords;

  const siteUrl = window.location.origin;
  const metaUrl = url ? `${siteUrl}${url}` : window.location.href;
  const metaImage = image || `${siteUrl}/vijay-reddy.jpg`;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {/* Canonical Link */}
      <link rel="canonical" href={metaUrl} />
    </Helmet>
  );
};

export default SEO;
