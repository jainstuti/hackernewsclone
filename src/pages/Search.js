import { useState, useEffect } from "react";
import { useQuery } from 'react-query';
import axios from 'axios';
import StoryList from "../StoryList";

// const fetchStories =  (query, tag, by, time) => {
  //   // console.log(pageNo)
  //   let baseUrl='https://hn.algolia.com/api/v1/search';
   
  //   if(by==="date"){
  //       baseUrl+="_by_date";
  //   }
    
  //   baseUrl+=`?query=${query}`;

  //   if(by==='popularity'){
  //       baseUrl+="&numericFilters=points>10";
  //   }
    
  //   if(tag!==""){
        
  //       baseUrl+=`&tags=${tag}`;
  //   }
    
  //   if(time!==""){
  //       baseUrl+=`&numericFilters=created_at_i>${time}`;
  //   }
  //   // return axios.get(baseUrl);

  //   fetch(baseUrl)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(this.stories);
  //       this.setStories(data['hits']);
  //     });
    
  // }

const Search = () => {
    const [query, setQuery] = useState('');
    const [tag, setTag] = useState('story');
    const [by, setBy] = useState('popularity');
    const [time, setTime] = useState('');
    const [stories, setStories] = useState(null);

    // const { isLoading, isError, data } = useQuery(
    //     ['stories'], ()=>fetchStories(), {
    //     keepPreviousData: true,
    //   });

      const handleSearch=(e)=>{
        // e.preventDefault();

        // if(isLoading){
        //   return <h2>Loading...</h2> 
        // }
      
        // if(isError){
        //   return <h2>error</h2> 
        // }
        // fetchStories(query, tag, by, time);
        let baseUrl='https://hn.algolia.com/api/v1/search';
   
    if(by==="date"){
        baseUrl+="_by_date";
    }
    
    baseUrl+=`?query=${query}`;

    if(by==='popularity'){
        baseUrl+="&numericFilters=points>10";
    }
    
    if(tag!==""){
        
        baseUrl+=`&tags=${tag}`;
    }
    
    if(time!==""){
        baseUrl+=`&numericFilters=created_at_i>${time}`;
    }
    // return axios.get(baseUrl);

    fetch(baseUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let newStories=data['hits']
        setStories(newStories);
        console.log(stories);
      });
      
      }

  return (
    <div id="filters">
    {/* <form > */}
      <input placeholder="query" 
      onChange={(e)=>setQuery(e.target.value)}
      value={query}></input>

      <button 
      onClick={handleSearch}
      >Search</button>
      <p>Filters</p>
      <span>Type: </span>
      <select value={tag}
      onChange={(e)=>setTag(e.target.value)}>
        <option value="">All</option>
        <option value="story">Stories</option>
        <option value="comment">Comments</option>
        </select>

        <span>By: </span>
      <select value={by}
      onChange={(e)=>setBy(e.target.value)}>
        <option value="popularity">Popularity</option>
        <option value="date">Date</option>
        </select>

      <span>Time: </span>
      <select value={time}
      onChange={(e)=>setTime(e.target.value)}>
        <option value="">All time</option>
        <option value="86400">Last 24h</option>
        <option value="604800">Past Week</option>
        <option value="2419200">Past Month</option>
        <option value="29030400">Past Year</option>
        </select>
        {/* </form> */}
        {/* {console.log(stories)} */}
        {stories?<StoryList stories={stories} />: null}
    </div>
  );
}

export default Search;
