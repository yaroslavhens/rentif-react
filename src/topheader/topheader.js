import React,{Component} from 'react';
import logophone from '../image/iconphone.png';
import logoclock from '../image/iconclock.png';
import logolocate from '../image/iconlocate.png';
import Facebookicon from '../image/facebook.png';
import instagramicon from '../image/instagram.png';
import {NavLink} from 'react-router-dom'

import "./topheader.css"


class TopHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
          stripBg: 'none',
          width: '350px',
          left: '-350px'
        };
      }
      
     openClick(e) {
      
        this.setState({ stripBg: '' });
        this.setState({left:'0px'})
      }
      closeClick(e) {
      
        this.setState({ stripBg: 'none' });
        this.setState({left:'-350px'})
      }
    render()  {
        const style = { display: this.state.stripBg };
        const stylemenu = { width: this.state.width, marginLeft: this.state.left   };
   
        return (
            <>
            <div className='topHeaderConteiner'>
                 <span className='topHeaderMenu'  onClick={e => this.openClick()}> Меню </span>
                <span className='topHeaderTown'> <img src={logolocate} alt="..."/> м.Івано-Франківськ </span>
                <span className='topHeaderMobNumber'> <img src={logophone} alt="..."/>+38 (50) 221-51-37 </span>
                <span className='topHeaderWorkTime'> <img src={logoclock} alt="..."/> Пн-Нд 24/7 </span>
               
                <span className='topHeaderlinkFB'><a href='/'> <img src={Facebookicon} alt="..."/></a></span>
                <span className='topHeaderlinkInst'><a href='/'> <img src={instagramicon} alt="..."/> </a></span>
                <span className='topHeaderlinkFB'><NavLink to=""> RENT IF </NavLink></span>
            </div>

            <div  className="sidenav" style={stylemenu}>
                <a  className='closebtn' onClick={e => this.closeClick()} >&times;</a>
                <NavLink to="" onClick={e => this.closeClick()}>Головна</NavLink>
                <NavLink to="/autopark" onClick={e => this.closeClick()}>Автопарк </NavLink>
               <NavLink  to="/pricepage" onClick={e => this.closeClick()}>Ціни на прокат</NavLink>
               <NavLink to="/transferpage" onClick={e => this.closeClick()}>Трасфер </NavLink>
               <a href="/" onClick={e => this.closeClick()}>Оплата</a>
               <a href="/" onClick={e => this.closeClick()}>Умови надання послуг</a>
               <a href="/" onClick={e => this.closeClick()}>Про нас</a>
               <br/>
              <br/>
              <div className="infoMenu"> 
              <p> +380502215137</p>
              <p>Пн-Нд 24\7</p>
              <p ><img src={Facebookicon} alt="..."/> <img src={instagramicon} alt="..."/></p>
              </div>
               
          </div>
            <div className='menuNavigations' style={style}>
          </div>
          
            </>
        )
    }
}
export default TopHeader;