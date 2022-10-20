import classNames from "classnames/bind"
import { RiFlashlightFill, RiTempColdLine, RiDashboard3Line, } from 'react-icons/ri'

import images from "~/assets/images"
import Image from "~/components/Image"
import Section from "~/components/Section"
import ScrollReveal from "~/components/ScrollReveal";
import styles from './Home.module.scss'
import { Link } from "react-router-dom"

const cx = classNames.bind(styles)

function Home() {
    const onBtnStartClick = () => {
        const aboutSection = document.getElementById('about').closest('.section')
        aboutSection.scrollIntoView()
    }

    return (
        <Section>
            <div className={cx('wrapper')} id='home'>
                <div className={cx('shape', 'shape-big')}></div>
                <div className={cx('shape', 'shape-small')}></div>
                <div className={cx('title-group')}>
                    <ScrollReveal className={cx('title')}><h1>Choose The Best Car</h1></ScrollReveal>
                    <ScrollReveal delay={500} className={cx('subtitle')}><h2>Porsche Mission E</h2></ScrollReveal>
                    <ScrollReveal delay={600} className={cx('elec')}><h3><RiFlashlightFill className={cx('icon')} /> Electric car</h3></ScrollReveal>
                </div>
                <ScrollReveal delay={800}><Image src={images.home} alt='Home car image' className={cx('image')} /></ScrollReveal>
                <div className={cx('info')}>
                    <ScrollReveal delay={900} origin='bottom' className={cx('data')}>
                        <div className={cx('icon')}><RiTempColdLine /></div>
                        <div className={cx('number')}>24°</div>
                        <div className={cx('text')}>TEMPERATURE</div>
                    </ScrollReveal>
                    <ScrollReveal delay={1000} origin='bottom' className={cx('data')}>
                        <div className={cx('icon')}><RiDashboard3Line /></div>
                        <div className={cx('number')}>873</div>
                        <div className={cx('text')}>MILEAGE</div>
                    </ScrollReveal>
                    <ScrollReveal delay={1100} origin='bottom' className={cx('data')}>
                        <div className={cx('icon')}><RiFlashlightFill /></div>
                        <div className={cx('number')}>94%</div>
                        <div className={cx('text')}>BATTERY</div>
                    </ScrollReveal>
                </div>
                <ScrollReveal delay={1000} origin='bottom'><Link className={cx('button')} onClick={onBtnStartClick}>START</Link></ScrollReveal>
            </div>
        </Section>
    );
}

export default Home