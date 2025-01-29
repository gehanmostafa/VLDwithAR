"use client"

import TestThreejs from '@/components/common/testThreejs'
// import RoomEditor from '@/components/common/Test'

// import ThreeDViewer from '@/components/common/ThreeDViewer'
import React from 'react'
// import dynamic from "next/dynamic";

// const ThreeDViewer = dynamic(() => import("../../../components/ThreeDViewer"), { ssr: false });
const page = () => {
  return (
    <div>
      {/* <ThreeDViewer/> */}
      <TestThreejs />
      {/* <RoomEditor/> */}

      {/* <AFrameScene /> */}

    </div>
  )
}

export default page
