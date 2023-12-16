// This file is optional. Currently only JSON structure is used.
// To use this one, just import it as follows in files where 'apartments-collection.json' is present:
// import apartments from "../../assets/apartments/apartments";

import { ApartmentStructure } from "./types";

const apartmentsT: ApartmentStructure[] = [
  {
    services: {
      kitchen: { icon: "kitchen", tooltip: "Kitchen Inside" },
      laundry: {
        icon: "local_laundry_service",
        tooltip: "Laundry Inside",
      },
      pool: { icon: "pool", tooltip: "Access to pool" },
      smoking: { icon: "smoke_free", tooltip: "Smoke Free Area" },
      wifi: { icon: "wifi", tooltip: "Free Wifi" },
    },
    description: {
      detail:
        "Exquisite accommodation decorated with the best taste in a simple and elegant way in which our customers can enjoy the coastal area par excellence of the island. Only 10 minutes from the beach by walking and with access to a large pool, moments of absolute relaxation will arise spontaneously. Area with an unparalleled transport service and nearby places to taste the best quality food.",
      preview:
        "Exquisite accommodation decorated with the best taste in a simple and elegant way in which our cu...",
    },
    id: 1,
    image: {
      detail: "img/apartmentyes.jpeg",
      preview: "img/apartmentyes.jpeg",
      galleryIds: [
        {
          id: 1,
          // imageModulePath is  a relative path created by vite to find the pictures,
          // it is necessary to rearrange the order of the pictures,
          // it is passed as a value to compare with other through the find method

          imageModulePath: "./Oceano/oce-1.jpeg",
          originalImage: "/src/assets/apartments/Oceano/oce-1.jpeg",
        },
        {
          id: 2,
          imageModulePath: "./Oceano/oce-2.jpeg",
          originalImage: "/src/assets/apartments/Oceano/oce-2.jpeg",
        },
        {
          id: 3,
          imageModulePath: "./Oceano/oce-3.jpeg",
          originalImage: "/src/assets/apartments/Oceano/oce-3.jpeg",
        },
        {
          id: 4,
          imageModulePath: "./Oceano/oce-4.jpeg",
          originalImage: "/src/assets/apartments/Oceano/oce-4.jpeg",
        },
        {
          id: 5,
          imageModulePath: "./Oceano/oce-5.jpeg",
          originalImage: "/src/assets/apartments/Oceano/oce-5.jpeg",
        },
        {
          id: 6,
          imageModulePath: "./Oceano/oce-6.jpeg",
          originalImage: "/src/assets/apartments/Oceano/oce-6.jpeg",
        },
        {
          id: 7,
          imageModulePath: "./Oceano/oce-7.jpeg",
          originalImage: "/src/assets/apartments/Oceano/oce-7.jpeg",
        },
        {
          id: 8,
          imageModulePath: "./Oceano/oce-8.jpeg",
          originalImage: "/src/assets/apartments/Oceano/oce-8.jpeg",
        },
        {
          id: 9,
          imageModulePath: "./Oceano/oce-9.jpeg",
          originalImage: "/src/assets/apartments/Oceano/oce-9.jpeg",
        },
        {
          id: 10,
          imageModulePath: "./Oceano/oce-10.jpeg",
          originalImage: "/src/assets/apartments/Oceano/oce-10.jpeg",
        },
        {
          id: 11,
          imageModulePath: "./Oceano/oce-11.jpeg",
          originalImage: "/src/assets/apartments/Oceano/oce-11.jpeg",
        },
        {
          id: 12,
          imageModulePath: "./Oceano/oce-12.jpeg",
          originalImage: "/src/assets/apartments/Oceano/oce-12.jpeg",
        },
        {
          id: 13,
          imageModulePath: "./Oceano/oce-13.jpeg",
          originalImage: "/src/assets/apartments/Oceano/oce-13.jpeg",
        },
        {
          id: 14,
          imageModulePath: "./Oceano/oce-14.jpeg",
          originalImage: "/src/assets/apartments/Oceano/oce-14.jpeg",
        },
        {
          id: 15,
          imageModulePath: "./Oceano/oce-15.jpeg",
          originalImage: "/src/assets/apartments/Oceano/oce-15.jpeg",
        },
        {
          id: 16,
          imageModulePath: "./Oceano/oce-16.jpeg",
          originalImage: "/src/assets/apartments/Oceano/oce-16.jpeg",
        },
        {
          id: 17,
          imageModulePath: "./Oceano/oce-17.jpeg",
          originalImage: "/src/assets/apartments/Oceano/oce-17.jpeg",
        },
        {
          id: 18,
          imageModulePath: "./Oceano/oce-18.jpeg",
          originalImage: "/src/assets/apartments/Oceano/oce-18.jpeg",
        },
        {
          id: 19,
          imageModulePath: "./Oceano/oce-19.jpeg",
          originalImage: "/src/assets/apartments/Oceano/oce-19.jpeg",
        },
        {
          id: 20,
          imageModulePath: "./Oceano/oce-20.jpeg",
          originalImage: "/src/assets/apartments/Oceano/oce-20.jpeg",
        },
        {
          id: 21,
          imageModulePath: "./Oceano/oce-21.jpeg",
          originalImage: "/src/assets/apartments/Oceano/oce-21.jpeg",
        },
        {
          id: 22,
          imageModulePath: "./Oceano/oce-22.jpeg",
          originalImage: "/src/assets/apartments/Oceano/oce-22.jpeg",
        },
        {
          id: 23,
          imageModulePath: "./Oceano/oce-23.jpeg",
          originalImage: "/src/assets/apartments/Oceano/oce-23.jpeg",
        },
        {
          id: 24,
          imageModulePath: "./Oceano/oce-24.jpeg",
          originalImage: "/src/assets/apartments/Oceano/oce-24.jpeg",
        },
        {
          id: 25,
          imageModulePath: "./Oceano/oce-25.jpeg",
          originalImage: "/src/assets/apartments/Oceano/oce-25.jpeg",
        },
        {
          id: 26,
          imageModulePath: "./Oceano/oce-26.jpeg",
          originalImage: "/src/assets/apartments/Oceano/oce-26.jpeg",
        },
        {
          id: 27,
          imageModulePath: "./Oceano/oce-27.jpeg",
          originalImage: "/src/assets/apartments/Oceano/oce-27.jpeg",
        },
        {
          id: 28,
          imageModulePath: "./Oceano/oce-28.jpeg",
          originalImage: "/src/assets/apartments/Oceano/oce-28.jpeg",
        },
        {
          id: 29,
          imageModulePath: "./Oceano/oce-29.jpeg",
          originalImage: "/src/assets/apartments/Oceano/oce-29.jpeg",
        },
        {
          id: 30,
          imageModulePath: "./Oceano/oce-30.jpeg",
          originalImage: "/src/assets/apartments/Oceano/oce-30.jpeg",
        },
        {
          id: 31,
          imageModulePath: "./Oceano/oce-31.jpeg",
          originalImage: "/src/assets/apartments/Oceano/oce-31.jpeg",
        },
        {
          id: 32,
          imageModulePath: "./Oceano/oce-32.jpeg",
          originalImage: "/src/assets/apartments/Oceano/oce-32.jpeg",
        },
        {
          id: 33,
          imageModulePath: "./Oceano/oce-33.jpeg",
          originalImage: "/src/assets/apartments/Oceano/oce-33.jpeg",
        },
        {
          id: 34,
          imageModulePath: "./Oceano/oce-34.jpeg",
          originalImage: "//src/assets/apartments/Oceano/oce-34.jpeg",
        },
        {
          id: 35,
          imageModulePath: "./Oceano/oce-35.jpeg",
          originalImage: "/src/assets/apartments/Oceano/oce-35.jpeg",
        },
        {
          id: 36,
          imageModulePath: "./Oceano/oce-36.jpeg",
          originalImage: "/src/assets/apartments/Oceano/oce-36.jpeg",
        },
        {
          id: 37,
          imageModulePath: "./Oceano/oce-37.jpeg",
          originalImage: "/src/assets/apartments/Oceano/oce-37.jpeg",
        },
        {
          id: 38,
          imageModulePath: "./Oceano/oce-38.jpeg",
          originalImage: "/src/assets/apartments/Oceano/oce-38.jpeg",
        },
        {
          id: 39,
          imageModulePath: "./Oceano/oce-39.jpeg",
          originalImage: "/src/assets/apartments/Oceano/oce-39.jpeg",
        },
      ],
    },
    title: "Océano",
  },
];

export default apartmentsT;
