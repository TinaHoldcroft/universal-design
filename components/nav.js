
import Theme from './constants/Theme'
import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import FocusLock from 'react-focus-lock';
import useScrollListener from './constants/ScrollListener';
import NavBtn from './NavBnt';

const Nav = () => {
    const handleToggle = () => { setActive(!isActive); };
    const [isActive, setActive] = useState('false');
    const [navClassList, setNavClassList] = useState([]);
    const scroll = useScrollListener();

    // update classList of nav on scroll
    useEffect(() => {
        const _classList = [];
        if (scroll.y > 150 && scroll.y - scroll.lastY > 0) _classList.push('--hide');
        setNavClassList(_classList);
    }, [scroll.y, scroll.lastY]);

    const closeDrop = () => { //close dropdown when link is chosen
        if (isActive === false) { setActive(!isActive); }
    }

    //use esc to close menu
    global.onkeydown = function (close) {
        if (close.keyCode == '27') {
            if (isActive === false) {
                closeDrop();
            }
        }
    }

    return (
        <nav className={isActive ? navClassList.join(' ') : '--fixed'} id='navbar'>
            <Link href='/'>
                <a>
                    <img className='logo light' src='/logo-light.svg' alt='directlink back to homepage' />
                    <img className='logo dark' src='/logo-dark.svg' alt='directlink back to homepage' />
                </a>
            </Link>

            <Theme />

            <FocusLock className='focus' disabled={isActive ? true : false}>
                <div className='nav-btn-wrapper'>
                    <button className={isActive ? 'btn-dropdown' : 'btn-dropdown is-menu-open'} accessKey='m' title={isActive ? 'Åpne meny' : 'Lukk meny'} type='button' value={isActive ? 'Åpne meny' : 'Lukk meny'} onClick={handleToggle}>
                        <p className='bars'>
                            <span /><span /><span />
                            <i className='other-bar' />
                        </p>
                    </button>
                </div>
                <div className={isActive ? '--close' : 'nav--overlay'}>
                    <ol className={isActive ? '--close' : '--open'} role='menu'>
                        <NavBtn click={handleToggle} page='ChatBot' link='ChatBot' />
                        <NavBtn click={handleToggle} page='generator' link='generator' />
                        <NavBtn click={handleToggle} page='link' />
                        <NavBtn click={handleToggle} page='link' />
                        <NavBtn click={handleToggle} page='link' />
                        <NavBtn click={handleToggle} page='link' />
                        <NavBtn click={handleToggle} page='link' />
                        <NavBtn click={handleToggle} page='link' />
                    </ol>
                </div>
            </FocusLock>
        </nav>
    )
}

export default Nav;