import Display from "../../components/Display/Display";
import Instructions from "../../components/Instructions/Instructions";
import WhySection from "../../components/WhySection/WhySection";
import './HomePage.css'

function HomePage(){
    return(
        <div className="home_page">
            <Display/>
            <Instructions/>
            <WhySection/>
        </div>
    )
}

export default HomePage;