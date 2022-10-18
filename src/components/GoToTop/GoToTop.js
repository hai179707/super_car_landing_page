import PropTypes from 'prop-types'
import classNames from "classnames/bind"
import styles from './GoToTop.module.scss'
import { RiArrowUpLine } from 'react-icons/ri'

const cx = classNames.bind(styles)

function GoToTop({ position = 'right' }) {
    if(position != 'right' && position != 'left') {
        position = 'right'
    }

    const goToTop = () => {
        document.documentElement.scrollTop = 0
    }

    return (
        <div className={cx('wrapper', {[position]: position})} onClick={() => goToTop()}>
            <RiArrowUpLine />
        </div>
    );
}

GoToTop.propTypes = {
    position: PropTypes.string
}

export default GoToTop;