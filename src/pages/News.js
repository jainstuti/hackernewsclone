import { useState, useEffect } from "react";
import { useQuery } from 'react-query';
import axios from 'axios';
import StoryList from "../StoryList";

// const queryClient = new QueryClient()

const fetchStories =  (pageNo) => {
    // console.log(pageNo)
    return axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=latest&page=${pageNo}`)
    
  }

const News = () => {
//   const [stories, setStories] = useState(null);
  const [ pageNo, setPageNo ] = useState(1);
  const { isLoading, isError, data } = useQuery(
    ['stories', pageNo], ()=>fetchStories(pageNo), {
    keepPreviousData: true,
  });

  if(isLoading){
    return <h2>Loading...</h2> 
  }

  if(isError){
    return <h2>error</h2> 
  }
//   const { 
//     data,  
//     status 
//   } = useQuery(['stories', page], fetchStories);

//   useEffect(() => {
//     fetch(
//       "https://hn.algolia.com/api/v1/search_by_date?query=\"latest+news\""
//     )
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         setStories(data['hits']);
//       });
//   }, []);

  return (
    
    <div>

    {data? 
        <div id="pagination">
        {/* {console.log(data)} */}
          <button 
            onClick={() => setPageNo(old => Math.max(old - 1, 1))} 
            disabled={pageNo === 1}>
            Previous Page
          </button>
          <span>{ pageNo }</span>
          <button 
            onClick={() => setPageNo(old =>  old + 1)} 
            >
            Next page
          </button>
          <div>
            <StoryList stories={data['data']['hits']} />
          </div>
        </div>: null
    }
      {/* {stories && <StoryList stories={stories} />} */}
    </div>
  );
}

export default News;
// export default function Wrapped(){
//     return(<QueryClientProvider client={queryClient}>
//             <News/>
//         </QueryClientProvider>
//     );
        
    // }
