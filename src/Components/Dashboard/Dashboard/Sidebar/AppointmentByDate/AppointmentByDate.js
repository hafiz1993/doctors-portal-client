import React from 'react';
import AppointmentshortList from '../../AppointmentshortList/AppointmentshortList';

const AppointmentByDate = ({appointments}) => {
    console.log(appointments)
    return (
        <div>
          <h2 className="text-brand text-center"> Appointment</h2>
          {
              appointments.length ?
              <AppointmentshortList appointments={appointments}></AppointmentshortList>
         :
        <div className="p-5">
            <h4 className="lead text-center">No Appointments for this Date</h4>

        </div>
            }
        </div>
    );
};

export default AppointmentByDate;