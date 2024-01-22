"use client"
import React, {  useState,useEffect } from 'react'
import Example from './example';



const MakeData = ()=>{
  const [data, setdata] = useState([
    {
      height: 40,
      width: 30,
      size: (40 * 30) / 10 ** 6,
      firstName: "Salmankhan",
      lastName: "R",
      address: "Tiruppur",
      city: "Tiruppur",
      state: "Tamilnadu",
      id: "1",
      salary: 1600,
      amount: 100,
      email: "salman@example.com",
      company: "Mylight sytems",
      panalname: "Black crystal ",
      phone: "+18598945042",
      status: "Active",
      gender: "Male",
    },
    {
      height: 490,
      width: 310,
      size: (490 * 310) / 10 ** 6,
      isActive: true,
      firstName: "Kevin",
      lastName: "Vandy",
      address: "Canada",
      age: 51,
      salary: 80_000,
      city: "Richmond",
      state: "Virginia",
      id: "2",
      amount: 100,
      status: "Not Active",
      email: "salman@example.com",
      company: "Mylight sytems",
      panalname: "Black crystal ",
      phone: "+18598945042",
      gender: "Female",
    },
    {
      height: 340,
      width: 110,
      size: 0,
      isActive: false,
      firstName: "John",
      lastName: "Doe",
      age: 27,
      salary: 120000,
      city: "Riverside",
      state: "London",
      address: "ts st",
      id: "3",
      amount: 100,
      status: "Active",
      email: "salman@example.com",
      company: "Mylight sytems",
      panalname: "Black crystal ",
      phone: "+18598945042",
      gender: "Male",
    },
    {
      height: 120,
      width: 303,
      size: 0,
      isActive: true,
      firstName: "Jane",
      lastName: "tim",
      age: 32,
      salary: 160000,
      city: "San Francisco",
      state: "California",
      address : "America",
      id: "4",
      amount: 100,
      status: "Not Active",
      email: "salman@example.com",
      company: "Mylight sytems",
      panalname: "Black crystal ",
      phone: "+18598945042",
      gender: "Female",
    },
    {
      isActive: false,
      firstName: "John",
      lastName: "Smith",
      age: 42,
      salary: 75000,
      city: "Los Angeles",
      state: "California",
      id: "5",
      amount: 100,
      status: "Active",
      email: "salman@example.com",
      company: "Mylight sytems",
      panalname: "Black crystal ",
      phone: "+18598945042",
      gender: "Male",
    },
    {
      height: 20,
      width: 90,
      size: 0,
      isActive: true,
      firstName: "Jane",
      lastName: "Smith",
      age: 51,
      salary: 500,
      city: "Blacksburg",
      state: "Virginia",
      id: "6",
      amount: 100,
      status: "Active",
      email: "salman@example.com",
      company: "Mylight sytems",
      panalname: "Black crystal ",
      phone: "+18598945042",
      gender: "Female",
    },
    {
      isActive: false,
      firstName: "Samuel",
      lastName: "Jackson",
      age: 27,
      salary: 900,
      city: "New York",
      state: "New York",
      id: "7",
      amount: 100,
      email: "Samuel@cool.com",
      company: "jane sytems",
      panalname: "Black crystal G3",
      phone: "+18598445042",
      status: "Active",
      gender: "Male",
    },
    {
      isActive: false,
      firstName: "mark",
      lastName: "teark",
      age: 17,
      salary: 8100,
      city: "New jersey",
      state: "amc",
      id: "8",
      amount: 100,
      status: "Active",
      email: "mark@tear.com",
      company: "mark pvt",
      panalname: "trazk ",
      phone: "+18945042",
      gender: "Female",
      status: "Not Active",
    },
    {
      isActive: false,
      firstName: "Dhanush",
      lastName: "Mahesh",
      age: 22,
      salary: 7200,
      city: "New York",
      state: "New York",
      id: "9",
      amount: 100,
      email: "dhanysh@es.com",
      company: "asokumar Es pvt",
      panalname: "Black crystal g4",
      phone: "+484654120",
      status: "Not Active",
      gender: "Male",
    },
    {
      isActive: false,
      firstName: "Tane",
      lastName: "red",
      age: 24,
      salary: 890,
      city: "New York",
      state: "New York",
      id: "10",
      amount: 100,
      email: "salman@example.com",
      company: "Mylight sytems",
      panalname: "Black crystal ",
      phone: "+18598945042",
      status: "Active",
      gender: "Male",
    },
    {
      isActive: false,
      name: "Samuel Jackson",
      age: 27,
      salary: 6000,
      city: "New York",
      state: "New York",
      id: "11",
      amount: 100,
      status: "Not Active",

      email: "salman@example.com",
      company: "Mylight sytems",
      panalname: "Black crystal ",
      phone: "+18598945042",
      gender: "Female",
    },
    {
      isActive: false,
      name: "Samuel Jackson",
      age: 27,
      salary: 90000,
      city: "New York",
      state: "New York",
      id: "12",
      amount: 100,
      status: "Active",
      email: "salman@example.com",
      company: "Mylight sytems",
      panalname: "Black crystal ",
      phone: "+18598945042",
      gender: "Male",
    },
    {
      isActive: false,
      name: "Samuel Jackson",
      age: 27,
      salary: 90000,
      city: "New York",
      state: "New York",
      id: "13",
      amount: 100,
      status: "Not Active",
      email: "salman@example.com",
      company: "Mylight sytems",
      panalname: "Black crystal ",
      phone: "+18598945042",
      gender: "Female",
    },
    {
      isActive: false,
      name: "Samuel Jackson",
      age: 27,
      salary: 90000,
      city: "New York",
      state: "New York",
      id: "14",
      amount: 100,
      status: "Active",
      email: "salman@example.com",
      company: "Mylight sytems",
      panalname: "Black crystal ",
      phone: "+18598945042",
      gender: "Male",
    },
    {
      isActive: false,
      name: "Jackson sphere",
      age: 27,
      salary: 90000,
      city: "New York",
      state: "New York",
      id: "15",
      amount: 100,
      status: "Removed",
      email: "sphere@example.com",
      company: "Jackson theres",
      panalname: "Black crystal 74",
      phone: "+18598945042",
      gender: "Female",
    },

    {
      isActive: false,
      name: "Samuel Jackson",
      age: 27,
      salary: 60000,
      city: "New York",
      state: "New York",
      id: "16",
      amount: 100,
      status: "Not Active",
      email: "Samuel@Jackson.com",
      company: "Mylight sytems",
      panalname: "Black crystal ",
      phone: "+18598945042",
      gender: "Male",
    },
    {
      isActive: false,
      name: "Samuel Jackson",
      age: 27,
      salary: 7000,
      city: "New York",
      state: "New York",
      id: "17",
      amount: 100,
      status: "removed",
      email: "salman@example.com",
      company: "Mylight sytems",
      panalname: "Black crystal ",
      phone: "+18598945042",
      gender: "Female",
    },
    {
      isActive: false,
      name: "Samuel Jackson",
      age: 27,
      salary: 90000,
      city: "New York",
      state: "New York",
      id: "18",
      amount: 100,
      status: "removed",
      email: "salman@example.com",
      company: "Mylight sytems",
      panalname: "Black crystal ",
      phone: "+18598945042",
      gender: "Male",
    },
    {
      isActive: false,
      name: "Samuel Jackson",
      age: 27,
      salary: 90000,
      city: "New York",
      state: "New York",
      id: "19",
      amount: 100,
      status: "",
      email: "salman@example.com",
      company: "Mylight sytems",
      panalname: "Black crystal ",
      phone: "+18598945042",
      gender: "Female",
    },
    {
      isActive: false,
      name: "Samuel Jackson",
      age: 27,
      salary: 90000,
      city: "New York",
      state: "New York",
      id: "20",
      status: "",
      amount: 100,
      email: "salman@example.com",
      company: "Mylight sytems",
      panalname: "Black crystal ",
      phone: "+18598945042",
      gender: "Male",
    },
  ]);

  return (
    <div>
      {/* <p>{data.status}</p> */}
      {/* <p>{data}</p> */}
      <Example data={data} />
    </div>
  );
};

