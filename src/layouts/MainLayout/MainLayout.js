import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './MainLayout.module.scss'
import Header from '../components/Header';
import Footer from '../components/Footer';

const cx = classNames.bind(styles)

function MainLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <main className={cx('main')}>{children}</main>
            <Footer />
        </div>
    );
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default MainLayout;