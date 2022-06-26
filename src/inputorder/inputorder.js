import React,{Component} from "react"
import "./inputorder.css"

class InputOrder extends Component {
    render() {
         return (
             <div className="formOrderCar">
            <form >
            <label for="name"> Ваше ім'я </label><br/>
             <input    onChange={this.onChangeHandler} name="name" type="text"   />  <br/> 
             <label for="phone"> Номер телефону </label><br/>
             <input type="tel" id="phone"  name="phone"   required /><br/>
             <label for="phone"> Email </label><br/>
             <input    onChange={this.onChangeHandler} name="name" type="mail"  />  <br/> 

            
<label> Виберіть авто для бронювання </label><br/> 
    
    <select  onChange={this.onChangeHandler}>
            <option value="-">-</option>
            <option value="SkodaFabia">SkodaFabia - 2017р</option>
            <option value="RenaultMegane ">Renault Megane - 2015р </option>
            <option value="SkodaOktavia">Skoda Oktavia - 2017р</option>
            <option value="VolkswagenGolf">Volkswagen Golf - 2017p </option>
            <option value="VolkswagenGetta">Volkswagen Getta - 2017p </option>
            <option value="VolkswagenPassat">Volkswagen Passat - 2016p </option>
            <option value="ToyotaCorolla">Toyota Corolla - 2018p</option>
            <option value="ToyotaCamry">Toyota Camry - 2016p</option>
            <option value="HyundaiSonata">Hyundai Sonata - 2017p </option>
            <option value="Renaultraffic">Renault Traffic - 2015</option>
     </select> <br/>
            <label for="startdate">Початок оренди</label><br/> 
            <input type="date" id="startdate"  name="startdate"/> <br/> 
            <label for="enddate">Кінець оренди</label> <br/> 
            <input type="date" id="enddate"  name="enddate"/> <br/> 
            <button className="inputButton" type="submit"> 
            Забронювати
            </button>
            </form>
            </div>
         )
    }


}
export default InputOrder;