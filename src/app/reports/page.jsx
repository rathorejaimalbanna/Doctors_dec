import React from 'react'

export default function Reports() {
  return (
    <div>
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<div className="overflow-x-auto ml-32" style={{width:"80%"}}>
  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
    <thead className="ltr:text-left rtl:text-right">
      <tr>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date of Birth</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Desease</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Bill Price</th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
      <tr className="odd:bg-gray-50">
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Ruchi</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Arthritis</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$120,000</td>
      </tr>

      <tr className="odd:bg-gray-50">
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1980</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Back Pain</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$100,000</td>
      </tr>

    </tbody>
  </table>
</div>
    </div>
  )
}
