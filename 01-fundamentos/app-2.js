import fs from 'fs'

const data = fs.readFileSync('README.md', 'utf8')

const reactWords = data.match(/react/gi)

console.log(reactWords.length)

