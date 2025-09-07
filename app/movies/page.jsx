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

const popular = [
  {
    id: 1,
    title: "War of the Worlds",
    image: "/images/movies/popular/1.webp",
    rating: 4.33,
    released: "2025-07-29",
  },
  {
    id: 2,
    title: "Nobody 2",
    image: "/images/movies/popular/2.webp",
    rating: 7.17,
    released: "2025-08-13",
  },
  {
    id: 3,
    title: "The Naked Gun",
    image: "/images/movies/popular/3.webp",
    rating: 6.78,
    released: "2025-07-30",
  },
  {
    id: 4,
    title: "F1",
    image: "/images/movies/popular/4.webp",
    rating: 7.82,
    released: "2025-06-25",
  },
];

const upcoming = [
  {
    id: 1,
    title: "The Conjuring: Last Rites",
    image: "/images/upcoming/1.webp",
    rating: 7.22,
    released: "2025-09-03",
  },
  {
    id: 2,
    title: "Demon Slayer: Kimetsu no Yaiba Infinity Castle",
    image: "/images/upcoming/2.webp",
    rating: 7.31,
    released: "2025-07-18",
  },
  {
    id: 3,
    title: "Together",
    image: "/images/upcoming/3.webp",
    rating: 7.13,
    released: "2025-07-23",
  },
  {
    id: 4,
    title: "The Bad Guys 2",
    image: "/images/upcoming/4.webp",
    rating: 7.77,
    released: "2025-07-24",
  },
];

const top = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    image: "/images/top/1.webp",
    rating: 8.71,
    released: "1994-09-23",
  },
  {
    id: 2,
    title: "Spirited Away",
    image: "/images/top/2.webp",
    rating: 8.54,
    released: "2001-07-20",
  },
  {
    id: 3,
    title: "Blade The Lord of the Rings: The Return of the King 2049",
    image: "/images/top/3.webp",
    rating: 8.49,
    released: "2003-12-17",
  },
  {
    id: 4,
    title: "Interstellar",
    image: "/images/top/4.webp",
    rating: 8.46,
    released: "2014-11-05",
  },
];

const popular2 = [
  {
    id: 1,
    title: "Wednesday",
    image: "/images/shows/popular/1.webp",
    rating: 8.4,
    released: "2022-11-23",
  },
  {
    id: 2,
    title: "The Summer I Turned Pretty",
    image: "/images/shows/popular/2.webp",
    rating: 8.16,
    released: "2022-06-16",
  },
  {
    id: 3,
    title: "Dan Da Dan",
    image: "/images/shows/popular/3.webp",
    rating: 8.6,
    released: "2024-10-04",
  },
  {
    id: 4,
    title: "Squid Game",
    image: "/images/shows/popular/4.webp",
    rating: 7.86,
    released: "2021-09-17",
  },
];

const air = [
  {
    id: 1,
    title: "The Terminal List: Dark Wolf",
    image: "/images/shows/air/1.webp",
    rating: 7.55,
    released: "2025-08-27",
  },
  {
    id: 2,
    title: "Dexter: Resurrection",
    image: "/images/shows/air/2.webp",
    rating: 8.84,
    released: "2025-07-13",
  },
  {
    id: 3,
    title: "Foundation",
    image: "/images/shows/air/3.webp",
    rating: 7.74,
    released: "2021-09-23",
  },
  {
    id: 4,
    title: "NCIS: Tony & Ziva",
    image: "/images/shows/air/4.webp",
    rating: 9.0,
    released: "2025-09-04",
  },
];

