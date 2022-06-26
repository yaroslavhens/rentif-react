import React,{Component} from "react"
import "./sort-type.css"
import economcar from "../../image/golf4.png"
import Footer from "../../footer/footer";


class EconomCar extends Component {
    render() {
         return (
            <>
            <div className="CarheadConteiner"> <div className="CarImgConteiner"><img src={economcar} alt="..."/></div>   
            <h1> Оренда Екомом Класу</h1>
            </div>
            <div className="SortCar">
                 <div className="mapcareconom">  23 </div>
            </div>
            <Footer />
            </>
         )
    }


}
export default EconomCar;