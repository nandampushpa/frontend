import React from 'react'

const Register = () => {
  return (
    <>
            <div className="continer my-5 p-5" style={{
                'width':"500px",
                'border':'2px solid yellow',
                'borderRadius':'10px',
                'margin':'500px',
                
                
                
            }}>
                <h2 className='text-center'>Register</h2>
                <form style={{
                    width:"420px",
                    margin:'auto'
                }} className='my-3 p-3'>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name </label>
                        <input type="text" placeholder='enter user name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
                        <input type="email" placeholder='Enter your email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" placeholder='password' className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="continer d-grid col-5">
                    <button type="submit" className="btn btn-primary mt-3">Register</button>
                    </div>
                    
                </form>

            </div>

        </>
  )
}

export default Register
