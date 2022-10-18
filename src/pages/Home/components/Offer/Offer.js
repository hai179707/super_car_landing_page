import classNames from "classnames/bind"

import images from "~/assets/images"
import Image from "~/components/Image"
import Section from "~/components/Section"
import ScrollReveal from "~/components/ScrollReveal";
import styles from './Offer.module.scss'

const cx = classNames.bind(styles)

function Offer() {
    return (
        <Section>
            <div className={cx('wrapper')} id="offer">
                <img src={images.offerBg} alt='offer bg' className={cx('bg')} />
                <ScrollReveal origin="left" className={cx('left-group')}>
                    <h2 className={cx('title')}>
                        Do You Want To Receive <br />
                        Special Offers?
                    </h2>
                    <p className={cx('descrition')}>
                        Be the first to receive all the information about our products and new cars by email by subscribing to our mailing list.
                    </p>
                    <a href="#home" className={cx('button')}>Subscribe Now</a>
                </ScrollReveal>
                <ScrollReveal origin="right" className={cx('right-group')}>
                    <Image src={images.offer} alt='offer image' className={cx('image')} />
                </ScrollReveal>
            </div>
        </Section>
    );
}

export default Offer;