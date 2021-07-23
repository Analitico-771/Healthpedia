// import React from "react";
import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { addSubjectData } from '../redux/index'
import { addFavorite } from '../redux/index'
import './healthpedia.css'
import { useHistory } from "react-router-dom";

const Healthpedia = () => {

  //declare hooks
  // const [topics, setTopics] = useState(false);
  // const [categories, setCategories] = useState(false);
  const [favorite, setFavorite] = useState([]);//for stretch goal
  const [yellowStar, setyellowStar] = useState(false);
  const [currentJournalEntry, setCurrentJournalEntry] = useState({});
  const [healthInfo, setHealthInfo] = useState([]);
  // const [subjectInfo, setSubjectInfo] = useState([]);

  const subjectInfo =  useSelector(state => state.subjectInfo);
  const favorites = useSelector(state => state.favorites);
  const journalEntries = useSelector(state => state.journalEntries);
  console.log("favorites", favorites)
 
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
      // console.log(healthInfo);
      setHealthInfo(healthInfo.Result.Items.Item);
      
    }
    // dispatch(submit(favorites, journalEntries));
    catch(err) {
      alert("There's a problem with the website. Please wait a few moments and try again ", err);
    }
  }

  // onClick function for favorites id, topics, or categories;
  const onClickFavorite = (apiId, type, title, isFavorite) => {

    let favorite = { apiId, type, title, isFavorite };

    console.log("Dispatch Favorite", favorite);

    dispatch(addFavorite(favorite));//Original state dispatch

    setyellowStar(true);
  }

  // onClick function for favorites id, topics, or categories;
  const onClickRemoveFavorite = (apiId, type, title) => {

    // let favorite = { apiId, type, title };

    // console.log("Dispatch Favorite", favorite);

    // dispatch(addFavorite(favorite));//Original state dispatch

   setyellowStar(false);
  }


  // onClick function for fetching id, topics, or categories;
  const onClickSubject = async (id, type) => {
    try {

      let url = "";
      if(type === "Topic"){
        // console.log(id);
        url = `https://health.gov/myhealthfinder/api/v3/topicsearch.json?lang=en&topicId=${id}`;
      }                                                               //"Topic" ${type}
      else{
        // console.log(id);
        url = `https://health.gov/myhealthfinder/api/v3/topicsearch.json?lang=en&categoryId=${id}`;
      }                                                             //"Category" ${type}
      
      const response = await fetch(url);
      const subjectData = await response.json();
      
      dispatch(addSubjectData(subjectData));//Original state dispatch
      
      history.push("/healthinfo")
    }
    catch(err) {
      alert("There's a problem with the website. Please wait a few moments and try again ", err);
    }

  }

  //delete favorites

  return (

      <div style={{height: "100vh"}} className="d-flex flex-column align-items-center">
        <br />

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

              {yellowStar === false ? <FontAwesomeIcon icon={["fa", "star"]} className="star" onClick={()=>onClickFavorite(healthInfoObj.Id, healthInfoObj.Type, healthInfoObj.Title, yellowStar)} /> : <FontAwesomeIcon icon={["fa", "star"]} className="star active" onClick={()=>onClickRemoveFavorite(healthInfoObj.Id, healthInfoObj.Type, healthInfoObj.Title)}/>}

              </div>
            </>;
            })}
        {/* end mapping health Data */}
          </div>
      </div>
    )
};

export default Healthpedia;
