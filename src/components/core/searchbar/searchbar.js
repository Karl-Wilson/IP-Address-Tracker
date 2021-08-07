import React, { useState} from "react";
import { arrowIcon } from "../../../assets/images/images";
import style from './searchbar.module.css';
import {apiGet, apiKey, FetchData} from '../../../utils/utils';
import {searchbarActions} from '../../../store/store'
import { useDispatch } from "react-redux";


let firstTime = 0;
const Searchbar =  ({wrapperClass, searchbar_class, ...props}) => {
    let [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const searchHandler = (e) => {
        setInputValue(e.target.value);
    }

    const submitHandler = async ()=>{ 
        let address;
        let client;
        
        if(firstTime == 0){
            firstTime = 1
            client = await FetchData('https://api.ipify.org?format=json')
            address = client.ip
        }else{
            address = inputValue
        }

        dispatch(searchbarActions.addloading(true))
        let url = `${apiGet}apiKey=${apiKey}&ip=${address}`;
        let data = await FetchData(url)
        console.log(data)
        if(data == "Something is wrong"){
            dispatch(searchbarActions.adderror(data))
        }else{
        dispatch(searchbarActions.addone(data.ip))
        dispatch(searchbarActions.addtwo(data.city + ', ' + data.state_prov + ' ' + data.country_code2 + ' ' + data.zipcode))
        dispatch(searchbarActions.addthree(data.time_zone.offset))
        dispatch(searchbarActions.addfour(data.isp))
        dispatch(searchbarActions.addLat(data.latitude))
        dispatch(searchbarActions.addLad(data.longitude))
        dispatch(searchbarActions.addloading(false))

    }
    }
    if(firstTime == 0){
        submitHandler()
    }
    return(
        <div className={wrapperClass} {...props}>
            <div className={style.innerWrapper}>
                <input  type="text" placeholder="Search for any Ip address or Domain" className={[style.searchbar, searchbar_class].join(" ")} value={inputValue} onChange={searchHandler}/>
                <div className={style.searchbtn}  onClick={submitHandler}><img src={arrowIcon} alt="arrow"/></div>
            </div>
        </div>
    )
}

export default Searchbar; 
