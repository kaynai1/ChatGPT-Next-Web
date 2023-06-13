import "./styles/globals.scss";
import "./styles/markdown.scss";
import "./styles/highlight.scss";
import { getBuildConfig } from "./config/build";

const buildConfig = getBuildConfig();

export const metadata = {
  title: "橘座AI",
  description: "橘座AI",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#151515" },
  ],
  appleWebApp: {
    title: "橘座AI",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const inlineScript = `
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?59b3a5d408df9621a20b83e7cb2dded9";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();
  `;

  return (
    <html lang="en">
      <head>
        <meta name="version" content={buildConfig.commitId} />
        <link rel="manifest" href="/site.webmanifest"></link>
        <script src="/serviceWorkerRegister.js" defer></script>
        {/* 添加内联的JS代码 */}
        <script
          dangerouslySetInnerHTML={{
            __html: inlineScript,
          }}
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
