import Chart from "../../chart/Chart";
import FeaturedInfo from "../../featuredinfo/FeaturedInfo";
import "./Home.css";
import { userData } from "../../../dummyData";
import WidgetLg from "../../widgetLg/WidgeLg";
import WidgetSm from "../../widgetSm/WidgetSm";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        datakey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
