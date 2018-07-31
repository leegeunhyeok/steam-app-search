<div align="center">

  <img src="./steam-logo.png">

</div>

## 설명
Steam 플랫폼의 상품을 검색하여 상품 타이틀과 고유 ID, 상세정보를 제공합니다.

## 설치
```bash
npm install steam-app-search
```

## 모듈 테스트
`cs` 키워드를 검색한 결과 리스트가 출력됩니다.
```bash
npm test
```

## 사용법
- 원하는 키워드 문자열을 `search` 메소드의 인자로 전달하면 됩니다.
- 아래 예제는 `cs` 키워드를 검색한 결과 리스트가 출력됩니다.
```javascript
const SteamSearch = require('steam-app-search').SteamStore
const SteamStore = new SteamSearch()

// 비동기함수 방식
const asyncFunc = async () => {
  /* CS 키워드 검색 */
  const result = await SteamStore.search('cs')

  /* 검색 결과 중 첫 번째 항목의 ID 상세정보 조회 */
  /* 두 번째 인자로 국가코드 입력, 예제는 한국어 정보 조회 */
  const detail = await SteamStore.detail(result[0].id, 'koreana')

  console.log(result)
  console.log(detail)
}

// 프라미스 방식
const promiseMet = () => {
  SteamStore.search('cs').then(results => {
      console.log(results)
  })
}

asyncFunc()

promiseMet()
```
## 개발자
- `Leegeunhyeok` - [Github](https://github.com/leegeunhyeok)

## 라이센스
- MIT
