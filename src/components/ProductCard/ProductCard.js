import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './ProductCard.module.scss'
import { RiDashboard3Line, RiFundsBoxLine, RiChargingPile2Line, RiShoppingBag2Line } from 'react-icons/ri'

import Image from "~/components/Image"

const cx = classNames.bind(styles)

function ProductCard({ data, full = false, className }) {
    const onBtnAddToCardClick = (id) => {
        console.log('Do something witd product id: ', id)
    }

    return (
        <article className={cx('wrapper', {[className]: className})}>
            <div className={cx('shape')}></div>
            <h1 className={cx('title')}>{data.brand}</h1>
            <h3 className={cx('subtitle')}>{data.name}</h3>
            <Image src={data.image} alt='Popular car' className={cx('image')} />
            {full && <div className={cx('car-data')}>
                <div className={cx('data')}><RiDashboard3Line className={cx('icon')} /> {data.time}</div>
                <div className={cx('data')}><RiFundsBoxLine className={cx('icon')} /> {data.speed}</div>
                <div className={cx('data')}><RiChargingPile2Line className={cx('icon')} /> {data.engine}</div>
            </div>}
            <h3 className={cx('price')}>{data.price}</h3>
            <button className={cx('button')} onClick={() => onBtnAddToCardClick(data.id)}><RiShoppingBag2Line className={cx('icon')} /></button>
        </article>
    );
}

ProductCard.propTypes = {
    data: PropTypes.object.isRequired,
    full: PropTypes.bool,
    className: PropTypes.string
}

export default ProductCard;