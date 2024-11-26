import "./Dashbord.scss";
import EnergyIcon from "../../../assets/energy.svg";
import RangeIcon from "../../../assets/range.svg";
import FluiIcon from "../../../assets/flui.svg";
import WearIcon from "../../../assets/wear.svg";
import { Gauge } from '@mui/x-charts/Gauge';
const Dashboard = () => {
  return (
    <>
      <div className="dashbord">
        <div className="characteristic-seaction">
          <div className="types-of-characteristic">
            <img src={EnergyIcon} alt="" />
            <span>Energy</span>
            <Gauge width={150} height={150} value={60} startAngle={-90} endAngle={90} />
          </div>
          <div className="types-of-characteristic">
            <img src={RangeIcon} alt="" />
            <span>Range</span>
            <Gauge width={150} height={150} value={60} startAngle={-90} endAngle={90} />
          </div>
          <div className="types-of-characteristic">
            <img src={FluiIcon} alt="" />
            <span>Break fluid</span>
            <Gauge width={150} height={150} value={60} startAngle={-90} endAngle={90} />
          </div>
          <div className="types-of-characteristic">
            <img src={WearIcon} alt="" />
            <span>Tire Wear</span>
            <Gauge width={150} height={150} value={60} startAngle={-90} endAngle={90} />
          </div>
          <div className="types-of-characteristic">
            <img src={RangeIcon} alt="" />
            <span>Tire Wear</span>
            <Gauge width={150} height={150} value={60} startAngle={-90} endAngle={90} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
