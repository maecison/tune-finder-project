'use client';
import React, { useState } from 'react';
import Link from "next/link";

export default function RandomSongPage() {
  const [song, setSong] = useState(null);

  const fetchRandomSong = async () => {
    const response = await fetch('/api/random-song');

    if (!response.ok) {
      console.error('Failed to fetch song');
      return;
    }

    const songData = await response.json();
    setSong(songData);
  };

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

        <div className="rounded-md shadow sm:flex mb-3">
          <button 
            onClick={fetchRandomSong}
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
          >
            Generate Random Song
          </button>
        </div>

        {song && (
          <div>
            <h2>{song.title}</h2>
            <p>{song.lyrics}</p>
          </div>
        )}
      </div>
    </div>
  );
}