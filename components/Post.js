import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Image, TouchableOpacity } from "react-native";
import constants from "../constants";
import Swiper from "react-native-swiper";
import { HeartIcon, MessegeIcon, CommentIcon } from "../components/NavIcon";
import styles from "../styles";
import { useMutation } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import useInput from "../hooks/useInput";

const ADD_COMMENT = gql`
  mutation addComment($text: String!, $postId: String!) {
    addComment(postId: $postId, text: $text) {
      id
      text
      user {
        userName
      }
    }
  }
`;

const TOGGLE_LIKE = gql`
  mutation toggleLike($postId: String!) {
    toggleLike(postId: $postId)
  }
`;

const Container = styled.View`
  margin-bottom: 30px;
  border-width: 1px;
  border-color: "rgb(230,230,230)";
`;

const Header = styled.View`
  padding: 15px;
  flex-direction: row;
  align-items: center;
`;

const Touchable = styled.TouchableOpacity``;

const HeaderUserContainer = styled.View`
  margin-left: 10px;
`;

const Bold = styled.Text`
  font-weight: 900;
  margin-left: 10px
`;

const Text = styled.Text`
  font-size: 12px;
`;
const IconsContainer = styled.View`
  padding: 7px;
  flex-direction: row;
`;
const IconContainer = styled.View`
  margin-right: 10px;
`;
const InfoContainer = styled.View`
  padding: 2px;
`;

const Caption = styled.Text`
  font-weight: 900;
  margin-top:1px;
  margin-bottom:1px;
  margin-left: 10px;
  font-size: 17px;
`;
const LikeCaption = styled.Text`
  font-weight: 900;
  margin-left: 10px;
  font-size: 15px;
`;
const CommentCount = styled.Text`
  opacity: 0.5;
  margin-left: 10px;
  font-weight: 900;
  font-size: 15px;
`;
export const Post = ({
  user,
  location,
  files=[],
  isLiked,
  id,
  likeCount,
  comments,
  caption
}) => {
  const [isLikeds, setIsLiked] = useState(isLiked);
  const [likeCounts, setLikeCount] = useState(likeCount);
  const [toggleLikeMutation] = useMutation(TOGGLE_LIKE, {
    variables: { postId: id }
  });

  const toggleLike = async () => {
    await toggleLikeMutation();
    if (isLikeds === true) {
      setIsLiked(false);
      setLikeCount(likeCounts - 1);
      console.log(likeCount, "-");
    } else {
      setIsLiked(true);
      setLikeCount(likeCounts + 1);
      console.log(likeCount, "+");
    }
  };


  return (
    <Container>
      <Header>
        <Touchable>
          <Image
            style={{ height: 40, width: 40, borderRadius: 40 }}
            source={{ uri: user.avatar }}
          />
        </Touchable>
        <Touchable>
          <HeaderUserContainer>
            <Bold>{user.userName}</Bold>
            <Text>{location}</Text>
          </HeaderUserContainer>
        </Touchable>
      </Header>
      <Swiper
        showsPagination={false}
        style={{ borderTopColor: "black", height: constants.height / 2 }}
      >
        {files.map(file => (
          <Image
            style={{ width: constants.width, height: constants.height / 2 }}
            key={file.id}
            source={{ uri: file.Url }}
          />
        ))}
      </Swiper>
      <InfoContainer>
        <IconsContainer>
          <Touchable onPress={toggleLike}>
            <IconContainer>
              <HeartIcon
                name={isLikeds ? "md-heart" : "md-heart-empty"}
                color={isLikeds ? "red" : "black"}
              />
            </IconContainer>
          </Touchable>
          <IconContainer>
            <CommentIcon size={30} color={"black"} />
          </IconContainer>
          <IconContainer>
            <MessegeIcon color={"black"} />
          </IconContainer>
        </IconsContainer>
      </InfoContainer>
      <LikeCaption>좋아요 {likeCounts}개</LikeCaption>
      <Caption>{caption}</Caption>
      <Touchable>
        <CommentCount>댓글 {comments.length}개 모두보기</CommentCount>
      </Touchable>
    </Container>
  );
};
