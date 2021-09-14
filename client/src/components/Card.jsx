import React from 'react'

export default function Card() {
  return (
    <div className="p-4 md:w-1/4">
      <div className="h-full rounded-sm bg-white overflow-hidden">
        <div className="flex justify-between py-2 px-4">
          <p className="text-sm text-gray-400">Personnel ID : <span className="text-primary font-semibold">123456</span></p>
          <div className="-mt-1.5">
            <div className="bg-gray-600 w-1 h-1 inline-block" style={{borderRadius:'50%'}}></div>
            <div className="bg-gray-600 w-1 h-1 inline-block ml-0.5 " style={{borderRadius:'50%'}}></div>
            <div className="bg-gray-600 w-1 h-1 inline-block ml-0.5" style={{borderRadius:'50%'}}></div>
          </div>
        </div>
        <hr/>
        <div className="px-8 py-5">
          <img className="lg:h-40 md:h-40 w-full" src="https://dummyimage.com/720x400" alt="blog" style={{ borderRadius: '50%' }} />
        </div>
        <div className="p-4">
          <h2 className="text-xs title-font font-medium text-gray-800">Name</h2>
          <p className="leading-relaxed mb-2">First Name Last Name</p>
          <h2 className="text-xs title-font font-medium text-gray-800">Telephone</h2>
          <p className="leading-relaxed mb-2">Phone Number</p>
          <h2 className="text-xs title-font font-medium text-gray-800">Birthday</h2>
          <p className="leading-relaxed mb-2">DD-MM</p>
          <h2 className="text-xs title-font font-medium text-gray-800">Email</h2>
          <p className="leading-relaxed mb-2">Email Address</p>
        </div>
      </div>
    </div>
  )
}
