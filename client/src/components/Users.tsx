import { FaCheckSquare, FaSearch, FaTrash } from 'react-icons/fa'


function Users() {
  const userTitle = [
    "Invoice id",
    "Name",
    "Email",
    "Package",
    "Status"
  ]
  return (
    <section>
      <div className='flex flex-row items-center justify-end  mx-2'>
        <input type="text" placeholder='search' className='border border-gray-400 px-2 py-1 rounded-full' />
        <FaSearch className='relative right-8' />
      </div>
      <div className='w-full overflow-x-auto bg-white rounded-lg border border-gray-300 mt-4'>
        {/*--user title--*/}
        <div className='min-w-[700px] flex items-center justify-between gap-4 border-b border-gray-300 px-4 py-3'>
          <FaCheckSquare />
          {userTitle.map((item, index) => (
            <div key={index} className='text-gray-400 text-sm font-medium whitespace-nowrap flex items-center gap-1'>
              {item}
            </div>
          ))}
          <button className='cursor-pointer'>
            <FaTrash className='text-gray-400' />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Users