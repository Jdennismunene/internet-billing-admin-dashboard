import { FaArrowRight, FaCalendar, FaChartLine, FaClock, FaExclamationCircle, FaGlobe, FaSignal, FaSimCard, FaUsers, FaWifi } from 'react-icons/fa'
import { FaDownload, FaUpload, } from 'react-icons/fa6'
import { FiTrendingDown, FiTrendingUp } from 'react-icons/fi'
import Gauge from '../page/Gauge';
import ProgressBar from '../page/ProgressBar';
import NetworkChart from '../page/NetworkChart';
import SystemInfo from '../page/SystemInfo';

const Home = () => {
  const details = [
    {
      id: 1,
      title: 'Total Users',
      value: '40, 689',
      icon: <FaUsers />,
      statIcon: <FiTrendingUp />,
      statText: '8.5% up from yesterday',
    },
    {
      id: 2,
      title: 'Active Connection',
      value: '10293',
      icon: <FaWifi />,
      statIcon: <FiTrendingUp />,
      statText: '1.3% up from past week',
    },
    {
      id: 3,
      title: 'Total Revenue',
      value: '$89,000',
      icon: <FaChartLine />,
      statIcon: <FiTrendingDown />,
      statText: '4.3% down from yesterday',
    },
    {
      id: 4,
      title: 'Areas Covered',
      value: '2040',
      icon: <FaClock />,
      statIcon: <FiTrendingUp />,
      statText: '1.8% up from yesterday',
    }
  ]
  return (
    <section>
      <div className='w-full bg-white border border-gray-300 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 px-4 py-4 md:px-6 '>
        {/*-- left section */}
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">Hello, John</h1>
          <p className="text-sm text-gray-500 mt-1">
          Manage, monitor, and secure your network effortlessly.
          </p>
        </div>

        {/*-- right section */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 md:gap-8">

          {/*--dates--*/}
          <div className="flex items-center gap-2 text-gray-700 text-sm">
            <FaCalendar size={16} className="flex items-center gap-2 text-gray-700 text-sm" />
            <span>25th May, 2026</span>
          </div>

          {/*--status box--*/}
          <div className="bg-gradient-to-r from-blue-500 to-orange-500 rounded-xl px-4 md:px-6 py-3 md:py-4 flex items-center justify-center gap-4 md:gap-6 text-white flex-wrap">
            <span className="text-sm whitespace-nowrap">5G MTN</span>
            <FaGlobe />
            <FaSignal />
            <FaSimCard />
            <FaWifi />
          </div>
        </div>
      </div>

      {/*--details--*/}
      <div className="mt-6">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {details.map((detail, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl p-6 flex flex-col gap-6 hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-row items-center justify-between">
                <div className='flex flex-col gap-4'>
                  <span className="text-gray-500 text-sm">{detail.title}</span>
                  <h2 className="text-2xl font-bold">{detail.value}</h2>
                </div>
                <div className="text-3xl bg-orange-700/20 p-2 rounded-xl text-orange-700/50">{detail.icon}</div>
              </div>
              <div className='flex flex-row items-center gap-2'>
                <span className='text-orange-500'>{detail.statIcon}</span>
                <span className='text-sm text-gray-400'>{detail.statText}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*-- section 2--*/}
      <div className='flex flex-col xl:flex-row gap-2'>

      {/*--Key metrics--*/}
      <div className='mt-4 w-full xl:w-[75%] bg-white shadow-lg rounded-md p-4'>
        <span className='text-lg text-orange-400'>Key metrics</span>
        {/*--Top section--*/}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 mt-2'>

        {/* ---current speed--*/}
        <div className='border border-gray-300 w-full rounded-lg px-3 py-4'>
    
          <div className='flex items-center justify-between mb-2'>
            <h2 className='text-sm text-gray-400'>
              Current internet speed
            </h2>

            <FaExclamationCircle />
          </div>

          <div className='flex flex-col sm:flex-row items-center justify-center gap-6 mt-4'>
            <Gauge
              value={21.53}
              label="Upload speed"
              color="#f97316"
              icon={<FaUpload />}
            />
            <Gauge
              value={45.53}
              label="Download speed"
              color="#000000"
              icon={<FaDownload />}
            />
          </div>
        </div>

        {/*--Total data--*/}
        <div className='border border-gray-300 w-full rounded-lg px-3 py-4'>        
          <div className='flex items-center justify-between mb-2'>
            <h2 className='text-sm text-gray-400'>
              Total data used
            </h2>
            <FaExclamationCircle />
          </div>
        {/*--data line bar--*/}
        <div className='mt-4 mb-6'>
          <ProgressBar value={24} />
        </div>
        <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
          <div className='flex flex-col gap-4'>
            <span>Current data usage</span>
            <span>Total data limit</span>
          </div>

          <div className='flex flex-col items-start sm:items-center'>
            <span className='text-xl font-bold text-orange-400'>
              120GB
            </span>
            <span className='text-sm font-semibold text-gray-400'>
              500GB
            </span>
          </div>
        </div> 
      </div>

      {/*--Average speed--*/}
      <div className='border border-gray-300 w-full rounded-lg px-3 py-4'>
        <h2 className='text-sm text-gray-400'>
          Average speed
        </h2>
        <div className='flex flex-col sm:flex-row sm:items-center gap-6 mt-4'>
        {/* Upload */}
        <div className='flex items-center gap-3'>
          <FaUpload className='text-orange-500' />
          <div className='flex flex-col gap-1'>
            <span className='font-semibold'>
              38 Mbps
            </span>
            <span className='text-sm text-gray-400'>
              Upload speed
            </span>
          </div>
        </div>
        {/* Download */}
        <div className='flex items-center gap-3'>
          <FaDownload className='text-black' />
          <div className='flex flex-col gap-1'>
            <span className='font-semibold'>
              18.4 Mbps
            </span>
            <span className='text-sm text-gray-400'>
              Download speed 
            </span>
          </div>
        </div>
      </div>
    </div>
    </div>

    {/*--Bottom section--*/}
    <div className='grid grid-cols-1 xl:grid-cols-2 gap-3 mt-4'>

    {/*--Network performance--*/}
    <div className='w-full overflow-hidden'>
      <NetworkChart />
    </div>

    {/*--Device--*/}
    <div className='flex flex-col gap-3'>
      <div className='border border-gray-300 w-full rounded-lg px-3 py-4'>
        <h2 className='text-sm text-gray-400 mb-4'>
          Device performance
        </h2>
        <div className='flex flex-col items-center gap-3'>
        </div>
      </div>
      <div className='border border-gray-300 w-full rounded-lg px-3 py-4'>
        <h2 className='text-sm text-gray-400 mb-4'>
          Data Usage
        </h2>
      </div>
    </div>
    </div>
  </div>

    {/*--system info--*/}
    <div className='mt-4 w-full xl:w-[25%] bg-white shadow-lg rounded-md p-4'>
      <h2 className='text-lg font-semibold text-orange-400'>System Info</h2>
    </div>
  </div>

      {/*--System logs--*/}
      <div className='w-[75%] mt-6'>
        <div className='flex flex-row items-center justify-between my-2 items-center'>
          <h2 className='text-orange-400 text-lg'>System Logs</h2>
          <div className='flex flex-row items-center gap-2'>
            <a href='' className='text-sm text-gray-400 cursor-pointer hover:text-orange-400'>see more</a>
            <button className='cursor-pointer '>
              <FaArrowRight size={12} />
            </button>
          </div>
        </div>
        <div>
          <SystemInfo />
        </div>
      </div>
    </section>
  )
}

export default Home