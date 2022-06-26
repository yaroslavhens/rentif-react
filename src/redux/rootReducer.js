
import axios from "axios"
let initState =  Array;
export default function rootReducer(state = initState, Action) {
    return  state

}

const req = async () => {
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
                initState=fetResult     
                console.log(initState) 
       })
   
  }
  req()