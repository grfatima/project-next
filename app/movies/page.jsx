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
      title: "Interstellar",
      description: "A journey beyond the stars to save humanity.",
      image: "/images/films/interstellar.jpg",
      video: "/videos/interstellar.mp4",
    },
    {
      id: 3,
      title: "The Dark Knight",
      description: "Batman faces the Joker in a battle for Gotham.",
      image: "/images/films/darkknight.jpg",
      video: "/videos/darkknight.mp4",
    },
    {
      id: 4,
      title: "The Naked Gun",
      description: "Only one man has the particular set of skills.",
      image: "/images/films/thenuked.avif",
      video: "/videos/nakedgun.mp4",
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
    <div className="px-6 lg:px-12 py-20  w-full bg-[#141414]">
      <div className=" relative flex items-center justify-center">
        <div className="relative w-[90%] mt-10 max-w-6xl h-[600px] rounded-xl overflow-hidden shadow-lg border border-[#333333]">
          <Image
            src={movie.image}
            alt={movie.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center px-6 z-10">
            <h1 className="text-4xl font-bold mb-4 text-white">
              {movie.title}
            </h1>
            <p className="max-w-4xl text-lg mb-6 text-[#999999] truncate cursor-pointer">
              {movie.description}
            </p>

            <div className="flex items-center justify-center gap-4 mb-15">
              <button
                onClick={() => router.push(`/watch/${movie.id}`)}
                className="flex items-center gap-2 bg-red-600 text-white hover:bg-red-700 px-6 py-3 rounded-lg text-lg font-medium cursor-pointer"
              >
                <FaPlay /> Play Now
              </button>

              <button className="bg-[#262626] hover:bg-[#2a2a2a] border border-[#333333] text-white p-4 rounded-lg cursor-pointer">
                <FiPlus size={20} />
              </button>

              <button
                onClick={() => setLiked(!liked)}
                className={`rounded-lg ${
                  liked
                    ? "bg-red-600 text-white border border-red-500 p-4 cursor-pointer"
                    : "text-white bg-[#262626] border p-4 border-[#333333] hover:bg-[#2a2a2a] cursor-pointer"
                }`}
              >
                <FiThumbsUp size={20} />
              </button>

              <button
                onClick={() => setMuted(!muted)}
                className="bg-[#262626] hover:bg-[#2a2a2a] border border-[#333333] text-white p-4 rounded-lg cursor-pointer"
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
            className="absolute left-4 bottom-4 bg-[#262626] border border-[#333333] text-white hover:bg-[#2a2a2a] p-4 rounded-lg z-10 cursor-pointer"
          >
            <IoChevronBackOutline size={25} />
          </button>

          <button
            onClick={nextMovie}
            className="absolute right-4 bottom-4 bg-[#262626] border border-[#333333] text-white hover:bg-[#2a2a2a] p-4 rounded-lg z-10 cursor-pointer"
          >
            <IoChevronForwardOutline size={25} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {movies.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-1 rounded-full transition-all mb-5 ${
                  index === currentIndex ? "bg-red-600 w-6" : "bg-red-900"
                } cursor-pointer`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-9 lg:px-14 mt-20">
        <section
          className="relative bg-cover bg-center bg-no-repeat py-20 px-10 rounded-lg items-center justify-between max-w-7xl mx-auto border-1 border-[#262626]"
          style={{
            backgroundImage: "url('/images/Sub.png')",
            minHeight: "300px",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>

          <div className="relative max-w-4xl text-white">
            <h2 className="text-4xl font-bold mb-6">
              Start your free trial today!
            </h2>
            <p className="text-lg text-[#999999] max-w-3xl">
              This is a clear and concise call to action that encourages users
              to sign up for a free trial of StreamVibe.
            </p>
          </div>
          <button className="relative bg-red-600 mt-8 hover:bg-red-700 text-white font-semibold px-6 py-3 text-xl rounded-md shadow-lg transition">
            Start a Free Trial
          </button>
        </section>
      </div>
    </div>
  );
};

export default Movies;
