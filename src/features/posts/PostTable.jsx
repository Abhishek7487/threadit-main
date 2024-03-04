import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../services/apiPosts";
import Spinner from "../../ui/Spinner";
import { useParams } from "react-router-dom";

function PostTable() {
  const { category } = useParams();
  const {
    isLoading,
    data: posts,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
  if (isLoading) return <Spinner />;
  return <div>{category}</div>;
}

export default PostTable;
