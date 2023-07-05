import React from 'react'

const FeedbackForm = () => {
  return (
    <div className="box__feedback__form__wrapper">
      <div className="title__wrapper">
        <h3>Feedback Form</h3>
      </div>
      <div className="form__wrapper">
        <div className="left__form__item">
          <p><span className='name__title'>Dear FunOlympics Viewer,</span> <br /> <br />

            We believe in creating an engaging and enjoyable live viewing experience for our audience. Your feedback plays an invaluable role in helping us understand what we're doing right, and what we could do better.

            As we strive for continuous improvement, we kindly ask you to share your thoughts and experiences. Every opinion counts – your insight is vital to the progress and enhancement of the FunOlympics live broadcast.

            We value your time and thank you in advance for your contribution. Looking forward to making the FunOlympics experience even better with your help!
            <br />
            <br />
            <span className='foot__title'>Warm Regards,</span>
            <br />
            The FunOlympics Committee
          </p>
        </div>
        <div className="right__form__item">
          <form action="">
            <label htmlFor="">
              <span>Your Name*</span>
              <input type="text" required placeholder='eg: John Doe' />
            </label>
            <label htmlFor="">
              <span>Your Email*</span>
              <input type="email" required placeholder='example@gmail.com' />
            </label>
            <label htmlFor="">
              <span>Nationality*</span>
              <input type="text" required placeholder='Nepali' />
            </label>
            <label htmlFor="">
              <span>Feedback*</span>
              <textarea name="" placeholder='Your Feedback' id="" cols="30" rows="10"></textarea>
            </label>
            <button type='button'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FeedbackForm;
