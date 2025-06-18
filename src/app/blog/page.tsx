'use client';
import Image from 'next/image';

const blogItems = [
  { id: 1, title: 'design 1', author: 'Amy', image: '/1.jpg' },
  { id: 2, title: 'design 2', author: 'Alex', image: '/2.jpg' },
  { id: 3, title: 'design 3', author: 'Nora', image: '/3.jpg' },
  { id: 4, title: 'design 4', author: 'Khalid', image: '/1.jpg' },
  { id: 5, title: 'design 5', author: 'Sina', image: '/2.jpg' },
  { id: 6, title: 'design 6', author: 'Naomi', image: '/3.jpg' },
];

export default function BlogPage() {
  return (
    <main className="font-sans bg-white text-gray-800">
      {/* ---------- Hero Section ---------- */}
      <section className="bg-[#0d4c3e] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <Image
            src="/bla.jpg"
            alt="Hero"
            width={600}
            height={400}
            className="rounded-xl w-full h-auto object-cover"
          />
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold">2024 home decor trends</h1>
            <p className="text-sm sm:text-base text-white/90">
              Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Suspendisse
              sem arcu, convallis non pretium sit amet, tincidunt sit amet lectus. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Blog Grid Section ---------- */}
      <section className="py-16 px-6 bg-[#F1F9F7]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogItems.map(({ id, title, author, image }) => (
            <div
              key={id}
              className="rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.015] overflow-hidden"
            >
              <Image
                src={image}
                alt={title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="bg-[#0d4c3e] text-white p-4 space-y-2">
                <h3 className="text-lg font-semibold capitalize">{title}</h3>
                <p className="text-sm text-white/90">Sample text. Click to select the text box.</p>
                <p className="text-xs italic text-white/60">By {author}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Final CTA Section ---------- */}
      <section className="w-full h-[500px] grid grid-cols-1 md:grid-cols-2">
        {/* Left Side */}
        <div className="bg-[#0d4c3e] text-white flex flex-col justify-center items-center p-8 space-y-4">
          <div className="bg-white text-[#0d4c3e] w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg">
            ★
          </div>
          <h2 className="text-2xl font-bold text-center">Start your design</h2>
          <p className="text-sm text-white/80 text-center max-w-sm">
            Sample text. Click to select the text box. Click again or double click to start editing the text.
          </p>
          <button className="mt-4 px-6 py-2 bg-white text-[#0d4c3e] rounded-full font-semibold hover:bg-gray-200 transition">
            Learn More
          </button>
        </div>

        {/* Right Side */}
        <div className="w-full h-full">
          <Image
            src="/1.jpg"
            alt="Modern Bedroom"
            width={800}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </main>
  );
}
