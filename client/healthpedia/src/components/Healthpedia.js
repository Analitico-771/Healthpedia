// import React from "react";
import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { addSubjectData } from '../actions/index'
import './healthpedia.css'
import { useHistory } from "react-router-dom";

const Healthpedia = () => {

  //declare hooks
  // const [topics, setTopics] = useState(false);
  // const [categories, setCategories] = useState(false);
  const [currentFavorite, setCurrentFavorite] = useState({});
  const [currentJournalEntry, setCurrentJournalEntry] = useState({});
  const [healthInfo, setHealthInfo] = useState([]);
  // const [subjectInfo, setSubjectInfo] = useState([]);

  const subjectInfo =  useSelector(state => state.subjectInfo);
  const favorites = useSelector(state => state.favorites);
  const journalEntries = useSelector(state => state.journalEntries);
 
  //dispatch
  const dispatch = useDispatch();
  let history = useHistory();

  //useEffect
  useEffect(() => {
    //*componentDidUnmount - clean up function
    //   return () => {
    //     effect
    //   };
    })//componenentDidMount

  //apiCalls

  const fetchHealthData = async (input) => {
    try {
      // const classArray = e.target.className.split(" ");
      let url = "";

      switch(input){
        case "topics":
          url = "https://health.gov/myhealthfinder/api/v3/itemlist.json?lang=en&type=topic";//test api call
        break;
          
        case "categories":
          url = "https://health.gov/myhealthfinder/api/v3/itemlist.json?lang=en&type=category";//test api call
        break;

        default:
          url = "https://health.gov/myhealthfinder/api/v3/itemlist.json?lang=en&type=topic";
        break;
      }
      
      const response = await fetch(url);
      const healthInfo = await response.json();
      console.log(healthInfo);
      setHealthInfo(healthInfo.Result.Items.Item);
      // if(healthInfo.result.error !== 'False'){
      //   alert(`Ooops! ${healthInfo.result.error}.  Please try again!`);
      // }
      // else {
      //   return healthInfo;
      //   // console.log(healthInfo); //console.log api object
      //   // dispatch(submit(whaleAddress, walletData));
      // }
    }
    // dispatch(submit(favorites, journalEntries));
    catch(err) {
      alert(err);
    }
  }

  // onClick function for favorites id, topics, or categories;
  const onClickFavorite = async (id, subject) => {

  }


  // onClick function for fetching id, topics, or categories;
  const onClickSubject = async (id, type) => {
    try {
      // const classArray = e.target.className.split(" ");
      let url = "";
      if(type === "Topic"){
        console.log(id);
        url = `https://health.gov/myhealthfinder/api/v3/topicsearch.json?lang=en&topicId=${id}`;
      }
      else{
        console.log(id);
        url = `https://health.gov/myhealthfinder/api/v3/topicsearch.json?lang=en&categoryId=${id}`;
      }
      
      const response = await fetch(url);
      const subjectData = await response.json();
      // console.log(subjectInfo);
      // setSubjectInfo(subjectInfo.Result.Resources.Resource);
      dispatch(addSubjectData(subjectData));//Original state dispatch
      // dispatch(addSubjectData(subjectData.Result.Resources.Resource));
      // console.log(subjectData.Result.Resources.Resource);
      // console.log(subjectData.Result.Resources.Resource.RelatedItems.RelatedItem);
      history.push("/healthinfo")
    }
    catch(err) {
      alert(err);
    }

  }

  // fetchHealthData();

  //delete favorites


  return (

      <div style={{height: "100vh"}} className="d-flex flex-column align-items-center">
      <h1 className="text-white">Healthpedia Page</h1>
      <h3 className="text-warning">This is place holder text{'\u00A0'} {'\u00A0'} <FontAwesomeIcon className="favorites" icon="faStar" /></h3>
      <h5 className="text-info">This is place holder text</h5>

      <div>
        <button onClick={()=>fetchHealthData("topics")}>See Topics
        </button>
      </div>
      <br />
      <div>
        <button onClick={()=>fetchHealthData("categories")}>See Categories
        </button>
      </div>
      <br />

      
      {/* begin mapping health Data */}
        <div className="health-table d-flex flex-column"> {healthInfo && healthInfo.map(healthInfoObj => {
          return <>
            <div className="align-middle p-2" onClick={()=>onClickSubject(healthInfoObj.Id, healthInfoObj.Type)}>{`${healthInfoObj.Title}\u00A0\u00A0`} 
            
            <button className="favorites" id={`${healthInfoObj.Id}`} >
              Favorite
            </button>

            </div>
          </>;
          })}
      {/* end mapping health Data */}
        </div>
      

      </div>
    )
};

export default Healthpedia;
