import React from 'react';

const JobDetails = (props) => {

    const getFormCtrl=(quesKey)=>{
        console.log(quesKey);
        
    }
    console.log(props);
    return ( 
        <>
            <div>{props.detail}</div>
            {getFormCtrl(props.quesKey)}
            <button className="btn btn-primary" onClick={props.nextQuesHandler}>Next</button>
        </>
     );
}
 
export default JobDetails;