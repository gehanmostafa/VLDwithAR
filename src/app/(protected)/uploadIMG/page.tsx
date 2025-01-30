"use client"
// import TestThreejs from '@/components/common/testThreejs'
import RoomEditor from '@/components/common/RoomEditor'
import ThreeDViewer from '@/components/common/ThreeDViewer'
import React from 'react'

const page = () => {
  return (
    <div>
      <ThreeDViewer/>
      {/* <TestThreejs /> */}
      <RoomEditor/>

      {/* <AFrameScene /> */}

    </div>
  )
}

export default page
