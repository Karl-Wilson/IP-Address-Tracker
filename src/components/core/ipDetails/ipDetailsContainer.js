import IpDetail from "./ipDetails";
import style from "./ipDetailsContainer.module.css"
import React from "react";
import { useSelector } from "react-redux";


const IpDetailsContainer = props =>{
    const ipAddress = useSelector(state => state.ipAddress)
    const location = useSelector(state => state.location)
    const timezone = useSelector(state => state.timezone)
    const isp = useSelector(state => state.isp)
    let timezoneModified;
        if(timezone){
            if(Math.sign(timezone) === -1){
                let timezoneString = Math.abs(timezone)
                    timezoneModified = `UTC -0${timezoneString}:00`
            }else{
                    timezoneModified = `UTC 0${timezone}:00`
            }
                
        }


    return(
        <div className={style.wrapper}>
            <div className={style.innerWrapper}>   
               <IpDetail title="IP ADDRESS" body={ipAddress}/>
               <IpDetail title="LOCATION" body={location} className={style.border}/>
               <IpDetail title="TIMEZONE" body={timezoneModified}/>
               <IpDetail title="ISP" body={isp} className={style.border1}/>
            </div>
        </div>
    )
}
export default IpDetailsContainer;