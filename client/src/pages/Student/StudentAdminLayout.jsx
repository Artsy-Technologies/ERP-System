import LeftSide from "../../components/StudentTeacherDashboard/LeftSide";
import Student from "./student";
import sidebarData from "../../assets/webData/TeacherStudentAdmin/studentSidebarData.json";

export default function StudentAdminLayout() {
    return (
        <section style={{display:"flex",width:"100vw",height:"100%" }} >
            <LeftSide sidebarData={sidebarData} />
            <Student />
        </section>
    )
}
