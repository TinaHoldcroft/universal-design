import Head from 'next/head'
import useSWR from 'swr'
import Person from '../components/Person'
import MasterForm from './MasterForm/index'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {
    const { data, error } = useSWR('/api/people', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <>
            <Head>
                <title>Template</title>
            </Head>

            <>
                <MasterForm/>
                <div>
                    {data.map((p, i) => (
                        <Person key={i} person={p} />
                    ))}
                </div>
            </>
        </>
    )
}