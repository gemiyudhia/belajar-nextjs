"use client";

import React, { useState } from "react";

const AdminProductPage = () => {
  const [status, setStatus] = useState("");

  const revalidate = async () => {
    const res = await fetch(
      "http://localhost:3000/api/revalidate?tag=products&secret=Gemi12345",
      {
        // untuk security gunakan secret token
        method: "POST",
      }
    );

    if (!res.ok) {
      setStatus("Revalidate failed");
    } else {
      const response = await res.json();
      if (response.revalidate) {
        setStatus("Revalidate success");
      }
    }
  };

  return (
    <div className="w-3/6 h-96 bg-gray-300 rounded-[12px] flex justify-center items-center">
      <h1>{status}</h1>
      <button
        onClick={revalidate}
        className="bg-slate-900 text-white p-3 rounded-md font-semibold text-base m-5"
      >
        Revalidate
      </button>
    </div>
  );
};

export default AdminProductPage;
