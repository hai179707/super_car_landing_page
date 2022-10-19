import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import styles from './MainLayout.module.scss'
import GoToTop from '~/components/GoToTop'
import { Footer, Header } from '../components'

const cx = classNames.bind(styles)

function MainLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <main className={cx('main')}>{children}</main>
            <Footer />
            <GoToTop />
        </div>
    );
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default MainLayout;