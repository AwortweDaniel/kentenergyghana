import Image from 'next/image';

export default function Example() {
  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <Image
        src="/energy-hero.jpg" // starts with slash, points to /public folder
        alt="Energy Sector"
        width={1200}
        height={600}
        style={{ objectFit: "cover" }}
        className="rounded-lg"
      />
    </div>
  );
}
