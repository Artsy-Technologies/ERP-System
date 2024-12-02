import bgImage from '../../../../../assets/Images/adminDashboard/background.svg';
import people from '../../../../../assets/Images/adminDashboard/people.svg';

export default function UpperTerminal() {
    return (
        <div style={{ height: '30%', width: '100%', position: 'relative', overflow: "hidden",  }}
        >
            <img src={bgImage} alt="bgImage" style={{ width: '110%', position: 'absolute', left: '-5%', top: "-5%" }} />
            <img src={people} alt="" style={{ position:"absolute",top:"0",left:"0", height:"80%", margin:"5px 10px " ,  }} />
            <h6 style={{position:"absolute" , right:"5%" , top:"40%", fontWeight:"800", color:"#494949" , fontSize:"1.3rem"  }} >Welcome To Admin Panel</h6>
        </div>
    )
}
