import React from 'react';
import { useFormik } from 'formik';

function Profile() {
  return (
    <div className='profile flex flex-col items-center' style={{ marginTop: '20px' }}>
      <img src='/profile.jpeg' alt='Profile' className='w-20 h-20 rounded-full border-2 border-green-500' />
      <h2 className='text-lg font-semibold text-green-500' style={{ color: 'black' }}>John Doe</h2>

    </div>
  );
}

function Booking() {
  const formik = useFormik({
    initialValues: {
      mechanicName: '',
      date: '',
      time: ''
    },
    onSubmit: async (values) => {
      // Handle form submission here
      console.log(values);
    }
  });

  return (
    <div className='container mx-auto mt-10 mb-5 border border-black border-2 border-opacity-25' style={{ width: '400px', boxShadow: '0 0 20px green, 0 0 5px black inset' }}>
      <Profile />
      <div className='title flex flex-col items-center'>
        <h1 className='text-3xl font-bold text-green-500'>
          Book a Mechanic
        </h1>
        <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
          Select a mechanic and book an appointment
        </span>
      </div>
      <form className="py-1" onSubmit={formik.handleSubmit}>
        <div className="text-box flex flex-col items-center gap-6 justify-items-center">
          <input
            {...formik.getFieldProps('mechanicName')}
            className='textbox'
            type="text"
            placeholder="Mechanic Name"
            style={{ borderRadius: '9px', backgroundColor: 'lightgreen', width: '200px', marginLeft: 'auto', marginleft: '30%', textAlign: 'center' }} 
          />
          <input
            {...formik.getFieldProps('date')}
            className='textbox'
            type="date"
            placeholder="Date"
            style={{ borderRadius: '9px', backgroundColor: 'lightgreen', width: '200px', marginLeft: 'auto', marginleft: '30%', textAlign: 'center' }} 
          />
          <input
            {...formik.getFieldProps('time')}
            className='textbox'
            type="time"
            placeholder="Time"
            style={{ borderRadius: '9px', backgroundColor: 'lightgreen', width: '200px', marginLeft: 'auto', marginleft: '30%', textAlign: 'center' }} 
            
          />
          
          <input
            {...formik.getFieldProps('price')}
            className='textbox'
           type="price"
            placeholder="price"
            style={{ borderRadius: '9px', backgroundColor: 'lightgreen', width: '200px', marginLeft: 'auto', marginleft: '30%', textAlign: 'center' }} 
            
          />
          <div style={{ display: 'flex', marginleft: '30%', justifyContent: 'center' }}>
            
           
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button className='btn bg-green-600 text-white px-2 py-2 rounded border-black' type="submit" style={{marginLeft:'70%', width: '100px' }}>Submit</button>
              </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Booking;
