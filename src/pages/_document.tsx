import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocuments extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/icons/logoweb.svg" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&family=Rajdhani:wght@500;600&display=swap"
            rel="stylesheet"
          />
          <meta name="google-site-verification" content="Jh3KmIzmEL9lwcd_XfNK-NqqPu2b1JdnthjUxg46fKM" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
