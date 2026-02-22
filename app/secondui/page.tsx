import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <section className="py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <p className="text-gray-500 text-sm mb-3">
          Explore our classes and master trending skills!
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 md:mb-16 leading-tight">
          Dive Into{" "}
          <span className="text-[#c52c34]">
            What’s Hot Right Now! 🔥
          </span>
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

          {/* All Courses Card */}
          <div className="relative bg-[#c52c34] text-white rounded-[32px] p-6 md:p-10 flex flex-col justify-between min-h-[320px] hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

            {/* Top Images */}
            <div className="flex gap-2 flex-wrap">
              <Image src="/first.svg" alt="img" width={60} height={60} />
              <Image src="/seco.svg" alt="img" width={60} height={60} />
              <Image src="/secondlast.svg" alt="img" width={60} height={60} />
              <Image src="/lasttask.svg" alt="img" width={60} height={60} />
            </div>

            {/* Bottom Content */}
            <div>
              <div className="flex items-end gap-2">
                <span className="text-[70px] sm:text-[90px] md:text-[100px] leading-none font-extrabold">
                  23
                </span>
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  +
                </span>
              </div>

              <h3 className="text-lg md:text-xl font-semibold mt-2">
                All Courses
              </h3>

              <p className="text-sm mt-2 opacity-90 max-w-xs">
                Courses you’re powering through right now.
              </p>

              <div className="flex items-center gap-2 mt-6 cursor-pointer group">
                <span className="text-sm font-medium">
                  View all Courses
                </span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition"
                />
              </div>
            </div>
          </div>

          {/* Upcoming Courses Card */}
          <div className="relative bg-[#f5e9ea] rounded-[32px] p-6 md:p-10 min-h-[320px] hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

            {/* Rotated Label (desktop only) */}
            <div className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-[#c52c34] font-bold tracking-wide text-lg">
              Upcoming Courses
            </div>

            <p className="hidden md:block absolute left-16 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-[#c52c34] text-sm">
              Exciting new courses <br /> waiting to boost your skills.
            </p>

            {/* Mobile Content */}
            <div className="md:hidden mb-6">
              <h3 className="text-[#c52c34] font-bold text-lg">
                Upcoming Courses
              </h3>
              <p className="text-sm text-[#c52c34] mt-2">
                Exciting new courses waiting to boost your skills.
              </p>
            </div>

            <div className="md:ml-16 flex flex-col justify-end h-full">
              <div className="flex items-end gap-2 text-[#c52c34]">
                <span className="text-[70px] sm:text-[90px] leading-none font-extrabold">
                  05
                </span>
                <span className="text-2xl sm:text-3xl font-bold mb-4">+</span>
              </div>
            </div>
          </div>

          {/* Ongoing Courses Card */}
          <div className="relative bg-[#f5e9ea] rounded-[32px] p-6 md:p-10 min-h-[320px] hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

            {/* Rotated Label (desktop only) */}
            <div className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-[#c52c34] font-bold tracking-wide text-lg">
              Ongoing Courses
            </div>

            <p className="hidden md:block absolute left-16 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-[#c52c34] text-sm">
              Currently happening — don’t <br /> miss out on the action!
            </p>

            {/* Mobile Content */}
            <div className="md:hidden mb-6">
              <h3 className="text-[#c52c34] font-bold text-lg">
                Ongoing Courses
              </h3>
              <p className="text-sm text-[#c52c34] mt-2">
                Currently happening — don’t miss out on the action!
              </p>
            </div>

            <div className="md:ml-16 flex flex-col justify-end h-full">
              <div className="flex items-end gap-2 text-[#c52c34]">
                <span className="text-[70px] sm:text-[90px] leading-none font-extrabold">
                  10
                </span>
                <span className="text-2xl sm:text-3xl font-bold mb-4">+</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Page;