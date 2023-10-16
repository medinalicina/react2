import { useState, useEffect} from "react";
import "./post.css";
import "./paginacija.css";
import Post from "./post";

function Paginacija() {
    const [defaultData, setDefaultData] = useState([]);
    const [paginacija, setPaginacija] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"})
  }

    useEffect(() => {
       fetch(`https://dummyjson.com/posts?skip=${paginacija}`)
         .then(res => res.json())
         .then((data) => {
            setDefaultData(data?.posts);
            console.log(data);
         });
         console.log(defaultData);
       
    }, [paginacija]);

    const handlePaginacijaClick = (page) => {
      setPaginacija(page);
    };  
    
    return(
        <div className="paginacija">
      {defaultData?.length > 0 ? (
        defaultData?.map((posts) => <Post posts={posts} />)
      ) : (
        <h1>Nema podataka</h1>
      )}
    <div className="pagination">
    {[1, 2, 3, 4, 5].map((page) => (
      <button
        key={page}
        className={paginacija === page - 1 ? "active" : ""}
        onClick={() => handlePaginacijaClick(page - 1)}
      >
      {page} 
      </button>
          ))}
      </div>
      </div>
  );

 }
export default Paginacija