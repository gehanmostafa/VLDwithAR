"use client"
import React from 'react'

import useGetProducts from '@/hooks/useGetProducts'

const page = () => {
    const { data , isLoading , error }= useGetProducts()
    console.log(data)
    if(isLoading) return "is Loading ..."
    if(error) return "error"
  return (
    
    <div>
     { 

     }
      
    </div>
  )
}

export default page
