import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from './Section.module.scss';

const cx = classNames.bind(styles);

function Section({ children }) {
    return (
        <div className={cx('wrapper', 'section')}>
            <div className={cx('container')}>
                {children}
            </div>
        </div>
    );
}

Section.propTypes = {
    children: PropTypes.node.isRequired
}

export default Section;