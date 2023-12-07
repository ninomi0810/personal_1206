//pinia宣告的變數只能用pinia改變
import {defineStore} from 'pinia';

//defineStores = 自建資料庫名稱
//counter = 資料庫內容
export default defineStore("counter",{
    //data
    state:()=> {
        return{
            location : 1,
        }
    },
    //computed
    getters:{
        locationInfo(){
            return `現在位置 : ${this.location}`
        }
    },
    //methods
    actions:{
        getLocation(){
            console.log(this.location)
        },
        setLocation(num){
            this.location = num;
        }
    }
})