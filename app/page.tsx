"use client"
import Meteors from "@/components/magicui/meteors"
import BlurFade from "@/components/magicui/blur-fade"
import { memories, news } from "@/data/data"
import { Canvas } from "@react-three/fiber"
import Experience from "@/components/Experience"
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity"

export default function Home() {
  return (
    <div className="">
      <section className="relative flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl mb-10">
        <Meteors number={30} />
        <BlurFade delay={0.4} inView>
          <div className="h-[100vh] w-screen">
            <Canvas>
              <Experience />
            </Canvas>
          </div>
        </BlurFade>
      </section>
      <section>
        <BlurFade delay={0.4} inView>
          <h2 className="text-4xl font-bold p-10 mb-8">Dernières Actualités</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 p-10">
            {news.map((item, idx) => (
              <BlurFade key={item.id} delay={0.25 + idx * 0.1} inView>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 bg-white dark:bg-gray-800 text-black">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  </div>
                </a>
              </BlurFade>
            ))}
          </div>
        </BlurFade>
      </section>

      <section className="my-20">
        <BlurFade delay={0.4} inView>
          <VelocityScroll
            text="Prochain Match 05/08/2024"
            default_velocity={2}
            className="font-display text-center text-6xl font-bold tracking-[-0.02em] text-white drop-shadow-sm dark:text-white border md:text-7xl md:leading-[5rem] "
          />
        </BlurFade>
      </section>

      <section id="photos">
        <h2 className="text-4xl font-bold p-10 mb-8">Derniers Souvenirs</h2>
        <div className="columns-2 gap-4 sm:columns-3">
          {memories.map((imageUrl, idx) => (
            <BlurFade key={imageUrl.id} delay={0.25 + idx * 0.05} inView>
              <img
                className="mb-4 size-full rounded-lg object-contain"
                src={imageUrl.image}
                alt={`Random stock image ${idx + 1}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
    </div>
  )
}
