import React from 'react';
import { housesData } from '../data';
import { BiBed, BiBath, BiArea } from "react-icons/bi";
// import params
import { useParams, Link } from "react-router-dom";

const PropertyDetails = () => {
  // get the house id
  const { id } = useParams();

  // get the house based on id
  const house = housesData.find((house) => {
    return house.id === parseInt(id)
  })
  console.log(house)

  return (
    <section>
      <div className='container mx-auto min-h-[800px] mb-14'>
        <div className='flex flex-col lg:flex-row lg:item-center lg:justify-between'>
          <div>
            <h2 className='text-2xl font-semibold'>{house.name}</h2>
            <h2 className='text-lg mb-4'>{house.address}</h2>
          </div>
          <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
            <div className='bg-green-500 text-white px-3 py-1 h-fit rounded-full'>{house.type}</div>
            <div className='bg-violet-500 text-white px-3 py-1 h-fit rounded-full'>{house.country}</div>
          </div>
          <div className='text-3xl font-semibold text-violet-600 mb-4'>$ {house.price}</div>
        </div>
        <div className='flex flex-col items-start gap-8 lg:flex-row'>
          <div className='max-w-[768px]'>
            <div className='mb-8'>
              <img src={house.imageLg} alt="/" />
            </div>
            <div className='flex gap-x-6 text-violet-700 mb-2'>
              <div className='flex gap-x-2 items-center'>
                <BiBed className='text-2xl' />
                <div>{house.bedrooms}</div>
              </div>
              <div className='flex gap-x-2 items-center'>
                <BiBath className='text-2xl' />
                <div>{house.bathrooms}</div>
              </div>
              <div className='flex gap-x-2 items-center'>
                <BiArea className='text-2xl' />
                <div>{house.surface}</div>
              </div>
            </div>
            <div>{house.description}</div>
          </div>
          <div className='flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8'>
            <div className='flex items-center gap-x-5 mb-8'>
              <div className='w-24 h-24 p-1 border border-gray-300 rounded-full'>
                <img src={house.agent.image} alt="" />
              </div>
              <div>
                <div className='font-bold text-lg'>{house.agent.name}</div>
                <Link to="" className='text-sm text-violet-700'>
                  View Listing
                </Link>
              </div>
            </div>
            {/* form */}
            <form className='flex flex-col gap-y-3'>
              <input 
                type="text"
                placeholder='Name' 
                className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-3 h-10 text-sm'
              />
              <input
                type="text"
                placeholder='Email'
                className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-3 h-10 text-sm'
              />
              <input
                type="text"
                placeholder='Phone'
                className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-3 h-10 text-sm'
              />
              <textarea 
                className='border border-gray-300 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400' 
                placeholder='Message'
                defaultValue="Hello, I am Interested in [Modern Apartment]"
              ></textarea>
              <div className='flex gap-x-2'>
                <button
                  className='bg-violet-600 hover:bg-violet-700 text-white rounded p-3 text-sm w-full transition' 
                  type=""
                >
                  Send Message
                </button>
                <button
                  className='border border-violet-700 hover:border-violet-500 text-violet-700 hover:text-violet-500 rounded p-4 w-full text-sm transition'
                  type=""
                >
                  Call
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
