import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import './index.css';

const IndexLayout=()=>{
    return(
        <div class="container">
        <div className="wrapper">
          <img className="image" src={require("../Bookmark.png")} alt="Company logo"></img>
        </div>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" href="#text-buttons" className="button">
            CONTACT
          </Button>
        </Stack>
      </div>

    );
}
export default IndexLayout;
