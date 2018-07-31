const SteamSearch = require('../index.js').SteamStore
const SteamStore = new SteamSearch()

const asyncFunc = async () => {
  /* CS 키워드 검색 */
  const result = await SteamStore.search('cs')

  /* 첫 항목의 appId 상세 정보 */
  /* 한국어 검색 */
  const detail = await SteamStore.detail(result[0].id, 'koreana')

  console.log(result)
  console.log(detail)
}

const promiseMet = () => {
  SteamStore.search('cs').then(results => {
      console.log(results)
  })
}

asyncFunc()

// promiseMet()
