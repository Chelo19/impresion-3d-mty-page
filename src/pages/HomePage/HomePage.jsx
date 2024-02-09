import Display from "../../components/Display/Display";
import Gallery from "../../components/Gallery/Gallery";
import Instructions from "../../components/Instructions/Instructions";
import Presentation from "../../components/Presentation/Presentation";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import WhySection from "../../components/WhySection/WhySection";
import AvailableMaterials from "../../components/AvailableMaterials/AvailableMaterials.jsx";
import './HomePage.css'

function HomePage(){
    return(
        <div className="home_page">
            <Presentation/>
            <Display/>
            <Instructions/>
            <WhySection/>
            <Gallery/>
            <AvailableMaterials/>
            <WhoWeAre/>
        </div>
    )
}

export default HomePage;