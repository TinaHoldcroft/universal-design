//import Head from 'next/head';
import Generator from './Generator';

export default function GeneratorPage() {

    return (
        <>
            <img className="generator-background" src='/background.svg' />
            <div className="generator-container">
                {/*<img src='/woman-blind.svg' alt='' />*/}
                <Generator />
            </div>
        </>
    )
}