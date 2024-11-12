
export default function EventsCards({ event }) {
    return (
        <div
            className=" p-2 my-2  "
            style={{ borderLeft: `2px solid ${event.borderColor}`, backgroundColor: event.color, fontFamily: "Gilroy-Medium" }}
        >
            <h6 style={{ fontWeight: "bold", marginBottom: "5px", fontSize: "12px", }}>{event.day}</h6>
            <p style={{ margin: "0 0 5px", fontSize: "12px", color: "#00000080" }}>{event.description}</p>
            <p style={{ textAlign: "right", fontStyle: "italic", color: "#666", fontSize: "12px" }}>{event.date}</p>
        </div>
    )
}

