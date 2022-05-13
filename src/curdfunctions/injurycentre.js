import { useState,useEffect } from "react";
import { connect } from "react-redux";
import { addInjury,findAllInjueries } from "../action/actionfun";
import {useNavigate} from 'react-router-dom'
import { Input } from "@mui/material";


function AddInjury(props){

    const [personName,setPersonName]=useState('')
    const [personAddress,setPersonAddress]=useState('')
    const [date,setDate]=useState('')
    const [mobileNo,setMobileNo]=useState('')
    const [nameError, setNameError] = useState('')
    const [addressError, setAddressError] = useState('')
    // const[dateError,setError]=useState('')
    const [mobileError, setMobileError] = useState('')
    const navigate=useNavigate()


    return(<>
    
    

    <div class = "container11" style = {{position:"relative",marginLeft:0,marginRight:0,top:0}}></div>
    <h1>injury centre</h1>

    <form onSubmit={(e)=>{
e.preventDefault()
        var injury={
            "personName": personName,
            "personAddress": personAddress,
            "injuryDate":date,
            "mobileNo": mobileNo
        }

        props.mydispatch(addInjury(injury))
        console.log(injury)
    }}>


    <div class = "injury-form">
        <label>Enter Person Name</label><br/>
        <input type = 'text' 
         onChange={(e)=>{ let nam = e.target.value

            if (nam.length < 4 || nam.length >= 20) {
                setNameError('name should be more than 4 charatcters')
            } 
            else 
            {
                setPersonName(e.target.value)
                setNameError('')
            }
        }}/>
        <span style = {{ color: 'red'}} > { nameError } </span><br/>
    </div>

    <div class = "injury-form">
        <label>Enter Person Address</label><br/>
        <input type = 'text' onChange={(e)=>{ let add = e.target.value
                var addexp = String(add).toLowerCase().match("^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[^a-zA-Z0-9])(?!.*\s)$")
                if (addexp || add <= 200 || add == null) {
                    setAddressError('address is mandatory ')
                } else {
                    setPersonAddress(e.target.value)
                    setAddressError('')
                }
            setPersonName(e.target.value)
        }}/>
        <span style = {{ color: 'red'}} > { addressError } </span><br/>
    </div>

    <div class = "injury-form">
        <label>Enter Date</label><br/>
        <input type = 'date' onChange={(e)=>{
            setPersonName(e.target.value)
        }}/>
    </div>

    <div class = "injury-form">
        <label>Enter Mobile No.</label><br/>
        <input type = 'text' onChange={(e)=>{ let mob = e.target.value
                var exp = String(mob).match("^(?=.[0-9]).{10}$")
                if (exp || mob.length == 10) {
                    setMobileNo(e.target.value)
                    setMobileError('')
                } else {
                    setPersonName(e.target.value)
                    setMobileError('Enter valid mobile number')
                }
           
        }}/>
        <span style = {{ color: 'red'}} > { mobileError } </span><br/>

        

    </div>

    <Input type = 'submit' value='Add' ></Input>
    </form><br/>
</>)

    
   
}

const mapDispatchToProps = dispatch => ({
    mydispatch: dispatch
})
const mapStateToProps = state => ({
    data: state
})

export default connect(mapStateToProps, mapDispatchToProps)(AddInjury);

