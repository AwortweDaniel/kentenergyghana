import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: "Drilling & Production Support",
      desc: "We manage drilling operations through logistics, manpower, and wellsite support — including rig mobilization, intervention, and production optimization. Often delivered with global partners.",
      image: "/services/drilling.jpg",
    },
    {
      title: "Installation & Marine Contracting",
      desc: "From FPSO hook-ups to subsea risers and heavy lifts, we deliver or co-execute complex offshore and onshore installations. We get the job done safely and on time.",
      image: "/services/installation.jpg",
    },
    {
      title: "Vessel Chartering & Marine Logistics",
      desc: "We provide AHTS, PSVs, barges, crew boats, and offshore support — including bunkering, towing, supply runs, and standby services through direct ops or charter agreements.",
      image: "/services/marine-logistics.jpg",
    },
    {
      title: "Fuel Trading & Bulk Distribution",
      desc: "We supply diesel, petrol, marine fuel, and aviation fuel to industries and agencies — under licensed partnerships with local and regional distributors.",
      image: "/services/fuel.jpg",
    },
    {
      title: "Oilfield Logistics & Remote Ops",
      desc: "We handle all logistics — from camp services to heavy haulage, procurement, and remote crew movement — for upstream and infrastructure clients.",
      image: "/services/logistics.jpg",
    },
    {
      title: "Pipeline Construction & Maintenance",
      desc: "We build and maintain pipelines across terrains — handling ROW clearance, welding, pigging, inspections, and testing — in compliance with safety and integrity standards.",
      image: "/services/pipeline.jpg",
    },
    {
      title: "Tank Cleaning & Industrial Maintenance",
      desc: "We clean crude and fuel tanks, manage shutdowns, pipeline flushing, corrosion protection, and more — with certified teams trained for confined spaces and hazardous work.",
      image: "/services/tank.jpg",
    },
    {
      title: "Renewable Energy & Transition",
      desc: "We support solar, hybrid, and LPG systems, offer energy audits, and guide clients through the energy transition. Local execution backed by global insight.",
      image: "/services/renewable.jpg",
    },
    {
      title: "Training & Competency Development",
      desc: "Through Kent Energy Training Institute, we offer HSE, marine, and industrial training programs aligned with Apave and other global standards.",
      image: "/services/training.jpg",
    },
  ];

  return (
    <main className="bg-gray-50 text-gray-800 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-[#011c40]">Products & Services</h1>
        <p className="text-center max-w-3xl mx-auto text-lg mb-12">
          At Kent Energy, we partner with international and regional firms to deliver energy, marine, and infrastructure services. We're fully compliant with Ghana’s Local Content Laws (LI 2204), and we deploy well-trained Ghanaians backed by global technical expertise.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white shadow-md rounded overflow-hidden hover:shadow-lg transition">
              <div className="relative h-48">
                <Image
                  src={s.image}
                  alt={s.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-[#011c40] mb-2">{s.title}</h3>
                <p className="text-sm text-gray-700">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
