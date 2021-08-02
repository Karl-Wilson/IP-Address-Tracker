import { arrowIcon } from "../../../assets/images/images";
import style from './searchbar.module.css'
const Searchbar = ({wrapperClass, searchbar_class, ...props}) => {
    return(
        <div className={wrapperClass} {...props}>
            <div className={style.innerWrapper}>
                <input type="text" placeholder="Search for any Ip address or Domain" className={[style.searchbar, searchbar_class].join(" ")}/>
                <div className={style.searchbtn}><img src={arrowIcon} alt="arrow"/></div>
            </div>
        </div>
    )
}

export default Searchbar;