import React from "react";
import { FaEye } from "react-icons/fa";


function ClientList(props) {
    console.log(props)

    return (

        <>
            <div class="row" style={{ marginTop: 10,}}>

                <div class="col-8">
                    <div style={{display:"flex", alignItems:"center"}}> 
                        <div  style={{padding:10, background:"dodgerblue",borderRadius:5,marginRight:10}}> <FaEye style= {{color:"#fff"}}></FaEye> </div>
                       <div> <div> {props.value.businessName} - {props.value.name} </div>
                        <div > {props.value.address} , {props.value.addressTwo}, {props.value.city} , {props.value.state}, {props.value.zip} </div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div style={{textAlign:"right"}}>  {props.value.email} </div>
                    <div style={{textAlign:"right"}}> {props.value.phoneNumber}</div>
                </div>


            </div>

        </>



    )
};

export default ClientList;