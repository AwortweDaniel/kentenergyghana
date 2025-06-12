import Image from 'next/image';

export default function Example() {
  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <Image
        src="/energy-hero.png"
        alt="Energy Sector"
        width={1200}
        height={600}
        sizes="(max-width: 768px) 100vw, 1200px"
        className="object-cover rounded-lg"
      />
    </div>
  );
}
