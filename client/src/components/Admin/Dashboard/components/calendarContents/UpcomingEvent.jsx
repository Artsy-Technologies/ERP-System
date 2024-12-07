import { useState } from "react";
import EventsCards from "./EventsCards";
import NotificationModal from "../mainComponents/NotificationBox";

const days = [
    {
        id: "1",
        day: "monday"
    },
    {
        id: "2",
        day: "Tuesday"
    },

    {
        id: "3",
        day: "wednesday"
    },
    {
        id: "4",
        day: "thrusday"
    },

]

const events = [
    {
        id: "1",
        day: "Saturday",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec.",
        date: "6th April 2024",
        color: "#FFF4D6", // Light yellow background
        borderColor: "orange"
    },
    {
        id: "2",
        day: "Saturday",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec.",
        date: "6th April 2024",
        color: "#D8F3DC", // Light green background
        borderColor: "#4DC152"
    },
    {
        id: "3",
        day: "Saturday",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec.",
        date: "6th April 2024",
        color: "#FFD6D6",
        borderColor: "#F62B2B54"
    }
];

export default function UpcomingEvent() {
    const [activeDay, setActiveDay] = useState(null); // State to track the active day
    return (
        <div className="mt-3 px-2 " >
            <p style={{ fontWeight: "600", fontSize: "14px", color: "#233255CC", margin: "3px 0", display: "block" }} >UpcomingEvent</p>
            <div className="d-flex justify-content-around mt-3 " >
                {days?.map((data, i) => (
                    <DaysButtons days={data} key={i} isActive={activeDay === data.id} // Pass whether the button is active
                        onClick={() => setActiveDay(data.id)} />
                ))}
            </div>
            <div>
                {events.map((event) => (
                    <EventsCards event={event} key={event?.id} />
                ))}
            </div>
            <NotificationModal />
        </div>
    )
}

const DaysButtons = ({ days, isActive, onClick }) => {
    return (
        <div
            className={`border  px-2 font-monospace py-1 rounded-5 d-flex align-items-center justify-content-center text-capitalize`}
            style={{
                width: "max-content",
                fontSize: "13px",
                cursor: "pointer",
                backgroundColor: isActive ? "black" : "transparent", // Change bg color based on active state
                color: isActive ? "white" : "inherit" // Optional: change text color if active
            }}
            onClick={onClick} // Set click handler
        >
            {days?.day.slice(0, 3)}
        </div>
    );
};