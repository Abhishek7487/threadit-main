import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPosts } from "../services/apiPosts";

function Feed() {
  const { category } = useParams();

  useEffect(function () {
    getPosts().then((data) => console.log(data));
  }, []);

  return <h1>{category}</h1>;
}

export default Feed;
