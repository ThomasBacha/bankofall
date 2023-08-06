import React from "react";
import '../styles/form.css'

function Form() {
  return (
  

    <div className="form">
    
      <form action="/action_page.php">
        <label  htmlFor="fname">Ups</label>
        <textarea className="text" id="fname" name="Ups" placeholder="Your Great Ideas..." />

        <label  htmlFor="lname">Downs</label>
        <textarea className="text" id="lname" name="Downs" placeholder="Your Greatest Ideas..." />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
