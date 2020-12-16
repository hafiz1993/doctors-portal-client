
import chair from '../../../../images/chair.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({dateChange}) => {

    // const [value, onChange] = useState(new Date());
   
    return (
        
             <main style={{height:'600px'}} className="row d-flex align-items-center">
            {/* importent */}
            <div className="col-md-4  offset-md-1">
                <h1 style={{color:"3A4256"}}>Appointment</h1>
                <Calendar
        onChange={dateChange}
        value={new Date}
      />
               
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
            
        </main>
        
    );
};

export default AppointmentHeader;