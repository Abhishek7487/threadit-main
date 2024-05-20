import moment from "moment";
import Heading from "../../ui/Heading";
import styled from "styled-components";
import Avatar from "../../ui/Avatar";
import VotesCalc from "../../ui/VotesCalc";

const StyledPostCard = styled.div`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 0.8rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    background-color: var(--color-grey-100);
    border-radius: var(--border-radius-sm);
  }

  padding: 2rem 3.6rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-bottom: 1px solid var(--color-grey-300);
  cursor: pointer;
`;

const PostCardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  p {
    color: var(--color-grey-500);
  }
`;

const PostCardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  p {
    color: var(--color-grey-600);
  }

  /* img {
    width: 50rem;
  } */
`;

const PostCardFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 0.6rem;
`;

function PostCard({ post }) {
  const { title, content, image, createdAt, userId, postVotes, postId } = post;
  const relativeTime = moment(createdAt).fromNow();
  return (
    <StyledPostCard>
      <PostCardHeader>
        <Avatar />
        <Heading as="h4">u/{userId}</Heading>
        <p>{relativeTime}</p>
      </PostCardHeader>
      <PostCardBody>
        <Heading as="h2">{title}</Heading>
        {content && <p>{content}</p>}
        {image && <img src={image} alt="post-image" />}
      </PostCardBody>
      <PostCardFooter>
        <VotesCalc post={post} />
      </PostCardFooter>
    </StyledPostCard>
  );
}

export default PostCard;
