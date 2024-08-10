import React from 'react'
import BotCard from './BotCard'

function BotCollection({ bots, enlistBot }) {
  return (
    <div className="my-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Bot Collection
      </h2>
      <div className="flex flex-wrap justify-center">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} handleClick={() => enlistBot(bot)} />
        ))}
      </div>
    </div>
  )
}

export default BotCollection
