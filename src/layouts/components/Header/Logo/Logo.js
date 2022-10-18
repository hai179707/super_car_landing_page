import classNames from "classnames/bind"
import { Link } from "react-router-dom"
import { RiSteeringLine } from "react-icons/ri";

import config from "~/config"
import styles from '../Header.module.scss'

const cx = classNames.bind(styles)

function Logo() {
    return ( 
        <Link to={config.routes.home} className={cx('logo')}>
           <RiSteeringLine className={cx('icon')} /> Elecar
        </Link>
     );
}

export default Logo;