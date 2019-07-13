import React from 'react';

const Form = () => {

    return(
        <form>
         <fieldset>
          <label>First Name</label>
          <input name='first-name' type='text' />
          <br />
          <label>Last Name</label>
          <input name='last-name' type='text' />
          <br />
          <label>Email</label>
          <input name='email' type='email' />
          <br />
          <label>How Can I Help</label>
          <input name='textbox' type='textbox' />
          <button type='submit'>Submit</button>
         </fieldset>
        </form>
    )
}

export default Form;