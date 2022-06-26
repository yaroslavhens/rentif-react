import React,{Component} from "react";
import "./mainpage.css"
import economcar from "../image/golf4.png"
import comfortmcar from "../image/jetta.png"
import premiummcar from "../image/premium.png"
import trafficcar from "../image/traffic.png"
import carsicon from "../image/rent1.png"
import walleticon from "../image/rent2.png"
import suporticon from "../image/rent3.png"
import InputOrder from "../inputorder/inputorder";
import VideoMain from "../components/videobg";
import {NavLink} from 'react-router-dom'
import Footer from "../footer/footer";


class MainPage extends Component {
   
    render () { 
        return (
            <div className='mainConteiner'>
                <div  className="hightConteiner" > 
                        <div className="hightText">
                            <h2> Оренда Автомобілів в Івано-Франківську та області </h2>
                            <div> <NavLink to="/autopark"> Автопарк </NavLink> </div>
                            
                        </div>
                          <div className="one"></div>
                        <div className="mainSortCarConteiner">
                            <h1 className="mainSortCarConteinerFirst">Виберіть Ваш тип Автомобіля</h1>
                            <NavLink to="/economcar"> <div className="mainSortBox"><img src={economcar} alt="..."/>
                            <p className="sortBoxText"> Econom Клас</p>
                            </div></NavLink>
                            <NavLink to="/comfortcar"> <div className="mainSortBox"><img src={comfortmcar} alt="..."/>
                            <p className="sortBoxText"> Comfort Клас</p>
                            </div></NavLink>
                            <NavLink to="/premiumcar"> <div className="mainSortBox"> <img src={premiummcar} alt="..."/>
                            <p className="sortBoxText"> Premium Клас</p> 
                            </div></NavLink>
                            <NavLink to="/transportationcar"> <div className="mainSortBox"><img src={trafficcar} alt="..."/>
                            <p className="sortBoxText"> Cargo Клас</p>
                            </div></NavLink>
                            
                            <div className="mainInfoConteinerText">
                                <div className="mainConteinertext">
                                <h1> Відкрийте  для себе нові враження!</h1>
                                <h2> Ми можемо задовільнити Ваші потреби у автомобілі цікавого для Вас типу та класу.</h2>
                                </div>
                            </div>
                        </div>
                        <div className="orderConteiner" id="mainorderform">
                            <div className="orderForm">
                                <p>Швидке Бронювання </p>
                                <p>Оренда авто в  Івано-Франківську </p>
                                <InputOrder />
                            </div>
                        </div>
                        <div className="whyUsmainConteiner">
                            <h1> Чому варто обрати нас ? </h1>
                            <div className="whyUsmainConteinerbox">
                            <div className="whyUsBox"> < img  className="whyUsBoximg" src={carsicon} alt="..."/> 
                            <h3>Великий Вибір авто</h3>
                            <p className="whyUstext" > Доступний асортимент автомобілів дає можливість забезпечити значну 
                                кількість клієнтів та знайти 
                                автомобіль який відповідає побажанням замовника.</p>
                            </div>
                            <div  className="whyUsBox"> <img  className="whyUsBoximg"  src={walleticon} alt="..."/> <h3>Доступні ціни</h3>
                            <p className="whyUstext">Найкращі ціни та відсутність прихованих платежів.
                                Оформляючи бронювання автомобіля у нас ви не наштовхнетесь на паперову тяганину.
                                </p></div>
                            <div  className="whyUsBox"> <img className="whyUsBoximg"  src={suporticon} alt="..."/> 
                            <h3 >Технічка підтримка</h3>
                            <p className="whyUstext"> В нас працюють найкращі спеціалісти своєї справи які з радістю допоможуть Вам у вирішенні будь-якій ситуації. Які 24\7 на звязку.</p>
                            </div>
                            </div>
                        </div>
                        <div className="mainInfoTextConteiner">
                                 <h1>Оренда авто в Івано-Франківську для туризму</h1>
                                 <p>Прикарпаття – це місце тісного переплетення історії та сучасності,
                                 де зосереджена велика кількість курортів, парків, музеїв та релігійних споруд.
                                  Регіон відомий як в Україні, так і далеко за її межами курортами Буковель, Яремче, 
                                  Карпатським природним парком, історичними центрами міст з неповторною 
                                архітектурою та іншими туристичними принадами. </p>
                                  <p>Зазвичай часу на те, щоб відвідати все катастрофічно не вистачає,
                                     адже потрібно виділити час і на ділові зустрічі, і на те, щоб ознайомитись з культурою, 
                                     музеями, архітектурними пам’ятками. Як же це все встигнути, 
                                    особливо коли хочеться побувати не тільки в Івано-Франківську?  </p>
                                    <p>  Найбільш легко і швидко питання вирішується орендою авто. Дякуючи цьому, ви не будете залежати від примх графіку руху громадського транспорту і зможете спланувати подорож на свій розсуд.</p>
                                    <p> Також оренда автомобіля користується великим попитом і у самих жителів Прикарпаття, адже власний автомобіль може бути недоступний з будь-якої причини (технічне обслуговування, необхідність використання його іншими членами сім’ї чи родичами). У свою чергу, послуги KRENT доступні за ціною.</p>
                                    <p> Більше того, якщо вам потрібно зустріти майбутнього партнера по бізнесу і ви маєте бажання справити на нього враження серйозного бізнесмена, можна орендувати авто преміум-класу чи позашляховика.</p>
                                    <h1>Оренда авто з водієм</h1>
                                    <p>Не менш популярною в компанії є послуга оренди автомобіля з водієм. Дякуючи цій послузі, гості Івано-Франківська і області, що не знають регіону, можуть швидко пересуватись між містами чи по місту, не боячись заблукати чи витратити занадто багато часу для того, щоб добратись до необхідного об’єкту (в багатьох містах та містечках Прикарпаття в історичних центрах діє односторонній рух).</p>       
                                    <p className="lastUstext">Також послуга трансферу (оренди авто з водієм) дозволить вам доставити гостей чи ділових партнерів з вокзалу чи аеропорту, якщо ви будете з якоїсь причини зайнятий і не можете зустріти їх самостійно. Перевага такого способу доставки перед таксі в тому, що у випадку затримки прибуття авіарейсу чи потягу вам не прийдеться турбуватись про те, що необхідно оплатити простій, чи таксист просто не дочекається ваших гостей. Також, замовляючи таксі, ви не можете бути впевненим, що автомобіль буде новим, чистим і вибраного класу.</p>
                            
                        </div>
                        <div className="backgraundvideoConteiner">
                    
                            <div className="backgraundvideoConteinerBox" > 
                            <h1 className="navigationTittletext"> Відкрийте для себе нові горизонти </h1>
                            <a className="navigationCallText" href="tel:+380502215137"> Телефонуйте +38 (050) 221 51 37</a><br/>
                            <button className="navigationButton"> <a href="#mainorderform"> Бронювання </a></button>
                            </div>
                            <VideoMain />
                        </div>   
                        <Footer />
                </div>
            </div>
            
        )
    }
   }
   
   export default  MainPage;