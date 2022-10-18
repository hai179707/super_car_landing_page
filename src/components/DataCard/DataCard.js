import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './DataCard.module.scss'

const cx = classNames.bind(styles)

function DataCard({ title, children }) {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>{title}</h3>
            <p className={cx('description')}>{children}</p>
        </div>
    );
}

DataCard.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default DataCard;