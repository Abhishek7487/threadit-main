import { useState } from "react";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import styled from "styled-components";
import { updatePostVotes } from "../services/apiPosts";

const Votes = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 2rem;
  font-size: 2rem;
  font-weight: 400;
  background-color: var(--color-grey-150);

  & span {
    font-size: 1.6rem;
    font-weight: 500;
    padding: 0.8rem 0;
  }
`;

const VoteUp = styled.div`
  background-color: ${(props) =>
    props.voteStatus === "upvote" ? "green" : "transparent"};
  color: ${(props) => (props.voteStatus === "upvote" ? "white" : "")};

  border-top-left-radius: 2rem;
  padding: 1rem;
  border-bottom-left-radius: 2rem;
  display: flex;
  align-items: center;
`;

const VoteDown = styled.div`
  background-color: ${(props) =>
    props.voteStatus === "downvote" ? "red" : "transparent"};
  color: ${(props) => (props.voteStatus === "downvote" ? "white" : "")};

  border-top-right-radius: 2rem;
  padding: 1rem;
  border-bottom-right-radius: 2rem;
  display: flex;
  align-items: center;
`;

function VotesCalc({ post }) {
  const [voteStatus, setVoteStatus] = useState("");
  const queryClient = useQueryClient();

  const { mutate: upvote, isLoading } = useMutation({
    mutationFn: (post) => updatePostVotes(post),
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  function handleUpvote() {
    setVoteStatus(voteStatus === "upvote" ? "" : "upvote");
    if (voteStatus === "upvote") return;
    upvote(post);
    console.log("Post upvoted");
  }

  function handleDownvote() {
    setVoteStatus(voteStatus === "downvote" ? "" : "downvote");
    if (voteStatus === "downvote") return;
    console.log("Post downvoted");
  }

  return (
    <Votes voteStatus={voteStatus}>
      <VoteUp voteStatus={voteStatus}>
        <BiUpArrow onClick={handleUpvote} />
      </VoteUp>
      <span>{post.postVotes}</span>
      <VoteDown voteStatus={voteStatus}>
        <BiDownArrow onClick={() => handleDownvote()} />
      </VoteDown>
    </Votes>
  );
}

export default VotesCalc;
