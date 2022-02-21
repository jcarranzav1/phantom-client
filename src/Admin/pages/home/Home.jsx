import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './home.css';
import { userData } from '../../dummyData';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="d-flex mt-3">
        <Sidebar />
        <div className="home" style={{ fontFamily: 'Source Sans Pro' }}>
          <FeaturedInfo />
          <Chart
            className="chart"
            data={userData}
            dataKey="Active User"
            title="User Analytics"
            grid
          />
          <div className="homeWidgets">
            <WidgetSm />
            <WidgetLg />
          </div>
        </div>
      </div>
    </>
  );
}
