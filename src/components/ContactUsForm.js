import React from 'react'

const ContactUsForm = () => {
  return (
   <div>
  <section className="section_form">
    <form id="consultation-form" className="feed-form" action="#">
    <div class="container">
        <input type="text" required="required" />
        <label>Your Name</label>
        <i></i>
    </div>
    <div class="container">
        <input type="text" required="required" />
        <label>Your Email</label>
        <i></i>
    </div>
    <div class="container">
        <input type="text" required="required" />
        <label>Your Phone No.</label>
        <i></i>
    </div>
      
      <button className="button_submit">SEND</button>
    </form>
  </section>
</div>

  )
}

export default ContactUsForm