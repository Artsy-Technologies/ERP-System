

export default function ShowingAssets({ image, bgColor, data }) {
    return (
        <div style={{ display: "flex", justifyContent: "center", placeItems: "center", width: "max-content", marginTop: "4px" }} >
            <div style={{ background: `${bgColor}`, width: "60px", height: "40px", borderRadius: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} >
                <img src={image} alt="" style={{}} width={25} height={25} />
            </div>
            <div style={{ marginLeft: "8px" }} >
                <p style={{ fontSize: "14px", color: "#A098AE", textAlign: "center" }} >students</p>
                <p style={{ fontSize: "16px", fontWeight: "700", textAlign: "start", color: "#303972" }} >{data}</p>
            </div>
        </div>
    )
}

export function Card({ title, amount, amountColor, percentage, percentageColor, icon }) {
    return (
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', marginBottom: '10px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
            <div className="d-flex flex-column justify-content-center border py-2 " >
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' , padding:"4px" }}>
                    <h5 style={{ margin: 0, fontSize: '14px', color: '#555' }}>{title}</h5>
                    <span style={{ cursor: 'pointer' }}>...</span>
                </div>

                <div className="d-flex justify-content-between px-2 "  style={{ fontSize: '18px', fontWeight: 'bold', color: amountColor }}>
                    ${amount}
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', color: percentageColor }}>
                        {icon && <span style={{ marginRight: '5px' }}>{icon}</span>}
                        <span>{percentage}</span>
                    </div>
                </div>
            </div>

        </div>
    );
}