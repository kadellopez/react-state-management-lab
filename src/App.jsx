import React, { useState, useEffect } from 'react'
import './App.css'

const ZombieFighterApp = () => {
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [totalStrength, setTotalStrength] = useState(0)
  const [totalAgility, setTotalAgility] = useState(0)
  const [zombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ])

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter]) 
      setMoney(money - fighter.price) 
    } else {
      console.log('Not enough money')
    }
  }

  const handleRemoveFighter = (index) => {
    const removedFighter = team[index] 
    setTeam(team.filter((_, i) => i !== index)) 
    setMoney(money + removedFighter.price) 

    const TotalStrength = team.reduce(
      (total, fighter, i) => i !== index ? total + fighter.strength : total, 0
    )
    const TotalAgility = team.reduce(
      (total, fighter, i) => i !== index ? total + fighter.agility : total, 0
    )

    setTotalStrength(TotalStrength)
    setTotalAgility(TotalAgility)
  }

  const calculateTotalAttributes = () => {
    const strength = team.reduce((total, fighter) => total + fighter.strength, 0)
    const agility = team.reduce((total, fighter) => total + fighter.agility, 0)
    setTotalStrength(strength)
    setTotalAgility(agility)
  }

  useEffect(() => {
    calculateTotalAttributes()
  }, [team])

  return (
    <div>
      <h1>Zombie Fighters</h1>
      <p>Money: ${money}</p>
      <ul className="fighter-list">
        {zombieFighters.map((fighter, index) => (
          <li key={index} className="fighter-item">
            <img src={fighter.img} alt={fighter.name} />
            <h2>{fighter.name}</h2>
            <p>Price: ${fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </li>
        ))}
      </ul>

      <h2>Your Team</h2>
      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <ul className="team-list">
          {team.map((member, index) => (
            <li key={index} className="team-item">
              <img src={member.img} alt={member.name} />
              <h2>{member.name}</h2>
              <p>Price: ${member.price}</p>
              <p>Strength: {member.strength}</p>
              <p>Agility: {member.agility}</p>
              <button onClick={() => handleRemoveFighter(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}

      <h3>Total Team Strength: {totalStrength}</h3>
      <h3>Total Team Agility: {totalAgility}</h3>
    </div>
  )
}

export default ZombieFighterApp
