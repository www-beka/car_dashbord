import "./Dashbord.scss";
import EnergyIcon from "../../assets/energy.svg";
import RangeIcon from "../../assets/range.svg";
import FluiIcon from "../../assets/flui.svg";
import WearIcon from "../../assets/wear.svg";
const Dashboard = () => {
  return (
    <>
      <div className="dashbord">
        <div className="characteristic-seaction">
          <div className="types-of-characteristic">
            <img src={EnergyIcon} alt="" />
            <span>Energy</span>
            <svg
              viewBox="0 0 64 64"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke-width="6"
                stroke="#D8DBE3"
                fill="transparent"
              />
              <circle
                class="progress"
                cx="32"
                cy="32"
                r="28"
                stroke-width="6"
                stroke="#0066FF"
                fill="transparent"
                stroke-dasharray="175.84"
                stroke-dashoffset="175.84"
              />
            </svg>
            <b>24%</b>
          </div>
          <div className="types-of-characteristic">
            <img src={RangeIcon} alt="" />
            <span>Range</span>
            <svg
              viewBox="0 0 64 64"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke-width="6"
                stroke="#D8DBE3"
                fill="transparent"
              />
              <circle
                class="progress"
                cx="32"
                cy="32"
                r="28"
                stroke-width="6"
                stroke="#0066FF"
                fill="transparent"
                stroke-dasharray="175.84"
                stroke-dashoffset="175.84"
              />
            </svg>
            <b>24%</b>
          </div>
          <div className="types-of-characteristic">
            <img src={FluiIcon} alt="" />
            <span>Break fluid</span>
            <svg
              viewBox="0 0 64 64"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke-width="6"
                stroke="#D8DBE3"
                fill="transparent"
              />
              <circle
                class="progress"
                cx="32"
                cy="32"
                r="28"
                stroke-width="6"
                stroke="#0066FF"
                fill="transparent"
                stroke-dasharray="175.84"
                stroke-dashoffset="175.84"
              />
            </svg>
            <b>24%</b>
          </div>
          <div className="types-of-characteristic">
            <img src={WearIcon} alt="" />
            <span>Tire Wear</span>
            <svg
              viewBox="0 0 64 64"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke-width="6"
                stroke="#D8DBE3"
                fill="transparent"
              />
              <circle
                class="progress"
                cx="32"
                cy="32"
                r="28"
                stroke-width="6"
                stroke="#0066FF"
                fill="transparent"
                stroke-dasharray="175.84"
                stroke-dashoffset="175.84"
              />
            </svg>
            <b>24%</b>
          </div>
          <div className="types-of-characteristic">
            <img src={RangeIcon} alt="" />
            <span>Tire Wear</span>
            <svg
              viewBox="0 0 64 64"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke-width="6"
                stroke="#D8DBE3"
                fill="transparent"
              />
              <circle
                class="progress"
                cx="32"
                cy="32"
                r="28"
                stroke-width="6"
                stroke="#0066FF"
                fill="transparent"
                stroke-dasharray="175.84"
                stroke-dashoffset="175.84"
              />
            </svg>
            <b>24%</b>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
