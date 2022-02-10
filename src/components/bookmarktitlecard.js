import Card from "@mui/material/Card";
import ListDisplay from "./listdisplay";
import { CardContent, CardHeader } from "@mui/material";
import "./bookmarktitlecard.css";
import { useState } from "react";


const BookMarkTitle = (props) => {
  const category = props.category;
  const [display, setDisplay] = useState(false);
 

  const DisplayList = () => {
    setDisplay(true); //Onlcick on the image we set it to display the list of bookmarks even if its empty
  };
  
  return (
    <>
    
    <div className="cardholder">
      <Card sx={{ minWidth: 100, minHeight: 100 }} elevation={3}>
        <CardHeader title={props.name} />

        <CardContent sx={{ maxWidth: 300, maxHeight: 200 }}>
          <img
            className="images"
            src={props.imagename}
            alt="na"
            onClick={DisplayList}
          />
        </CardContent>
      </Card>

      <ListDisplay displaystatus={display} category={category}/>
      
    </div>
    </>
  );
};
export default BookMarkTitle;
