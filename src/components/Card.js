import React from 'react'

export default function Card() {
    return (
        <div>
            <div>
                <div className="card mt-3 text-light bg-black " style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img className="card-img-top" src="http://media.istockphoto.com/photos/chilli-paneer-or-tikka-kabab-picture-id629423010?k=20&m=629423010&s=612x612&w=0&h0=X-OBIncHWjNFqxGfQuQHwrYHi2GcUw-jn7kqqZpHSw8=" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is some important text.</p>
                        <div className='container w-100'>
                            <select className="m-2 h-100  bg-success rounded" >
                                {/* things written under {} are considered to be javascript */}
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    )
                                })}
                            </select>
                            <select className="m-2 h-100  bg-success rounded">
                                <option value="Half">Half</option>
                                <option value="Full">Full</option>
                            </select>
                            <div className='d-inline h-100 fs-5'>Total Price</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
