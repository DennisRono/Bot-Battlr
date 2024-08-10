import React from 'react'

function SortBar({ sortBy, setSortBy }) {
  return (
    <div className="flex justify-center mb-4">
      <button
        className={`px-4 py-2 mx-2 rounded ${
          sortBy === 'health' ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
        onClick={() => setSortBy('health')}
      >
        Sort by Health
      </button>
      <button
        className={`px-4 py-2 mx-2 rounded ${
          sortBy === 'damage' ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
        onClick={() => setSortBy('damage')}
      >
        Sort by Damage
      </button>
      <button
        className={`px-4 py-2 mx-2 rounded ${
          sortBy === 'armor' ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
        onClick={() => setSortBy('armor')}
      >
        Sort by Armor
      </button>
    </div>
  )
}

export default SortBar
