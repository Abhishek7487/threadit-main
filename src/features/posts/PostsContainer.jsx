import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../services/apiPosts";
import Spinner from "../../ui/Spinner";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import PostCard from "./PostCard";

const StyledPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

function PostsContainer() {
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

  return (
    <StyledPostsContainer>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </StyledPostsContainer>
  );
}

export default PostsContainer;
