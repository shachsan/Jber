
import React, { Component } from 'react';
import FeatureCard from '../components/sharedComponent/FeatureCard';


export default class EmployerContainer extends Component {

    featureOnClickHandler=(e)=>{
        console.log(e.target);
    }

    renderCards=(feature) => {
        let cards=[];
        let noOfCards=feature.length;
        for(let i=0;i<=noOfCards-1;i++){
            cards.push(
                <div key={i} className={noOfCards===1 ? "col-md-12" : "col-md-4"} onClick={(e)=>this.featureOnClickHandler(e)}>
                    <FeatureCard feature={feature[i]}/>
                </div>
            )
        }
        return cards;
    }

    renderFeatureCards=(row)=>{
        if(row==='first'){
            const feature=["Past Job Posts", "Active Job Posts", "Draft Job Posts"];
            return this.renderCards(feature);//passing 'f' as parameter to make the key of FeatureCard unique
        }else if(row==='second'){
            const feature=["Post New Job"];
            return this.renderCards(feature);
        }else if(row==='third'){
            const feature=["Past Hired Workers", "Current Hired Workers", "Leave Feedback to Workers"];
            return this.renderCards(feature)
        }
        
    }

    render() {
        return (
             <div className="container-fluid">
             
                <div className="row mb-2 mt-2">
                    {this.renderFeatureCards("first")}
                </div>

                <div className="row mb-2">
                    {this.renderFeatureCards("second")}
                </div>

                <div className="row mb-2">
                    {this.renderFeatureCards("third")}
                </div>
                
             </div>
        );
    }
};
