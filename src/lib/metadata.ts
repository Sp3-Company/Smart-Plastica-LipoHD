import type { Metadata } from "next"
import { SITE } from "./constants"

type PageMetadataOptions = {
  title?: string
  description?: string
  path?: string
  image?: string
  noIndex?: boolean
}

export function createMetadata({
  title,
  description,
  path = "",
  image = "/og-image.jpg",
  noIndex = false,
}: PageMetadataOptions = {}): Metadata {
  const pageTitle = title
    ? `${title} | ${SITE.name} ${SITE.unit}`
    : `${SITE.name} ${SITE.unit} - ${SITE.slogan}`

  const pageDescription = description || SITE.description

  const url = `https://${SITE.domain}${path}`

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(`https://${SITE.domain}`),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: `${SITE.name} ${SITE.unit}`,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${SITE.name} - ${SITE.slogan}`,
        },
      ],
      locale: "pt_BR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  }
}
