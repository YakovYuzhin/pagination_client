import {
  Container,
  List,
  Pagination,
  Stack,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";

import styles from "./Table.module.css";

import { IPost } from "../../types/IPost";

interface IProps {
  posts: IPost[];
  currentPage: number;
  pageNumber: number;
  changePage(event: React.ChangeEvent<unknown>, newPage: number): void;
}

const TableTamplate = (props: IProps) => {
  return (
    <Container maxWidth="md">
      <Stack alignItems="center" spacing={2}>
        <Pagination
          count={props.pageNumber}
          page={props.currentPage}
          onChange={props.changePage}
        />
        <List>
          {props.posts.map((post) => (
            <Link to={`${post.id}`} key={post.id} className={styles.postLink}>
              <List>
                <ListItem>
                  <ListItemText>{`userId: ${post.userId}`}</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>{`id: ${post.id}`}</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>{`title: ${post.title}`}</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>{`body: ${post.body}`}</ListItemText>
                </ListItem>
                <Divider component="li" />
              </List>
            </Link>
          ))}
        </List>
      </Stack>
    </Container>
  );
};

export default TableTamplate;
