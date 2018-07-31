/**
 * @version 1.0.0
 * @author Leegeunhyeok
 */
'use strict'

const request = require('request')
const cheerio = require('cheerio')

class SteamStore {
  /**
   * @description 스팀 상점 키워드 검색
   * @param {string} keyword 검색할 키워드
   * @returns {array} 검색된 상품 리스트 (title, id)
   */
  async search (keyword) {
    try {
      // 해당 키워드로 스팀 상점 검색
      const $body = await new Promise((resolve, reject) => {
        request(`https://store.steampowered.com/search/?term=${keyword}`, (err, res, body) => {
          if (err) {
            reject(err)
          }
          resolve(body)
        })
      })

      // Body 데이터 로드
      const $ = cheerio.load($body, {decodeEntities: false})
      
      // 검색 리스트 (결과 저장 리스트)
      let searchList = []

      // 해당 상품 타이틀과 ID 조회
      $('.search_result_row').each(function(idx) {
        const title = $(this).find('.title').text()
        const href = $(this).attr('href')
        const temp_id = /\/(\d+)/.exec(href)
        const id = temp_id ? temp_id[1] : undefined
        searchList.push({title: title, src: href, id: id})
      })

      // 결과 반환
      return searchList

    } catch (e) {

      console.log(e)

      // 빈 리스트 반환
      return []

    }
  }

  /**
   * @description appId에 해당하는 제품의 자세한 정보를 제공합니다.
   * @param {string} 조회할 appId
   * @param {string} 국가 코드 (기본값: us)
   * @return {any} appId에 해당하는 제품의 상세 정보 객체
   */
  async detail (appId, lang) {
    try {
      // 국가 코드가 없는 경우 기본값으로 us 사용
      lang = lang || 'us'

      const $body = await new Promise((resolve, reject) => {
        request(`https://store.steampowered.com/api/appdetails?appids=${appId}&cc=${lang}&l=${lang}`, (err, res, body) => {
          if (err) {
            reject(err)
          }
          resolve(body)
        })
      })

      return JSON.parse($body)

    } catch (e) {

      console.log(e)

      // 빈 객체 반환
      return {}

    }
  }
}

exports.SteamStore = SteamStore
