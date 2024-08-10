import React from 'react'

function FilterBar({ filter, setFilter }) {
  const classes = [
    'All',
    'Support',
    'Medic',
    'Assault',
    'Defender',
    'Captain',
    'Witch',
  ]

  return (
    <div className="flex justify-center mb-4">
      {classes.map((botClass) => (
        <button
          key={botClass}
          className={`px-4 py-2 mx-2 rounded ${
            filter === botClass ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setFilter(botClass)}
        >
          {botClass}
        </button>
      ))}
    </div>
  )
}

export default FilterBar
