import Card from "@mui/material/Card";
import ListDisplay from "./listdisplay";
import { CardContent } from "@mui/material";
import "./bookmarktitlecard.css";
import { useState } from "react";

const BookMarkTitle = (props) => {
  const category = props.category;
  const [display, setDisplay] = useState(false);

  console.log("Display", display);
  const DisplayList = () => {
    setDisplay(true); //Onlcick on the image we set it to display the list of bookmarks even if its empty
  };

  return (
    <>
      <div className="cardholder">
        <Card sx={{ minWidth: 200, minHeight: 200}} elevation={3}>
          <p className="cardheaders">{props.name}</p>

          <CardContent sx={{ maxWidth: 400, maxHeight: 300 }}>
            <img
              className="images"
              src={props.imagename}
              alt="na"
              onClick={DisplayList}
            />
          </CardContent>
        </Card>

        <ListDisplay
          displaystatus={display}
          category={category}
          setDisplay={setDisplay}
        />
      </div>
    </>
  );
};
export default BookMarkTitle;
