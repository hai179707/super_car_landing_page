import classNames from "classnames/bind"

import images from "~/assets/images"
import Image from "~/components/Image"
import Section from "~/components/Section"
import ScrollReveal from "~/components/ScrollReveal"
import styles from './Logos.module.scss'

const cx = classNames.bind(styles)

function Logos() {
    return (
        <Section>
            <div className={cx('logo-group')} id='logos'>
                <ScrollReveal>
                    <Image src={images.logo1} alt='logo 1' className={cx('logo')} />
                </ScrollReveal>
                <ScrollReveal>
                    <Image src={images.logo2} alt='logo 2' className={cx('logo')} />
                </ScrollReveal>
                <ScrollReveal>
                    <Image src={images.logo3} alt='logo 3' className={cx('logo')} />
                </ScrollReveal>
                <ScrollReveal>
                    <Image src={images.logo4} alt='logo 4' className={cx('logo')} />
                </ScrollReveal>
                <ScrollReveal>
                    <Image src={images.logo5} alt='logo 5' className={cx('logo')} />
                </ScrollReveal>
                <ScrollReveal>
                    <Image src={images.logo6} alt='logo 6' className={cx('logo')} />
                </ScrollReveal>
            </div>
        </Section>
    );
}

export default Logos