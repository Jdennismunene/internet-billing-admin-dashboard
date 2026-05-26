import React from 'react'

function SystemInfo() {
  const SystemTitle = [
    "Device Name",
    "Mac Address",
    "IP Address",
    "Device type",
    "Log time",
    "Data usage"
  ]

  return (
    <div className='w-full overflow-x-auto bg-white rounded-lg border border-gray-300'>

      <div className='min-w-[700px] flex items-center justify-between gap-4 border-b border-gray-300 px-4 py-3'>

        {SystemTitle.map((item, index) => (
          <div
            key={index}
            className='text-gray-400 text-sm font-medium whitespace-nowrap'
          >
            {item}
          </div>
        ))}

      </div>

    </div>
  )
}

export default SystemInfo