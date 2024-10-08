import LeftSide from "../../components/StudentTeacherDashboard/LeftSide";
import Teacher from "./teacher";
import sidebarData from "../../assets/webData/TeacherStudentAdmin/teacherSidebarData.json";

export default function TeacherLayout() {
    return (
        <div style={{display:"flex"}} >
            <LeftSide sidebarData={sidebarData} />
            <Teacher />
        </div>
    )
}
