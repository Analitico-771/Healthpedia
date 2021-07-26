
import React, { useEffect} from "react";
import { useSelector } from 'react-redux';
import RelatedItem from "./RelatedItem";
import './healthpedia.css'



const HealthInfo = () => {

    const subjectData =  useSelector(state => state.subjectInfo);
    // console.log("Resource", subjectData);

    useEffect(() => {

        //*componentDidUnmount - clean up function
        //   return () => {
        //     effect
        //   };
    })//componenentDidMount

    return <>
        
        <div style={{height: "100vh"}} className="d-flex flex-column align-items-center">
        <br />
        <h1 className="text-white">Welcome to Healthpedia Information </h1>
        <br />

        <h5 className="text-info align-items-center">You can read more about the Topics or Categories you selected. You can also 'Click' on a link to read more about a specific subject of interest</h5>
        <br />

        {/* <div className="text-info">Topic ID: {`${subjectData.Result.Query.TopicId}`}</div> */}

        {/* <img src={`${subjectData.Result.Resources.["ImageUrl"].Resource}`} width="500" height="600"></img> */}
        
        
        {subjectData.Result.Resources.Resource[0].Sections.section.map((section, index) => {
            return<>

                <RelatedItem id={index} title={section.Title} content={section.Content}/>
                         {/* index, title, and content are props */}
            </>
        })}
        </div>

    </>
}

export default HealthInfo;