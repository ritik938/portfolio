import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
   const [formData,setFormData] = useState({
    name:"",
    email:"",
    message:"",
   })

   const sendEmail = async(e) => {
    e.preventDefault();
    alert("are you want to submit");
    console.log("Data: ",formData);
    emailjs.send('service_4ozm9o1', 'template_ufyjr6a', formData, {publicKey: 'QYPm9VzA2O8lm8sOT'})
      .then(
        () => {
          console.log('SUCCESS!');
          alert("message submitted successfully");
          setFormData({
            name: "",
            email: "",
            message: ""
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-linear-to-r from-gray-800 via-gray-800 to-gray-700 min-h-screen py-12">
      <div className="flex justify-center text-5xl text-blue-400 mb-16">Contact Us</div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6">

        <div className="w-full md:w-1/2 flex justify-center">
          <img src="https://mubhad-portfolio.vercel.app/assets/Astro-DrBqyzQk.png" className="w-64 md:w-80" alt="contact-image"/>
        </div>

        <form  onSubmit={sendEmail} className="w-full md:w-1/2 border border-black p-10 rounded-2xl bg-gray-700 shadow-lg flex flex-col">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Let's Contact</h1>

          <label className="text-2xl mt-8 text-white">Your Name*</label>
          <input className="w-full mt-3 p-4 bg-gray-500 text-white rounded-2xl"
          type="text" 
          name="name"
          onChange={handleChange}
          value={formData?.name}
          required placeholder="Your Name"/>

          <label className="text-2xl mt-8 text-white">Your Email*</label>
          <input className="w-full mt-3 p-4 bg-gray-500 text-white rounded-2xl"
          value={formData?.email}
          onChange={handleChange}
           type="email" name="email" required placeholder="Your Email"/>

          <label className="text-2xl mt-8 text-white">Write Your Message*</label>
          <textarea className="w-full mt-3 p-4 bg-gray-500 text-white rounded-2xl h-32 resize-none"
          value={formData?.message}
          onChange={handleChange}
           type="text" name="message" required placeholder="Message"></textarea>

          <button type="submit" className="mt-10 w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl text-xl transition-all">Send Massage</button>
        </form>
      </div>

      <div className="mt-15 flex flex-col items-center">
        <h1 className="text-white text-7xl font-bold">Ritik Roshan</h1>
        <div className="flex gap-5 mt-8">
            <a target="_blank" href="https://www.linkedin.com/in/ritik-roshan-b63922272/">
              <img
                className="h-10 transition-transform hover:scale-110"
                src="https://companieslogo.com/img/orig/LNKD.defunct.2016.D-dc0a6097.png?t=1722850217"
              />
            </a>

            <a target="_blank" href="https://github.com/ritik938">
              <img
                className="h-10 transition-transform hover:scale-110"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Github_logo_svg.svg/1200px-Github_logo_svg.svg.png?20230420150203"
              />
            </a>
          </div>
          <p className="text-white text-xl mt-5">“Small steps create big changes.”</p>
          <p className="text-gray-400 mt-3">© 2025 Ritik Roshan. All rights reserved.</p>
      </div>
    </div>
  );
}