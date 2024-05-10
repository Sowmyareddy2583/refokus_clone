/* eslint-disable react/prop-types */

import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Card({ width, start, para, hover = "false", heading }) {
  return (
    <div
      className={`bg-zinc-800 p-5 rounded-xl hover:${hover} ${width} min-h-[30rem] flex flex-col justify-between`}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          {start === true ? (
            <h1 className="text-sm  ">Get In Touch</h1>
          ) : (
            <h1 className="text-sm ">Up Next: Projects</h1>
          )}
          <FaArrowRightLong />
        </div>
        {heading === true ? (
          <h1 className="text-2xl font-medium mt-5">Projects & Case Studies</h1>
        ) : (
          <h1 className="text-2xl font-medium mt-5">
            Let’s get to it,
            <br />
            together.
          </h1>
        )}
      </div>
      <div className="down w-full">
        {start && (
          <>
            <h1 className=" text-8xl font-semi-bold tracking-tight leading-none">
              Start a Project
            </h1>
            <button className="rounded-full py-2 px-5 mt-5 border border-zinc-50">
              Contact Us
            </button>
          </>
        )}

        {para && (
          <p className="text-sm text-zinc-500 font-medium">
            Web Design, Webflow Development, and Creative Development.
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
