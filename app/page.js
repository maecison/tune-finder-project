import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-blue-500 sm:text-5xl md:text-6xl">
          Welcome to Tune Finder
        </h1>

        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-3 md:text-xl md:max-w-3xl">
          Find song details or read your favorite lyrics.
        </p>

        <div className="mt-5 sm:mt-8 sm:flex sm:flex-col sm:justify-center lg:justify-start items-center">
          <div className="rounded-md shadow sm:flex mb-3">
            <div className="sm:mr-3">
              <Link href="/song-details">
                <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                  Find Song Details
                </button>
              </Link>
            </div>
            
            <div>
              <Link href="/lyrics">
                <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                  Get Song Lyrics
                </button>
              </Link>
            </div>
          </div>

          <p className="mt-3 mb-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-3 md:text-xl md:max-w-3xl">
            Looking to discover new tunes? Click the button below!``
          </p>

          <div className="rounded-md shadow mt-3">
            <Link href="/random-song">
              <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Generate Random Song
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}