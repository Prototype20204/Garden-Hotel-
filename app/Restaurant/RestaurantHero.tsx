import React from "react";
import labela from "@/public/labelr.svg";
import Image from "next/image";
import restaurant from "@/public/restaurant1.png";
import restaurant2 from "@/public/space-copenhagen-the-stratford-architonic-jw-5-17-arcit18 1.png";

const RestaurantHero = () => {
  return (
    <main className="py-14 lg:pt-20  px-5 md:px-[1.9rem] largesceen:px-14 fourk:px-44">
      <h1 className="text-6xl sm:text-8xl md:text-[6.25rem] desktop:text-[7.813rem] largesceen:text-[9.375rem] text-secondary leading-[86.667%]  w-fit  mb-8 md:mb-14">“Safe” restaurant</h1>

      <div className="sm:flex  justify-between lg:justify-around largesceen:justify-evenly fourk:justify-evenly sm:pt-14">
        <h1 className="text-white-100 capitalize text-2xl  lg:text-3xl xl:text-4xl desktop:text-[3.125rem] largesceen:text-[3.75rem]">One of a Kind</h1>

        <div className="relative max-sm:mt-20 max-sm:ml-16">
          <p className="text-white-100 text-[0.813rem] desktop:text-base 2xl:text-lg leading-[155.556%]     sm:w-[15.625rem] desktop:w-[21.875rem] largesceen:w-[25rem] text-opacity-[0.8]">
            Bank Hotel proudly welcomes you to the Safe Restaurant, a place where you will wish you could dine every day. The restaurant offers a unique menu developed by the team of professionals led
            by chef Mary-Ann Jones, the wine list with more than 250 items, the outstanding service, and the unforgettable atmosphere.
          </p>
          <Image src={labela} alt="label" className="absolute w-[5.313rem]  -top-14 -left-14  label" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center mt-12 sm:mt-20 md:mt-28 lg:mt-32 md:space-x-5 largesceen:gap-x-10">
        <Image
          src={restaurant}
          alt="restaurant"
          className="w-[80%] md:w-[22.25rem] lg:h-[28.125rem] lg:w-[37.5rem]  desktop:h-[38rem] desktop:w-[55rem] largesceen:h-[50rem] largesceen:w-[76.875rem]"
        />
        <Image
          src={restaurant2}
          alt="restaurant"
          className="w-[70%] lg:w-[22.25rem] lg:h-[22.25rem]  desktop:w-[24.125rem] desktop:h-[28.125rem] largesceen:w-[37.5rem] largesceen:h-[37.5rem] object-cover mt-5 md:mt-0"
        />
      </div>

      <div className=" mt-12 sm:mt-20 md:mt-28 xl:mt-32">
        <h1 className="text-white-100 capitalize  text-2xl  xl:text-3xl desktop:text-4xl largesceen:text-[3.125rem] ">At your service</h1>

        <p className="text-white-100 text-[0.813rem] desktop:text-base 2xl:text-lg leading-[155.556%] sm:w-[15.625rem] desktop:w-[21.875rem] largesceen:w-[25rem] text-opacity-[0.8] mt-8 lg:mt-10 desktop:mt-12 largesceen:mt-16">
          The team of the Safe Restaurant aims to exceed all expectations of our guests. Our chef worked hard to develop a unique menu that features the best meals of the European cuisine that will
          match the tastes of the most demanding clients. Friendly and attentive waiters will ensure that you will enjoy your time in our restaurant.
        </p>
      </div>
      
      
      
      
    </main>
  );
};

export default RestaurantHero;
