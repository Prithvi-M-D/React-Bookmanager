import Button from "@mui/material/Button";
import "./index.css";
import { Link } from "react-router-dom";

const IndexLayout = () => {
  return (
    <div class="header-container">
      <Button component={Link} to="/dashboard">
        Your BookMark
      </Button>

      <Button component={Link} to="/">
        Add Bookmark
      </Button>

      <Button component={Link} to="/favourites">
        Favourites
      </Button>
    </div>
  );
};
export default IndexLayout;
