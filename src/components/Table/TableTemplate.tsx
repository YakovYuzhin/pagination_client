import { IPost } from "../../types/IPost";
import { Container, List, Pagination, Stack } from "@mui/material";

import PostTemplate from "../Post/PostTemplate";

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
            <PostTemplate key={post.id} post={post} />
          ))}
        </List>
      </Stack>
    </Container>
  );
};

export default TableTamplate;
