import React,{Component} from "react"
import "./sort-type.css"
import comfortmcar from "../../image/comfortcar.png"
import Footer from "../../footer/footer";


class ComfortCar extends Component {
    render() {
         return (
            <>
            <div className="CarheadConteiner"> <div className="CarImgConteiner"><img src={comfortmcar} alt="..."/></div>
            
            <h1> Оренда Comfort Класу</h1>
            </div>
            <div className="SortCar">
            <div className="mapcarcomfort">  23 </div>
            </div>
            <Footer />
            </>
         )
    }


}
export default ComfortCar;