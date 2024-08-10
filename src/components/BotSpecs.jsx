import React from 'react'

function BotSpecs({ bot, goBack, enlistBot }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4">{bot.name}</h2>
      <img
        src={bot.avatar_url}
        alt={bot.name}
        className="w-48 h-48 mx-auto mb-4"
      />
      <p>
        <strong>Class:</strong> {bot.bot_class}
      </p>
      <p>
        <strong>Health:</strong> {bot.health}
      </p>
      <p>
        <strong>Damage:</strong> {bot.damage}
      </p>
      <p>
        <strong>Armor:</strong> {bot.armor}
      </p>
      <p>
        <strong>Catchphrase:</strong> {bot.catchphrase}
      </p>
      <div className="mt-4 flex justify-between">
        <button
          onClick={goBack}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Go Back
        </button>
        <button
          onClick={() => enlistBot(bot)}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Enlist Bot
        </button>
      </div>
    </div>
  )
}

export default BotSpecs
