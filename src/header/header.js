import React,{Component} from 'react';
import './header.css'
import callmg from '../image/call1.png'; 

class Header extends Component {
  
 render () {

   
     return (
         <>
         <div className='mainLogoConteiner'> 
             <div className='headerMenu'> RENT IF </div>
             <a className="callButton" href="tel:+380502215137"> <div className='pulse'> <img src={callmg} alt="..."/></div> </a>
         </div>
         </>
     )
 }
}

export default Header ;
