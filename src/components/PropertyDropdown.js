import React, { useState, useEffect, useContext } from 'react';
import {
  RiHome5Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";
import { HouseContext } from './HouseContext';
// import headlessui
import { Menu } from "@headlessui/react";

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);
  const [ isOpen, setIsOpen ] = useState(false);
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className="dropdown-btn w-full text-left">
        <RiHome5Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{property}</div>
          <div className='text-[13px]'>Select Property</div>
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
        {properties.map((property, index) => {
          return (
            <Menu.Items
              className="cursor-pointer hover:text-violet-700 transition"
              onClick={() => setProperty(property)}
              as='li'
              key={index}
            >
              {property}
            </Menu.Items>
          );
        })}
      </Menu.Items>
    </Menu>
  )
};

export default PropertyDropdown;
