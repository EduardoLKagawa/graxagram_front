import "./home.css";
import { useState, useEffect } from "react";
import { mockedPosts } from "../../data/mockedPosts.mjs";
import { Cards } from "../../components/Cards/Cards";

const Home = () => {
  const [listPosts, setListPosts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setListPosts(mockedPosts.reverse());
      setIsLoaded(true);
    }, 100);
  }, []);

  return (
    <div>
      <div className="home">
        <div className="posts_grid_container">
          {isLoaded && listPosts.length > 0 ? (
            listPosts.map((post, index) => (
            <Cards key={`post-${index}`} item={post} />
            ))
          ) : (
            <p>Carregando...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
