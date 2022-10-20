import classNames from "classnames/bind"
import { RiFacebookFill, RiInstagramLine, RiTwitterLine } from 'react-icons/ri'
import { Link } from "react-router-dom"

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
                            <li className={cx('link')}><Link>About</Link></li>
                            <li className={cx('link')}><Link>Cars</Link></li>
                            <li className={cx('link')}><Link>History</Link></li>
                            <li className={cx('link')}><Link>Shop</Link></li>
                        </ul>
                    </FooterMenu>
                </ScrollReveal>
                <ScrollReveal delay={600}>
                    <FooterMenu title="Information">
                        <ul className={cx('links')}>
                            <li className={cx('link')}><Link>Request a quote</Link></li>
                            <li className={cx('link')}><Link>Find a dealer</Link></li>
                            <li className={cx('link')}><Link>Contact us</Link></li>
                            <li className={cx('link')}><Link>Services</Link></li>
                        </ul>
                    </FooterMenu>
                </ScrollReveal>
                <ScrollReveal delay={700}>
                    <FooterMenu title="Follow us">
                        <ul className={cx('links', 'social-links')}>
                            <li><a href="https://facebook.com/" target={'_blank'}  rel="noreferrer"><RiFacebookFill /></a></li>
                            <li><a href="https://www.instagram.com/" target={'_blank'} rel="noreferrer"><RiInstagramLine /></a></li>
                            <li><a href="https://twitter.com/" target={'_blank'} rel="noreferrer"><RiTwitterLine /></a></li>
                        </ul>
                    </FooterMenu>
                </ScrollReveal>
            </div>
            <span className={cx('copy')}>© TH. All rigths reserved</span>
        </Section>
    );
}

export default Footer;