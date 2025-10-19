"use client";

import React from "react";
import { useEffect, useState } from "react";

const page = () => {
  useEffect(() => {
    const response = async () => {
      const res = await fetch("/api/me");
      const data = await res.json();
      console.log(data);
    };
    response();
  }, []);

  return (
    <div>
      <h1>kamu siapa?</h1>
    </div>
  );
};

export default page;
