import HeadSection from "../components/layout/headSection/headSection"
import MapSection from "../components/layout/mapSection/mapSection";
import PageContainer from "../components/layout/pageContainer/pageContainer";
import { Lazyloader } from "../components/core/core";
import { useSelector } from "react-redux";
const Home = props =>{
    const showload = useSelector(state=> state.loading)
    const error = useSelector(state=> state.error)
    console.log(showload)
    return(
        <PageContainer>
            { showload && <Lazyloader>{error? error:'Loading...'}</Lazyloader>}
            <HeadSection/>
            <MapSection/>
        </PageContainer>
    )
}
export default Home;