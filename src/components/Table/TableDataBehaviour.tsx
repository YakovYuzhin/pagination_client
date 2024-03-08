import axios from "axios";
import { useEffect, useState } from "react";

import TableTamplate from "./TableTemplate";

const TableDataBehaviour = () => {
  const [posts, setPosts] = useState([]);

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

  return <TableTamplate data={posts} />;
};

export default TableDataBehaviour;
