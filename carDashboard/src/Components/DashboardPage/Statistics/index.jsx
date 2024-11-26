import "./Statistics.scss";
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import Button from './Buttons'

const Statistics = () => {
  return (
    <>
      <div className="all-statistics ">
        <div className="miles-statistics">
          <h2>Miles Statistics</h2>
          <div className="dates">
            <Button />
            <p>256 Miles</p>
          </div>
          <div className="chart-art">
                <BarChart
            {...props}
            series={[
                {
                    data: [2400, 1398, 9800, 8000, 4200,5500, 3400],
                    label: 'label 1',
                    color: '#2884FF'
                },
            ]}
            />
          </div>
        </div>
        <div className="car-statistics">
          <h2>Miles Statistics</h2>
          <div className="dates">
            <p>20 February 2022</p>
            <Button />
          </div>
          <div className="chart-art">
          <LineChart     
            xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
            series={[
                {
                data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
                showMark: ({ index }) => index % 2 === 0,
                  color: '#f28e2c',
                },
            ]}
            width={600}
            height={500}
            />

          </div>
        </div>
      </div>
    </>
  );
};

const props = {
    width: 610,
    height: 500,
    xAxis: [{ data: ['1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'], scaleType: 'band' }],
};

export default Statistics;
