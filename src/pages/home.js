import HeadSection from "../components/layout/headSection/headSection"
import MapSection from "../components/layout/mapSection/mapSection";
import PageContainer from "../components/layout/pageContainer/pageContainer";
import { Lazyloader } from "../components/core/core";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { searchbarActions } from "../store/store"; 
const Home = props =>{
    const showload = useSelector(state=> state.loading)
    const error = useSelector(state=> state.error)
    const {adderror, addloading} = searchbarActions
    const dispatch = useDispatch();
    const [On, setOn] = useState(false)
    useEffect(() => {
        if(showload){
            setOn(true)
        }else if(error){
            setOn(true)
        }else{
            setOn(false)
        }
    }, [showload, error])
    
    const clickHandler = () =>{
        if(On){
        setOn(false)
        dispatch(adderror(false))
        dispatch(addloading(false))
        }
    }
    
    return(
        <PageContainer>
            { On && <Lazyloader id="lazyLoader" onClick={clickHandler}>{error? error:'Loading...'}</Lazyloader>}
            <HeadSection/>
            <MapSection/>
        </PageContainer>
    )
}
export default Home;