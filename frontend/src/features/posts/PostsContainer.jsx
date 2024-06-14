import Spinner from "../../ui/Spinner";
import styled from "styled-components";
import PostCard from "./PostCard";

const StyledPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

function PostsContainer() {
  return (
    <StyledPostsContainer>
      {/* {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))} */}
    </StyledPostsContainer>
  );
}

export default PostsContainer;
