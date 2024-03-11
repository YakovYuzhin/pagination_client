import { useEffect, useState } from "react";
import axios from "axios";

import TableTamplate from "./TableTemplate";

const TableDataBehaviour = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 10;
  const pageNumber = Math.ceil(posts.length / postsPerPage);

  const iOfLastPost = currentPage * postsPerPage;
  const iOfFirstPost = iOfLastPost - postsPerPage;
  const curentPosts = posts.slice(iOfFirstPost, iOfLastPost);

  const changePage = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ): void => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <TableTamplate
      posts={curentPosts}
      currentPage={currentPage}
      pageNumber={pageNumber}
      changePage={changePage}
    />
  );
};

export default TableDataBehaviour;
