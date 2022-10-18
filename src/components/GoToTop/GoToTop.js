import PropTypes from 'prop-types'
import classNames from "classnames/bind"
import styles from './GoToTop.module.scss'
import { RiArrowUpLine } from 'react-icons/ri'

const cx = classNames.bind(styles)

function GoToTop({ left }) {

    const goToTop = () => {
        document.documentElement.scrollTop = 0
    }

    return (
        <div className={cx('wrapper', {left})} onClick={() => goToTop()}>
            <RiArrowUpLine />
        </div>
    );
}

GoToTop.propTypes = {
    left: PropTypes.string
}

export default GoToTop;