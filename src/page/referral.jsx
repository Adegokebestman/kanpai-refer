import React, { useState } from 'react';
import kanpai from '../image/kanpai.png';
import axios from 'axios';




const REFERRAL_URL = 'https://kampai-backend.onrender.com/referral/sendReferralEmail';

const Referral = () => {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    receiverName: '',
    receiverEmail: '',
    message: ''
  });


  const [errors, setErrors] = useState({});

  const { email, fullName, receiverEmail,receiverName, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!email) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email address is invalid';
      isValid = false;
    }

    if (!fullName) {
      errors.fullName = 'Full name is required';
      isValid = false;
    }

    if (!receiverName) {
      errors.receiverName = 'Full name is required';
      isValid = false;
    }
    if (!receiverEmail) {
      errors.receiverEmail = 'Receiver email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(receiverEmail)) {
      errors.receiverEmail = 'Receiver email address is invalid';
      isValid = false;
    }

    if (!message) {
      errors.message = 'Message is required';
      isValid = false;
    }

    setErrors(errors);

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post(REFERRAL_URL, formData);
        console.log(response.data);
        alert("Referral sent");
        // Do something with the response, e.g. show a success message to the user
      } catch (error) {
        console.error(error);
        // Handle the error, e.g. show an error message to the user
      }
    }
  };






  return (
     <div className='bg-[#FF7E20]  overflow-scroll  h-screen'>


<div className="w-full ml-auto mr-auto block pt-10 md:pt-3 max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
<div className=" ml-20 pb-8 text-center">
  <img style={{width:'190px'}}  src={kanpai}/>

</div>

<form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
<div className="space-y-1 text-sm">
      <label for="Ema" className="block text-white">Full Name</label>
      <input type="text" value={fullName} onChange={handleChange} name="fullName" placeholder="Full Name" className="w-full px-4 py-3 rounded-md border-white" />
      {errors.fullName && <div className="error">{errors.fullName}</div>}
  </div>

  <div className="space-y-1 text-sm">
  <label for="Email" className="block text-white"> Email</label>
      <input type="text" value={email} onChange={handleChange} name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border-white" />
      {errors.email && <div className="error">{errors.email}</div>}
  </div>

  <div className="space-y-1 text-sm">
  <label for="receiverName" className="block text-white">Enter Receiver Name</label>
      <input type="text" value={receiverName} onChange={handleChange} name="receiverName" placeholder="Enter Receiver Name" className="w-full px-4 py-3 rounded-md border-white" />
      {errors.receiverName && <div className="error">{errors.receiverName}</div>}
        </div>

  <div className="space-y-1 text-sm">
  <label for="receiverEmail" className="block text-white">Enter Receiver Email</label>
      <input type="text" value={receiverEmail} onChange={handleChange} name="receiverEmail" id="receiverEmail" placeholder="Enter Receiver Email" className="w-full px-4 py-3 rounded-md border-white" />
      {errors.receiverEmail && <div className="error">{errors.receiverEmail}</div>}
  </div>


  <div className="space-y-1 text-sm">
  <label for="message" className="block text-white">Message</label>
      <textarea type="text" value={message} onChange={handleChange} name="message" placeholder="Message" className="w-full px-4 py-3 rounded-md border-white" />
      {errors.message && <div className="error">{errors.message}</div>}
  </div>
  <button type='submit' style={{background: 'linear-gradient(180deg, #2F86FB 0%, #004AAD 100%)'}} className="block w-full p-3 text-center rounded-sm text-white">
 Submit </button>
</form>

</div>
    </div>
  )
}

export default Referral