'use client';
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

// import Image from "next/image";
const Page = () => {
   const trpc = useTRPC();
   const {data} = useQuery(trpc.hello.queryOptions({text: "Utkarsh"}))
  return (
       <div className="bg-black-800">
            {data}
       </div>
  );
}

export default Page;