const top2 = [
  {
    id: 1,
    title: "When Life Gives You Tangerines",
    image: "/images/shows/top/1.webp",
    rating: 8.77,
    released: "2025-03-07",
  },
  {
    id: 2,
    title: "Breaking Bad",
    image: "/images/shows/top/2.webp",
    rating: 8.54,
    released: "2008-01-20",
  },
  {
    id: 3,
    title: "Chernobyl",
    image: "/images/shows/top/3.webp",
    rating: 8.49,
    released: "2019-05-06",
  },
  {
    id: 4,
    title: "Anne with an E",
    image: "/images/shows/top/4.webp",
    rating: 8.66,
    released: "2017-03-19",
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

      {/* MOVIES */}
      <div className="relative max-w-7xl mx-6 lg:mx-14 my-20 bg-[#141414] text-white border border-[#333333] rounded-xl p-6">
        {/* Movies Button */}
        <div className="absolute -top-4 left-20 -translate-x-1/2">
          <Link href="/movies">
            <span className="bg-red-600 px-5 py-4 rounded-md text-sm font-semibold cursor-pointer hover:bg-red-700 transition">
              Movies
            </span>
          </Link>
        </div>

        {/* Popular Section */}
        <section id="popular" className="mb-25 mt-10">
          <div className="flex items-center justify-between mb-8 px-4">
            <h2 className="text-3xl font-semibold mb-5">Popular</h2>

            {/* Oxlar */}
            <div className="flex items-center border mb-5 border-[#333] bg-[#0F0F0F] rounded-sm overflow-hidden">
              <button
                onClick={() =>
                  document
                    .getElementById("popularScroll")
                    .scrollBy({ left: -300, behavior: "smooth" })
                }
                className="px-6 py-3 m-2 rounded-sm text-lg cursor-pointer font-medium  text-[#999999] bg-[#1a1a1a] hover:bg-[#333333] hover:text-white transition"
              >
                <IoChevronBackOutline size={20} />
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("popularScroll")
                    .scrollBy({ left: 300, behavior: "smooth" })
                }
                className="px-6 py-3 m-2 rounded-sm text-lg cursor-pointer font-medium bg-[#1a1a1a] text-[#999999] hover:bg-[#333333] hover:text-white transition"
              >
                <IoChevronForwardOutline size={20} />
              </button>
            </div>
          </div>

          <div
            id="popularScroll"
            className="flex gap-10 overflow-x-auto scrollbar-hide px-2 scroll-smooth"
          >
            {popular.map((movie) => (
              <Link
                key={movie.id}
                href={`/movie/${movie.id}`}
                className="relative min-w-[220px] flex flex-col cursor-pointer group"
              >
                <div className="relative w-full h-[330px] rounded-2xl overflow-hidden border border-[#262626]">
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300"></div>
                </div>

                <div className="mt-3">
                  <h3 className="text-white font-semibold text-base truncate">
                    {movie.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm mt-1">
                    <span className="flex items-center gap-1 text-red-500 font-medium">
                      ★ {movie.rating}
                    </span>
                    <span className="text-[#999999]">{movie.released}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Upcoming Section */}
        <section id="upcoming" className="mb-25">
          <div className="flex items-center justify-between mb-8 px-4">
            <h2 className="text-3xl font-semibold mb-5">Upcoming</h2>

            {/* Oxlar */}
            <div className="flex items-center border border-[#333] mb-5 bg-[#0F0F0F] rounded-sm overflow-hidden">
              <button
                onClick={() =>
                  document
                    .getElementById("upcomingScroll")
                    .scrollBy({ left: -300, behavior: "smooth" })
                }
                className="px-6 py-3 m-2 rounded-sm text-lg cursor-pointer font-medium text-[#999999] bg-[#1a1a1a] hover:bg-[#333333] hover:text-white transition"
              >
                <IoChevronBackOutline size={20} />
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("upcomingScroll")
                    .scrollBy({ left: 300, behavior: "smooth" })
                }
                className="px-6 py-3 m-2 rounded-sm text-lg cursor-pointer font-medium bg-[#1a1a1a] text-[#999999] hover:bg-[#333333] hover:text-white transition"
              >
                <IoChevronForwardOutline size={20} />
              </button>
            </div>
          </div>

          <div
            id="upcomingScroll"
            className="flex gap-10 overflow-x-auto scrollbar-hide px-2 scroll-smooth"
          >
            {upcoming.map((movie) => (
              <Link
                key={movie.id}
                href={`/movie/${movie.id}`}
                className="relative min-w-[220px] flex flex-col cursor-pointer group"
              >
                <div className="relative w-full h-[330px] rounded-2xl overflow-hidden border border-[#262626]">
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300"></div>
                </div>

                <div className="mt-3">
                  <h3 className="text-white font-semibold text-base truncate">
                    {movie.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm mt-1">
                    <span className="flex items-center gap-1 text-red-500 font-medium">
                      ★ {movie.rating}
                    </span>
                    <span className="text-[#999999]">{movie.released}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Top Rated Section */}
        <section id="topRated" className="mb-5">
          <div className="flex items-center justify-between mb-8 px-4">
            <h2 className="text-3xl font-semibold mb-5">Top Rated</h2>

            {/* Oxlar */}
            <div className="flex items-center border border-[#333] mb-5 bg-[#0F0F0F] rounded-sm overflow-hidden">
              <button
                onClick={() =>
                  document
                    .getElementById("topRatedScroll")
                    .scrollBy({ left: -300, behavior: "smooth" })
                }
                className="px-6 py-3 m-2 rounded-sm text-lg cursor-pointer font-medium text-[#999999] bg-[#1a1a1a] hover:bg-[#333333] hover:text-white transition"
              >
                <IoChevronBackOutline size={20} />
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("topRatedScroll")
                    .scrollBy({ left: 300, behavior: "smooth" })
                }
                className="px-6 py-3 m-2 rounded-sm text-lg cursor-pointer font-medium bg-[#1a1a1a] text-[#999999] hover:bg-[#333333] hover:text-white transition"
              >
                <IoChevronForwardOutline size={20} />
              </button>
            </div>
          </div>

          <div
            id="topRatedScroll"
            className="flex gap-10 overflow-x-auto scrollbar-hide px-2 scroll-smooth"
          >
            {top.map((movie) => (
              <Link
                key={movie.id}
                href={`/movie/${movie.id}`}
                className="relative min-w-[220px] flex flex-col cursor-pointer group"
              >
                <div className="relative w-full h-[330px] rounded-2xl overflow-hidden border border-[#262626]">
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300"></div>
                </div>

                <div className="mt-3">
                  <h3 className="text-white font-semibold text-base truncate">
                    {movie.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm mt-1">
                    <span className="flex items-center gap-1 text-red-500 font-medium">
                      ★ {movie.rating}
                    </span>
                    <span className="text-[#999999]">{movie.released}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* SHOWS */}
      <div className="relative max-w-7xl mx-6 lg:mx-14 my-20 bg-[#141414] text-white border border-[#333333] rounded-xl p-6">
        {/* Movies Button */}
        <div className="absolute -top-4 left-20 -translate-x-1/2">
          <Link href="/movies">
            <span className="bg-red-600 px-5 py-4 rounded-md text-sm font-semibold cursor-pointer hover:bg-red-700 transition">
              TV Shows
            </span>
          </Link>
        </div>

        {/* Popular Section */}
        <section id="popular1" className="mb-25 mt-10">
          <div className="flex items-center justify-between mb-8 px-4">
            <h2 className="text-3xl font-semibold mb-5">Popular</h2>

            {/* Oxlar */}
            <div className="flex items-center border mb-5 border-[#333] bg-[#0F0F0F] rounded-sm overflow-hidden">
              <button
                onClick={() =>
                  document
                    .getElementById("popularScroll")
                    .scrollBy({ left: -300, behavior: "smooth" })
                }
                className="px-6 py-3 m-2 rounded-sm text-lg cursor-pointer  font-medium  text-[#999999] bg-[#1a1a1a] hover:bg-[#333333] hover:text-white transition"
              >
                <IoChevronBackOutline size={20} />
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("popularScroll")
                    .scrollBy({ left: 300, behavior: "smooth" })
                }
                className="px-6 py-3 m-2 rounded-sm text-lg cursor-pointer font-medium bg-[#1a1a1a] text-[#999999] hover:bg-[#333333] hover:text-white transition"
              >
                <IoChevronForwardOutline size={20} />
              </button>
            </div>
          </div>

          <div
            id="popularScroll"
            className="flex gap-10 overflow-x-auto scrollbar-hide px-2 scroll-smooth"
          >
            {popular2.map((movie) => (
              <Link
                key={movie.id}
                href={`/movie/${movie.id}`}
                className="relative min-w-[220px] flex flex-col cursor-pointer group"
              >
                <div className="relative w-full h-[330px] rounded-2xl overflow-hidden border border-[#262626]">
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300"></div>
                </div>

                <div className="mt-3">
                  <h3 className="text-white font-semibold text-base truncate">
                    {movie.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm mt-1">
                    <span className="flex items-center gap-1 text-red-500 font-medium">
                      ★ {movie.rating}
                    </span>
                    <span className="text-[#999999]">{movie.released}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* On The Air Section */}
        <section id="onTheAir" className="mb-25">
          <div className="flex items-center justify-between mb-8 px-4">
            <h2 className="text-3xl font-semibold mb-5">On The Air</h2>

            {/* Oxlar */}
            <div className="flex items-center border border-[#333] mb-5 bg-[#0F0F0F] rounded-sm overflow-hidden">
              <button
                onClick={() =>
                  document
                    .getElementById("upcomingScroll")
                    .scrollBy({ left: -300, behavior: "smooth" })
                }
                className="px-6 py-3 m-2 rounded-sm text-lg cursor-pointer font-medium text-[#999999] bg-[#1a1a1a] hover:bg-[#333333] hover:text-white transition"
              >
                <IoChevronBackOutline size={20} />
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("upcomingScroll")
                    .scrollBy({ left: 300, behavior: "smooth" })
                }
                className="px-6 py-3 m-2 rounded-sm text-lg font-medium cursor-pointer bg-[#1a1a1a] text-[#999999] hover:bg-[#333333] hover:text-white transition"
              >
                <IoChevronForwardOutline size={20} />
              </button>
            </div>
          </div>

          <div
            id="upcomingScroll"
            className="flex gap-10 overflow-x-auto scrollbar-hide px-2 scroll-smooth"
          >
            {air.map((movie) => (
              <Link
                key={movie.id}
                href={`/movie/${movie.id}`}
                className="relative min-w-[220px] flex flex-col cursor-pointer group"
              >
                <div className="relative w-full h-[330px] rounded-2xl overflow-hidden border border-[#262626]">
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300"></div>
                </div>

                <div className="mt-3">
                  <h3 className="text-white font-semibold text-base truncate">
                    {movie.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm mt-1">
                    <span className="flex items-center gap-1 text-red-500 font-medium">
                      ★ {movie.rating}
                    </span>
                    <span className="text-[#999999]">{movie.released}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Top Rated Section */}
        <section id="topRated1" className="mb-5">
          <div className="flex items-center justify-between mb-8 px-4">
            <h2 className="text-3xl font-semibold mb-5">Top Rated</h2>

            {/* Oxlar */}
            <div className="flex items-center border border-[#333] mb-5 bg-[#0F0F0F] rounded-sm overflow-hidden">
              <button
                onClick={() =>
                  document
                    .getElementById("topRatedScroll")
                    .scrollBy({ left: -300, behavior: "smooth" })
                }
                className="px-6 py-3 m-2 rounded-sm cursor-pointer text-lg font-medium text-[#999999] bg-[#1a1a1a] hover:bg-[#333333] hover:text-white transition"
              >
                <IoChevronBackOutline size={20} />
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("topRatedScroll")
                    .scrollBy({ left: 300, behavior: "smooth" })
                }
                className="px-6 py-3 m-2 rounded-sm text-lg cursor-pointer font-medium bg-[#1a1a1a] text-[#999999] hover:bg-[#333333] hover:text-white transition"
              >
                <IoChevronForwardOutline size={20} />
              </button>
            </div>
          </div>

          <div
            id="topRatedScroll"
            className="flex gap-10 overflow-x-auto scrollbar-hide px-2 scroll-smooth"
          >
            {top2.map((movie) => (
              <Link
                key={movie.id}
                href={`/movie/${movie.id}`}
                className="relative min-w-[220px] flex flex-col cursor-pointer group"
              >
                <div className="relative w-full h-[330px] rounded-2xl overflow-hidden border border-[#262626]">
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300"></div>
                </div>

                <div className="mt-3">
                  <h3 className="text-white font-semibold text-base truncate">
                    {movie.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm mt-1">
                    <span className="flex items-center gap-1 text-red-500 font-medium">
                      ★ {movie.rating}
                    </span>
                    <span className="text-[#999999]">{movie.released}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Free Trial Section */}
      <div className="px-9 lg:px-14 mt-20">
        <section
          className="relative bg-cover bg-center bg-no-repeat py-20 px-10 rounded-lg items-center justify-between max-w-7xl mx-auto border-1 border-[#262626]"
          style={{
            backgroundImage: "url('/images/logo/Sub.png')",
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
          <button className="relative cursor-pointer bg-red-600 mt-8 hover:bg-red-700 text-white font-semibold px-6 py-3 text-xl rounded-md shadow-lg transition">
            Start a Free Trial
          </button>
        </section>
      </div>
    </div>
  );
};

export default Movies;
