
import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { addSubjectData } from '../actions/index'
import './healthpedia.css'



const HealthInfo = () => {

    const subjectData =  useSelector(state => state.subjectInfo);
    // console.log(subjectData);
    console.log("Resource", subjectData.Result.Resources.Resource);
    // console.log(subjectData.Result.Resources.Resource.RelatedItems);
    // const [healthData, setHealthData] = useState([]);
    // setHealthData(subjectInfo.RelatedItems.RelatedItem);
    // const healthData = {
    //     ...subjectInfo,
    //     array: subjectInfo.Result.Resources.Resource.RelatedItems.RelatedItem
    // }
    // console.log(healthData);
    // console.loghealthData.Result.Resources.R(esource.RelatedItems.RelatedItem);
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


    return <>
        
        <div style={{height: "100vh"}} className="d-flex flex-column align-items-center">
        <h1 className="text-white">HealthInfo Page</h1>
        <h3 className="text-warning">This is place holder text{'\u00A0'} {'\u00A0'}</h3>
        <h5 className="text-info">This is place holder text</h5>

        {/* begin mapping health Data */}
        <div className="health-table d-flex flex-column"> {subjectData.Result.Resources.Resource.map(subjectDataObj => {
            return <>
                <div className="health-table d-flex flex-column"> {subjectDataObj.RelatedItems.RelatedItem.map(relatedItemDataObj => {
                return <>
                    <div className="align-middle p-2">{`${relatedItemDataObj.Title}\u00A0\u00A0`} 
                    
                        <button className="favorites" id={`${relatedItemDataObj.Id}`}>
                            Favorite
                        </button>
                    </div>
                </>;
                })}
                {/* end mapping health Data */}
                </div> 
                </>;
             })}
            {/* end mapping health Data */}
            </div>
        </div>
    </>
}

export default HealthInfo;