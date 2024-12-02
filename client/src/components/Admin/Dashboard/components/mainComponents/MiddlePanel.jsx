import ShowingAssets, { Card } from "./ShowingAssets";
import studentImage from '../../../../../assets/Images/adminDashboard/students.svg'
import teacherImage from '../../../../../assets/Images/adminDashboard/teachers.svg'
import busImage from '../../../../../assets/Images/adminDashboard/bus.png'


export default function MiddlePanel() {
    return (
        <div style={{ minHeight: "20%" }} className="d-flex " >
            <div style={{ width: "70%" }} className=" " >
                <div className="d-flex justify-content-between p-2 " >
                    <ShowingAssets image={studentImage} bgColor="#A5A6F6" data={3000} />
                    <ShowingAssets image={teacherImage} bgColor="#A5A6F6" data={50} />
                    <ShowingAssets image={busImage} bgColor="#fff" data={100} />
                </div>
                <div className="mt-4 d-flex p-2 " >
                    <ShowingAssets image={busImage} bgColor="#fff" data={100} />
                </div>
            </div>


            {/* ------------------------------- right component of middle section ------------------- */}
            <div style={{width:"30%" }} className="p-2 " >
                <Card
                    title="Incoming income"
                    amount="14,000"
                    amountColor="#007bff"
                    percentage="+23%"
                    percentageColor="green"
                    icon={<span>&#9650;</span>} // Up arrow icon
                />
                <Card
                    title="Incoming income"
                    amount="14,000"
                    amountColor="#007bff"
                    percentage="+23%"
                    percentageColor="green"
                    icon={<span>&#9650;</span>} // Up arrow icon
                />
            </div>
        </div>
    )
}
