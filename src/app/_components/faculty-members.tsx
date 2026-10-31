import React from "react";
import { MemberCard } from "./member-card";
import { facultyMembersData } from "@/contents/faculty-members";

const FacultyGrid = () => {
  return (
    <section className="relative py-8 lg:py-10">
      <a className="anchor" id="faculty-members" />
      {/* Background */}
      <div className="absolute inset-0" />
      
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-6">
          <h2 className="mb-3 text-4xl font-bold text-gray-900 lg:text-5xl">
            Faculty Members
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Meet our distinguished faculty advancing the field of mathematical finance through groundbreaking research and innovation.
          </p>
        </div>

        {/* Faculty Grid - Fixed width columns for consistency */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 auto-rows-fr">
          {facultyMembersData.map((faculty) => (
            <div className="h-full" key={faculty.name}>
              <MemberCard member={faculty} variant="faculty" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultyGrid;
