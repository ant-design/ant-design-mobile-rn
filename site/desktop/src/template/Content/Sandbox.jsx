export default (sourceCode, doc) => {
  const sandboxName = `${doc.meta.title}`;
  const parameters = {
    files: {
      'public/index.html': {
        content: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="theme-color" content="#000000">
  <!--
    manifest.json provides metadata used when your web app is added to the
    homescreen on Android. See https://developers.google.com/web/fundamentals/web-app-manifest/
  -->
  <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
  <!--
    Notice the use of %PUBLIC_URL% in the tags above.
    It will be replaced with the URL of the public folder during the build.
    Only files inside the public folder can be referenced from the HTML.

    Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
    work correctly both with client-side routing and a non-root public URL.
    Learn how to configure a non-root public URL by running npm run build.
  -->
  <title>React App</title>
  <style>
  @font-face {
    src: url('https://unpkg.com/@ant-design/icons-react-native@1.0.2/fonts/antoutline.ttf'    );
    font-family: antoutline;
  }
  </style>
</head>
<body>
  <noscript>
    You need to enable JavaScript to run this app.
  </noscript>
  <div id="root"></div>
</body>
</html>
`,
      },
      'src/index.js': {
        content: `

import { AppRegistry } from "react-native";
import App from "./App";

AppRegistry.registerComponent("App", () => App);

AppRegistry.runApplication("App", {
rootTag: document.getElementById("root")
});
`,
      },
      'src/App.js': {
        content: sourceCode,
      },
      'package.json': {
        content: {
          version: '0.2.0',
          scripts: {
            test: 'react-scripts test',
            start: 'react-scripts start',
            eject: 'react-scripts eject',
            build: 'react-scripts build',
          },
          private: true,
          name: sandboxName,
          eslintConfig: {
            extends: 'react-app',
          },
          dependencies: {
            '@ant-design/react-native': '^3.0.0',
            'antd-mobile-rn-scripts': 'latest',
            react: '^16.6.0',
            'react-art': '^16.6.0',
            'react-dom': '^16.6.0',
            'react-native-web': '^0.9.6',
          },
          browserslist: [
            '>0.2%',
            'not dead',
            'not ie <= 11',
            'not op_mini all',
          ],
        },
      },
    },
  };
  return parameters;
};
