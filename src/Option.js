import React, { useState ,useEffect} from  'react'
import Form from 'react-bootstrap/Form';

function Options(props) {


   const onChange = (e) => {
       if(e.target.value===props.w[props.y].answer){
        props.w[props.y].score=1;
        props.w[props.y].status="correct";
       }

       else{
        props.w[props.y].status="incorrect";
       }
       
      
        
      }

return(

    <div className="border border-info mb-2 p-1 w-25">
         
        <Form.Check
          type="radio"
          value={props.text}
          label={props.text}
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          onChange={onChange.bind(this)}
           />
  
    </div>
)
}

export default Options