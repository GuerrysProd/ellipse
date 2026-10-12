import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import Script from 'next/script';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { JsonLd } from '@/components/JsonLd';
import { MobileActionBar } from '@/components/MobileActionBar';
import { RevealObserver } from '@/components/RevealObserver';
import { isIndexable, site } from '@/content/site';
import { organizationSchema } from '@/lib/schema';
import './globals.css';

// Titres dans l'esprit du logotype (serif fine), texte courant géométrique et très lisible.
const serif = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500', '600'], style: ['normal', 'italic'], variable: '--font-cormorant', display: 'swap' });
const sans = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
  // Tant que le site n'est pas validé, aucune page ne doit être indexée.
  robots: isIndexable ? undefined : { index: false, follow: false },
  icons: { icon: '/favicon.svg' },
};

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

// Consent Mode v2 : tout est refusé par défaut, le bandeau de consentement lèvera les refus.
const gtmScript = (id: string) => `
window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});
window.dataLayer.push({'gtm.start':Date.now(),event:'gtm.js'});
var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtm.js?id='+encodeURIComponent(${JSON.stringify(id)});document.head.appendChild(s);`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // La classe « js » est posée avant l'affichage par le script ci-dessous : React ne doit pas la signaler comme un écart.
    <html lang="fr" className={`${serif.variable} ${sans.variable}`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="pb-20 lg:pb-0">
        {/* Signale la présence de JavaScript : sans lui, les animations d'apparition ne masquent rien. */}
        <Script id="js-flag" strategy="beforeInteractive">{`document.documentElement.classList.add('js')`}</Script>
        <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-full focus:bg-paper focus:px-5 focus:py-2 focus:shadow-lift">
          Aller au contenu
        </a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <MobileActionBar />
        <RevealObserver />
        <JsonLd data={organizationSchema()} />
        {gtmId && (
          <Script id="gtm" strategy="afterInteractive">
            {gtmScript(gtmId)}
          </Script>
        )}
      </body>
    </html>
  );
}
