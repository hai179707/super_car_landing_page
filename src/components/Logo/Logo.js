import PropTypes from 'prop-types'
import classNames from "classnames/bind"
import { Link } from "react-router-dom"
import { RiSteeringLine } from "react-icons/ri";

import config from "~/config"
import styles from './Logo.module.scss'

const cx = classNames.bind(styles)

function Logo({large, className}) {
    return ( 
        <Link to={config.routes.home} className={cx('logo', {large, [className]: className})}>
           <RiSteeringLine className={cx('icon')} /> Elecar
        </Link>
     );
}

Logo.propTypes = {
   large: PropTypes.bool,
   className: PropTypes.string
}

export default Logo;