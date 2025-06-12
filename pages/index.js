import React from "react";
import Link from "next/link";
import Button from "../components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
   
      
      <section className="relative h-[600px] text-white">
  <Image
    src="/energy-hero.png"
    alt="Kent Energy Hero"
    layout="fill"
    objectFit="cover"
    priority
  />
  <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-6 text-center">
    <div>
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Empowering Africa’s Energy Future</h1>
      <p className="max-w-xl mx-auto mb-6 text-lg">From offshore rigs to rural mini-grids, we power Africa’s energy goals — safely and sustainably.</p>
      <div className="flex gap-4 justify-center">
        <a href="/services" className="bg-[#f5b400] text-black px-5 py-3 rounded">Explore Services</a>
        <a href="/contact" className="border border-white hover:bg-[#011c40] hover:text-yellow-400 px-5 py-3 rounded">Contact Us</a>
      </div>
    </div>
  </div>
</section>

<section className="bg-gray-100 py-16 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-center text-3xl font-bold mb-10">Our Core Services</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { title: 'Drilling Support', icon: '/icons/DRILLING.png', desc: 'Safe and efficient wellsite operations' },
        { title: 'Marine Logistics', icon: '/icons/SHIP.png', desc: 'Crew and cargo to remote rigs' },
        { title: 'Pipeline Construction', icon: '/icons/pipeline.png', desc: 'Engineering, welding, and testing' },
      ].map((item, i) => (
        <div key={i} className="bg-white shadow-md p-6 rounded text-center">
          <img src={item.icon} className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-sm text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      <section className="bg-white py-16 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    <img src="/logo.png" alt="About Kent" height={200} width={400} className="rounded shadow" />
    <div>
      <h2 className="text-3xl font-bold mb-4">About Kent Energy Ghana</h2>
      <p className="text-gray-700 mb-4">
        We specialize in executing complex energy projects through partnerships with global firms. Our focus is on drilling, logistics, infrastructure, and training.
      </p>
      <a href="/about" className="text-[#f5b400] font-semibold underline">Learn more →</a>
    </div>
  </div>
</section>
<section className="bg-gray-100 py-16 px-6 text-center">
  <h2 className="text-3xl font-bold mb-10">Industries We Serve</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
    {[
      {
        name: 'Oil & Gas',
        image: '/oil-gas.png', // rename your downloaded file accordingly
      },
      {
        name: 'Marine',
        image: '/marine.png',
      },
      {
        name: 'Mining',
        image: '/mining.png',
      },
      {
        name: 'Power',
        image: '/power.png',
      },
      {
        name: 'Government',
        image: '/gov.png',
      },
    ].map((item, i) => (
      <div key={i} className="bg-white shadow p-4 rounded text-sm font-semibold">
        <img src={item.image} alt={item.name} className="w-full h-28 object-cover mb-2 rounded" />
        <div>{item.name}</div>
      </div>
    ))}
  </div>
</section>



      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">Get in touch to discuss a project or partnership.</p>
          <Link href="/contact"><Button>Request a Proposal</Button></Link>
        </div>
      </section>
    </main>
  );
}
