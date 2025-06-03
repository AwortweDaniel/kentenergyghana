import Image from 'next/image';

export default function About() {
  return (
    <main className="bg-gray-50 py-16 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <h1 className="text-4xl font-bold text-center text-[#011c40] mb-6">
          About Kent Energy Ghana
        </h1>
        <p className="text-center max-w-3xl mx-auto text-lg mb-12">
          We’re more than just a service provider — we’re a trusted execution partner across Africa’s energy landscape. From marine logistics to upstream support and infrastructure delivery, we enable complex projects with local precision and global expertise.
        </p>

        {/* WHO WE ARE */}
        <section className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#011c40]">A Trusted Partner for Africa’s Energy Future</h2>
            <p className="text-gray-700 mb-4">
              Kent Energy Ghana is a leading Pan-African energy and marine logistics company. We partner with world-class technical firms, governments, and private sector clients to deliver the projects that matter most.
            </p>
            <p className="text-gray-700">
              Our strength lies in our co-execution approach. Whether we’re supporting a multinational E&P operator or driving local infrastructure development, we combine local talent with international standards — and we always deliver.
            </p>
          </div>
          <div className="relative w-full h-64 md:h-80">
            <Image src="/images/about.jpg" alt="Kent Energy" layout="fill" objectFit="cover" className="rounded" />
          </div>
        </section>

        {/* MISSION & MODEL */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#011c40] mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            To be Africa’s most trusted energy partner — linking global expertise with local impact and delivering reliable solutions across the energy, marine, and infrastructure sectors.
          </p>

          <h3 className="text-xl font-semibold text-[#011c40] mb-2">Our Operating Model</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Joint Ventures & Strategic Alliances</li>
            <li>Local Content Execution for International Operators</li>
            <li>Government-Backed Public Projects</li>
            <li>Technical Partnerships with OEMs and Training Institutions</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#011c40] mb-2">Our Values</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Integrity in Execution</li>
            <li>Zero Compromise on HSE</li>
            <li>Partnership over Competition</li>
            <li>Compliance, Always</li>
            <li>Capacity Building for Africa’s Future</li>
          </ul>
        </section>

        {/* TEAM SECTION */}
<section className="bg-white shadow p-8 rounded-lg mt-16">
  <h2 className="text-2xl font-bold text-center text-[#011c40] mb-10">Meet the Team</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
    {[
      {
        name: 'Kwesi Mensah',
        role: 'Managing Director',
        img: '/team/person1.jpg',
        bio: 'Kwesi leads our strategic partnerships and oversees operations across all service areas. He brings 15+ years of upstream oil & gas experience.',
      },
      {
        name: 'Ama Boateng',
        role: 'Head of Marine Logistics',
        img: '/team/person2.jpg',
        bio: 'Ama runs our marine logistics and offshore support division. She’s worked on vessel chartering and marine operations across West Africa.',
      },
      {
        name: 'Yaw Ofori',
        role: 'Technical Director',
        img: '/team/person3.jpg',
        bio: 'Yaw ensures technical compliance and engineering excellence across all projects. He’s an expert in pipeline, tank, and plant systems.',
      },
    ].map((person, i) => (
      <div
        key={i}
        className="relative bg-[#f9f9f9] hover:bg-white border border-gray-200 hover:shadow-xl rounded-lg transition duration-300 overflow-hidden group"
      >
        <div className="p-6 text-center">
          <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-4 border-[#011c40]">
            <Image src={person.img} alt={person.name} layout="fill" objectFit="cover" />
          </div>
          <h4 className="text-lg font-semibold text-[#011c40]">{person.name}</h4>
          <p className="text-sm text-gray-600">{person.role}</p>
        </div>
        <div className="absolute inset-0 bg-white bg-opacity-95 opacity-0 group-hover:opacity-100 p-6 text-sm text-gray-700 transition-opacity duration-300 flex items-center justify-center text-center">
          {person.bio}
        </div>
      </div>
    ))}
  </div>
</section>

      </div>
    </main>
  );
}
