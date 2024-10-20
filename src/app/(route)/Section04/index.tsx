import React from "react";

const Section04 = () => {
  return (
    <section className="w-full h-[400vh] relative bg-blue-500">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-evenly">
        <div
          style={{ backgroundImage: `url(/logo.png)` }}
          className="w-[280px] h-[150px] flex justify-start items-center relative z-20"
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 280 150"
            className="stroke-white fill-transparent stroke-[2px] stroke-miterlimit-10"
          >
            <polyline points="125.96,123.28 94.3,123.28 145.23,148.39 196.17,123.28 164.51,123.28" />
          </svg>
        </div>
        <div className="sticky bottom-0 w-full max-w-[400px] z-10 flex justify-center">
          <img src="/ch.png" alt="" className="w-full h-full object-cover max-w-full" />
        </div>
      </div>
    </section>
  );
};

export default Section04;
