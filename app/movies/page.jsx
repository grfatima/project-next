"use client";
import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FiPlus, FiThumbsUp } from "react-icons/fi";
import { HiOutlineVolumeOff, HiOutlineVolumeUp } from "react-icons/hi";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Movies = () => {
  const router = useRouter();

  const movies = [
    {
      id: 1,
      title: "The Naked Gun",
      description: "Only one man has the particular set of skills.",
      image: "/images/films/nakedgun.avif",
      video: "/videos/nakedgun.mp4",
    },
    {
      id: 2,
      title: "Wednesday",
      description: "A thief who enters the dreams of others to steal secrets.",
      image: "/images/films/wednesday.webp",
      video: "/videos/inception.mp4",
    },
    {
      id: 3,
      title: "Interstellar",
      description: "A journey beyond the stars to save humanity.",
      image: "/images/films/interstellar.jpg",
      video: "/videos/interstellar.mp4",
    },
    {
      id: 4,
      title: "The Dark Knight",
      description: "Batman faces the Joker in a battle for Gotham.",
      image: "/images/films/darkknight.jpg",
      video: "/videos/darkknight.mp4",
    },
    {
      id: 5,
      title: "Tenet",
      description: "Time inversion is the key to survival.",
      image: "/images/films/tenet.jpg",
      video: "/videos/tenet.mp4",
    },
    {
      id: 6,
      title: "Dunkirk",
      description: "Survival story of World War II evacuation.",
      image: "/images/films/dunkirk.jpg",
      video: "/videos/dunkirk.mp4",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState(false);
  const [muted, setMuted] = useState(true);

  const nextMovie = () => {
    setCurrentIndex((prev) => (prev + 1) % movies.length);
    setLiked(false);
  };

  const prevMovie = () => {
    setCurrentIndex((prev) => (prev - 1 + movies.length) % movies.length);
    setLiked(false);
  };

  const movie = movies[currentIndex];

  return (
    <div className="px-6 lg:px-12 py-20 relative flex items-center justify-center w-full bg-[#141414]">
      {/* Box */}
      <div className="relative w-[90%] mt-10 max-w-6xl h-[600px] rounded-xl overflow-hidden shadow-lg">
        <Image
          src={movie.image}
          alt={movie.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center px-6 z-10">
          <h1 className="text-4xl font-bold mb-4  text-[white]">
            {movie.title}
          </h1>
          <p className="max-w-4xl text-lg mb-6  text-[#999999]">
            {movie.description}
          </p>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => router.push(`/watch/${movie.id}`)}
              className="flex items-center gap-2 bg-red-600 text-white hover:bg-red-700 px-6 py-3 rounded-lg text-lg font-medium"
            >
              <FaPlay /> Play Now
            </button>

            <button className="bg-gray-800 text-white hover:bg-gray-700 p-3 rounded-lg">
              <FiPlus size={20} />
            </button>

            <button
              onClick={() => setLiked(!liked)}
              className={`p-3 rounded-lg ${
                liked
                  ? "bg-green-600"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              <FiThumbsUp size={20} />
            </button>

            <button
              onClick={() => setMuted(!muted)}
              className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-lg"
            >
              {muted ? (
                <HiOutlineVolumeOff size={20} />
              ) : (
                <HiOutlineVolumeUp size={20} />
              )}
            </button>
          </div>
        </div>

        <button
          onClick={prevMovie}
          className="absolute left-4 bottom-4 bg-black/50 hover:bg-black/70 p-3 rounded-lg z-10"
        >
          <IoChevronBackOutline size={28} />
        </button>

        <button
          onClick={nextMovie}
          className="absolute right-4 bottom-4 bg-black/50 hover:bg-black/70 p-3 rounded-lg z-10"
        >
          <IoChevronForwardOutline size={28} />
        </button>

        <div className="absolute  bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {movies.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-1 rounded-full transition-all ${
                index === currentIndex ? "bg-red-600 w-6" : "bg-gray-500"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
