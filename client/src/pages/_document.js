import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx);
      return { ...initialProps };  
  }

  render() {
    return (
      <Html lang="en-US">
        <Head />
          <link rel="shortcut icon" href="/public/tools-and-utensils.svg" />
        <body>
          <Main />
          <NextScript />
          <div id="modal-root"></div>
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
