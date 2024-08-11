import React from 'react'

function BotCard({ bot, handleClick, handleDelete }) {
  return (
    <div className="bot-card bg-white rounded-lg shadow-md p-4 m-4 w-64 overflow-hidden hover:scale-105 cursor-pointer">
      <img
        src={bot.avatar_url}
        alt={bot.name}
        className="rounded-lg w-full h-40 object-cover mb-4"
      />
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{bot.name}</h3>
      <p className="text-gray-600 mb-2 text-wrap text-xs w-full">
        {bot.catchphrase}
      </p>
      <p className="text-gray-600 text-sm mb-1">Class: {bot.bot_class}</p>
      <p className="text-gray-600 text-sm mb-1">Health: {bot.health}</p>
      <p className="text-gray-600 text-sm mb-1">Damage: {bot.damage}</p>
      <p className="text-gray-600 text-sm mb-1">Armor: {bot.armor}</p>
      <div className="mt-4">
        <button
          onClick={(e) => {
            e.stopPropagation()
            handleClick()
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          {handleDelete ? 'Release' : 'View'}
        </button>
        {handleDelete && (
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  )
}

export default BotCard
