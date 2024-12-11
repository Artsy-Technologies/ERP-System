
export default function SchoolBalance() {
    return (
        <div style={{ width: "20%", height:'250px', marginTop:'2rem' }} className=" d-flex flex-column justify-content-between " >
            <button style={{ background: "#FF71A4", border: "none", color: "white", fontSize:'.9rem' }} >
                Print Annual Report
            </button>

            <div style={{height:"70%"}} className="d-flex flex-column justify-content-between " >
                <div style={{ border: "1px solid #D6D6D6", padding: "10px", borderRadius: "5px", }} >
                    <label style={{ color: "#9E00FF", fontWeight: "700", fontSize: "14px" }} > School Balance </label>
                    <p style={{ color: "#303972", fontWeight: "700", fontSize: "1.3rem", lineHeight: "1.3rem" }} >$ 134,443</p>
                </div>

                <button style={{ background: "#C971FF", border: "none", color: "white", display: "grid", placeItems: "center", marginTop: "9px" , fontSize:'.9rem' }} >
                    Teachers Salary
                </button>
            </div>
        </div>
    )
}
