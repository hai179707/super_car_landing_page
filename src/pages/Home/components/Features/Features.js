import classNames from "classnames/bind"

import images from "~/assets/images"
import Image from "~/components/Image"
import Section from "~/components/Section"
import ScrollReveal from "~/components/ScrollReveal";
import styles from './Features.module.scss'
import DataCard from "~/components/DataCard";

const cx = classNames.bind(styles)

function Features() {
    return (
        <Section>
            <div id="features">
                <h2 className={cx('title')}>More Features</h2>
                <ScrollReveal className={cx('content')}>
                    <Image src={images.features} alt='features image' className={cx('image')} />
                    <div className={cx('card', 'card-1')}>
                        <DataCard title='800v'>
                            Turbo <br />
                            Chargin
                        </DataCard>
                    </div>
                    <div delay={700} className={cx('card', 'card-2')}>
                        <DataCard title='350'>
                            Km <br />
                            Range
                        </DataCard>
                    </div>
                    <div delay={700} className={cx('card', 'card-3')}>
                        <DataCard title='480'>
                            Km <br />
                            Travel
                        </DataCard>
                    </div>
                </ScrollReveal>
                <ScrollReveal origin='bottom' delay={600} className={cx('map')}>
                    <Image src={images.map} alt='map image' className={cx('image')}/>
                </ScrollReveal>
            </div>
        </Section>
    );
}

export default Features;