'use client'
import React from 'react'
import Rides from './Rides'
import Layout from '../components/user/Layout/Layout'

const page = () => {
  return (
    <div>
        <Layout Children = {<Rides/>}/>
    </div>
  )
}

export default page