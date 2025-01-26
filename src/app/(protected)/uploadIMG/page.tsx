"use client"
import RoomEditor from '@/components/common/Test'
import ThreeDViewer from '@/components/common/ThreeDViewer'
import React from 'react'
// import dynamic from "next/dynamic";

// const ThreeDViewer = dynamic(() => import("../../../components/ThreeDViewer"), { ssr: false });
const page = () => {
  return (
    <div>
        <ThreeDViewer/>
        <RoomEditor/>
      
    </div>
  )
}

export default page
