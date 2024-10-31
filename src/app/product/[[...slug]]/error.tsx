"use client";

import { useEffect } from "react";

import React from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.error(error);
  }, [error])

  return (
    <div>
      <h2>Something Went Wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
};

export default Error;
