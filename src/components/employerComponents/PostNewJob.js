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
            keyIdx:0
        }
        
        nextQuesHandler=()=>{
            const newKeyIdx={...this.state}.keyIdx+1;
            this.setState({
                keyIdx:newKeyIdx,
                quesKey:this.state.keyArr[newKeyIdx]
            })
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
                    <form>
                        <JobDetails key={this.state.quesIdx} detail={this.state.jobQuesProps[this.state.quesKey]}
                                    nextQuesHandler={this.nextQuesHandler} quesKey={this.state.quesKey}
                                    categories={this.state.quesKey==='category' ? this.props.jobQuestions.jobCategories:null}/>

                    </form>
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
