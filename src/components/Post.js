import React from "react";
import tw from "tailwind-styled-components";

const Post = ({ title, description, upvotes, postedBy, userImage }) => {
  return (
    <Wrapper>
      <VoteWrapper>
        <VoteButton src="https://img.icons8.com/ios-filled/200/444444/up--v1.png" />
        <Upvotes>{upvotes}</Upvotes>
        <VoteButton src="https://img.icons8.com/ios-filled/200/444444/down--v1.png" />
      </VoteWrapper>

      <PostData>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <HorizontalLIne />
        <Details>
          <UserImage src={userImage} />
          <PostedBy>
            Posted by <PostedByName>{postedBy}</PostedByName>
          </PostedBy>
        </Details>
      </PostData>
    </Wrapper>
  );
};

export default Post;

const Wrapper = tw.div`
bg-white my-5 w-11/12 flex rounded-xl px-1 py-5 shadow-xl`;

const VoteWrapper = tw.div`
h-full w-36 flex-col items-center justify-start`;
const Upvotes = tw.img`
text-xl font-bod py-4`;
const VoteButton = tw.img`
h-6 object-contain`;

const PostData = tw.div``;
const Title = tw.div`
text-3xl font-bold mb-5 text-gray-600 `;

const Description = tw.div`text-gray-700`;
const HorizontalLIne = tw.div`bg-gray-200 h-px mt-5 mr-1 ml-5 mb-2`;
const Details = tw.div`
flex items-center`;

const UserImage = tw.img`
h-5 object-contain rounded-full mr-4`;

const PostedBy = tw.div`
font-xs text-gray-500 `;

const PostedByName = tw.span`
`;
