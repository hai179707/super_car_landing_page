import classNames from "classnames/bind"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import "swiper/css"
import "swiper/css/pagination"

import Section from "~/components/Section"
import ScrollReveal from "~/components/ScrollReveal"
import styles from './Popular.module.scss'
import { POPULAR_CARS } from "./PopularCarList"
import ProductCard from "~/components/ProductCard"

const cx = classNames.bind(styles)

function Popular() {
    return (
        <Section>
            <div id="popular" >
                <h2 className={cx('title')}>Choose Your Electric Car <br />
                    Of The Porsche Brand
                </h2>
                <ScrollReveal>
                    <Swiper
                        className={cx('content')}
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        loop={true}
                        spaceBetween={24}
                        slidesPerView={'auto'}
                        grabCursor={true}
                        breakpoints={{
                            576: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {POPULAR_CARS.map((car, index) => (
                            <SwiperSlide key={index} className={cx('card')}>
                                <ProductCard data={car} full />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </ScrollReveal>
            </div>
        </Section>
    );
}

export default Popular