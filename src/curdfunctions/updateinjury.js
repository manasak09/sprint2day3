import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { deleteInjury,updateInjury } from "../action/actionfun";

function UpdateInjury(props){

    const[injuryId,setInjuryId]=useState(0)
    const [personName,setPersonName]=useState('')
    const [personAddress,setPersonAddress]=useState('')
    const [date,setDate]=useState('')
    const [mobileNo,setMobileNo]=useState('')
    const [nameError, setNameError] = useState('')
    const [addressError, setAddressError] = useState('')
    // const[dateError,setError]=useState('')
    const [mobileError, setMobileError] = useState('')
    const [injuryIdErr, setInjuryIdErr] = useState('')
    const navigate=useNavigate()


    return(<>

<form onSubmit={(e)=>{
e.preventDefault()
        var injury={
            " personName": personName,
            "personAdderss": personAddress,
             "injuryDate":date,
            "mobile": mobileNo,
            "injuryId" : injuryId
            
        }

        props.mydispatch(updateInjury(injury))
        console.log(injury)
    }
    }
    ></form>

    
    <div class = "container11" style = {{position:"relative",marginLeft:0,marginRight:0,top:0}}></div>
    <h1>injury centre</h1>

    <div class = "injury-form">
        <label>Enter Id</label><br/>
        <input type = 'text' 
         onChange={(e)=>{let ids =e.target.value
            if(ids==0){
                setInjuryIdErr('id not found')
            }
            else {
                setInjuryId(e.target.value)
                injuryIdErr('')
            }

        }}/>
        <span style = {{ color: 'red'}} > {injuryIdErr} </span><br/>
    </div>



    <div class = "injury-form">
        <label>Enter Person Name</label><br/>
        <input type = 'text' 
         onChange={(e)=>{ let nam = e.target.value

            if (nam.length < 4 || nam.length >= 20) {
                setNameError('name should be more than 4 charatcters')
            } else {
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
                    setMobileError('Enter valid mobile number')
                }
            setPersonName(e.target.value)
        }}/>
        <span style = {{ color: 'red'}} > { mobileError } </span><br/>

        

    </div>

    <div class = "btn1">
        <label>Add</label><br/>
        <button class = 'btn'></button>

        <label>Update</label><br/>
        <button class = 'btn'></button>

        <label>Delete</label><br/>
        <button class = 'btn' onClick={()=>{
         props.mydispatch(deleteInjury(injuryId))
     }}></button>
{
    props.data
}

    </div>



    </>)
    
   
}

const mapDispatchToProps = dispatch => ({
    mydispatch: dispatch
})
const mapStateToProps = state => ({
    data: state
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateInjury);