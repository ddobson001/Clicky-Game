
function shuffle(array){
  const _array = array.slice(0)
  for (let i = 0; i < array.length; i++) {
    let randomIndex = Math.floor(Math.random() * (i + 1))
    let temp = _array[i]
    _array[i] = _array[randomIndex]
    _array[randomIndex] = temp
  }

  return _array
}
export default function initializeDeck() {
  let id = 0
  const cards = ['vesuvan-doppelganger', 'black-lotus', 'grindstone', 'jace-the-mind-sculptor', 
    'liliana-of-the-veil', 'morphling', 'tolarian-academy', 'akroma-angel-of-wrath', 'phage-the-untouchable',
    'wrath-of-god', 'reya-dawnbringer', 'counterspell'
  ].reduce((acc, type) => {
    acc.push({
      id: id++,
      type
    }) 
    return acc
  }, [])

  return shuffle(cards)
}

