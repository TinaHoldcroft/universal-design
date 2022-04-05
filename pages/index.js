import Head from 'next/head'
import useSWR from 'swr'
import Background from '../components/background'
import BTN from '../components/btn'
import Campaign from '../components/campaign'
import Card from '../components/card'
import Loader from '../components/loader'
import Tile from '../components/tile'
import Form from './form/form'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {
    const { data, error } = useSWR('/api/people', fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <Loader />

    return (
        <>
            <Head>
                <title>Universal Design</title>
            </Head>

            <>
                <Background />
                <div className='hero-index'>
                    <div className='txt'>
                        <h1>Accessible Design for Websites</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
                        <div className='btn-group'>
                            <div className='positive btn'>
                                <a href='#demo-modal-1'>
                                    <button type='button' value='open'>form</button>
                                </a>
                            </div>
                            <div id="demo-modal-1" className="modal">
                                <Form />
                            </div>
                            <BTN link='/generator' className='negative' value='generator' />
                        </div>
                        <p className='small'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                    </div>
                    <div className='img'>
                        <img src='/woman-blind.svg' alt='' />
                    </div>
                </div>

                <div className='content-index'>
                    <div className='card-container'>
                        <Card
                            heading='title'
                            txt='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor at risus viverra.'
                            link='/'
                            value='learn more'
                        />
                        <Card
                            heading='title'
                            txt='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor at risus viverra.'
                            link='/'
                            value='learn more'
                        />
                        <Card
                            heading='title'
                            txt='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor at risus viverra.'
                            link='/'
                            value='learn more'
                        />
                    </div>
                    <div className='tile-container'>
                        <div className='sub'>
                            <Tile
                                heading='title'
                                txt='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor at risus viverra.'
                                link='/'
                            />
                            <Tile
                                heading='title'
                                txt='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor at risus viverra.'
                                link='/'
                            />
                            <Tile
                                heading='title'
                                txt='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor at risus viverra.'
                                link='/'
                            />
                            <Tile
                                heading='title'
                                txt='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor at risus viverra.'
                                link='/'
                            />
                        </div>
                        <div className='sub'>
                            <Tile
                                heading='title'
                                txt='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor at risus viverra.'
                                link='/'
                            />
                            <Tile
                                heading='title'
                                txt='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor at risus viverra.'
                                link='/'
                            />
                            <Tile
                                heading='title'
                                txt='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor at risus viverra.'
                                link='/'
                            />
                            <Tile
                                heading='title'
                                txt='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor at risus viverra.'
                                link='/'
                            />
                        </div>
                    </div>
                    <div id='calendar'>
                        <Campaign
                            img='https://images.unsplash.com/photo-1579208575657-c595a05383b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='---'
                            heading='title'
                            txt='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor at risus viverra.'
                            btnValue='button'
                            ArrowValue='link'
                            btnLink='/'
                            ArrowLink='/'
                        />
                    </div>
                </div>
            </>
        </>
    )
}