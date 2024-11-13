import Calendar from "../../common/calendar/Calendar";
import UpcomingEvent from "./components/calendarContents/UpcomingEvent";

export default function CalendarContent() {
    return (
        <div className=" p-3" style={{ width: "30%" }}>
            <Calendar />
            <UpcomingEvent />
        </div>
    )
}
