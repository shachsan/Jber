import React, {Component} from 'react';
import parse from 'html-react-parser';

class JobDetails extends Component{

    state={
        jobTitle:'sdf'
    }

    inputHandler=(e)=>{
        this.setState({
            jobTitle:e.target.value,
        })
    }

    getJobCategories=()=>{
        let jobCats;
        if(this.props.categories){
            jobCats=this.props.categories.map(cat=><option key={cat.category}>{cat.category}</option>)
        }
        return jobCats;
    }

    getFormCtrl=(quesKey)=>{
        const formCtrl={
            jobTitle:[<input type='text' onChange={(e)=>this.inputHandler(e)}/>],
            description:[<textarea rows='5'></textarea>],
            category:[<select>${this.getJobCategories()}</select>],
            payRate:[<input type='text'/>],
            workHours:[<input type='text'/>],
            expectCompTime:[<input type='text'/>],
            screen:[<button>Yes</button>],
        }
        
        console.log(formCtrl);
        return formCtrl[quesKey];
    }

    // console.log(props);
    render(){

        return ( 
            <>
                <div>{this.props.detail}</div>
                {this.getFormCtrl(this.props.quesKey)}
                <button className="btn btn-primary" onClick={()=>this.props.nextQuesHandler(this.state.jobTitle)}>Next</button>
            </>
        );
    }
}
 
export default JobDetails;