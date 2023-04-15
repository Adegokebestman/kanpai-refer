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

  const [isLoading, setIsLoading] = useState('');

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
    setIsLoading(true);
    if (validateForm()) {
      try {
        const response = await axios.post(REFERRAL_URL, formData);
        console.log(response.data);
        alert("Referral sent");
        setIsLoading(false);
        // Do something with the response, e.g. show a success message to the user
      } catch (error) {
        console.error(error);
        setIsLoading(false);
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
  <button
						disabled={isLoading}
						style={{
							background:
								'linear-gradient(180deg, #2F86FB 0%, #004AAD 100%)',
						}}
						className='block w-full p-3 text-center rounded-sm text-white'
					>
						{isLoading ? (
							<span>
								<svg
									aria-hidden='true'
									role='status'
									className='inline w-4 h-4 mr-3 text-white animate-spin'
									viewBox='0 0 100 101'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
										fill='#E5E7EB'
									/>
									<path
										d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
										fill='currentColor'
									/>
								</svg>
								Loading
							</span>
						) : (
							'Submit'
						)}
					</button>
</form>

</div>
    </div>
  )
}

export default Referral