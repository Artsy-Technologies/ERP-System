import LeftSide from "../../components/StudentTeacherDashboard/Sidebar";
import sidebarData from "../../assets/webData/TeacherStudentAdmin/studentSidebarData.json"
import { Outlet } from "react-router-dom";
import Header from "../../components/common/header/Header";

export default function StudentLayout() {
  return (
     <main style={{ width:"100vw", display: "flex" }}>
      <LeftSide sidebarData={sidebarData} />
      <section style={{ width: "100vw", height: "100%" }}>
      <Header/>
      <Outlet/>
    </section>
    </main>
  );
}