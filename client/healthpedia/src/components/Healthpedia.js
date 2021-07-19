// import React from "react";
import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';

const Healthpedia = () => {

  //declare hooks
  // const [topics, setTopics] = useState(false);
  // const [categories, setCategories] = useState(false);
  const [currentFavorite, setCurrentFavorite] = useState({});
  const [currentJournalEntry, setCurrentJournalEntry] = useState({});
  const [healthTopics, setHealthTopics] = useState([]);
  
  const favorites = useSelector(state => state.favorites);
  const journalEntries = useSelector(state => state.journalEntries);
 
  //dispatch
  const dispatch = useDispatch();

  //useEffect
  useEffect(() => {
    //*componentDidUnmount - clean up function
    //   return () => {
    //     effect
    //   };
    })//componenentDidMount

  //apiCalls
  const fetchHealthData = async () => {
    try {
      // const classArray = e.target.className.split(" ");

      const url="https://health.gov/myhealthfinder/api/v3/topicsearch.json?lang=en&topicId=all";//test api call

      const response = await fetch(url);
      const healthTopics = await response.json();
      console.log(healthTopics);
      setHealthTopics(healthTopics.Result.Resources.Resource);
      // if(healthTopics.result.error !== 'False'){
      //   alert(`Ooops! ${healthTopics.result.error}.  Please try again!`);
      // }
      // else {
      //   return healthTopics;
      //   // console.log(healthTopics); //console.log api object
      //   // dispatch(submit(whaleAddress, walletData));
      // }
    }
    // dispatch(submit(favorites, journalEntries));
    catch(err) {
      alert(err);
    }
  }


// fetchHealthData();

  //delete favorites


  return (

      <div style={{height: "100vh"}} className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-white">Healthpedia Page</h1>
      <h3 className="text-warning">This is a protected page</h3>
      <h5 className="text-info">This page should only be seen if user is logged in</h5>

      <div>
        <button onClick={(e)=>fetchHealthData()}>Get Topics
        </button>
      </div>
      <br />

      {/* begin mapping healthTopics */}
      <table> {healthTopics && healthTopics.map(healthTopicsObj => {
        console.log(healthTopicsObj)
          return <>
            <tr>
              <td className="flex-fill p-2">{`${healthTopicsObj.Title}`}
              </td>
            </tr>
          </>;
        })}
        {/* end mapping healthTopics */}
      </table>
      
      </div>
    )
};

export default Healthpedia;
