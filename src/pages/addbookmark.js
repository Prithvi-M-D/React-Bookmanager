import "./addbookmark.css";
import * as React from "react";
import { useState } from "react";
import Side from '../Layout/side'
import { addActions } from "../store/addbookmarkstore";
import { useDispatch } from "react-redux";
import IndexLayout from "../Layout";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Alert, CardActionArea, CardActions } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function AddbookMark() {
  //Side Navigation

  const dispatch = useDispatch();

  const [ alert, setAlert] = useState(false);  //ALERT

  const [title, setTitle] = useState("");

  const titleHandler = (event) => {
    setTitle(event.target.value); //TITLE
  };

  const [name, setName] = useState("");

  const nameHandler = (event) => {
    setName(event.target.value); //BOOKMARKNAME
  };

  const [url, setUrl] = useState("");

  const urlHandler = (event) => {
    setUrl(event.target.value); //URL
  };

  const [category, setCategory] = useState("");
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  console.log(category);        //Category

  const AddBookMarkHandler = () => {
    let payload = {
      id: 1,
      category: category,
      title: title,
      name: name,
      url: url,                   //SENDING IT TO STORE
      
    };
    dispatch(addActions.AddBookmark(payload));
    setAlert(true);
  };

  return (
    <>
      <IndexLayout/>

      <div className="blankspace"></div>
      <div className="midcontainer">
        <Side/>

        <div class="item1">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Add Bookmark
                </Typography>

                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Category
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={category}
                      label="Catgory"
                      onChange={handleChange}
                    >
                      <MenuItem value={"social"}>Social!!!</MenuItem>
                      <MenuItem value={"education"}>Education</MenuItem>
                      <MenuItem value={"office"}>Office</MenuItem>
                      <MenuItem value={"music"}>Style</MenuItem>
                      <MenuItem value={"everyday"}>Everday</MenuItem>
                      <MenuItem value={"entertainment"}>Entertainment</MenuItem>
                      <MenuItem value={"news"}>News</MenuItem>
                      <MenuItem value={"sports"}>Sports</MenuItem>
                      <MenuItem value={"style"}>Style</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Typography variant="h6" color="text.secondary">
                  Add Title
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="outlined-basic"
                      label="Outlined"
                      variant="outlined" //TITLE
                      value={title}
                      onChange={titleHandler}
                    />
                  </Box>
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Bookmark Name!!!
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="outlined-basic"
                      label="Outlined"
                      variant="outlined" //BOOKMARK NAME
                      value={name}
                      onChange={nameHandler}
                    />
                  </Box>
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  URL
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="outlined-basic"
                      label="Outlined" //URL
                      variant="outlined"
                      value={url}
                      onChange={urlHandler}
                    />
                  </Box>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={AddBookMarkHandler}>
                CREATE
              </Button>
              {alert && <Alert severity="success">BookMark Successfully created!</Alert>}
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
}
