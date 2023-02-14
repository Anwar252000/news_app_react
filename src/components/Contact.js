import React from 'react'

export default function Contact() {
    return (
        <>
    <div className="container mb-3">
        <h1>Contact Us</h1>
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>
<div className="container mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  <div className="mb-3 row">
    <label htmlFor="inputPassword" className="form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword"/>
    </div>
  </div>
  <button className='btn btn-primary my-3'>Submit</button>
</div>
</>
    )
}
