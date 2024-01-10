import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Script id='theme-switch' strategy='beforeInteractive'>
          {`
            const darkTheme =
              localStorage.theme === 'dark' ||
              (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches);

            document.documentElement.classList.toggle('dark', darkTheme);
          `}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
