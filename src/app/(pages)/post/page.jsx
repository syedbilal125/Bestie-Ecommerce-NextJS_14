import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import PostClientSideComponent from '../../../components/Post/PostClientSideComponent'
import React from 'react'

function Post() {
  return (
    <div>
        <Navbar />
        <PostClientSideComponent />
        <Footer />
    </div>
  )
}

export default Post