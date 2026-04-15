import { IoMenu } from 'react-icons/io5';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <header className='relative w-full bg-card'>
        <div className='flex justify-between max-w-5xl px-2 py-5 m-auto relative'>
          <h2 className='text-primary font-bold text-2xl font-sans'>
            Mimos da Poli
          </h2>
          <nav>
            <button>
              <IoMenu className='size-7' />
            </button>
          </nav>
        </div>
      </header>
      <main className='w-full'>
        <section className='relative mx-auto w-full overflow-y-hidden h-[calc(100vh-74px)] '>
          <Image
            className='absolute -z-20 w-full object-cover right-0  min-h-dvh '
            src={'/backgroundImage.svg'}
            width={1500}
            height={1500}
            alt='background'
          />
          <div className='absolute w-full min-h-full bg-foreground/60 -z-10' />
          <article className='flex flex-col justify-center gap-20 px-2 max-w-5xl mx-auto w-full min-h-full'>
            <div className='flex flex-col gap-5'>
              <span className='text-background font-mono uppercase text-xs md:text-base'>
                O Atelier Digital
              </span>
              <h1 className='text-background max-w-sm md:text-5xl lg:text-7xl sm:max-w-lg  font-extrabold text-4xl'>
                A Curadoria de beleza que você merece
              </h1>
              <p className='text-background max-w-md min-[450px]:max-w-2xl sm:text-xl'>
                Descubra uma seleção exclusiva das melhores marcas de perfumaria
                e semijoias, escolhidas a dedo para realçar sua essência.
              </p>
            </div>
            <div className='flex flex-wrap gap-3'>
              <button className='bg-primary text-background uppercase rounded-md py-2 px-9 shadow-md cursor-pointer'>
                Explorar coleções
              </button>
              <button className='bg-card/30 border uppercase text-background rounded-md py-2 px-5 shadow-md cursor-pointer'>
                Fala com Consultoria
              </button>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
