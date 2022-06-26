import React,{Component} from "react"
import Footer from "../../footer/footer";
import "./menu.css"
import axios from "axios";
import CarCard from "./carcard/carcard";
import { NavLink } from "react-router-dom";


class AutoPark extends Component {
    state = {
        servercar:[],
    }
    componentDidMount() {
        axios.get('https://car-rent-a41aa-default-rtdb.europe-west1.firebasedatabase.app/cars.json').then(response => {
            console.log(response.data);
            const fetResult = [];
            for (let key  in response.data) {
                fetResult.unshift(
                    {
                        ...response.data[key],
                        id:key
                    }
                )
            }
             console.log(fetResult)
                this.setState ( {
                    
                    servercar:fetResult
                }) 
       })
 }


    render() {
      console.log(this.props)
         return (
            <>
           
            <div className="autoparkConteiner"> 
            
             <div className="autoparkText"> <h1> АВТОПАРК</h1></div>
            </div>
             <NavLink to={{pathname: '/carname'}}><div className="allCar" >
            
             
           { this.state.servercar.map(car =>{
                    return (
                        <CarCard  index={car.id} 
                         class={car.class}
                          doors={car.doors} 
                          fuel={car.fuel}
                          image={car.image}  
                          infoone={car.infoone}
                          kkp={car.kkp} 
                          kyzov={car.kyzov}
                          name={car.name} 
                          pasangers={car.pasangers}  
                          priceone={car.priceone}
                          pricetwoo={car.pricetwoo}
                          pricethree={car.pricethree}
                          pricefour={car.pricefour}
                          v={car.v} 
                          year={car.year}   
                        
                        /> 
                    )
                }
                ) 
                } 
        
            </div>
            </NavLink>
            <Footer />
            </>
         )
    }


}
export default AutoPark;