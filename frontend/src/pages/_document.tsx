import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/static/favicons/logo.png"
                    />
                    <link rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap">
                    </link>

                    <link rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=ABeeZee&display=swap">
                    </link>

                    <meta
                        name="description"
                        content="Solwalla"
                    />

                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="Solwalla" />
                    <meta name="twitter:creator" content="Solwalla Team" />
                    <meta name="twitter:title" content="Solwalla" />
                    <meta
                    name="twitter:description"
                    content="Solana’s community curated NFT Mural/Billboard"
                    />
                    <meta name="twitter:image" content="/static/logo.png" />

                    <title>SOLWALLA</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
