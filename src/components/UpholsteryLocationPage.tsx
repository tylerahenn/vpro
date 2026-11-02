import type { Metadata } from "next";
import type { ComponentProps } from "react";
import LocationPageTemplate from "@/components/LocationPageTemplate";

const siteUrl = "https://www.vprousa.com";

export function vproDrivingDirections(origin: string): string {
  const params = new URLSearchParams({
    api: "1",
    origin,
    destination: "298 N Briar Ridge, Woodstock, GA 30189",
    destination_place_id: "ChIJyesV1bRCF2oRxTqYR9l-mAo",
    travelmode: "driving",
  });
  return `https://www.google.com/maps/dir/?${params}`;
}

export function upholsteryLocationMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path },
    twitter: { title, description },
  };
}

type Props = ComponentProps<typeof LocationPageTemplate> & {
  path: string;
  areasServed: string[];
};

export default function UpholsteryLocationPage({ path, areasServed, ...props }: Props) {
  return (
    <>
      <LocationPageTemplate {...props} serviceName="Upholstery" showInlineQuote={false} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${siteUrl}${path}#service`,
            name: props.h1,
            description: props.intro,
            serviceType: "Upholstery",
            url: `${siteUrl}${path}`,
            provider: { "@id": `${siteUrl}/#localbusiness` },
            areaServed: areasServed.map((name) => ({ "@type": "Place", name })),
          }).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
