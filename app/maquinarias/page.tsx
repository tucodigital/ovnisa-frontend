"use client";

import React, {useEffect } from "react";
import { redirect } from 'next/navigation'

export default function Maquinarias() {

  useEffect(() => {
    redirect('/')
  }, [])
  
  return (
    <main className="PageMainContainer min-h-screen px-4 pt-28 xl:pt-44 pb-12">
      <div className="lg:grid lg:grid-cols-12 gap-8">
        
      </div>
    </main>
  );
}
