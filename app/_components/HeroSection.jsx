import React from 'react'

export default function HeroSection() {
  return (
<section className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-3/4 ">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
      Summer Sale
        <strong className="font-extrabold text-primary sm:block"> Man Fashion </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
      Taking your Viewing Experience to Next Level
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-hov-btn focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="#"
        >
          Shop Now
        </a>

        <a
          className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
          href="#"
        >
          Contact US
        </a>
      </div>
    </div>
  </div>
</section>
  )
}
