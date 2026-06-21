import React from "react";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-lime-400 mb-6 text-center">Our Portfolio</h1>
      <p className="text-center text-gray-600 mb-8">
        Explore our interior design projects.
      </p>
      {/* Placeholder grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-100 h-48 flex items-center justify-center">Project 1</div>
        <div className="bg-gray-100 h-48 flex items-center justify-center">Project 2</div>
        <div className="bg-gray-100 h-48 flex items-center justify-center">Project 3</div>
        <div className="bg-gray-100 h-48 flex items-center justify-center">Project 4</div>
      </div>
      <div className="text-center">
        <Link href="/about">
          <a className="inline-block bg-lime-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
            Learn About Us
          </a>
        </Link>
      </div>
    </div>
  );
}
