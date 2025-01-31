export default {
  titleTemplate: '%s | مكتب المزيد للمحاماة',
  defaultTitle: 'مكتب المزيد للمحاماة - خدمات قانونية احترافية في المملكة العربية السعودية',
  description: 'مكتب المزيد للمحاماة يقدم خدمات قانونية شاملة في المملكة العربية السعودية. نتخصص في القضايا التجارية، المدنية، والجنائية مع فريق من المحامين ذوي الخبرة.',
  metadataBase: new URL('https://almazyed.law'),
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://almazyed.law/',
    site_name: 'مكتب المزيد للمحاماة',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'مكتب المزيد للمحاماة',
      },
    ],
  },
  twitter: {
    handle: '@almazyedlaw',
    site: '@almazyedlaw',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'محامي, استشارات قانونية, محاماة, قانون سعودي, مكتب محاماة, خدمات قانونية, محامي الرياض',
    },
    {
      name: 'author',
      content: 'مكتب المزيد للمحاماة',
    },
  ],
}
