import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta httpEquiv="Content-Language" content="en" />
          <meta httpEquiv="Content-Script-Type" content="text/javascript" />
          <meta httpEquiv="Content-Style-Type" content="text/css" />
          <meta httpEquiv="imagetoolbar" content="no" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta property="og:site_name" content="Your Site Name" />
          <meta property="og:site" content="https://example.com" />
          <meta property="og:title" content="Your Site Title"/>
          <meta property="og:description" content="Your site description here" />
          <meta property="og:image" content="https://example.com/favicon-32x32.png" />
          <meta property="og:url" content="https://example.com" />
          <meta property="og:type" content="article" />
          <meta name="description" content="Your site description here" />
          <meta name="author" content="Daniel Vorhauer, hexerei software creations" />
          <meta name="generator" content="Rendered by Next.js with TailwindCSS" />
          <meta name="keywords" lang="en" content="next, nextjs, tailwind, tailwindcss, heroicons" />
          <meta name="date" content="2021-05-05 18:10:00 +0100" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="application-name" content="Your Site Title" />
          <meta name="msapplication-tooltip" content="Your site description here" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
          <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument