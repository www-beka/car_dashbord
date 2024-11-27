import './CarActivity.scss'
import { LineChart } from '@mui/x-charts/LineChart';
import KeyIcon from '../../../assets/key.svg'
import WarningIcon from '../../../assets/warning.svg'
import ChatIcon from '../../../assets/chat.svg'

export const CarActivity = () => {
  return (
    <>
        <div className="CarActivity">
            <div className="allActivity">
            <span> <h4>Activity</h4> View All</span>
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
              series={[
                {
                  data: [-7, -5.5, -3, -1, 4, 6],
                  area: true,
                  baseline: 'min',
                  color: 'rgba(161, 98, 247, 0.6)', 
                },
              ]}
              height={350}
            />
            </div>
            <div className="noties-screen">
                <div className="noties">
                    <div className="days">
                      <img src={KeyIcon} alt="" />
                      <span>
                        Monday, 6th Apirl 2020
                        <p>Book for General Service</p>
                        <button>COMPLETED</button>
                      </span>
                    </div>
                    <div className="days">
                      <img src={WarningIcon} alt="" />
                      <span>
                        Thursday, 24th October 2021
                        <p>Vehicle LV 001 has been marked for recall.</p>
                        <button>14:07-21/11/2021</button>
                      </span>
                    </div>
                    <div className="days">
                      <img src={ChatIcon} alt="" />
                      <span>
                        Monday, 13th August 2018
                        <p>Maintenance Completed, Collect</p>
                        <button>14:07-21/11/2021</button>
                      </span>
                    </div>
                </div>
                <div className="AvailableSensors">
                    <div className="AvailableSensors-head">
                      <h4>Available Sensors</h4>
                      <hr />
                    </div>
                    <span>
                        <input type="checkbox" /> Asset - Fuel Consumed (10) <img src="" alt="" />
                    </span>
                    <span>
                        <input type="checkbox" /> Asset - Odometer (km) <img src="" alt="" />
                    </span>
                    <span>
                        <input type="checkbox" /> Asset - Runtime (km) <img src="" alt="" />
                    </span>
                    <span>
                        <input type="checkbox" /> Asset - Speed (hr) <img src="" alt="" />
                    </span>
                    <span>
                        <input type="checkbox" /> Engine Temperature (deg C) <img src="" alt="" />
                    </span>
                    
                    <button>See All</button>
                </div>
            </div>
            <div className="reminder">
                <div className="reminder-head">
                   <h4>Reminder</h4>
                   <button>+ Add New</button>
                </div>
                <div className="reminder-table">
                    <table >
                        <tr>
                            <td>Description</td>
                            <td>Due</td>
                            <td>Overdue</td>
                            <td>Notify</td>
                            <td>Status</td>
                        </tr>
                        <tr>
                            <td>Urgent Safety Recall</td>
                            <td>06/04/2022</td>
                            <td>08/04/2022</td>
                            <td>David Demo</td>
                            <td>Completed</td>
                        </tr>
                        <tr>
                            <td>Urgent Safety Recall</td>
                            <td>06/04/2022</td>
                            <td>08/04/2022</td>
                            <td>David Demo</td>
                            <td>Completed</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </> 
  )
}
