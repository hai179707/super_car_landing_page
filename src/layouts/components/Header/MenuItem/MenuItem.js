import PropTypes from 'prop-types'
import classNames from "classnames/bind"

import styles from '../Header.module.scss'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function MenuItem({ name, path, defaultActive }) {
    const [active, seActive] = useState(defaultActive)

    useEffect(() => {
        const handleActiveMenu = () => {
            const scrollY = window.pageYOffset
            const section = document.getElementById(name.toLowerCase()).parentElement
            const sectionTop = section.offsetParent.offsetTop - 150
            const sectionHeight = section.offsetParent.offsetHeight
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                seActive(true)
            }
            else {
                seActive(false)
            }
        }

        window.addEventListener('scroll', handleActiveMenu)

        return () => {
            window.removeEventListener('scroll', handleActiveMenu)
        }
    })

    const onNavLinkClick = () => {
        if(name === 'Home') {
            document.documentElement.scrollTop = 0
        }
        else {
            const section = document.getElementById(name.toLowerCase()).closest('.section')
            section.scrollIntoView()
        }
    }

    return (
        <div className={cx('item')}>
            <Link to={path} className={cx('link', { 'active': active })} onClick={onNavLinkClick}>{name}</Link>
        </div>
    );
}

MenuItem.propTypes = {
    name: PropTypes.string.isRequired,
    path: PropTypes.string,
    active: PropTypes.bool
}

export default MenuItem;