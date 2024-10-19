import React from 'react'
import FormFeaturedEmployer from './FormFeaturedEmployer'

const FeaturedEmployer = () => {
  return (
    <>
      <div className="container mx-auto pb-5">
        <h2 className="text-2xl font-bold text-green-600 mb-6">Nhà tuyển dụng nổi bật</h2>
        <div className="grid grid-cols-5 gap-6">
          <FormFeaturedEmployer/>
          <FormFeaturedEmployer/>
          <FormFeaturedEmployer/>
          <FormFeaturedEmployer/>
          <FormFeaturedEmployer/>
        </div>
      </div>
    </>
  )
}

export default FeaturedEmployer