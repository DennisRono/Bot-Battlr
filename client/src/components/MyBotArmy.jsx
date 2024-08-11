import React from 'react'
import BotCard from './BotCard'

function YourBotArmy({ army, releaseBot, deleteBot, isMyArmyLoading }) {
  return (
    <div className="my-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
        Your Bot Army
      </h2>
      <div className="flex flex-wrap justify-start">
        {isMyArmyLoading ? (
          <div className="flex items-center justify-center">
            <p className="">Loading...</p>
          </div>
        ) : (
          army.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              handleClick={() => releaseBot(bot)}
              handleDelete={() => deleteBot(bot)}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default YourBotArmy
