import React,{Component} from "react"
import "./sort-type.css"
import premiumcar from "../../image/premium.png"
import Footer from "../../footer/footer";


class PremiumCar extends Component {
    render() {
         return (
            <>
            <div className="CarheadConteiner"> <div className="CarImgConteiner"><img src={premiumcar} alt="..."/></div>
            
            <h1> Оренда Екомом Класу</h1>
            </div>
            <div className="SortCar">
            <div className="mapcarpremium">  23 </div>
            </div>
            <Footer />
            </>
         )
    }


}
export default PremiumCar;