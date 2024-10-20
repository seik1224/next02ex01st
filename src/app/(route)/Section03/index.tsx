import React from "react";

const Section03 = () => {
  const rotations = [-7.5, 15, 2.5, 7.5, -5, 5]; // 회전 각도 배열

  return (
    <div className="h-[600vh] bg-blue-500">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="h-[100vh] w-full flex flex-shrink-0 items-center justify-start px-20 space-x-40">
          <img src={`/po01.webp`} alt={`Poster 01`} className="h-3/4 object-cover rounded-3xl shadow-2xl" />
          <img src={`/po02.webp`} alt={`Poster 02`} className="h-3/4 object-cover rounded-3xl shadow-2xl" />
          <img src={`/po03.webp`} alt={`Poster 03`} className="h-3/4 object-cover rounded-3xl shadow-2xl" />
          <img src={`/po04.webp`} alt={`Poster 04`} className="h-3/4 object-cover rounded-3xl shadow-2xl" />
          <img src={`/po05.webp`} alt={`Poster 05`} className="h-3/4 object-cover rounded-3xl shadow-2xl" />
          <img src={`/po06.webp`} alt={`Poster 06`} className="h-3/4 object-cover rounded-3xl shadow-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Section03;
