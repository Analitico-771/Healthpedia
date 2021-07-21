
import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { addSubjectData } from '../actions/index'
import RelatedItem from "./RelatedItem";
import './healthpedia.css'



const HealthInfo = () => {

    const subjectData =  useSelector(state => state.subjectInfo);
    // console.log(subjectData);
    console.log("Resource", subjectData);
    //console.log("Resource", subjectData.Result.Resources.Resource);
    // console.log(subjectData.Result.Resources.Resource.RelatedItems);
    // const [healthData, setHealthData] = useState([]);
    // setHealthData(subjectInfo.RelatedItems.RelatedItem);
    // const healthData = {
    //     ...subjectInfo,
    //     array: subjectInfo.Result.Resources.Resource.RelatedItems.RelatedItem
    // }
    // console.log(healthData);
    // console.log(healthData.Result.Resources.Resource.RelatedItems.RelatedItem);
    // console.log(subjectInfo.Result.Resources.Resource.RelatedItems.RelatedItem);
    // const healthData = [
    //     data: subjectInfo
    // ];
    // setHealthData(subjectInfo.Result.Resources.Resource.RelatedItems);
    // setHealthData(subjectInfo);

    // const healthData = subjectData.RelatedItems.RelatedItem

    useEffect(() => {

        //*componentDidUnmount - clean up function
        //   return () => {
        //     effect
        //   };
    })//componenentDidMount
    // console.log(subjectData);
    // console.log(subjectData.Result.Resources.Resource)
    // console.log(subjectData.Result.Resources.Resource[0].RelatedItems.RelatedItem)

    return <>
        
        <div style={{height: "100vh"}} className="d-flex flex-column align-items-center">
        <h1 className="text-white">Welcome to Helthpedia Information </h1>

        <h5 className="text-info align-items-center">You can read more about the Topics or Categories you selected. You can also 'Click' on a link to read more about a specific subject of interest</h5>

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