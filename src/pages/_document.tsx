import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  process.env.PRUEBA11 = "MI PRIMERA CHAMBA"
  console.log(process.env.PRUEBA11)
  return (
    <Html lang="en">
      <Head>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
      </Head>
      <body style={{background: 'rgba(0, 0, 0, .02)'}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
