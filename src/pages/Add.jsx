import React from 'react'

const Add = () => {
  return (
    <>
    
        <div className="continer my-5 p-5" style={{
            'width': "500px",
            'border': '2px solid yellow',
            'borderRadius': '10px',
            'margin': '500px',
        }}>
            <h2 className='text-center'>Add Recipe</h2>
            <form style={{
                width: "400px",
                margin: 'auto'
            }} className='my-3 p-3'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title </label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Instruction </label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Ing-1</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Ing-2</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Ing-3</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Ing-4</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">QTY-1</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">QTY-2</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">QTY-3</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">QTY-4</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Imgurl</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>

                <div className="continer d-grid col-5">
                    <button type="submit" className="btn btn-primary mt-3">Add Recipe</button>
                </div>

            </form>

        </div>



    </>
  )
}

export default Add

