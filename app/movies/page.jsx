"use client";

import {
  HiOutlineVolumeOff,
  HiOutlineVolumeUp,
  HiOutlineClock,
  HiOutlineEye,
} from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiPlus, FiThumbsUp } from "react-icons/fi";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const genres = [
  {
    id: 1,
    title: "Adventure",
    images: [
      "/images/genres/Image.png",
      "/images/genres/Image(1).png",
      "/images/genres/Image(2).png",
      "/images/genres/Image(3).png",
    ],
  },
  {
    id: 2,
    title: "Comedy",
    images: [
      "/images/genres/Image(4).png",
      "/images/genres/Image(5).png",
      "/images/genres/Image(6).png",
      "/images/genres/Image(7).png",
    ],
  },
  {
    id: 3,
    title: "Drama",
    images: [
      "/images/genres/Image(8).png",
      "/images/genres/Image(9).png",
      "/images/genres/Image(10).png",
      "/images/genres/Image(11).png",
    ],
  },
  {
    id: 4,
    title: "Horror",
    images: [
      "/images/genres/Image(12).png",
      "/images/genres/Image(13).png",
      "/images/genres/Image(14).png",
      "/images/genres/Image(15).png",
    ],
  },
];

const trendingNow = [
  {
    id: 1,
    title: "Morbius",
    image: "/images/trend/1.png",
    time: "1h 30m",
    views: "2K",
  },
  {
    id: 2,
    title: "Bhai Jaan",
    image: "/images/trend/2.png",
    time: "1h 57m",
    views: "1.5K",
  },
  {
    id: 3,
    title: "Sura",
    image: "/images/trend/3.svg",
    time: "2h 10m",
    views: "1.8K",
  },
  {
    id: 4,
    title: "Pathaan",
    image: "/images/trend/4.svg",
    time: "2h 20m",
    views: "3K",
  },
];

const newReleases = [
  {
    id: 1,
    title: "Adipurush",
    image: "/images/relases/img(1).png",
    released: "14 April 2023",
  },
  {
    id: 2,
    title: "KGF",
    image: "/images/relases/img(2).png",
    released: "22 April 2023",
  },
  {
    id: 3,
    title: "Sin City",
    image: "/images/relases/img(3).png",
    released: "13 April 2023",
  },
  {
    id: 4,
    title: "Tomorrow War",
    image: "/images/relases/img(4).png",
    released: "19 April 2023",
  },
];

const mustWatch = [
  {
    id: 1,
    title: "Kantara",
    image: "/images/shows/im.png",
    time: "1h 57m",
    views: "20K",
    rating: 5,
  },
  {
    id: 2,
    title: "Pushpa",
    image: "/images/shows/im1.png",
    time: "1h 50m",
    views: "25K",
    rating: 4,
  },
  {
    id: 3,
    title: "Blade Runner 2049",
    image: "/images/shows/im2.png",
    time: "1h 42m",
    views: "30K",
    rating: 5,
  },
  {
    id: 4,
    title: "Adipurush",
    image: "/images/shows/im3.png",
    time: "2h 10m",
    views: "20K",
    rating: 4,
  },
];

