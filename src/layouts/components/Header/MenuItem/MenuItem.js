import PropTypes from 'prop-types'
import classNames from "classnames/bind"
import styles from '../Header.module.scss'

const cx = classNames.bind(styles)

function MenuItem({ name, path, active }) {
    return (
        <div className={cx('item')}>
            <a href={path} className={cx('link', {active: active})}>{name}</a>
        </div>
    );
}

MenuItem.propTypes = {
    name: PropTypes.string.isRequired,
    path: PropTypes.string,
    active: PropTypes.bool
}

export default MenuItem;