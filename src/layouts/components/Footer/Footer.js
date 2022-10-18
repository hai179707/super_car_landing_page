import classNames from "classnames/bind"
import { RiFacebookFill, RiInstagramLine, RiTwitterLine } from 'react-icons/ri'

import Logo from "~/components/Logo";
import styles from './Footer.module.scss'
import FooterMenu from "./FooterMenu";

const cx = classNames.bind(styles)

function Footer() {
    return (
        <div className={cx('footer', 'section')}>
            <div className={cx('container', 'content')}>
                <div className={cx('about')}>
                    <Logo large />
                    <p className={cx('description')}>
                        We offer the best electric cars of <br />
                        the most recognized brands in <br />
                        the world.
                    </p>
                </div>
                <FooterMenu title="Company">
                    <ul className={cx('links')}>
                        <li className={cx('link')}><a href="#">About</a></li>
                        <li className={cx('link')}><a href="#">Cars</a></li>
                        <li className={cx('link')}><a href="#">History</a></li>
                        <li className={cx('link')}><a href="#">Shop</a></li>
                    </ul>
                </FooterMenu>
                <FooterMenu title="Information">
                    <ul className={cx('links')}>
                        <li className={cx('link')}><a href="#">Request a quote</a></li>
                        <li className={cx('link')}><a href="#">Find a dealer</a></li>
                        <li className={cx('link')}><a href="#">Contact us</a></li>
                        <li className={cx('link')}><a href="#">Services</a></li>
                    </ul>
                </FooterMenu>
                <FooterMenu title="Follow us">
                    <ul className={cx('links', 'social-links')}>
                        <li><a href="#"><RiFacebookFill /></a></li>
                        <li><a href="#"><RiInstagramLine /></a></li>
                        <li><a href="#"><RiTwitterLine /></a></li>
                    </ul>
                </FooterMenu>
            </div>
            <span className={cx('copy')}>© TH. All rigths reserved</span>
        </div>
    );
}

export default Footer;