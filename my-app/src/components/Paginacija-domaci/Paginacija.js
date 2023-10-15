import { useState, useEffect} from "react";
import "./Post.css";
import "./Paginacija.css";
import Post from "./post";


function Paginacija() {
    const [defaultData, setDefaultData] = useState([]);
    useEffect(() => {
       fetch('https://dummyjson.com/posts?limit=10&skip=10&select=title,reactions,body')
         .then(res => res.json())
         .then((data) => {
            setDefaultData(data?.posts);
            console.log(data);
         });
         console.log(defaultData);
    }, []);

    return(
        <div className="paginacija">
      {defaultData?.length > 0 ? (
        defaultData?.map((posts) => <Post posts={posts} />)
      ) : (
        <h1>Nema podataka</h1>
      )}

      <div className="paginaton"></div>
    </div>
  );

 }
export default Paginacija