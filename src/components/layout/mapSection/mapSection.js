import style from './mapSection.module.css';
import {Map} from '../../core/core'
import { useEffect, useState} from 'react';
import  {useSelector} from 'react-redux';

const MapSection = props =>{
    const lat = useSelector(state=> state.lat);
    const lad = useSelector(state=> state.lad)
    let [position, setPosition] = useState(null)
    let [Ladvalue, setLadvalue] = useState(null)
    let [Latvalue, setLatvalue] = useState(null)
    let defaultPosition = [0.00000, 0.00000];
    let DefaultZoom = 1
    let ree = Ladvalue

    useEffect(()=>{
       if( (lat !== Latvalue && lat !== 0) && (lad !== ree && lad !==0)){
           setPosition([lat, lad])
           setLadvalue(lad)
           setLatvalue(lat)
       }
       return ()=>{
           setPosition(null)
       }   
    },[lat, lad])// eslint-disable-line react-hooks/exhaustive-deps

    return(
        <div ClassName={style.wrapper}>
           <div id="map">
                {!position && <Map position={defaultPosition} zoom={DefaultZoom}/>}
                {position && <Map position={position}/>}
           </div>
        </div>
    )
}

export default MapSection;