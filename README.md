# steam-store-search

> Steam 플랫폼의 상품을 검색하여 상품 ID를 제공합니다.

## 설치
```bash
npm install steam-store-search
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
const SteamSearch = require('steam-store-search').SteamStore
const SteamStore = new SteamSearch()

// 비동기함수 방식
const asyncFunc = async () => {
  console.log(await SteamStore.search('cs'))
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
