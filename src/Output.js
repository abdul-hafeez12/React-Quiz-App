import React, { useState ,useEffect} from  'react'
import 'semantic-ui-css/semantic.min.css'
import { Button, Icon } from 'semantic-ui-react'


function Output(props) {
return(

    <div className="border-bottom mb-2 p-1 ">
         <h6>Q{props.w[props.y].id}  {props.w[props.y].question} </h6>
         <h6>Correct Answer: {props.w[props.y].answer}</h6> 
         <h6>Score: {props.w[props.y].score} 
         {(props.w[props.y].score===1)?(<Icon name='check circle outline' color='green' />):
         (<Icon name='times circle outline' color='red' />)}
           </h6>
         
    </div>
)
}

export default Output