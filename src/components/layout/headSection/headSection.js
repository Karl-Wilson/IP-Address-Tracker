import {Logo, IpDetailsContainer, Searchbar} from "../../core/core";
import style from './headSection.module.css'

const HeadSection = props =>{
    return(
        <div className={style.wrapper}>
            <Logo wrapperClass={style.logo}/>
            <Searchbar wrapperClass={style.searchbarWrapper}/>
            <IpDetailsContainer/>
        </div>
    )
}
export default HeadSection