import PropTypes from 'prop-types'
import classNames from "classnames/bind"
import { RiArrowUpLine } from 'react-icons/ri'
import { useEffect, useState } from 'react'

import styles from './GoToTop.module.scss'

const cx = classNames.bind(styles)

function GoToTop({ left }) {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const showGoToTopBtn = () => {
            const scrollY =  window.scrollY
            scrollY > 100 ? setShow(true) : setShow(false)
        }

        window.addEventListener('scroll', showGoToTopBtn)

        return () => {
            window.removeEventListener('scroll', showGoToTopBtn)
        }
    }, [])

    const goToTop = () => {
        document.documentElement.scrollTop = 0
    }

    return (
        <>
            {show && <div className={cx('wrapper', {left})} onClick={() => goToTop()}>
                <RiArrowUpLine />
            </div>}
        </>
    );
}

GoToTop.propTypes = {
    left: PropTypes.string
}

export default GoToTop;