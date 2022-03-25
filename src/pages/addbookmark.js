import "./addbookmark.css";
import * as React from "react";
import { useState } from "react";
import { addActions } from "../store/addbookmarkstore";
import { useDispatch } from "react-redux";
import IndexLayout from "../Layout";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Alert } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import lottie from "lottie-web";

export default function AddbookMark() {
  //Side Navigation

  const dispatch = useDispatch();

  const [alert, setAlert] = useState(false); //ALERT

  const [name, setName] = useState("");

  const nameHandler = (event) => {
    setName(event.target.value); //BOOKMARKNAME
  };

  const [url, setUrl] = useState("");

  const urlHandler = (event) => {
    setUrl(event.target.value); //URL
  };

  const [category, setCategory] = useState("social");
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const handleClear = () => {
    setName("");
    setUrl("");
    setCategory("social");
    setAlert(false);
  };
  //Category
  const urlcheck =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  const patternmatch = new RegExp(urlcheck);
  const AddBookMarkHandler = (event) => {
    event.preventDefault();
    if (name.trim() === "" || url.trim() === "" || category === "") {
      setError(true);
      setAlert(false);
      console.log(name.trim());
    } else if (!url.match(patternmatch)) {
      console.log("cgeck url"); //state update required
    } else {
      let payload = {
        id: Math.random() * Date.now(),
        category: category,
        name: name,
        url: url, //SENDING IT TO STORE
      };
      
      dispatch(addActions.AddBookmark(payload));

      setTimeout(() => {
        handleClear();
      }, [1000]);

      setAlert(true);
      setError(false);
    }
  };

  const [error, setError] = useState(false);

  //svg
  const container = React.useRef(null);
  React.useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../new.json"),
    });
  }, []);

  return (
    <form>
      <IndexLayout />
      <div className="add-bookmark-container">
        <div
          style={{
            width: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <div ref={container} className="add-svg"></div>
        </div>
        <div className="content-holder">
          <TextField
            id="outlined-basic"
            label="Bookmark name please"
            variant="outlined" //BOOKMARK NAME
            value={name}
            onChange={nameHandler}
            style={{ marginTop: "20px" }}
            className="input"
          />

          <TextField
            id="outlined-basic"
            label="Bookmark url please"
            variant="outlined" //BOOKMARK NAME
            value={url}
            onChange={urlHandler}
            style={{ marginTop: "20px" }}
            className="input"
          />

          <p style={{fontFamily: "Lucida Console", padding:'10px', display:'flex', color: 'rgb(18, 78, 97)', justifyContent:'center'}}>Category Name</p>
          
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            className="select"
            onChange={handleChange}
          >
            <MenuItem value={"social"}>Social</MenuItem>
            <MenuItem value={"education"}>Education</MenuItem>
            <MenuItem value={"office"}>Office</MenuItem>
            <MenuItem value={"music"}>Music</MenuItem>
            <MenuItem value={"everyday"}>Everday</MenuItem>
            <MenuItem value={"entertainment"}>Entertainment</MenuItem>
            <MenuItem value={"news"}>News</MenuItem>
            <MenuItem value={"sports"}>Sports</MenuItem>
            <MenuItem value={"style"}>Style</MenuItem>
          </Select>

          <button
            className="add-button"
            onClick={AddBookMarkHandler}
            max-width="70px"
            min-width="70px"
          >
            CREATE
          </button>

          {alert && (
            <Alert severity="success">BookMark Successfully created!</Alert>
          )}

          {error && (
            <Alert severity="error">Please Enter all the details</Alert>
          )}
        </div>
      </div>
    </form>
  );
}
