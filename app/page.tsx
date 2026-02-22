"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import React from "react"

const Page = () => {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center px-6">
      
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md text-center space-y-6">
        
        <h1 className="text-3xl font-bold text-gray-800">
          UI Navigation
        </h1>

        <p className="text-gray-500 text-sm">
          Select which UI you want to explore
        </p>

        <div className="flex flex-col gap-4 pt-4">
          <Button
            className="w-full py-6 text-lg rounded-xl transition-all hover:scale-105"
            onClick={() => router.push("/firstui")}
          >
            First UI
          </Button>

          <Button
            variant="outline"
            className="w-full py-6 text-lg rounded-xl transition-all hover:scale-105"
            onClick={() => router.push("/secondui")}
          >
            Second UI
          </Button>
        </div>

      </div>
    </div>
  )
}

export default Page