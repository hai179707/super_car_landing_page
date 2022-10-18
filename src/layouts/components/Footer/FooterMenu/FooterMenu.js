import PropTypes from 'prop-types'
import classNames from "classnames/bind"
import styles from '../Footer.module.scss'

const cx = classNames.bind(styles)

function FooterMenu({ title, children }) {
    return (
        <div className={cx('menu')}>
            <h3 className={cx('title')}>{title}</h3>
            {children}
        </div>
    );
}

FooterMenu.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default FooterMenu;