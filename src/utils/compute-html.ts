import { config } from "@/config/config";
interface ComputeHtmlParameters {
  postType: string;
  content: string;
  imagePath: string;
}

export const computeHtml = ({
  imagePath,
  postType,
  content,
}: ComputeHtmlParameters) => {
  return `<!DOCTYPE html>
    <html>
      <head>
        <title>${content}</title>
        <meta property="og:title" content="Thirdweb Frames" />
        <meta
          property="og:image"
          content="${imagePath}"
        />
        <meta property="fc:frame" content="vNext" />
        <meta
          property="fc:frame:image"
          content="${imagePath}"
        />
        <meta
          property="fc:frame:post_url"
          content="${config.hostUrl}api/mint?type=${postType}"
        />
        <meta property="fc:frame:button:1" content="${content}" />
      </head>
      <body>
        <p>${content}</p>
      </body>
    </html>`;
};
