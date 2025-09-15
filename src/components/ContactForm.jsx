import React, { useState } from 'react'
import emailjs from "emailjs-com";
const ContactForm = () => {
  let [formData,setFormData]=useState({
     name: "",
    email: "",
    message: "",
  })

    const handleSubmit = (e) => {
        e.preventDefault();
          emailjs
      .send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          alert("✅ Message sent successfully!");
        },
        (error) => {
          console.error("Error:", error.text);
          alert("❌ Something went wrong, try again.");
        }
      );
      setFormData({ name: "", email: "", message: "" });
    }
  return (
    <div>
        <form onSubmit={handleSubmit}  className='flex flex-col gap-4'>
         <div className='flex flex-col items-start gap-2'>
            <label className='text-base font-semibold'>Your Name</label>
            <input type="text" value={formData.name} name="name" placeholder="Enter your name" onChange={(e)=>{setFormData({ ...formData, name: e.target.value })}} required
          className="w-full p-4 rounded-lg" style={{ backgroundColor: "#44444E",}}/>
         </div>
         <div className='flex flex-col items-start gap-2'>
            <label className='text-base font-semibold'>Your Email</label>
            <input type="text" value={formData.email} name="email" placeholder="Enter your email" onChange={(e)=>{setFormData({ ...formData, email: e.target.value })}} required
          className="w-full p-4 rounded-lg" style={{ backgroundColor: "#44444E",}}/>
         </div>
         <div className='flex flex-col items-start gap-2'>
            <label className='text-base font-semibold'>Write your message here</label>
            <textarea name="message" value={formData.message} onChange={(e)=>{setFormData({...formData,message:e.target.value})}} placeholder="Enter your message" required
          rows="5"
          className="w-full p-4 rounded-lg" style={{ backgroundColor: "#44444E",}}
        />
         </div>
         <div>
            <button type="submit" className="text-lg font-semibold p-4 rounded-full bg-gradient-to-r from-[#DF8908] to-[#B415FF] cursor-pointer hover:scale-110 transition-transform">
          Send Message
        </button>
         </div>
        </form>
    </div>
  )
}

export default ContactForm;