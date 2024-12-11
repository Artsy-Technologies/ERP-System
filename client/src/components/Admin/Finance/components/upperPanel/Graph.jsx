import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

// Data for the Doughnut chart
const data = {
    labels: ['Deep', 'Light', 'Awake', 'Quality'],
    datasets: [
      {
        label: 'Expenses',
        data: [45, 32, 28, 87], // Replace with dynamic data if needed
        backgroundColor: ['#3b82f6', '#60a5fa', '#93c5fd', '#dbeafe'],
        hoverOffset: 4,
      },
    ],
  };

export default function Graph() {
    return (
    <div style={{ width: '100%' }} className="d-flex mt-4   ">
        {/* Doughnut chart */}
        <div>
            <Doughnut data={data} style={{ width: "200px", height: '200px' }} />
        </div>

        {/* Chart legend */}
        <div style={{ width: '40%', display: "grid", gridTemplateColumns: "100px 100px", alignItems: 'center', marginTop: '4rem' }} >

            <div style={{ lineHeight: '14px' }} className="d-flex align-items-start gap-2  ">
                <div style={{ height: "10px", width: '10px', background: "blue", borderRadius: '50%', marginTop: "2px" }} className=" "></div>
                <span style={{ color: "#77838F", fontSize: "14px" }} >Deep <p style={{ color: 'black', lineHeight: '20px' }} >45%</p> </span>
            </div>

            <div style={{ lineHeight: '14px' }} className="d-flex align-items-start gap-2  ">
                <div style={{ height: "10px", width: '10px', background: "#74ABFF", borderRadius: '50%', marginTop: "2px" }} className=" "></div>
                <span style={{ color: "#77838F", fontSize: "14px" }} >Light <p style={{ color: 'black', lineHeight: '20px' }} >45%</p> </span>
            </div>

            <div style={{ lineHeight: '14px' }} className="d-flex align-items-start gap-2  ">
                <div style={{ height: "10px", width: '10px', background: "#3FB8F7", borderRadius: '50%', marginTop: "2px" }} className=" "></div>
                <span style={{ color: "#77838F", fontSize: "14px" }} >Awake <p style={{ color: 'black', lineHeight: '20px' }} >45%</p> </span>
            </div>

            <div style={{ lineHeight: '14px' }} className="d-flex align-items-start gap-2  ">
                <div style={{ height: "10px", width: '10px', background: "#AAE2FF", borderRadius: '50%', marginTop: "2px" }} className=" "></div>
                <span style={{ color: "#77838F", fontSize: "14px" }} >Quality <p style={{ color: 'black', lineHeight: '20px' }} >45%</p> </span>
            </div>

        </div>


    </div>
    )
}
