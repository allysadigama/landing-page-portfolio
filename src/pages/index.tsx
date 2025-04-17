export default function Home() {
  return (
    <main className="bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-black border-b border-gray-800 sticky top-0 z-50">
        <div className="text-2xl font-bold text-yellow-500">Rahadiansyah</div>
        <ul className="flex gap-6 text-sm">
          <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
          <li><a href="#project" className="hover:text-yellow-400">Portfolio</a></li>
          <li><a href="#experience" className="hover:text-yellow-400">Work Experience</a></li>
          <li><a href="#about" className="hover:text-yellow-400">About Me</a></li>
          <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="text-center py-20 px-4 bg-[url('/bg-image.jpg')] bg-cover bg-center">
        <h1 className="text-5xl md:text-7xl font-bold text-yellow-500 mb-4">Rahadiansyah</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">Digital Marketing, Graphic Design Manager & Branding Specialist</p>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="text-left space-y-2">
          </div>
          <h1 className="font-bold text-2xl">Digital Marketing, Grapich Design Manager & Branding Specialist</h1>
          <div>
          <p>Perkenalkan saya adalah seorang Digital Marketing yang mendalami khususnya pembuatan brand hingga brand tersebut growth dan stable.
          Saya berkerja mulai dari 2016 hingga sekarang, cukup banyak project yang berhasil saya lewati dibeberapa perusahaan baik secara individual maupun secara team. Saya sangat berinovasi dalam memajukan dan membuat perencanaan kegiatan marketing dan membuat planing kerja khususnya team design dan social media. Juga ikut serta untuk membuat rancangan campaign di Marketplace ataupun Website.</p>
          </div>
          <img
            src="./aset/image 3.png"
            alt="Profile"
            className="w-50 h-65 "
          />
          </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6 bg-black border-t border-gray-800">
        <h2 className="text-3xl font-bold text-yellow-500 mb-8 text-center">Work Experience</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="font-bold">Venue Merchandise</div>
          <div className="font-bold">Indosat Ooredoo</div>
          <div className="font-bold">Fastprint</div>
          <div className="font-bold">DarkVoid Creative</div>
        </div>
      </section>

      {/* Project Section */}
      <section id="project" className="py-16 px-6 bg-gray-900">
        <h2 className="text-3xl font-bold text-yellow-500 mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 justify-center">
          <div className="bg-black rounded-xl shadow p-4">
            <img src="./aset/project1.png" alt="Project 1" className="rounded-lg mb-2" />
          </div>
          <div className="bg-black rounded-xl shadow p-4">
            <img src="./aset/project2.png" alt="Project 2" className="rounded-lg mb-2" />
          </div>
        </div>
      </section>

      {/* Blog / Discover Section */}
      <section className="py-16 px-6 bg-black">
        <h2 className="text-3xl font-bold text-yellow-500 mb-8 text-center">Discover</h2>
        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden bg-gray-800">
          <img
            src="./aset/discover.png"
            alt="Discover"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white">With passion for Problem Solving</div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-16 px-6 bg-gray-900">
        <h2 className="text-3xl font-bold text-yellow-500 mb-8 text-center">About Me</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center text-sm">
          <div className="bg-black p-4 rounded-xl shadow text-yellow-600 font-bold">LEADERSHIP
            <p className="text-white">If you'd like to talk about a project you want help with or need an</p>
          </div>
          <div className="bg-black p-4 rounded-xl shadow text-yellow-600 font-bold">INTEGRITY
          <p className="text-white">If you'd like to talk about a project you want help with or need an</p>
          </div>
          <div className="bg-black p-4 rounded-xl shadow text-yellow-600 font-bold">TEAMWORK
          <p className="text-white">If you'd like to talk about a project you want help with or need an</p>
          </div>
          <div className="bg-black p-4 rounded-xl shadow text-yellow-600 font-bold">INNOVATION
          <p className="text-white">If you'd like to talk about a project you want help with or need an</p>
          </div>
        </div>
      </section>

      {/* Portfolio (Photography) */}
      <section className="py-16 px-6 bg-black">
        <h2 className="text-3xl font-bold text-yellow-500 mb-8 text-center">Photography</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="./aset/image 10.png" alt="Photo 1" className="rounded-lg" />
          <h2 className="font-bold">Photography Milestone</h2>
        </div>
      </section>

      {/* Call to Action / Contact */}
      <section id="contact" className="py-20 px-6 bg-yellow-500 text-black text-center">
        <h2 className="text-4xl font-bold mb-4">Let's work together</h2>
        <p className="mb-8 max-w-xl mx-auto">I would love to collaborate and bring creative ideas to life. Let's build something great.</p>
        <a
          href="mailto:example@email.com"
          className="inline-block bg-black text-yellow-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-900 transition"
        >
          Get in Touch
        </a>
      </section>
    </main>
  );
}