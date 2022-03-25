import { useState } from "react";
import * as React from "react";
import { useDispatch } from "react-redux";
import "./listdisplay.css";
import { addActions } from "../store/addbookmarkstore";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useSelector } from "react-redux";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import { makeStyles } from '@material-ui/core/styles';

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

const useStyles = makeStyles(theme => ({
  dialogPaper: {
     
      top : '30%',
      width:'200px'
  },
}));

const ListDisplay = (props) => {


  const dispatch = useDispatch();
  const isClicked = props.displaystatus;

  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(true);
    props.setDisplay(false);
  };

  const payload = props.category;
  const bookmark = useSelector((state) => state.add[payload]);

  function deleteHandler(id, category) {
    const removaldata = { id, category };
    dispatch(addActions.DeleteBookmark(removaldata));
    console.log('deere');
  }

  const favouriteHandler = (url, name) => {
    const fav = {url, name};
    dispatch(addActions.Favourite(fav));
  };
  

  if (isClicked) {
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
            timeout: 10,
          }}
        >
          <Fade in={open}>
            <Box sx={style} classes={{ paper : useStyles.dialogPaper}}>
              <p
                style={{
                  textAlign: "center",
                  color: "rgb(18, 78, 97)",
                  textTransform: "uppercase",
                }}
              >
                {payload}
              </p>
              {bookmark.map((item) => (
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                  }}
                  aria-label="contacts"
                >
                  <div className="nameseperator">
                    <div style={{ margin: "auto", marginLeft: "10px" }}>
                      <ListItemIcon>
                        <a
                          target="_blank"
                          href={"http://" + item.url}
                          rel="noreferrer"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <p className="linkname">{item.name}</p>
                          {console.log(item.name)}
                        </a>
                      </ListItemIcon>
                    </div>
                    <div className="sep">
                      <img
                        src="../images/copy.png"
                        alt="copy"
                        onClick={() => {
                          navigator.clipboard.writeText(item.url);
                        }}
                        style={{
                          width: "30px",
                          height: "30px",
                          cursor: "pointer",
                          padding: "5px",
                        }}
                      />

                      <img
                        src="../images/delete.png"
                        alt="delete"
                        onClick={() => deleteHandler(item.id, item.category)}
                        style={{
                          width: "30px",
                          height: "30px",
                          cursor: "pointer",
                          padding: "5px",
                        }}
                      />

                      <img
                        src="../images/love.png"
                        alt="fav"
                        onClick={() => favouriteHandler(item.url, item.name)}
                        style={{
                          width: "30px",
                          height: "30px",
                          cursor: "pointer",
                          padding: "5px",
                        }}
                      />
                    </div>
                  </div>
                </List>
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
