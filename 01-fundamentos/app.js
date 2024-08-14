import fs from 'fs'

const data = fs.readFileSync('README.md', 'utf8')

const newData = data.replace(/React/g, 'Angular')

fs.writeFileSync('README-ANGULAR.md', newData)