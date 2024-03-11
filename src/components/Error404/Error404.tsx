import { Alert, AlertTitle } from "@mui/material";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <Alert severity="error">
      <AlertTitle>Page not found</AlertTitle>
      <Link to="/">Back to home</Link>
    </Alert>
  );
};

export default Error404;
