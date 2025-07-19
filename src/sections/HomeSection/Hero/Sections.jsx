import React from 'react'

const SectionFirst = (scrollYProgress) => {
  return (
    // if this section have backgroun follow cursor content will in their back. so fixed it
    <div className="h-screen sticky top-0 0 text-[3.5vw] flex flex-col items-center justify-center text-white pb-[5vh] ">
      {/* CREATE HERO CONTENT HERE */}
      <p>Scroll Perspective</p>
      <div className="flex gap-4">
        <h1>Section 1 of container</h1>
      </div>
    </div>
  )
}

const SectionSecond = (scrollYProgress) => {
  return (
    // if this section have backgroun follow cursor content will in their back. so fixed it
    <div className="relative h-screen ">
      {/* CREATE HERO CONTENT HERE */}
      <div className='w-full items-center justify-center'>
        <h1>Section 2 of container</h1>
      </div>
    </div>
  )
}

export { SectionFirst, SectionSecond }
