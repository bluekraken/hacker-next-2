import { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import Link from 'next/link';
import Layout from '../components/Layout';
import StoryList from '../components/StoryList';

class Index extends Component {

    static async getInitialProps({ req, res, query }) {
        let stories;
        let page;

        try {
            page = Number(query.page) || 1;
            const response = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`);
            stories = await response.json();
        } catch (error) {
            console.log(error);
            stories = [];
        }

        return { page, stories };
    }

    render() {
        const { page, stories } = this.props;

        if (stories.length === 0) {
            return <Error statusCode={503} />
        }

        return (
            <Layout title="Hacker Next" description="A hacker news clone made with Next.js">
                <StoryList stories={stories}/>

                <footer>
                    <Link href={`/?page=${page + 1}`}>
                        <a>Next Page ({page + 1})</a>
                    </Link>
                </footer>

                <style jsx>{`
                    footer {
                        padding: 1rem;
                    }
                    footer a {
                        color: black;
                        font-weight: bold;
                        text-decoration: none;
                    }
                `}</style>
            </Layout>
        )
    }
}

export default Index;