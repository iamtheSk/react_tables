import Link from 'next/link'
import React from 'react'

const page = () => {
  
  
  return (
    <div className="bg-green-200 flex items-center h-screen flex-col gap-40 ">
      <h1 className="font-bold text-4xl mt-10">Solar Stv components</h1>
      <div className="flex flex-col">
        <Link href="/datatable" className="font-bold text-2xl">
          Tables
        </Link>

        <Link href="/datatable2" className="font-bold text-2xl">
          Tables V2
        </Link>

        <Link href="/datatable3" className="font-bold text-2xl">
          Tables V3
        </Link>

        <Link href="/ndatatable" className="font-bold text-2xl">
          next Tables V1
        </Link>
      </div>
    </div>
  );
}

export default page