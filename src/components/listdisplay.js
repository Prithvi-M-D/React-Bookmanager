import { useState } from "react";
import './listdisplay.css';
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
// import { addActions } from "../store/addbookmarkstore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ContentCutRoundedIcon from "@mui/icons-material/ContentCutRounded";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ListDisplay = (props) => {
  // const dispatch = useDispatch();
  const isLoggedIn = props.displaystatus;
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  const payload = props.category;
  const bookmark = useSelector((state) => state.add[payload]);
  if (isLoggedIn) {
    return (
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                {payload}
              </Typography>
              {bookmark.map((item) => (
                <>
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                    }}
                    aria-label="contacts"
                  >
                    <ListItem disablePadding>
                    <div className="sep">
                      <ListItemButton>
                        <ListItemText>Name={item.name} </ListItemText>
                        <div className="nameseperator">
                        <ListItemIcon>
                          <ContentCutRoundedIcon />
                          <Typography
                            id="transition-modal-description"
                            sx={{ mt: 2 }}
                          >
                            URL: {item.url}
                          </Typography>
                        </ListItemIcon>
                        </div>
                      </ListItemButton>
                    </div>
                    </ListItem>
                  </List>
                </>
              ))}
            </Box>
          </Fade>
        </Modal>
      </div>
    );
  } else {
    return null;
  }
};

export default ListDisplay;
