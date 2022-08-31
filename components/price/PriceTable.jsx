import clsx from 'clsx'
import { useState, useEffect } from 'react'
import { FiChevronUp, FiChevronDown } from 'react-icons/fi'

export function PrimaryTable({ tableBody = [] }) {
  // setting up table heading
  const headings = Object.keys(tableBody[0])
  const [rawData, setRawData] = useState(tableBody)
  const [sortByData, setSortByData] = useState({
    isAscending: true,
    sortBy: headings[0],
    activeClass: 0,
  })

  const heading2 = tableBody[0]
  const [sortedData, setSortedData] = useState([])

  // sorting and storing in state
  const handleSort = (pos, sortBy) => {
    setSortByData({
      isAscending: !sortByData.isAscending,
      sortBy,
      activeClass: pos,
    })
  }

  useEffect(() => {
    if (sortByData.isAscending) {
      setSortedData(
        [...rawData].sort((a, b) => {
          return a[sortByData.sortBy].amount - b[sortByData.sortBy].amount
        })
      )
    } else {
      setSortedData(
        rawData.sort((a, b) => {
          return b[sortByData.sortBy].amount - a[sortByData.sortBy].amount
        })
      )
    }
  }, [sortByData.isAscending])

  return (
    <div className="pt-6 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <div className="overflow-hidden border border-neutral-200 sm:rounded-lg">
          <table className="min-w-full text-sm border-collapse divide-y divide-gray-200">
            <thead>
              <tr>
                {headings.map((item, index) => {
                  return (
                    <th className="text-sm font-semibold text-left cursor-pointer select-none" key={index}>
                      {heading2[item].isSortable === true ? (
                        <button
                          className="flex items-center px-4 py-4 pl-8 pr-3 space-x-2 "
                          onClick={() => handleSort(index, item)}
                        >
                          <span className={`${sortByData.activeClass === index && 'text-blue-700'}`}>
                            {item} {(item === 'Monthly' || item === 'Hourly') && 'Price'}
                          </span>
                          <span
                            className={`flex flex-col justify-center ${
                              sortByData.activeClass === index ? 'opacity-100' : 'opacity-0'
                            }`}
                          >
                            <FiChevronUp
                              className={`w-3 h-3 ${
                                sortByData.isAscending && sortByData.activeClass === index && 'text-blue-700'
                              }`}
                            />
                            <FiChevronDown
                              className={`w-3 h-3 ${
                                !sortByData.isAscending && sortByData.activeClass === index && 'text-blue-700'
                              }`}
                            />
                          </span>
                        </button>
                      ) : (
                        <div className="px-4 py-4 pl-8">
                          <span className={`${sortByData.activeClass === index && 'text-blue-700'}`}>
                            {item} {(item === 'Monthly' || item === 'Hourly') && 'Price'}
                          </span>
                        </div>
                      )}
                    </th>
                  )
                })}
              </tr>
            </thead>
            <tbody>
              {sortedData.map((item, index) => {
                return (
                  <tr key={index} className="odd:bg-zinc-100">
                    {headings.map((title, index) => {
                      return (
                        <td key={index} className={clsx('py-4 px-10 pl-9 ')}>
                          {item[title].price && '$'}
                          {item[title].amount !== null &&
                          parseInt(item[title].amount) !== item[title].amount &&
                          item[title].amount.toString().length >= 5
                            ? item[title].amount.toFixed(3)
                            : item[title].amount}
                          {item[title].text !== null && item[title].text}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export function CustomTable() {}
