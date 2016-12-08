import { movieApi } from './api'
import axios from 'axios'

const movieIndex = {
  button_index: [{
    button_option: '热门'
  }, {
    button_option: '最新'
  }, {
    button_option: '经典'
  }, {
    button_option: '可播放'
  }, {
    button_option: '豆瓣高分'
  }, {
    button_option: '冷门佳片'
  }, {
    button_option: '犯罪'
  }, {
    button_option: '古装'
  }, {
    button_option: '纪录片'
  }, {
    button_option: '科幻'
  }, {
    button_option: '奇幻'
  }, {
    button_option: '冒险'
  }, {
    button_option: '音乐'
  }, {
    button_option: '真人秀'
  }, {
    button_option: '惊悚'
  }, {
    button_option: '历史'
  }, {
    button_option: '战争'
  }, {
    button_option: '传记'
  }, {
    button_option: '恐怖'
  }, {
    button_option: '武侠'
  }, {
    button_option: '脱口秀'
  }, {
    button_option: '运动'
  }, {
    button_option: '儿童'
  }, {
    button_option: '戏曲'
  }, {
    button_option: '运动'
  }, {
    button_option: '综艺'
  }, {
    button_option: '歌舞'
  }],
  year_options: [{
    year: '2016'
  }, {
    year: '2015'
  }, {
    year: '2014'
  }, {
    year: '2013'
  }, {
    year: '2012'
  }, {
    year: '2011'
  }, {
    year: '2010'
  }, {
    year: '2009'
  }, {
    year: '2008'
  }, {
    year: '2007'
  }, {
    year: '2006'
  }, {
    year: '2005'
  }, {
    year: '2004'
  }, {
    year: '2003'
  }, {
    year: '2002'
  }, {
    year: '2001'
  }, {
    year: '2000'
  }, {
    year: '1999'
  }, {
    year: '1998'
  }, {
    year: '1997'
  }, {
    year: '1996'
  }, {
    year: '1995'
  }, {
    year: '1994'
  }, {
    year: '1993'
  }, {
    year: '1992'
  }, {
    year: '1991'
  }, {
    year: '1990'
  }, {
    year: '80年代'
  }, {
    year: '70年代'
  }, {
    year: '60年代'
  }, {
    year: '50年代'
  }, {
    year: '40年代'
  }, {
    year: '30年代'
  }, {
    year: '20年代'
  }],
  place_options: [{
    place: '中国'
  }, {
    place: '台湾'
  }, {
    place: '香港'
  }, {
    place: '欧美'
  }, {
    place: '日本'
  }, {
    place: '英国'
  }, {
    place: '韩国'
  }],
  type_options: [{
    type: '剧情'
  }, {
    type: '喜剧'
  }, {
    type: '爱情'
  }, {
    type: '家庭'
  }, {
    type: '悬疑'
  }, {
    type: '动作'
  }, {
    type: '犯罪'
  }, {
    type: '古装'
  }, {
    type: '纪录片'
  }, {
    type: '科幻'
  }, {
    type: '奇幻'
  }, {
    type: '冒险'
  }, {
    type: '音乐'
  }, {
    type: '真人秀'
  }, {
    type: '惊悚'
  }, {
    type: '历史'
  }, {
    type: '战争'
  }, {
    type: '传记'
  }, {
    type: '恐怖'
  }, {
    type: '武侠'
  }, {
    type: '脱口秀'
  }, {
    type: '运动'
  }, {
    type: '儿童'
  }, {
    type: '戏曲'
  }, {
    type: '新闻'
  }, {
    type: '微电影'
  }, {
    type: '运动'
  }, {
    type: '综艺'
  }, {
    type: '歌舞'
  }],
  sort_options: [{
    sorting: '综合排序'
  }, {
    sorting: '豆瓣评分排序'
  }, {
    sorting: 'IMDB评分排序'
  }, {
    sorting: '影片年份排序'
  }]
}

export default {
  movieIndex,
  getDailyMovie () {
    return axios({
      method: 'get',
      url: movieApi.dailyMovieUrl(),
      withCredentials: true
    }
    )
  },
  searchMovie (keyword, limit = 6) {
    // TODO 使用方法构造querystring,暂时手工书写
    let url = movieApi.searchMovieUrl() + '?keyword=' + keyword + '&limit=' + limit
    return axios({
      method: 'get',
      url: url,
      withCredentials: true
    }
    )
  }
}
