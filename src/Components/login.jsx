import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';

export default function Login() {
  const [file, setFile] = useState();
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: ''
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { Profile: file || '' });
      console.log(values);
    }
  });

  const onUpload = async (e) => {
    alert("uploaded");
  };

  const glassStyle = {
    background: 'linear-gradient(green, white)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px #3b39390b',
    backdropFilter: 'blur(7.1px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    border: '4 border-gray-50 shrink-0 h-3/4 w-[30%] rounded-3xl py-20 px-20 px-7 min-w-max',
  };

  const textboxStyle = {
    borderRadius: '9px',
    backgroundColor: 'lightgreen',
    width: '300px',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
  };

  const btnStyle = {
    marginLeft: '70%',
    width: '100px',
  };

  return (
    <div className='container mx-auto' styleName={{ marginTop: '3%', height: '770px', width: '600px', border: '5px solid transparent', borderRadius: '15px', boxShadow: '0 0 40px green, 0 0 15px black inset', background: 'white' }}>
      <Toaster position='top-center' reverseOrder={false} />

      <div className='flex justify-center items-center h-screen'>
        <div styleName={glassStyle} styleName={{ width: '45%' }}>
          <div className='tittle flex flex-col items-center'>
            <h4 className='text-5xl font-bold text-green-500'>
              Login!
            </h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-5'>Happy to join you</span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <label htmlFor=''>
                {/* <img src={file || avatar} className={styles.profile_img} alt="avatar" /> */}
              </label>
              <input onChange={onUpload} type='file' id='profile' name='profile' />
            </div>
            <div className="text-box flex flex-col items-center gap-6">
              <input {...formik.getFieldProps('email')} style={textboxStyle} type="text" placeholder="Email" />
              <input {...formik.getFieldProps('username')} style={textboxStyle} type="text" placeholder="Username" />
              <input {...formik.getFieldProps('password')} style={textboxStyle} type="text" placeholder="Password" />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button style={{ ...btnStyle, backgroundColor: 'green', color: 'white', padding: '4px', borderRadius: '5px', border: '1px solid black' }} type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
