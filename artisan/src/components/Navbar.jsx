import React from "react";

function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center w-[90%]  mx-auto">
        <div className="inline-block w-auto">
          <ul className=" float-left flex gap-10 font-poppins font-bold">
            <li>About</li>
            <li>How it works</li>
            <li>Pricing </li>
            <li>FAQ</li>
          </ul>
        </div>

        <h1 className="text-3xl font-semibold inline-block w-[20%] font-playfair-reg">
          ARTISAN
        </h1>

        <div className="w-auto font-poppins font-bold">
          <ul className="float-left font-robo-slab flex gap-10">
            <li>Blog</li>
            <li>Contacts</li>
            <li>
              <button className="bg-black rounded-full h-7 w-auto p-3.5 text-white flex items-center">
                Log in
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <hr className="border-1 border-black  w-[91%]  mx-auto mt-4" />
    </>
  );
}

export default Navbar;
