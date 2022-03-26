import Head from 'next/head'
import useSWR from 'swr'
import Person from '../../components/Person'
import ChatDemo from './ChatBot'
import Table from './table'
const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {
    const { data, error } = useSWR('/api/people', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <>
            <Head>
                <title>ChatBot</title>
            </Head>

            <div>
                <div className="placeholder">
                    <h1>Lorem ipsum dolor</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <Table />

                {data.map((p, i) => (
                    <Person key={i} person={p} />
                ))}
                
                <ChatDemo />
            </div>
        </>
    )
}