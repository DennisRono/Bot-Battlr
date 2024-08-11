import React, { useState, useEffect } from 'react'
import BotCollection from './components/BotCollection'
import MyBotArmy from './components/MyBotArmy'
import BotSpecs from './components/BotSpecs'
import SortBar from './components/SortBar'
import FilterBar from './components/FilterBar'

function App() {
  const [bots, setBots] = useState([])
  const [army, setArmy] = useState([])
  const [selectedBot, setSelectedBot] = useState(null)
  const [sortBy, setSortBy] = useState('health')
  const [filter, setFilter] = useState('All')
  const [isCollectionLoading, setIsCollectionLoading] = useState(false)
  const [isMyArmyLoading, setIsMyArmyLoading] = useState(false)

  useEffect(() => {
    setIsCollectionLoading(true)
    fetch('https://bot-battlr-l2ol.onrender.com/bots')
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch(() => console.error('failed to get bots!'))
      .finally(() => setIsCollectionLoading(false))

    setIsMyArmyLoading(true)
    fetch('https://bot-battlr-l2ol.onrender.com/enlistedBots')
      .then((response) => response.json())
      .then((enlistedBots) => setArmy(enlistedBots))
      .catch(() => console.error('failed to get enlisted bots!'))
      .finally(() => setIsMyArmyLoading(false))
  }, [])

  const enlistBot = (bot) => {
    if (
      !army.find((b) => b.id === bot.id) &&
      !army.find((b) => b.bot_class === bot.bot_class)
    ) {
      fetch('https://bot-battlr-l2ol.onrender.com/enlistedBots', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bot),
      })
        .then((response) => response.json())
        .then((newBot) => {
          setArmy([...army, newBot])
          setBots(bots.filter((b) => b.id !== bot.id))
        })
        .catch(() => console.error('failed to get enlisted bots!'))
    }
  }

  const releaseBot = (bot) => {
    fetch(`https://bot-battlr-l2ol.onrender.com/enlistedBots/${bot.id}`, {
      method: 'DELETE',
    }).then(() => {
      setArmy(army.filter((b) => b.id !== bot.id))
    })
  }

  const deleteBot = (bot) => {
    fetch(`https://bot-battlr-l2ol.onrender.com/bots/${bot.id}`, {
      method: 'DELETE',
    }).then(() => {
      setBots(bots.filter((b) => b.id !== bot.id))
      setArmy(army.filter((b) => b.id !== bot.id))
    })
  }

  const viewBotSpecs = (bot) => {
    setSelectedBot(bot)
  }

  const goBack = () => {
    setSelectedBot(null)
  }

  const filteredBots = bots.filter(
    (bot) => filter === 'All' || bot.bot_class === filter
  )
  const sortedBots = filteredBots.sort((a, b) => b[sortBy] - a[sortBy])

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <MyBotArmy
        army={army}
        releaseBot={releaseBot}
        deleteBot={deleteBot}
        isMyArmyLoading={isMyArmyLoading}
      />
      <SortBar sortBy={sortBy} setSortBy={setSortBy} />
      <FilterBar filter={filter} setFilter={setFilter} />
      {selectedBot ? (
        <BotSpecs bot={selectedBot} goBack={goBack} enlistBot={enlistBot} />
      ) : (
        <BotCollection
          bots={sortedBots}
          enlistBot={viewBotSpecs}
          isCollectionLoading={isCollectionLoading}
        />
      )}
    </div>
  )
}

export default App
