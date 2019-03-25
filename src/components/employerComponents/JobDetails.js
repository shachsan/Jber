import React, {Component} from 'react';
import parse from 'html-react-parser';

class JobDetails extends Component{

    getJobCategories=()=>{
        let jobCats;
        if(this.props.categories){
            jobCats=this.props.categories.map(cat=><option key={cat.category}>{cat.category}</option>)
        }
        return jobCats;
    }

    getFormCtrl=(quesKey)=>{
        const formCtrl={
            jobTitle:[<input name="jobTitle" type='text' onChange={(e)=>this.props.inputHandler(e)}/>],
            description:[<textarea name="description" rows='5' onChange={(e)=>this.props.inputHandler(e)}></textarea>],
            category:[<select name="category" onChange={(e)=>this.props.inputHandler(e)}>${this.getJobCategories()}</select>],
            payRate:[<input name="payRate" type='text' onChange={(e)=>this.props.inputHandler(e)}/>],
            workHours:[<input name="workHours" type='text' onChange={(e)=>this.props.inputHandler(e)}/>],
            expectCompTime:[<input name="expectCompTime" type='text' onChange={(e)=>this.props.inputHandler(e)}/>],
            screen:[<button name="screen" value="true" className="btn btn-success" onClick={(e)=>this.props.inputHandler(e)}>Yes</button>, 
                    <button name="screen" value="false" className="btn btn-danger" onClick={(e)=>this.props.inputHandler(e)}>No</button>],
        }
        
        // console.log(formCtrl);
        return formCtrl[quesKey];
    }

    // console.log(props);
    render(){

        return ( 
            <>
                <div>{this.props.detail}</div>
                {this.getFormCtrl(this.props.quesKey)}
                <button className="btn btn-primary" onClick={this.props.nextQuesHandler}>Next</button>
            </>
        );
    }
}
 
export default JobDetails;