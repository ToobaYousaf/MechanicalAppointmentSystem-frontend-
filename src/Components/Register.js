import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/profile.jpeg'
import { useState } from 'react'
import convertToBase64 from '../helper/convert'
import styles from '../styles/Username.css'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import {registerValidation} from '../helper/validate'

export default function Username() {
  const [file,setFile]=useState()
    const formik=useFormik({
        initialStatus:{
          email:'example',
            Username:'kinza@1223',
            password:'admin@123'
        },
        validate:registerValidation,
        validateOnBlur:false,
        validateOnChange:false,
        onSubmit:async values=>{
            values=await Object.assign(values,{Profile : file || ""})
            console.log(values)
                  }        
    })
    const onUpload=async e=>{
      const base64=await convertToBase64(e.target.files[0]);
      setFile(base64);
  }
  return (
    <div className='container mx-auto' style={{ marginTop:'3%',height: '770px', width: '600px', border: '5px solid transparent', borderRadius: '15px', boxShadow: '0 0 40px green, 0 0 15px black inset', background: 'white' }}>

    
  
        <Toaster position='top-center' reverseOrder={false}>

        </Toaster>
        <div className='flex justify-center items-center h-screen'>
            <div className={styles.glass} style={{width:"45%"}}>
                <div className='tittle flex flex-col items-center'>
                    <h4 className='text-5xl font-bold text-green-500'>
                        Register!!!
                    </h4>
                    <span className='py-4 text-xl w-2/3 text-center text-gray-5'>Happy to join you</span>
               
                </div>
                <form className="py-1" onSubmit={formik.handleSubmit}>
                    <div className="profile flex justify-center py-4">
                      <label htmlfor=''>
                        <img src={file||avatar} className={styles.profile_img}alt="avatar"/>
</label>
<input onChange={onUpload} type='file' id='profile' name='profile' />
                        </div>
                        <div className="text-box flex flex-col items-center gap-6">
              <input {...formik.getFieldProps('email')} className={styles.textbox} type="text" style={{ borderRadius: '9px', backgroundColor: 'lightgreen', width: '300px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }} placeholder="Email" />
              <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" style={{ borderRadius: '9px', backgroundColor: 'lightgreen', width: '300px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }} placeholder="Username" />
              <input {...formik.getFieldProps('password')} className={styles.textbox} type="text" style={{ borderRadius: '9px', backgroundColor: 'lightgreen', width: '300px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }} placeholder="Password" />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button className={`${styles.btn} bg-green-600 text-white px-4 py-2 rounded border-black`} type="submit" style={{marginLeft:'70%', width: '100px' }}>Submit</button>
              </div>
              </div>

                        <div className="text-container py-4">
                            <span className="text-gray-500">Already registered <Link  className="text-red-500" to="/login">Login  Now</Link></span>
                        </div>
                </form>
                </div>
    
        </div>
     


    </div>
  )
}
