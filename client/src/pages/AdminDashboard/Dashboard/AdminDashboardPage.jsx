import CalendarContent from "../../../components/Admin/Dashboard/CalendarContent";
import MainContent from "../../../components/Admin/Dashboard/MainContent";

export default function AdminDashboardPage() {
  return (
    <section className="d-flex vh-100 overflow-y-scroll pb-5 ">
      <MainContent />
      <CalendarContent />
    </section>
  );
}