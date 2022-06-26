import React,{Component} from "react"
import "./sort-type.css"
import transcar from "../../image/traffic.png"
import Footer from "../../footer/footer";


class TransCar extends Component {
    render() {
         return (
            <>
            <div className="CarheadConteiner"> <div className="CarImgConteiner"><img src={transcar} alt="..."/></div>
            
            <h1> Оренда Transportation Класу</h1>
            </div>
            <div className="SortCar">
            <div className="mapcartrans">  23 </div>
            </div>
            <Footer />
            </>
         )
    }


}
export default TransCar;