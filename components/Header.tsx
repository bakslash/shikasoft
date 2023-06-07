import Image from 'next/image'
import img from '../public/hero1.jpg'

export default function Header({ scrollHandler }) {
  return (
    <header className="relative">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
      <div className="mx-auto">
        <div className="relative shadow-xl sm:overflow-hidden">
          <div className="absolute inset-0">
            <Image
              priority
              fill
              className="h-full w-full object-cover"
              src={img}
              placeholder="blur"
              alt="Coffee grinder"
            />
            <div className="absolute inset-0 bg-slate-500 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <p className="relative left-0 right-0 mx-auto mt-5 max-w-xl text-center text-xl  font-semibold uppercase tracking-wide text-grey-600">
              Shika Soft Solutions
            </p>
            <h1 className="mt-1 text-center font-bold uppercase text-slate-600 sm:text-5xl sm:tracking-tight lg:text-7xl">
              <span className=" text-slate-900">Life is better with</span>
              <span className="block text-slate-900">Shika soft</span>
            </h1>

            <div className="mx-auto mt-10 max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <button
                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-grey-600 shadow-sm hover:bg-grey-100 sm:px-8"
                onClick={scrollHandler}
              >
                Solutions
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
