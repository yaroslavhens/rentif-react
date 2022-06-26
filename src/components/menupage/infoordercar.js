
import "./menu.css"
import Footer from "../../footer/footer";
import people from "../../image/people.png"
import manual from "../../image/manual.png"
import fuel from "../../image/fuel.png"
import Bag from "../../image/bag.png"
import InputOrder from "../../inputorder/inputorder";


const InfoOrderCar = () => {
  
         return (
            <>
            <div className="infoOrderCar">
                <div className="blockline">

                </div>
            
                 <div className="infoordercarimg"><img src="https://live.staticflickr.com/65535/52154927057_811395b130_z.jpg" alt="..."/> 
                 </div>
                 
                 <div className="infoordertittlename">  <h1> Оренда NAME CAR</h1> 
                        <li className="listtype downimginfo"> <p className="blockinfobox ipeople"> <img src={people} alt="..."/> 5 </p>
                        <p className="blockinfobox imanual downimginfo"> <img src={manual} alt="..."/>  Мехнічна  </p>
                        <p className="blockinfobox ifuel downimginfo"> <img src={fuel} alt="..."/>  Дизель  </p>
                        <p className="blockinfobox ifuel downimginfo"> <img src={Bag} alt="..."/>  3 Валізи  </p></li>
                        <div>
                     <li className="listinfoprice"> 
                        <span className="infopriceone"> 1 - 2 дня </span>  <span className="infopriceone"> 3 - 10 дня </span>  <span className="infopriceone">11 - 29 дня </span> <span className="infopriceone">30 і більше </span>
                     </li>
                     <li className="listinfopricetwoo"> 
                        <span className="infopriceone"> 31  € </span>  <span className="infopriceone"> 25 € </span>  <span className="infopriceone">23 €</span> <span className="infopriceone">17 €</span>
                     </li>
                     <p  className="infoENG"> Мотор : 1.2   Бензин </p>
                     <p className="infoENG"> Розхід Палива: 5-7  / 100км </p>
                   </div>
                   </div>
                   <div className="blocklinetwoo"></div>
            </div>
            <div className="info"> 
            <h1> Оренда Volkswagen Golf  комфорт  німецького походження</h1>
            <p> Сучасний темп життя потребує від людини, особливо ділової, максимального напруження і 
               концентрації, щоб справлятись зі всіма терміновими справами і постійними клопотами. Ідеальний
                помічник в цьому – комфортабельне і швидке авто, але ж не кожному під силу купити та обслуговувати 
                легковик преміум класу. Тим більше таке придбання є неефективним, якщо ви потребуєте авто всього на
                 декілька днів, оскільки ваше тимчасово недоступне з якоїсь причини.  Оренда Volkswagen Passat  –
                  це прекрасна можливість добре заявити про себе, зустрічаючи нового ділового партнера в аеропорту, 
                  організувати кортеж для весільної церемонії, чи відправитись на ділову зустріч. Прокат авто в 
                  компанії K-Rent проходить на взаємовигідних умовах, при необхідності 
               можна заказати прокат транспортного засобу з водієм. </p>
               <h1> Особливості оренди Volkswagen Golf в Івано-Франківську </h1>
               <p>Оренда авто VW Golf в Івано-Франківську передбачає чітке обговорення термінів. 
                  Кожен транспортний засіб перед передачею орендарю проходить технічне обслуговування, 
                  а також спеціальну антибактеріальну і антивірусну обробку, що дуже важливо в умовах пандемії 
                  коронавірусу. Переглянувши наші тарифи ви можете переконатись, що прокат Фольксваген Пассат – це 
                  недорого, комфортно та престижно. Дізнайтесь про ціни оренди авто у Франківську.  Транспортний засіб
                   цієї марки може приємно здивувати власними експлуатаційними характеристиками, потужністю та 
                   маневреністю навіть дуже досвідчених автолюбителів, 
                  оскільки такі характеристики часто можна зустріти тільки у більш «дорослих» автомобілів.</p>
                  <h1>Переваги оренди Volkswagen Golf</h1>
                  <p className="infolasttext">  Великий внутрішній простір.
Потужний силовий агрегат.
Престижний та вишуканий зовнішній вигляд.
Ергономічний салон.
Економія палива.
Об’ємне багажне відділення.
Система керування Car-Net.
Безпечне та комфортне пересування.</p>
            
            </div>
            <div className="forminfo"> 
            <div className="infolowprice"> <p>  <span className="textposition"> від</span>  <span className="moneyposition"> 17 </span>  <span className="europosition"> € </span> </p>  </div>
                 <h1> Бронювання Авто </h1>
                <InputOrder /> 
                </div>
            
         
           
            <Footer />
            </>
         )



}
export default InfoOrderCar;