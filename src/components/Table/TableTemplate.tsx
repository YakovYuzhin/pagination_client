import { IPost } from "../../types/IPost";
import { Container, List, Pagination, Stack, TextField } from "@mui/material";

import PostTemplate from "../Post/PostTemplate";

interface IProps {
  posts: IPost[];
}

const TableTamplate = (props: IProps) => {
  return (
    <Container maxWidth="md">
      <Stack alignItems="center" spacing={2}>
        <Pagination />
        <List>
          {props.posts.map((post) => (
            <PostTemplate post={post} />
          ))}
        </List>
      </Stack>
    </Container>
  );
};

export default TableTamplate;
