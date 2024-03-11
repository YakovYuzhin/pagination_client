import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { LinearProgress } from '@mui/material';
import PostTemplate from "./PostTemplate";
import Error404 from "../Error404/Error404";

import { IPost } from "../../types/IPost";

const PostDataBehaviour = () => {
  const param = useParams<{ postID: string }>();
  const [postOnPage, setPostOnPage] = useState<IPost>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${param.postID}`)
      .then((response) => {
        setPostOnPage(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, [param]);

  return loading 
    ? <LinearProgress />
    : postOnPage 
        ? <PostTemplate postOnPage={postOnPage} />
        : <Error404 />
};

export default PostDataBehaviour;



