import classNames from "classnames/bind"
import { Link } from "react-router-dom"

import images from "~/assets/images"
import Image from "~/components/Image"
import Section from "~/components/Section"
import ScrollReveal from "~/components/ScrollReveal"
import styles from './About.module.scss'
import DataCard from "~/components/DataCard"

const cx = classNames.bind(styles)

function About() {
    const onKnowMoreBtnClick = () => {
        const popularSection = document.getElementById('popular').closest('.section')
        popularSection.scrollIntoView()
    }

    return (
        <Section>
            <div className={cx('wrapper')} id='about'>
                <ScrollReveal origin="left" className={cx('left-group')}>
                    <Image src={images.about} alt='about image' className={cx('image')} />
                    <div className={cx('card')}>
                        <DataCard title='2.500+'>Supercharges placed along popular route</DataCard>
                    </div> 
                </ScrollReveal>
                <ScrollReveal origin="right" className={cx('right-group')}>
                    <h2 className={cx('title')}>
                        Machines With <br />
                        Future Technology
                    </h2>
                    <p className={cx('descrition')}>
                        See the future with high-performance electric cars produced by renowned brands. They feature futuristic builds and designs with new and innovative platforms that last a long time.
                    </p>
                    <Link className={cx('button')} onClick={onKnowMoreBtnClick} >Know more</Link>
                </ScrollReveal>
            </div>
        </Section>
    );
}

export default About