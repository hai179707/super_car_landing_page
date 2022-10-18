// import PropTypes from 'prop-types'
import classNames from "classnames/bind"
import { useEffect, useState } from "react"
import { RiCloseFill, RiMenu4Fill } from "react-icons/ri";

import styles from './Header.module.scss'
import Logo from "~/components/Logo"
import MenuItem from "./MenuItem"
import { MENU_ITEMS } from "./MenuItemList"

const cx = classNames.bind(styles)

function Header() {
    const [scrollHeader, setScrollHeader] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    
    useEffect(() => {
        const scrollHeader = () => {
            if (window.scrollY >= 50) {
                setScrollHeader(true)
            }
            else {
                setScrollHeader(false)
            }
        }

        window.addEventListener('scroll', scrollHeader)

        return () => {
            window.removeEventListener('scroll', scrollHeader)
        }
    }, [])

    return (
        <div className={cx('header', {'scroll-header': scrollHeader})}>
            <nav className={cx('container', 'nav')}>
                <Logo />
                <div className={cx('menu', {'show-menu': showMenu})}>
                    {MENU_ITEMS.map((item, index) => (
                        <MenuItem key={index} name={item.name} path={item.path} active={item.active} />
                    ))}
                    <div className={cx('close')} onClick={() => setShowMenu(false)}><RiCloseFill /></div>
                </div>
                <div className={cx('toggle')} onClick={() => setShowMenu(true)}><RiMenu4Fill /></div>
            </nav>
        </div>
    );
}

export default Header;