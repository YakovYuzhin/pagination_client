import { List, ListItem, ListItemText } from "@mui/material";

import { IPost } from "../../types/IPost";

interface IProps {
  postOnPage: IPost;
}

const PostTemplate = (porps: IProps) => {
  return (
    <List>
      <ListItem>
        <ListItemText>{`userId: ${porps.postOnPage.userId}`}</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>{`id: ${porps.postOnPage.id}`}</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>{`title: ${porps.postOnPage.title}`}</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>{`body: ${porps.postOnPage.body}`}</ListItemText>
      </ListItem>
    </List>
  );
};

export default PostTemplate;
