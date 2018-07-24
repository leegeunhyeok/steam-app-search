const SteamSearch = require('../src/index.js').SteamStore
const SteamStore = new SteamSearch()

const asyncFunc = async () => {
  console.log(await SteamStore.search('cs'))
}

const promiseMet = () => {
  SteamStore.search('cs').then(results => {
      console.log(results)
  })
}

asyncFunc()

promiseMet()