export default MakeData

// export const data = [
//   {
//     firstName: "Salmankhan",
//     lastName: "R",
//     address: "Tiruppur",
//     city: "Tiruppur",
//     state: "Tamilnadu",
//     id: "1",
//     salary: 1600,
//     amount: 100,
//     email: "salman@example.com",
//     company: "Mylight sytems",
//     panalname: "Black crystal ",
//     phone: "+18598945042",
//     status : powervalue,
//   },
//   {
//     isActive: true,
//     firstName: "Kevin",
//     lastName: "Vandy",
//     age: 51,
//     salary: 80_000,
//     city: "Richmond",
//     state: "Virginia",
//     id: "2",
//     amount: 100,
//     status: "success",
//     email: "salman@example.com",
//     company: "Mylight sytems",
//     panalname: "Black crystal ",
//     phone: "+18598945042",
//   },
//   {
//     isActive: false,
//     firstName: "John",
//     lastName: "Doe",
//     age: 27,
//     salary: 120_000,
//     city: "Riverside",
//     state: "South Carolina",
//     id: "3",
//     amount: 100,
//     status: "success",
//     email: "salman@example.com",
//     company: "Mylight sytems",
//     panalname: "Black crystal ",
//     phone: "+18598945042",
//   },
//   {
//     isActive: true,
//     firstName: "Jane",
//     lastName: "tim",
//     age: 32,
//     salary: 160_000,
//     city: "San Francisco",
//     state: "California",
//     id: "4",
//     amount: 100,
//     status: "success",
//     email: "salman@example.com",
//     company: "Mylight sytems",
//     panalname: "Black crystal ",
//     phone: "+18598945042",
//   },
//   {
//     isActive: false,
//     firstName: "John",
//     lastName: "Smith",
//     age: 42,
//     salary: 75_000,
//     city: "Los Angeles",
//     state: "California",
//     id: "5",
//     amount: 100,
//     status: "success",
//     email: "salman@example.com",
//     company: "Mylight sytems",
//     panalname: "Black crystal ",
//     phone: "+18598945042",
//   },
//   {
//     isActive: true,
//     firstName: "Jane",
//     lastName: "Smith",
//     age: 51,
//     salary: 56_000,
//     city: "Blacksburg",
//     state: "Virginia",
//     id: "6",
//     amount: 100,
//     status: "success",
//     email: "salman@example.com",
//     company: "Mylight sytems",
//     panalname: "Black crystal ",
//     phone: "+18598945042",
//   },
//   {
//     isActive: false,
//     firstName: "Samuel",
//     lastName: "Jackson",
//     age: 27,
//     salary: 900,
//     city: "New York",
//     state: "New York",
//     id: "7",
//     amount: 100,
//     email: "Samuel@cool.com",
//     company: "jane sytems",
//     panalname: "Black crystal G3",
//     phone: "+18598445042",
//   },
//   {
//     isActive: false,
//     firstName: "mark",
//     lastName: "teark",
//     age: 17,
//     salary: 20_000,
//     city: "New jersey",
//     state: "amc",
//     id: "8",
//     amount: 100,
//     status: "pending",
//     email: "mark@tear.com",
//     company: "mark pvt",
//     panalname: "trazk ",
//     phone: "+18945042",
//   },
//   {
//     isActive: false,
//     firstName: "Dhanush",
//     lastName: "Mahesh",
//     age: 22,
//     salary: 90000,
//     city: "New York",
//     state: "New York",
//     id: "7",
//     amount: 100,
//     email: "dhanysh@es.com",
//     company: "asokumar Es pvt",
//     panalname: "Black crystal g4",
//     phone: "+484654120",
//   },
//   {
//     isActive: false,
//     firstName: "Tane",
//     lastName: "red",
//     age: 24,
//     salary: 890,
//     city: "New York",
//     state: "New York",
//     id: "7",
//     amount: 100,
//     email: "salman@example.com",
//     company: "Mylight sytems",
//     panalname: "Black crystal ",
//     phone: "+18598945042",
//   },
//   {
//     isActive: false,
//     name: "Samuel Jackson",
//     age: 27,
//     salary: 90_000,
//     city: "New York",
//     state: "New York",
//     id: "7",
//     amount: 100,
//     status: "success",
//     email: "salman@example.com",
//     company: "Mylight sytems",
//     panalname: "Black crystal ",
//     phone: "+18598945042",
//   },
//   {
//     isActive: false,
//     name: "Samuel Jackson",
//     age: 27,
//     salary: 90_000,
//     city: "New York",
//     state: "New York",
//     id: "7",
//     amount: 100,
//     status: "success",
//     email: "salman@example.com",
//     company: "Mylight sytems",
//     panalname: "Black crystal ",
//     phone: "+18598945042",
//   },
//   {
//     isActive: false,
//     name: "Samuel Jackson",
//     age: 27,
//     salary: 90_000,
//     city: "New York",
//     state: "New York",
//     id: "7",
//     amount: 100,
//     status: "success",
//     email: "salman@example.com",
//     company: "Mylight sytems",
//     panalname: "Black crystal ",
//     phone: "+18598945042",
//   },
//   {
//     isActive: false,
//     name: "Samuel Jackson",
//     age: 27,
//     salary: 90_000,
//     city: "New York",
//     state: "New York",
//     id: "7",
//     amount: 100,
//     status: "success",
//     email: "salman@example.com",
//     company: "Mylight sytems",
//     panalname: "Black crystal ",
//     phone: "+18598945042",
//   },
//   {
//     isActive: false,
//     name: "Samuel Jackson",
//     age: 27,
//     salary: 90_000,
//     city: "New York",
//     state: "New York",
//     id: "7",
//     amount: 100,
//     status: "success",
//     email: "salman@example.com",
//     company: "Mylight sytems",
//     panalname: "Black crystal ",
//     phone: "+18598945042",
//   },

