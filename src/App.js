import React from "react";

function App() {
  return (
    <div className="">
      <main>
        <section className="w-full bg-pink-300 h-20 flex justify-between fixed z-10">
          <div className="px-5 py-5">The Nerve Center</div>
          <div className="px-5 py-5 flex gap-5">
            <button className="rounded-full bg-slate-200 py-2 px-4 hover:bg-slate-400">
              About Us
            </button>
            <button className="rounded-full bg-slate-200 py-2 px-4 hover:bg-slate-400">
              Our Services
            </button>
            <button className="rounded-full bg-slate-200 py-2 px-4 hover:bg-slate-400">
              Our Rates
            </button>
          </div>
        </section>
        <section className="pt-16 px-6 w-full flex h-[400px] bg-gradient-to-b from-pink-200 to-cyan-200 via-pink-200">
          <div className="basis-1/2 grid place-items-center mt-8 text-6xl font-semibold">
            The nerve center hopsital
            <span className="text-gray-500 text-xl">
              Taking care of all your healthcare needs
            </span>
          </div>
          <div className="basis-1/2 grid place-items-center">
            <img
              className="rounded-2xl shadow-2xl"
              src="https://picsum.photos/200"
              alt=""
            />
          </div>
        </section>
        <section className="px-5 gap-5 grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gradient-to-b from bg-cyan-200 to-pink-300 via-pink-200">
          <div className="border-2 rounded-xl shadow-xl h-[300px] w-[300px] flex flex-col py-4 hover:border-4">
            <h2 className="text-2xl font-semibold">Quality Services</h2>
            <p>Lorem ipsum placeholder</p>
          </div>
          <div className="border-2 rounded-xl shadow-xl h-[300px] w-[300px] flex flex-col py-4 hover:border-4">
            <h2 className="text-2xl font-semibold">Affordable Rates</h2>
            <p>Lorem ipsum placeholder</p>
          </div>
          <div className="border-2 rounded-xl shadow-xl h-[300px] w-[300px] flex flex-col py-4 hover:border-4">
            <h2 className="text-2xl font-semibold">Friendly Staff</h2>
            <p>Lorem ipsum placeholder</p>
          </div>
        </section>
        <section className="px-5 py-5 bg-gradient-to-b from-cyan-200 to-pink-300 via-pink-200 grid place-items-center gap-5">
          <h2 className="text-xl font-medium">Our Pricing</h2>
          <div className="px-3 py-2 grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="border-2 shadow-xl rounded-xl w-[300px] h-[300px] px-5 py-4">
              <h2 className="font-medium text-xl">Placeholder Services</h2>
              <p className="leading-8">Lorem ipsum placeholder words</p>
            </div>
            <div className="border-2 shadow-xl rounded-xl w-[300px] h-[300px] px-5 py-4">
              <h2 className="font-medium text-xl">Placeholder Services</h2>
              <p className="leading-8">Lorem ipsum placeholder words</p>
            </div>
            <div className="border-2 shadow-xl rounded-xl w-[300px] h-[300px] px-5 py-4">
              <h2 className="font-medium text-xl">Placeholder Services</h2>
              <p className="leading-8">Lorem ipsum placeholder words</p>
            </div>
            <div className="border-2 shadow-xl rounded-xl w-[300px] h-[300px] px-5 py-4">
              <h2 className="font-medium text-xl">Placeholder Services</h2>
              <p className="leading-8">Lorem ipsum placeholder words</p>
            </div>
          </div>
        </section>
        <section className="bg-pink-200 w-full h-fit grid place-items-center">
          <div className="grid place-items-center">
            <h3>The Nerve Center Hospital &copy;2023</h3>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
