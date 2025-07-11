'use client';

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

// import Image from "next/image";
const Page = () => {
  const trpc = useTRPC();
  const invoke = useMutation(trpc.invoke.mutationOptions({
     onSuccess: () => {
          toast.success("Background job started")
     }
  }));

  return (
       <div className="bg-black-800">
            <Button disabled={invoke.isPending} onClick={() => invoke.mutate({text: "Utkarsh"})}>
               Test
            </Button>
       </div>
  );
}

export default Page;
