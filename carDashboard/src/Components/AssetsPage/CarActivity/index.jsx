import './CarActivity.scss'

import { LineChart } from '@mui/x-charts/LineChart';

export const CarActivity = () => {
  return (
    <>
        <div className="CarActivity">
            <div className="allActivity">
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
              width={500}
              height={300}
            />
            </div>
            <div className="noties">
                
            </div>
            <div className="reminder"></div>
        </div>
    </> 
  )
}
