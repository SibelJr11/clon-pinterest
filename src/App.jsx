import { useEffect, useRef, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { createApi } from "unsplash-js";
import { Masonry } from '@mui/lab';
import Card from './components/Card';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useBookStore } from './store/bookStore';


function App() {
    const [data,setData]=useState([]);
    const [hasMore,setHasMore]=useState(true);
    const value = useBookStore((state) => state.value);
    let index = useRef(1);
    const api = createApi({
      accessKey: import.meta.env.VITE_ACCESS_KEY
    });
  console.log(data);

  useEffect(() => {
    index.current = 1;
    setHasMore(true);

    api.search
      .getPhotos({ query: value, perPage:20,page:index.current})
      .then(result => {
        setData(result.response.results);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, [value]);


  const moreData = () =>{
     index.current = index.current+1;
     if(index.current === 3){
         setHasMore(false)
     }
     
     api.search
     .getPhotos({ query: value, perPage:20,page:index.current})
     .then(result => {
        setData(data.concat(result.response.results));
     })
     .catch(() => {
       console.log("something went wrong!");
     });
  }
  return (
     
   <div className="container">
    <Header/>
    <InfiniteScroll
     dataLength={data.length} 
     next={moreData}
     hasMore={hasMore}
    loader={<h4>Loading...</h4>}
    style={{overflow:'none'}}
   >


    <Masonry columns={{xs:2,sm:3,md:5}} spacing={{xs:1,sm:2,md:3}} className='masonry'>
        {data.map((d)=>(
          <Card key={d.id} d={d}/>
        ))
        }
      </Masonry>
</InfiniteScroll>

   </div>
  )
}

export default App