const Movies = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState(false);
  const [muted, setMuted] = useState(true);

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
    <div className="px-6 lg:px-12 py-20 w-full bg-[#141414]">
      {/* Featured Movie */}
      <div className="relative flex items-center justify-center">
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
            {movies.map((_, idx) => (
              <div
                key={idx}
                className={`w-3 h-1 rounded-full transition-all mb-5 ${
                  idx === currentIndex ? "bg-red-600 w-6" : "bg-red-900"
                } cursor-pointer`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Genres Section */}
      <div className="relative max-w-7xl mx-6 lg:mx-14 my-20 bg-[#141414] text-white border border-[#333333] rounded-xl p-6">
        <div className="absolute -top-4 left-30 -translate-x-1/2">
          <Link href="/movies">
            <span className="bg-red-600 px-5 py-4 rounded-md text-sm font-semibold cursor-pointer hover:bg-red-700 transition">
              Movies
            </span>
          </Link>
        </div>

        <section className="mb-20 mt-10">
          <h2 className="text-3xl font-semibold mb-8 ml-13">Our Genres</h2>
          <div className="flex gap-10 overflow-x-auto scrollbar-hide px-2 justify-center">
            {genres.map((genre) => (
              <Link
                key={genre.id}
                href={`/genre/${genre.id}`} // klikləyəndə bu səhifəyə yönləndirəcək
                className="min-w-[200px] h-[250px] relative rounded-lg overflow-hidden border border-[#262626] p-2 flex flex-col justify-between cursor-pointer bg-[#1a1a1a]"
              >
                <div className="grid grid-cols-2 grid-rows-2 gap-1 flex-grow px-3 py-3">
                  {genre.images.map((img, idx) => (
                    <div
                      key={`${genre.id}-${idx}`}
                      className="relative w-full h-full rounded-md overflow-hidden"
                    >
                      <Image
                        src={img}
                        alt={`${genre.title} ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-center mt-2">
                  <span className="text-white font-semibold text-sm block mb-2">
                    {genre.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Trending Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-8 ml-13">Trending Now</h2>
          <div className="flex gap-10 overflow-x-auto scrollbar-hide justify-center">
            {trendingNow.map((movie) => (
              <Link
                key={movie.id}
                href={`/movie/${movie.id}`}
                className="min-w-[200px] rounded-lg overflow-hidden border border-[#262626] cursor-pointer bg-[#1a1a1a] flex flex-col"
              >
                <div className="relative w-full h-[250px]">
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    fill
                    className="object-cover rounded-3xl px-3 py-3"
                  />
                </div>
                <div className="flex justify-between items-center text-sm text-[#999999] mb-2 px-3 py-2">
                  <span className="flex items-center gap-1 bg-[#141414] border border-[#262626] rounded-xl px-2">
                    <HiOutlineClock className="text-[#999999]" /> {movie.time}
                  </span>
                  <span className="flex items-center gap-1 bg-[#141414] border border-[#262626] rounded-xl px-2">
                    <HiOutlineEye className="text-[#999999]" /> {movie.views}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* New Releases Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-8 ml-13">New Releases</h2>
          <div className="flex gap-10 overflow-x-auto scrollbar-hide px-2 justify-center">
            {newReleases.map((movie) => (
              <Link
                key={movie.id}
                href={`/movie/${movie.id}`}
                className="min-w-[200px] flex flex-col items-center rounded-lg overflow-hidden bg-[#1a1a1a] border border-[#262626]"
              >
                <Image
                  src={movie.image}
                  alt={movie.title}
                  width={200}
                  height={250}
                  className="object-cover rounded-3xl px-3 py-3"
                />
                <span className="mb-4 mt-2 text-xs text-[#999999] bg-[#141414] border border-[#262626] rounded-xl py-1 px-5">
                  Released {movie.released}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Must-Watch Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-8 ml-13">
            Must-Watch Movies
          </h2>
          <div className="flex gap-9 overflow-x-auto scrollbar-hide px-2 justify-center">
            {mustWatch.map((movie) => (
              <Link
                key={movie.id}
                href={`/movie/${movie.id}`}
                className="min-w-[200px] flex flex-col items-center rounded-lg overflow-hidden border border-[#262626] bg-[#1a1a1a]"
              >
                {/* Movie Image */}
                <Image
                  src={movie.image}
                  alt={movie.title || "Movie Image"}
                  width={200}
                  height={250}
                  className="object-cover rounded-3xl px-3 py-3"
                />

                {/* Info under the image */}
                <div className="flex justify-between items-center w-full px-3 mt-2 text-xs mb-4 text-[#999999]">
                  {/* Time with clock icon */}
                  <span className="flex items-center gap-1 bg-[#141414] border border-[#262626] rounded-xl px-2 py-1">
                    <HiOutlineClock className="text-[#999999]" /> {movie.time}
                  </span>

                  {/* Views with stars */}
                  <span
                    className="flex items-center  bg-[#141414] border border-[#262626] rounded-xl px-1 py-1
                  "
                  >
                    {"★".repeat(movie.rating)}
                    {"☆".repeat(5 - movie.rating)}
                    {movie.views}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Subscription Section */}
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
