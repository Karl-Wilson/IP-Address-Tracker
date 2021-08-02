import IpDetail from "./ipDetails";
import style from "./ipDetailsContainer.module.css"
const IpDetailsContainer = props =>{
    return(
        <div className={style.wrapper}>
            <div className={style.innerWrapper}>
                <IpDetail title="IP ADDRESS" body="192.212.174.101"/>
                <IpDetail title="LOCATION" body="Brooklyn, NY 10001"/>
                <IpDetail title="TIMEZONE" body="UTC -05:00"/>
                <IpDetail title="ISP" body="SpaceX Starlink"/>
            </div>
        </div>
    )
}
export default IpDetailsContainer;