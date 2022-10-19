import React, { useState, forwardRef, useImperativeHandle } from 'react'

const Slider = forwardRef((props, refs) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleVisibility = () => {
    setIsOpen(!isOpen)
  }
  useImperativeHandle(refs, () => {
    return {
      toggleVisibility,
    }
  })
  return (
    <>
      {!isOpen ? (
        <button
          className="fixed z-30 flex items-center cursor-pointer right-10 top-6"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg fill="#2563EB" viewBox="0 0 100 80" width="40" height="40"></svg>
          Highscore
        </button>
      ) : (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-xl text-white fixed top-4 right-4 z-10"
        >
          x
        </button>
      )}
      <div
        className={`top-0 right-0 fixed bg-blue-400 text-gray-900 w-[35vw] h-full p-4 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } ease-in-out duration-300`}
      >
        {props.children}
      </div>
    </>
  )
})

export default Slider
