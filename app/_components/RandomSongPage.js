import Link from "next/link";
import RandomSongContainer from '../_components/RandomSongContainer';

export default function RandomSongPage() {
  return (
    <div className="flex flex-col items-start justify-start min-h-screen py-2 px-4 w-full">
      <div className="rounded-md shadow sm:flex mb-3">
        <div>
          <Link href="/">
            <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
              Go to Home
            </button>
          </Link>
        </div>
      </div>

      <div className="text-center mx-auto">
        <h1 className="text-4xl tracking-tight font-extrabold text-blue-500 sm:text-5xl md:text-6xl">
          Random Song Generator
        </h1>

        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-3 md:text-xl md:max-w-3xl">
          Press the button below to generate a random song.
        </p>
        
        <div className="rounded-md shadow mt-3">
          <RandomSongContainer />
        </div>
      </div>
    </div>
  );
}