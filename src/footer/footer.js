import React,{Component} from "react"
import "./footer.css"
import Facebookicon from '../image/facebook.png';
import instagramicon from '../image/instagram.png';
import callmg from '../image/call1.png'; 




class Footer extends Component {
    render() {
         return (
            <>
           
         <div className="footerConteiner"> 
       
           <div className="footerAboutus">
            <p> Про нас </p>
            <p> RENT IF  це компанія, яка спеціалізується на оренді автомобілів. </p>
            <p> LOGO RENT IF </p>
           </div>
           <div className="footerContact">
           <p> Контакти </p>
            <p> +380 50 221 51 37 </p>
            <p> м Івано-Франківськ </p>
            <p> Пн - Нд 24\7 </p>
            <p> <img src={Facebookicon} alt="..."/> <img src={instagramicon} alt="..."/></p>
            <a className="callButton" href="tel:+380502215137"> <div className='pulse'> <img src={callmg} alt="..."/></div> </a>
           </div>
            
         </div>
         <div className="footerConteiner"> 
          
          <p> WEB-Light </p>
            
         </div>
            </>
         )
    }


}
export default Footer;