import React from 'react';
import './App.css';
function Form(){
    return (
<div>
 {/*Title*/}
<h1>Registration Form </h1>
 {/*Name Input*/}
<div className="row g-3">
  <div className="col">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
  </div>

  <div className="col">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
  </div>
</div>
{/*Email-Password Input*/}
<form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
   <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
</form>
{/*Gender box*/}
<div className='gender'>
<p>Gender : </p>
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
    <label class="form-check-label" for="inlineRadio1">Male</label>
  </div>
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
    <label class="form-check-label" for="inlineRadio2">Female</label>
  </div>
</div>
{/*date of birth box*/}
<p>Date of birth :</p>
<div className='birth-input'>
  {/*date input*/}
  <label  for="exampleDataList"  ></label>
  <input className="form-control" placeholder="date..."  />
  {/*months input*/}
  <select  className="form-select" aria-label="Default select example">
   <option selected>Months</option>
   <option value="1">January</option>
   <option value="2">February</option>
   <option value="3">March</option>
   <option value="4">April</option>
   <option value="5">May</option>
   <option value="6">June</option>
   <option value="7">July</option>
   <option value="8">August</option>
   <option value="9">September</option>
   <option value="10">October</option>
   <option value="11">November</option>
   <option value="12">December</option>
  </select>
   {/*years input*/}
  <label for="exampleDataList" className="form-label"></label>
  <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="year..." />
   <datalist id="datalistOptions" >
    <option value="1990" />
    <option value="1991" />
    <option value="1992" />
    <option value="1993" />
    <option value="..." />
   </datalist>

</div>
{/*Security Question*/}
<div>
<select className="form-select" aria-label="Default select example">
  <option selected>Choose your security question from here</option>
  <option value="1">What is the name of the company of your first job?</option>
  <option value="2">What are the last 5 digits of your credit card?</option>
  <option value="3">What is the last name of your favorite high school teacher?</option>
</select>
</div>
{/*Answer Box */}
<div className="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea" >Write your answer here</label>
</div>
{/*Check Box */}
<div class="col-12">
    <div className="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
      <label class="form-check-label" for="invalidCheck2">Agree to terms and conditions</label>
    </div>
  </div>
{/* Button Submit */}
<button className="btn btn-primary" type="submit">Submit</button>

</div> 
    );
}   
export default Form;