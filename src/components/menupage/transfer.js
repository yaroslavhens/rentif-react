import React,{Component} from "react"
import Footer from "../../footer/footer";
import "./menu.css"


class TransferPage extends Component {
    render() {
         return (
            <>
            <div className="transferkConteiner"> 
            
            <div className="transferText"> <h1> Трансфер </h1></div>
            <div className="tranferTextTwoo"> <p> Комфортна подорож починається з завчасного планування</p></div>
           </div>
           <div className="transfermainbox"> 
           <h1  className="transferPriceTittle"> Трансфер Ціни</h1> 
          <li className="listtype">
            <p   className="transfersecondprice"> Класс авто </p>    <p className="trasfertexthotel" > Аеропорт/з.д Вокзал - Готель  </p>    <p  className="transfersecondprice" > 1 год - місто </p> <p   className="transfersecondprice"> 1 км - за містом</p>
          </li> 
           <div className="tranferinfoprice"> 
          <li className="listtype"><p   className="transfersecondprice">Стандарт клас </p>    <p className="trasfertexthotel" > 	150 грн  </p>    <p  className="transfersecondprice" > 150 грн </p> <p   className="transfersecondprice"> 9 грн</p> </li> 
          <li className="listtype"><p   className="transfersecondprice"> Бізнес клас </p>    <p className="trasfertexthotel" > 250 грн  </p>    <p  className="transfersecondprice" > 250 грн </p> <p   className="transfersecondprice"> 14 грн</p></li>
          <li className="listtype"> <p   className="transfersecondprice"> Мінівен клас </p>    <p className="trasfertexthotel" > 	320 грн </p>    <p  className="transfersecondprice" > 320 грн </p> <p   className="transfersecondprice"> 18 грн</p></li> 
           </div>
           <div className="transerinfoblock"> 
           <h1> Трансфер</h1>
           <h3> Компанія Rent-If пропонує досить зручну послугу – трансфер авто по території України. Наші водії готові зустріти Вас в аеропортах, на вокзалах чи в будь-яких інших місцях.</h3>
            <h2>Прокат авто з водієм</h2>
            <p> Прокат авто з водієм це популярна послуга серед наших клієнтів. А також для тих хто подорожує чи має робочі поїздки. Прокат авто з водієм дозволить суттєво зекономити, оскільки менеджер Вам завчасно і раціонально розрахує маршрут поїздки, а пасажири зможуть зосередитись над вирішенням власних завдань. </p>
           <p>Замовляєте трансфер з аеропорту або вокзалу, водій компанії зустріне Вас відразу біля терміналу або на пероні. На відміну від стандартного таксі, де клієнт платить за подачу автомобіля, простій, посадку і кілометраж – при замовленні трансферу клієнт оплачує лише чітко обумовлену суму. Якщо літак або поїзд з будь-якої причини затримується в дорозі, водій без додаткової плати зустріне Вас у зазначеному місці.</p>
          <h3>Замовлення авто</h3>
          <p>Клієнт може вибрати авто від економ- до бізнес-класу. В нашому автопарку Ви зможете замовити: Skoda Fabia Combi, Renault Megan, Volkswagen Golf. А також автомобілі Skoda Fabia, Skoda Octavia. З преміум-класу: Volkswagen Passat, Hyundai Sonata та мікроавтобус Renault Traffic</p>
          <p>В компанії Rent-If всі автомобілі справні та обслужені. Усі транспортні засоби мають сучасні засоби комфорту і безпеки автомобіля (функцї підігріву сидінь, система клімат-контролю, а також навігатором (GPS)), що робить подорож комфортною та приємною.</p>
          <p>Пасажирські перевезення здійснюємо в будь-яку місцевість західного регіону країни. А саме: Івано-Франківськ – Буковель, Львів – Буковель – Яремче, Івано-Франківськ – Яремче, Тернопіль – Буковель…</p>
         <p className="transferlastp">Замовити послугу транферу можна не залишаючи власний офіс чи помешкання,
             достатньо зробити заявку на  <a href="">  сайті  </a> або зателефонувати нам.</p>
              
           </div>
            </div>
            <Footer />
            </>
         )
    }


}
export default TransferPage;