import classNames from "classnames/bind"
import { useEffect, useState } from "react"

import images from "~/assets/images"
import Image from "~/components/Image"
import ProductCard from "~/components/ProductCard"
import Section from "~/components/Section"
import { FEATURE_CARS } from "./FeatureCarList"
import ScrollReveal from "~/components/ScrollReveal"
import styles from './Featured.module.scss'

const cx = classNames.bind(styles)

function Featured() {
    const [active, setActive] = useState('All')
    const [carList, setCarList] = useState(FEATURE_CARS)

    useEffect(() => {
        if (active === 'All') {
            setCarList(FEATURE_CARS)
        }
        else {
            const filteredArr = FEATURE_CARS.filter(car => (
                car.brand === active
            ))
            setCarList(filteredArr)
        }
    }, [active])

    const handleFilter = (data) => {
        setActive(data)
    }

    return (
        <Section>
            <div id="featured">
                <h2 className={cx('title')}>Featured Luxury Cars</h2>
                <div className={cx('content')}>
                    <ul className={cx('filters')}>
                        <li>
                            <ScrollReveal>
                                <button className={cx('item', { active: active === 'All' })} onClick={() => handleFilter('All')} >
                                    <span>All</span>
                                </button>
                            </ScrollReveal>
                        </li>
                        <li>
                            <ScrollReveal>
                                <button className={cx('item', { active: active === 'Tesla' })} onClick={() => handleFilter('Tesla')}>
                                    <Image src={images.logo3} alt="logo 3" className={cx('image')} />
                                </button>
                            </ScrollReveal>
                        </li>
                        <li>
                            <ScrollReveal>
                                <button className={cx('item', { active: active === 'Audi' })} onClick={() => handleFilter('Audi')}>
                                    <Image src={images.logo2} alt="logo 2" className={cx('image')} />
                                </button>
                            </ScrollReveal>
                        </li>
                        <li>
                            <ScrollReveal>
                                <button className={cx('item', { active: active === 'Porsche' })} onClick={() => handleFilter('Porsche')}>
                                    <Image src={images.logo1} alt="logo 1" className={cx('image')} />
                                </button>
                            </ScrollReveal>
                        </li>
                    </ul>
                    <ScrollReveal delay={100} className={cx('cars')}>
                        {carList.map((car, index) => (
                            <ProductCard key={index} data={car} className={cx('car')} />
                        ))}
                    </ScrollReveal>
                </div>
            </div>
        </Section>
    );
}

export default Featured