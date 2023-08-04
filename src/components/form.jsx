import React from "react";
import '../styles/form.css'

// const nicefont = {    fontFamily: "'Cedarville Cursive', cursive",
// fontSize: '16px'}

function Form() {
  return (
    <div className="form">
      <form action="/action_page.php">
        <label  htmlFor="fname">Ups</label>
        <textarea className="text" id="fname" name="firstname" placeholder="Your name.." />

        <label  htmlFor="lname">Downs</label>
        <textarea className="text" id="lname" name="lastname" placeholder="Your last name.." />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
