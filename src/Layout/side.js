import { Link } from 'react-router-dom';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import './side.css';
const Side = () => {
  return (
    <div className="side-nav">
      <Stack spacing={2}>
        <Button component={Link} to="/dashboard">
          DASHBOARD
        </Button>

        <Button>ADD BOOKMARK</Button>

        <Button component={Link} to="/favourites">
          FAVOURITES
        </Button>
      </Stack>
    </div>
  );
}

export default Side;
