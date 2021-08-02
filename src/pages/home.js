import HeadSection from "../components/layout/headSection/headSection"
import MapSection from "../components/layout/mapSection/mapSection";
import PageContainer from "../components/layout/pageContainer/pageContainer";
const Home = props =>{
    return(
        <PageContainer>
            <HeadSection/>
            <MapSection/>
        </PageContainer>
    )
}
export default Home;