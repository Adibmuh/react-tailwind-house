import React, { useState, useEffect, createContext } from 'react';

// import data
import { housesData } from "../data";

//  create context
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [ houses, setHouses ] = useState(housesData);
  const [ country, setCountry ] = useState("Location (Any)");
  const [ countries, setCountries ] = useState([]);
  const [ property, setProperty ] = useState("Property type (Any)");
  const [ properties, setProperties ] = useState([]);
  const [ price, setPrice ] = useState("Price Range (Any)");
  const [ loading, setLoading ] = useState(false);

  // return all countries
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    })
    // how to remove duplicate
    const uniqueCountries = ["Location (Any)", ...new Set(allCountries)]

    // set countries state
    setCountries(uniqueCountries);
  }, [])

    // return all property
    useEffect(() => {
      const allProperties = houses.map((house) => {
        return house.type;
      })
      // how to remove duplicate
      const uniqueProperties = ["Property (Any)", ...new Set(allProperties)]
  
      // set Properties state
      setProperties(uniqueProperties);
    }, [])

    // handle click
    const handleClick = () => {
      // set loading
      setLoading(true);
      // create a function that checks if the string includes (Any)
      const isDefault = (str) => {
        // eslint-disable-next-line no-undef
        return str.split(' ').includes('(Any)');
      }

      // get first value of price and parse it to number
      const minPrice = parseInt(price.split(' ')[0]);

      // get second value of price which is the maximum price and parse it to number
      const maxPrice = parseInt(price.split(' ')[2]);

      const newHouses = housesData.filter((house) => {
        const housePrice = parseInt(house.price)

        // if all value are selected
        if (
          house.country === country &&
          house.type ===  property &&
          housePrice >= minPrice &&
          housePrice <= maxPrice
        ) {
          return house;
        }

        // if all values are default
        if (isDefault(country) && isDefault(property) && isDefault(price)) {
          return house;
        }
        // if country not default value
        if (!isDefault(country) && isDefault(property) && isDefault(price)) {
          return house.country === country;
        }
        // if property not default value
        if (isDefault(country) && !isDefault(property) && isDefault(price)) {
          return house.type === property;
        }
        // if price not default value
        if (isDefault(country) && isDefault(property) && !isDefault(price)) {
          if( housePrice >= minPrice && housePrice <= maxPrice ) {
            return house;
          }
        }
        // if country & property is not default
        if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
          return house.country === country && house.type === property;
        }
        // if property & price is not default
        if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
          if( housePrice >= minPrice && housePrice <= maxPrice ) {
            return house.type === property;
          }
        }
        // if country & price is not default
        if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
          if( housePrice >= minPrice && housePrice <= maxPrice ) {
            return house.country === country;
          }
        }
      });

      setTimeout(() => {
        return newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      }, 1000);
    }

  return (
    <HouseContext.Provider 
      value={{ 
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        houses,
        loading,
        handleClick,
     }}
    >
      {children}
    </HouseContext.Provider>
  )
};

export default HouseContextProvider;
