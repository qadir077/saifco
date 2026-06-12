import Image from "next/image";

const projects = [
  {
    title: "The Obsidian Suite",
    category: "RESIDENTIAL",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBanDUE6heuOdpszTenlrpX3A65P1ils8KJCA8LqvoMJiVsEg6qCgrNNsF9EYV462RVmGZOlPb2uIyT1wfu4kgCRqd6aNsmtrxZzjMQgY7QNgkQiF0sbBMp_q_ILMBw40af3bR7xt5YCW7MJ3LG0IVVaXHMKzkijqMuYBWcMiWKSsRABJqwJZjbt0UdINwJr1bJl_vT8NbIyM_yuo2RrS0mHwtkjixJb1kBDcxby1zNbC3wPHpOHVFKJJ0ku61YbRaGzKBYeFPAppQ",
  },
  {
    title: "Skyline Villa",
    category: "EXTERIOR",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCcXt0RMjmJxM6YjwVJoHr7TiJdu9hUpNpeT5hrD3rX7d_K8fnOBvaqd6qZNmXAzT86OXp7NYgR-L2ylzIuUXxSwGOOD1Lj3KGOUWiGAPn8R_Sbk3UJGem4aCpaxqPH6gflCqZCyHm13YCXoujzQpiHHA3TnDXrZG72icAKUqPzlIUOS1V30TtOqaogygnWz5MXiTBa3zvTm7lqOk_KdAOlvpqCZqxKUJ3RZPpTi6IbYZsnc_jxtVHPUfexqYTf2iT29nbh-qs6zYo",
  },
  {
    title: "NexGen HQ",
    category: "COMMERCIAL",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAS8oNqq6hbygax11n3UEppXOvgx8fWUlLYmdjwQduxGgWQ-hficv0k-Nj9dYdMWH0osJaeElNkoWKD5Tsw-332hM0GTBQz1RECM9P8zJy3gdMpv-pZhSRWfcRR27BMFOMoJu2n49ZFHlImxpL0PvfYNOCXOVznmDa2ZzsKBHha88Sqc-ZednLDQJ0ALaFXvUjBB5PMD7dNMLd1h0X5oZn076CcKfNBVZJAwzaZeVknhAkU23DghXAGZGk2FIkcypuHqI45sYmb8Cc",
  },
];

export default function Projects() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-32">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-5xl font-bold text-lime-400 mb-2">
            Recent Projects
          </h2>

          <p className="uppercase tracking-[4px] text-sm text-zinc-500">
            Curation of our latest work
          </p>
        </div>

        <button className="hidden md:block border border-white/20 px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
          View All Work
        </button>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 lg:h-[800px]">
        {/* Large Project */}
        <div className="lg:col-span-8 relative rounded-3xl overflow-hidden group h-[400px] lg:h-full border border-white/10">
          <Image
            fill
            alt={projects[0].title}
            src={projects[0].image}
            className="object-cover group-hover:scale-110 transition duration-1000"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-10">
            <span className="text-lime-400 font-semibold mb-2">
              {projects[0].category}
            </span>

            <h3 className="text-3xl font-bold">
              {projects[0].title}
            </h3>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          {projects.slice(1).map((project) => (
            <div
              key={project.title}
              className="relative rounded-3xl overflow-hidden group flex-1 h-[300px] border border-white/10"
            >
              <Image
                fill
                alt={project.title}
                src={project.image}
                className="object-cover group-hover:scale-110 transition duration-1000"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">
                <span className="text-lime-400 font-semibold mb-1">
                  {project.category}
                </span>

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}