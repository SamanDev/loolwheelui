import React from "react";
import { Comment, Image } from "semantic-ui-react";

const CommentExampleMetadata = (prop) => (
  <Comment.Group size="mini">
    <Comment size="mini">
      <Comment.Avatar src={prop.image} />
      <Comment.Content>
        <Comment.Author>{prop.username}</Comment.Author>

        <Comment.Text>{prop.txt}</Comment.Text>
      </Comment.Content>
    </Comment>
  </Comment.Group>
);

export default CommentExampleMetadata;
