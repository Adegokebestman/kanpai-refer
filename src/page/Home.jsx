import React from 'react';
import kampai from '../image/kampai.svg';
import '../App.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={kampai} className="App-logo" alt="logo" />
        <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
	<div className="container mx-auto">
		<span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase dark:text-violet-400">How it works</span>
		<h2 className="text-3xl md:text-5xl font-bold text-center dark:text-gray-50">Welcome to our refer-a-friend program!</h2>
		<div className="grid gap-6 my-16 lg:grid-cols-3">
			<div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-900">
				<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-[#2F86FB] dark:text-gray-900">1</div>
				<p className=" text-xl md:text-2xl font-semibold">
					<b>Sign up for our referral program by providing your name and email address.</b>
				</p>
			</div>
			<div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-900">
				<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-[#2F86FB] dark:text-gray-900">2</div>
				<p className="text-xl md:text-2xl font-semibold">
					<b> Share your unique referral link with your friends through email, social media, or any other means. </b>
				</p>
			</div>
			<div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-900">
				<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-[#2F86FB] dark:text-gray-900">3</div>
				<p className="text-xl md:text-2xl font-semibold">
					<b>When your friend clicks on your referral link and signs up for our website, you will receive a reward. </b>
				</p>
			</div>
		</div>
	</div>
    <Link to='./referral'>
    <button type="button" className="px-8 py-3 font-semibold rounded-full bg-gray-100 text-gray-800">Let's Go!</button>

    </Link>


</section>


      </header>

    </div>
  );
}

export default Home;
