import React from "react";
import cta from "../assets/cta.jpg";

function CTALayout() {
  return (
    <>
      <div className="flex w-[90%] h-full mx-auto">
        <div className=" grid grid-cols-2 grid-rows-2 mt-8 gap-12 ">
          <h1 className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
            obcaecati dolores ullam fugiat aliquid ducimus tempore perspiciatis
            molestiae, quis rem minima aspernatur rerum earum exercitationem
            quas eos quidem at quo.
          </h1>
          <h1 className="row-span-2">
            <img
              src={cta}
              className="max-h-[95%] rounded-3xl my-auto"
              alt="Digital art"
            />
          </h1>
          <h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut,
            tempore ad? Eius dolores expedita autem voluptatibus amet nobis
            neque, dicta saepe, temporibus voluptatem ipsa! At perspiciatis
            alias doloremque officia necessitatibus? FAFDSAF
          </h1>
        </div>
      </div>
      <hr className="border-1 border-black  w-[91%]  mx-auto" />
    </>
  );
}

export default CTALayout;
