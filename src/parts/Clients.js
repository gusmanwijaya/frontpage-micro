import React from "react";

export default function Clients() {
  return (
    <div className="flex flex-wrap justify-center items-center">
      <div className="w-full sm:w-1/6 mb-8 md:mb-0">
        <img
          src="/images/logo-amazon.svg"
          alt="Logo Amazon"
          className="mx-auto"
        />
      </div>
      <div className="w-full sm:w-1/6 mb-8 md:mb-0">
        <img
          src="/images/logo-microsoft.svg"
          alt="Logo Microsoft"
          className="mx-auto"
        />
      </div>
      <div className="w-full sm:w-1/6 mb-8 md:mb-0">
        <img
          src="/images/logo-tesla.svg"
          alt="Logo Tesla"
          className="mx-auto"
        />
      </div>
      <div className="w-full sm:w-1/6 mb-8 md:mb-0">
        <img
          src="/images/logo-google.svg"
          alt="Logo Google"
          className="mx-auto"
        />
      </div>
      <div className="w-full sm:w-1/6 mb-8 md:mb-0">
        <img
          src="/images/logo-facebook.svg"
          alt="Logo Facebook"
          className="mx-auto"
        />
      </div>
    </div>
  );
}
