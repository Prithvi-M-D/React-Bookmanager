import BookMarkTitle from "../components/bookmarktitlecard";
import IndexLayout from "../Layout/index";
import "./dashboard.css";
import DashboardConfig from "../config/dashboard-config";

const Dashboard = () => {
  return (
    <>
      <IndexLayout />
      
      <div className="cards">
        {DashboardConfig.map((item) => {
          return (
            <BookMarkTitle
              key={item.name}
              name={item.name}
              imagename={item.imagename}
              category={item.category}
            />
          );
        })}
      </div>
    </>
  );
};

export default Dashboard;
