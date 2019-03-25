import React, { Component } from 'react';
import {connect} from 'react-redux';
import JobDetails from './JobDetails';


class PostNewJob extends Component {
    
    // getJobCategories=()=>{
    //     console.log(this.props.jobQuestions.jobCategories);
    //     let jobCats=this.props.jobQuestions.jobCategories.map(cat=><option key={cat.category}>{cat.category}</option>)
    //     console.log(jobCats);
    //     return jobCats;
    // }
    // jobQuestions=[
        //     [this.jobQuesProps.jobTitle, <input type='text'/>],
        //     [this.jobQuesProps.description,<textarea rows='5'></textarea>],
        //     [this.jobQuesProps.category,<select>{this.getJobCategories()}</select>],
        //     [this.jobQuesProps.payRate,<input type='text'/>],
        //     [this.jobQuesProps.workHours,<input type='text'/>],
        //     [this.jobQuesProps.expectCompTime,<input type='text'/>],
        //     [this.jobQuesProps.screen,<button>Yes</button>]
        // ]
        state={
            nextQues:false,
            quesKey:'jobTitle',
            jobQuesProps:{},
            keyArr:[],
            keyIdx:0,
            newJobPostSum:{
                jobTitle:'',
                description:'',
                category:'',
                payRate:'',
                workHours:'',
                expectCompTime:'',
                screen:null,
            }
        }

        // formHandler=(e)=>{
        //     console.log(e.target.value);
        // }

        inputHandler=(e)=>{
            let copyJobSum={...this.state.newJobPostSum}
                copyJobSum[e.target.name]=e.target.value
            this.setState({
                newJobPostSum:copyJobSum,
            })
        }
        
        nextQuesHandler=()=>{
            
            // console.log('My input',formInput);
            const newKeyIdx={...this.state}.keyIdx+1;
            this.setState({
                keyIdx:newKeyIdx,
                quesKey:this.state.keyArr[newKeyIdx],
            })
        }

        renderJobSummary=()=>{
            let jobSum={...this.state.newJobPostSum}
            return(
                <div className="card">
                    <div className="card-body">
                        <h5>{jobSum.jobTitle}</h5>
                        <hr/>
                        <ul className="list-group">
                            <li className="list-group-item">description:{jobSum.description}</li>
                            <li className="list-group-item">category:{jobSum.category}</li>
                            <li className="list-group-item">payRate:{jobSum.payRate}</li>
                            <li className="list-group-item">workHours:{jobSum.workHours}</li>
                            <li className="list-group-item">expectCompTime:{jobSum.expectCompTime}</li>
                        </ul>
                    </div>
                </div>
            )
        }
        
        componentDidMount(){
            // const jobQuestions
            console.log(this.props.jobQuestions.jobQuestions);
            this.setState({
                jobQuesProps:this.props.jobQuestions.jobQuestions,
                keyArr:Object.keys(this.props.jobQuestions.jobQuestions)
            })
           
        }
        
        render() {
            // console.log(this.props);
            console.log(this.state);
            return (
           
             <div className="row post-new-job">
                <div className="col-xs-12 text-center">
                    
                        <JobDetails key={this.state.quesIdx} detail={this.state.jobQuesProps[this.state.quesKey]}
                                    nextQuesHandler={this.nextQuesHandler} quesKey={this.state.quesKey}
                                    categories={this.state.quesKey==='category' ? this.props.jobQuestions.jobCategories:null}
                                    inputHandler={this.inputHandler}/>
                        
                        {this.state.newJobPostSum.screen =='false' ? this.renderJobSummary() : null }
                    
                </div>
             </div>
        );
    }
};

const mapStateToProps=(state)=>{
    return{
        jobQuestions:state.jobQuestions,
        jobCategories:state.jobCategories,
    }
}

export default connect(mapStateToProps, null)(PostNewJob);
