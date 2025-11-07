import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col gap-4 items-center">
        <div>
          <h1>Boilerplate next js - better auth</h1>
        </div>
        <Link href="/dashboard">
          <Button className="cursor-pointer">Dashboard</Button>
        </Link>
      </div>
    </div>
  );
};

export default page;
