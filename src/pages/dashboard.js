import BookMarkTitle from "../components/bookmarktitlecard";
import IndexLayout from "../Layout/index";
import Side from "../Layout/side";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="main-nav">
        <IndexLayout />
        <Side />
        <div className="cards">
          <BookMarkTitle
            name="SOCIAL"
            imagename={require("../images/social.jpg")}
            category="social"
          />
          <BookMarkTitle
            name="OFFICE"
            imagename={require("../images/office.jpg")}
            category="office"
          />
          <BookMarkTitle
            name="EVERYDAY"
            imagename={require("../images/everyday.jpg")}
            category="everyday"
          />
          <BookMarkTitle
            name="ENTERTAINMENT"
            imagename={require("../images/entertainment.jpg")}
            category="entertainment"
          />
          <BookMarkTitle
            name="STYLE"
            imagename={require("../images/style.jpg")}
            category="style"
          />
          <BookMarkTitle
            name="MUSIC"
            imagename={require("../images/music.jpg")}
            category="music"
          />
          <BookMarkTitle
            name="EDUCATION"
            imagename={require("../images/education.jpg")}
            category="education"
          />
          <BookMarkTitle
            name="SPORTS"
            imagename={require("../images/sports.jpg")}
            category="sports"
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
