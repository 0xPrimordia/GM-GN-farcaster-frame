import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content={`Thirdweb Frame`} />
        <meta property="og:image" content={`https://7f02867cd22acd60803070fbbcac9bc7.ipfscdn.io/ipfs/bafybeidyzzuf72qjuge7zrbjvupve6kl4surrsbayi6a2k7jqzo3hvgow4/GM.gif`} />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content={`https://7f02867cd22acd60803070fbbcac9bc7.ipfscdn.io/ipfs/bafybeidyzzuf72qjuge7zrbjvupve6kl4surrsbayi6a2k7jqzo3hvgow4/GM.gif`} />
        <meta property="fc:frame:post_url" content={`https://7f02867cd22acd60803070fbbcac9bc7.ipfscdn.io/ipfs/bafybeidyzzuf72qjuge7zrbjvupve6kl4surrsbayi6a2k7jqzo3hvgow4/GM.gif`} />
        <meta property="fc:frame:button:1" content="Get started" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
