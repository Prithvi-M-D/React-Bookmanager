import IndexLayout from "../Layout/";
import { useSelector } from "react-redux";
import lottie from "lottie-web";
import * as React from "react";
import "./favourites.css";

const Fav = () => {
  //svg
  const container = React.useRef(null);
  React.useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../fav.json"),
    });
  }, []);

  const fav = useSelector((state) => state.add["favourite"]);
  return (
    <div>
      <IndexLayout />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "600px" }}>
          <p style={{fontFamily: "Lucida Console", padding:'10px', display:'flex', color: 'rgb(18, 78, 97)', justifyContent:'center'}}>YOUR FAVOURITE BOOKMARKS</p>
          <p>
            {fav.map((item) => {
              return (
                  
                <div className="fav-card">
                    <p style={{fontFamily: "Lucida Console", padding:'10px', display:'flex', alignItems:'flex-start'}}>Name</p>
                    <p>{item.name} - </p>
                  <a
                    target="_blank"
                    href={"http://" + item.url}
                    rel="noreferrer"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <p>{item.url}</p>
                  </a>
                </div>
              );
            })}
          </p>
        </div>
        <div
          ref={container}
          className="fav-svg"
        ></div>
      </div>
    </div>
  );
};
export default Fav;
