import { List, ListItem, ListItemText, Divider } from "@mui/material";

import { IPost } from '../../types/IPost';


interface IProps {
    post: IPost;
  }


const PostTemplate = (props: IProps) => {
  return (
    <List>
      <ListItem>
        <ListItemText>{`userId: ${props.post.userId}`}</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>{`id: ${props.post.id}`}</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>{`title: ${props.post.title}`}</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>{`body: ${props.post.body}`}</ListItemText>
      </ListItem>
      <Divider component="li" />
    </List>
  );
};

export default PostTemplate;