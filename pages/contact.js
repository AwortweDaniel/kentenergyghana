// export default function Contact() {
//   return (
//     <main className="bg-gray-50 py-16 px-6 text-gray-800">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <h1 className="text-4xl font-bold text-center text-[#011c40] mb-6">Contact Us</h1>
//         <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
//           Let’s work together. Whether you want to partner, request a proposal, or just ask a question — we’re ready to talk.
//         </p>

//         {/* Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           {/* Contact Details + Map */}
//           <div>
//             <div className="bg-white rounded shadow-md p-6 mb-6">
//               <h2 className="text-xl font-semibold text-[#011c40] mb-4">Head Office</h2>
//               <p className="mb-2"><strong>Address:</strong> Kent Energy Ghana, Accra, Ghana</p>
//               <p className="mb-2"><strong>Phone:</strong> +233 20 000 0000 / +233 24 000 0000</p>
//               <p className="mb-4"><strong>Email:</strong> info@kentenergyghana.com</p>

//               <h3 className="text-lg font-semibold text-[#011c40] mt-8 mb-2">Working Hours</h3>
//               <p>Monday – Friday: 8:00 AM – 5:00 PM</p>
//             </div>

//             {/* Embedded Google Map */}
//             <div className="rounded overflow-hidden shadow-md">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.919965331414!2d-0.19792058468010206!3d5.614818495923681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdc9b32615e54ed%3A0x70b85aa860c9ef68!2sAccra%20Mall!5e0!3m2!1sen!2sgh!4v1716379914031!5m2!1sen!2sgh"
//                 width="100%"
//                 height="250"
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               ></iframe>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <form className="bg-white rounded shadow-md p-6 space-y-4">
//             <h2 className="text-xl font-semibold text-[#011c40] mb-4">Send a Message</h2>

//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               className="w-full px-4 py-2 border rounded text-sm"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               className="w-full px-4 py-2 border rounded text-sm"
//               required
//             />
//             <input
//               type="text"
//               name="subject"
//               placeholder="Subject"
//               className="w-full px-4 py-2 border rounded text-sm"
//             />
//             <textarea
//               name="message"
//               rows="5"
//               placeholder="Your Message"
//               className="w-full px-4 py-2 border rounded text-sm"
//               required
//             />
//             <button
//               type="submit"
//               className="w-full bg-[#f5b400] hover:bg-yellow-500 text-black py-2 rounded font-semibold"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </main>
//   );
// }


'use client'; // Only if using app router
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok) {
        setStatus('Message sent successfully!');
        e.target.reset(); // clear the form
      } else {
        setStatus(result.message || 'Failed to send message');
      }
    } catch (err) {
      setStatus('Something went wrong.');
    }
  };

  return (
    <main className="bg-gray-50 py-16 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#011c40] mb-6">Contact Us</h1>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
          Let’s work together. Whether you want to partner, request a proposal, or just ask a question — we’re ready to talk.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            {/* Contact Details */}
            <div className="bg-white rounded shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold text-[#011c40] mb-4">Head Office</h2>
              <p className="mb-2"><strong>Address:</strong> Kent Energy Ghana, Accra, Ghana</p>
              <p className="mb-2"><strong>Phone:</strong> +233 20 000 0000 / +233 24 000 0000</p>
              <p className="mb-4"><strong>Email:</strong> awortwedanieljr15@gmail.com</p>
              <h3 className="text-lg font-semibold text-[#011c40] mt-8 mb-2">Working Hours</h3>
              <p>Monday – Friday: 8:00 AM – 5:00 PM</p>
            </div>

            {/* Map */}
            <div className="rounded overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18..."
                width="100%"
                height="250"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded shadow-md p-6 space-y-4">
            <h2 className="text-xl font-semibold text-[#011c40] mb-4">Send a Message</h2>

            <input type="text" name="name" placeholder="Your Name" className="w-full px-4 py-2 border rounded text-sm" required />
            <input type="email" name="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded text-sm" required />
            <input type="text" name="subject" placeholder="Subject" className="w-full px-4 py-2 border rounded text-sm" />
            <textarea name="message" rows="5" placeholder="Your Message" className="w-full px-4 py-2 border rounded text-sm" required />
            
            <button type="submit" className="w-full bg-[#f5b400] hover:bg-yellow-500 text-black py-2 rounded font-semibold">
              Submit
            </button>
            {status && <p className="text-sm mt-2 text-center text-gray-700">{status}</p>}
          </form>
        </div>
      </div>
    </main>
  );
}