//   {
//     isActive: false,
//     name: "Samuel Jackson",
//     age: 27,
//     salary: 90_000,
//     city: "New York",
//     state: "New York",
//     id: "7",
//     amount: 100,
//     status: "success",
//     email: "salman@example.com",
//     company: "Mylight sytems",
//     panalname: "Black crystal ",
//     phone: "+18598945042",
//   },
//   {
//     isActive: false,
//     name: "Samuel Jackson",
//     age: 27,
//     salary: 90_000,
//     city: "New York",
//     state: "New York",
//     id: "7",
//     amount: 100,
//     status: "success",
//     email: "salman@example.com",
//     company: "Mylight sytems",
//     panalname: "Black crystal ",
//     phone: "+18598945042",
//   },
//   {
//     isActive: false,
//     name: "Samuel Jackson",
//     age: 27,
//     salary: 90_000,
//     city: "New York",
//     state: "New York",
//     id: "7",
//     amount: 100,
//     status: "success",
//     email: "salman@example.com",
//     company: "Mylight sytems",
//     panalname: "Black crystal ",
//     phone: "+18598945042",
//   },
//   {
//     isActive: false,
//     name: "Samuel Jackson",
//     age: 27,
//     salary: 90_000,
//     city: "New York",
//     state: "New York",
//     id: "7",
//     amount: 100,
//     status: "success",
//     email: "salman@example.com",
//     company: "Mylight sytems",
//     panalname: "Black crystal ",
//     phone: "+18598945042",
//   },
//   {
//     isActive: false,
//     name: "Samuel Jackson",
//     age: 27,
//     salary: 90_000,
//     city: "New York",
//     state: "New York",
//     id: "7",
//     amount: 100,
//     status: "success",
//     email: "salman@example.com",
//     company: "Mylight sytems",
//     panalname: "Black crystal ",
//     phone: "+18598945042",
//   },
// ];
