import React from "react";
import UdemyIcon from '../icons/UDMY_BIG.png'

const Cards = ({ image, title , rating , price, about}) => {
  return (
    <div>
      {/* <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12"> */}
        <article>
          {/* <h2 class="text-2xl font-extrabold text-gray-900">OUR COURSES</h2> */}
          {/* <section class="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8"> */}
            <article class="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
              <div class="relative w-full h-80 md:h-64 lg:h-44">
                
                <img
                  src={image ?? {UdemyIcon}}
                  alt={''}
                  class="w-full h-full object-center object-cover"
                />
                
              </div>
              <div class="px-3 py-4">
                <h3 class="text-sm text-gray-500 pb-2">
                  {/* <a
                    class="bg-indigo-600 py-1 px-2 text-white rounded-lg"
                    href="Udemy.com"
                  > */}
                    <span class="absolute inset-0"></span>
                    {title}
                  {/* </a> */}
                </h3>
                <p class="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
                  {about.substring(0, 70) + "..."}
                </p>
                <p class="text-base  text-gray-900 group-hover:text-indigo-600">
                  {rating}
                </p>
                <p class="text-base text-gray-900 group-hover:text-indigo-600">
                  {price}
                </p>
              </div>
            </article>
          {/* </section> */}
        </article>
      {/* </section> */}
    </div>
  );
}

export default Cards;
