import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>StorageConnect</title>
        <meta name="description" content="StorageConnect website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
    </>
  );
};

function Hero() {
  return (
    <div className="flex flex-col bg-gradient-to-r from-purple-500 to-pink-500 h-[75vh]">
      <NavBar />
      <Headings />
    </div>
  );
}

export function Headings() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <h1 className="text-3xl text-center lg:text-left sm:text-5xl lg:text-6xl text-white font-extrabold lg:pt-20">
        Self Storage Business
      </h1>
      <h1 className="pt-2 lg:pt-4 text-3xl sm:text-5xl lg:text-6xl text-white font-extrabold">
        Buy. Sell. Learn.
      </h1>
      <p className="text-white lg:text-[1.35rem] text-center xl:leading-9 p-4 pt-6 max-w-sm sm:max-w-lg lg:max-w-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorum
        neque unde, voluptatem quod modi hic.
      </p>
      <div className="flex flex-col lg:flex-row pt-8 xl:pt-12 space-y-5 lg:space-y-0 lg:space-x-5">
        <button className="p-5 bg-yellow-400 rounded-lg w-64">
          <span className="text-base font-semibold text-slate-900">
            Sell Your Self Storage
          </span>
        </button>
        <button className="p-5 bg-white rounded-lg w-64 text-slate-900">
          <span className="text-base text-slate-900">
            Activate Self Storage Listings
          </span>
        </button>
      </div>
    </div>
  );
}

export function NavBar() {
  return (
    <div className="w-full flex lg:h-24 lg:fixed 2xl:px-24">
      <div className="flex w-full lg:w-auto items-center p-4 2xl:px-8 font-bold">
        <svg height="36px" width="36px" viewBox="0 0 24 24" fill="#facc15">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M3 5v14c0 1.1.89 2 2 2h6V3H5c-1.11 0-2 .9-2 2zm16-2h-6v8h8V5c0-1.1-.9-2-2-2zm-6 18h6c1.1 0 2-.9 2-2v-6h-8v8z" />
        </svg>
        <h1 className="text-white flex items-center justify-center grow lg:grow-0 xl:text-xl lg:pl-2">
          StorageConnect
        </h1>
        <svg
          viewBox="0 0 448 512"
          fill="#facc15"
          height="36"
          width="36"
          className="lg:hidden"
        >
          <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
        </svg>
      </div>
      <div className="hidden lg:flex flex-row-reverse flex-auto">
        <div className="flex items-center lg:px-4 xl:px-6 2xl:px-8">
          <button className="px-5 h-10 bg-yellow-400 rounded-lg">
            <span className="xl:text-xl text-slate-900 line-through decoration-[0.14rem]">
              Contact
            </span>
          </button>
        </div>
        <div className="hidden lg:flex items-center lg:px-4 xl:px-6 2xl:px-8">
          <h1 className="text-white xl:text-xl">Learn</h1>
        </div>
        <div className="hidden lg:flex items-center lg:px-4 xl:px-6 2xl:px-8">
          <h1 className="text-white xl:text-xl">Free Evaluation</h1>
        </div>
        <div className="hidden lg:flex items-center lg:px-4 xl:px-6 2xl:px-8">
          <h1 className="text-white xl:text-xl">Sell Your Self Storage</h1>
        </div>
        <div className="hidden lg:flex items-center lg:px-4 xl:px-6 2xl:px-8">
          <h1 className="text-white xl:text-xl">Active Listing</h1>
        </div>
      </div>
    </div>
  );
}
export default Home;
