import { ADDINJURY,UPDATEINJURY,FINDINJURY,DELETEINJURY,FINDALLINJURIES } from "./action";
import axios from 'axios';

  export function addInjury(obj){
      axios.post('http://localhost:8081/loginjuries',obj).then((res)=>{
          console.log(res.data)
      })
  
  return (dispatch)=>{
      return axios.get('http://localhost:8081/injuriesreport').then((res)=>{
          return res.data
      }).then (data=>{
          dispatch({
              type:ADDINJURY,
              payload:data
          })
      })
      .catch(err =>{
          throw (err)
      })
  }
}
export function deleteInjury(id){
    return{
        type:DELETEINJURY,
        payload:id
    }
}
 export function updateInjury(obj){
     return {
         type:UPDATEINJURY,
         payload:obj
     }
 }
 export function findInjury(id){
     return{
         type:FINDINJURY,
         payload:id
     }
 }
 export function findAllInjueries(){
     return(dispatch)=>{
         return axios.get("http://localhost:8081/injuriesreport").then((res)=>{
             return res.data
         }).then(data=>{
             dispatch({
                 type:FINDALLINJURIES,
                 payload:data
             })
         })
         .catch(err =>{
             throw (err)
         })
     }
     
     }
 