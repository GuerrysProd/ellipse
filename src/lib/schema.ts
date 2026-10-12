import { site } from '@/content/site';
import type { Faq } from '@/content/types';

export type JsonLdData = Record<string, unknown>;

const ORG_ID = `${site.url}/#cabinet`;
const FOUNDER_ID = `${site.url}/#fondateur`;

export const absoluteUrl = (path: string) => new URL(path, site.url).href;

const areaServed = () => site.areaServed.map((name) => ({ '@type': 'AdministrativeArea', name }));

/** Entité du cabinet, émise sur toutes les pages. InsuranceAgency hérite de FinancialService et de LocalBusiness. */
export function organizationSchema(): JsonLdData {
  const { address } = site;
  const hasAddress = Boolean(address.streetAddress && address.postalCode);
  return {
    '@context': 'https://schema.org',
    '@type': 'InsuranceAgency',
    '@id': ORG_ID,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    slogan: site.tagline,
    description: site.description,
    telephone: site.phone.e164,
    email: site.email,
    ...(hasAddress && { address: { '@type': 'PostalAddress', ...address } }),
    areaServed: areaServed(),
    founder: { '@type': 'Person', '@id': FOUNDER_ID, name: site.founder.name, jobTitle: site.founder.role, worksFor: { '@id': ORG_ID } },
    identifier: [
      { '@type': 'PropertyValue', propertyID: 'ORIAS', value: site.legal.orias },
      { '@type': 'PropertyValue', propertyID: 'SIRET', value: site.legal.siret.replaceAll(' ', '') },
    ],
    sameAs: site.social.map((network) => network.url),
  };
}

export function breadcrumbSchema(items: readonly { name: string; path: string }[]): JsonLdData {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: absoluteUrl(item.path) })),
  };
}

export function faqSchema(faq: readonly Faq[]): JsonLdData {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  };
}

export function serviceSchema(input: { name: string; description: string; path: string }): JsonLdData {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absoluteUrl(input.path)}#service`,
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    provider: { '@id': ORG_ID },
    areaServed: areaServed(),
  };
}

export function articleSchema(input: { title: string; description: string; path: string; date: string }): JsonLdData {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.title,
    description: input.description,
    datePublished: input.date,
    dateModified: input.date,
    mainEntityOfPage: absoluteUrl(input.path),
    author: { '@type': 'Person', '@id': FOUNDER_ID, name: site.founder.name, url: absoluteUrl(`/cabinet/${site.founder.slug}`) },
    publisher: { '@id': ORG_ID },
  };
}
