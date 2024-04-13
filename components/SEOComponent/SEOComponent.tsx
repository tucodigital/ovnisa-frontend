interface SeoComponent {
  meta_title?: string;
  meta_url?: string;
  meta_description?: string;
  meta_image?: any;
}

export default function SeoComponent({
  meta_title,
  meta_url,
  meta_description,
  meta_image,
}: SeoComponent) {
  return (
    <>
      {meta_title ? <title>{meta_title}</title> : null}
      {meta_description ? (
        <meta name="description" content={meta_description} />
      ) : null}
      <meta property="og:title" content={meta_title} />
      {meta_description ? (
        <meta property="og:description" content={meta_description} />
      ) : null}
      {meta_url ? <meta property="og:url" content={meta_url} /> : null}
      <meta property="og:type" content="website" />
      {meta_image ? (
        <meta property="og:image" content={meta_image?.data?.attributes?.url} />
      ) : (
        <meta property="og:image" content="" />
      )}
    </>
  );
}
