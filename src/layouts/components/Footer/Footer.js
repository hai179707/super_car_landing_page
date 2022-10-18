import classNames from "classnames/bind"
import { RiFacebookFill, RiInstagramLine, RiTwitterLine } from 'react-icons/ri'

import Logo from "~/components/Logo"
import ScrollReveal from "~/components/ScrollReveal"
import Section from "~/components/Section"
import styles from './Footer.module.scss'
import FooterMenu from "./FooterMenu"

const cx = classNames.bind(styles)

function Footer() {
    return (
        <Section className={cx('footer')}>
            <div className={cx('content')} id='footer'>
                <ScrollReveal className={cx('about')}>
                    <Logo large />
                    <p className={cx('description')}>
                        We offer the best electric cars of <br />
                        the most recognized brands in <br />
                        the world.
                    </p>
                </ScrollReveal>
                <ScrollReveal delay={500}>
                    <FooterMenu title="Company">
                        <ul className={cx('links')}>
                            <li className={cx('link')}><a href="#home">About</a></li>
                            <li className={cx('link')}><a href="#home">Cars</a></li>
                            <li className={cx('link')}><a href="#home">History</a></li>
                            <li className={cx('link')}><a href="#home">Shop</a></li>
                        </ul>
                    </FooterMenu>
                </ScrollReveal>
                <ScrollReveal delay={600}>
                    <FooterMenu title="Information">
                        <ul className={cx('links')}>
                            <li className={cx('link')}><a href="#home">Request a quote</a></li>
                            <li className={cx('link')}><a href="#home">Find a dealer</a></li>
                            <li className={cx('link')}><a href="#home">Contact us</a></li>
                            <li className={cx('link')}><a href="#home">Services</a></li>
                        </ul>
                    </FooterMenu>
                </ScrollReveal>
                <ScrollReveal delay={700}>
                    <FooterMenu title="Follow us">
                        <ul className={cx('links', 'social-links')}>
                            <li><a href="#home"><RiFacebookFill /></a></li>
                            <li><a href="#home"><RiInstagramLine /></a></li>
                            <li><a href="#home"><RiTwitterLine /></a></li>
                        </ul>
                    </FooterMenu>
                </ScrollReveal>
            </div>
            <span className={cx('copy')}>© TH. All rigths reserved</span>
        </Section>
    );
}

export default Footer;