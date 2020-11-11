import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';

const Layout = ({ children, title, description, backButton }) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>
        <div className="container">
            <nav>
                {backButton && <span onClick={() => Router.back()} className="back-button">&#x2b05;</span>}
                <Link href="/">
                    <a>
                        <span className="main-title">Hacker Next</span>
                    </a>
                </Link>
            </nav>

            {children}
        </div>

        <style jsx>{`
            .container {
                background: #f6f6ef;
                margin: 0 auto;
                max-width: 800px;
            }
            nav {
                background: #f60;
                padding: 1rem;
            }
            nav > * {
                color: black;
                display: inline-block;
            }
            nav a {
                text-decoration: none;
            }
            nav .main-title {
                font-weight: bold;
            }
            nav .back-button {
                cursor: pointer;
                font-size: 1.0rem;
                padding-right: 1rem;
            }
        `}</style>

        <style global jsx>{`
            body {
                background: white;
                font-family: Verdana, Geneva, sans-serif;
            }
        `}</style>
    </div>
)

export default Layout;