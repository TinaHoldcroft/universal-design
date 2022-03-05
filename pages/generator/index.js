//import Head from 'next/head';
import Generator from './Generator';

export default function Home() {

    return (
        <>
        <img src='/background.svg'/>
            <div className="generator-container">
                <Generator/>
            </div>
        </>
    )
}