// Random Prices Generator
let students = [
  {
    name: 'Aradhana Indra Daniswara',
    NIM: '2401955132'
  },
  {
    name: 'Lola Wiggins',
    NIM: '1541354142'
  },
  {
    name: 'Curt Boile',
    NIM: '1241521563'
  }
]

let prices = ['car', 'PC', 'bicycle', 'dog', 'set of keycaps', 'water bottles', 'TV', 'set of tires', 'charging cables']

const addStudent = (name, NIM) => {
  students.push({
    name: name,
    NIM: NIM
  })
}

const addPrices = (price) => {
  prices.push(price)
}

const priceGenerator = (people, prices) => {
  let winner = people[Math.floor(Math.random() * people.length)]
  let priceWon = prices[Math.floor(Math.random() * prices.length)]

  let lastDigit = winner.NIM[winner.NIM.length - 1]

  let best = ['1st', '2nd', '3rd']

  console.log(`Congratulations ${winner.name}! You won ${lastDigit} ${priceWon}!`)
  if (prices.indexOf(priceWon) >= 0 && prices.indexOf(priceWon) <= 2) {
    console.log(`You won the ${best[prices.indexOf(priceWon)]} best price!`)
  }
}

priceGenerator(students, prices)