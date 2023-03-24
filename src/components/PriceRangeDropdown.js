import React, { useState, useEffect, useContext } from 'react';
import {
  RiWallet3Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";
import { HouseContext } from './HouseContext';
// import headlessui
import { Menu } from "@headlessui/react";

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  const [ isOpen, setIsOpen ] = useState(false);

  const prices = [
    {
      value: "Price range (Any)"
    },
    {
      value: "100000 - 130000"
    },
    {
      value: "130000 - 160000"
    },
    {
      value: "160000 - 190000"
    },
    {
      value: "190000 - 220000"
    },
    {
      value: "10000 - 30000"
    },
    {
      value: "30000 - 40000"
    },
  ]
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className="dropdown-btn w-full text-left">
        <RiWallet3Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{price}</div>
          <div className='text-[13px]'>Choose price range</div>
        </div>
        {
          isOpen ? (
            <RiArrowDownSLine className='dropdown-icon-secondary' />
          ) : (
            <RiArrowUpSLine className='dropdown-icon-secondary' />
          )
        }
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {prices.map((price, index) => {
          return (
            <Menu.Items
              className="cursor-pointer hover:text-violet-700 transition"
              onClick={() => setPrice(price.value)}
              as='li'
              key={index}
            >
              {price.value}
            </Menu.Items>
          );
        })}
      </Menu.Items>
    </Menu>
  )
};

export default PriceRangeDropdown;
