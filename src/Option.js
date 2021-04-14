
import React, { useState } from  'react'
import Form from 'react-bootstrap/Form';

function Options({text}) {

return(
    <div className="border border-info mb-2 p-1 w-25">
         
        <Form.Check
          type="radio"
          label={text}
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
           />
  
    </div>
)
}

export default Options