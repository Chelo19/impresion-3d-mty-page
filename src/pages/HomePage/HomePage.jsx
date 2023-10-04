import Display from "../../components/Display/Display";
import Instructions from "../../components/Instructions/Instructions";
import Presentation from "../../components/Presentation/Presentation";
import WhySection from "../../components/WhySection/WhySection";
import './HomePage.css'

function HomePage(){
    return(
        <div className="home_page">
            <Presentation/>
            <Display/>
            <Instructions/>
            <WhySection/>
        </div>
    )
}

export default HomePage;