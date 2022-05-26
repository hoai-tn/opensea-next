import React, { useState } from 'react'
import { dummyEvents } from '../../../static/dummyEvent'

const style = {
  headerTable: 'flex p-5 bg-[#262b2f] justify-between',
  filterBox: ' m-5 py-5 rounded flex border border-black justify-between',
  listItems: 'p-5',
}

const EventTable = () => {
  const [isShowTable, setShowTable] = useState(false)
  return (
    <>
      <div className={style.headerTable}>
        <div>Item Activity</div>
        <div className="cursor-pointer" onClick={() => setShowTable(!isShowTable)}>
          Drop icon
        </div>
      </div>
      {isShowTable && (
        <div className={style.nftsContent}>
          <div className={style.filterBox}>
            <div>Filter</div>
            <div>Drop icon filter</div>
          </div>
          <div className={style.listItems}>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Event
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      From
                    </th>
                    <th scope="col" className="px-6 py-3">
                      To
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dummyEvents.map((e) => (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                      >
                        Sale
                      </th>
                      <td className="px-6 py-4">{e.price}</td>
                      <td className="px-6 py-4">{e.from}</td>
                      <td className="px-6 py-4">{e.to}</td>
                      <td className="px-6 py-4">{e.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default EventTable
