import React, { Component } from 'react'
import Navbar from './component/Navbar'
import NewsITemContainer from './component/NewsITemContainer'
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  article = [];
  constructor() {
    super();
    this.state = {
      article: this.article,
      loading: false,
      page: 1,
      category: 'general',
      pageSize: 6,
      progress: 0,
      totalArticles: 0,
      theme: "light"
    }
  }
  themeChanger = (colour) => {
    if (colour === 'light') {
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      this.setState({ theme: colour })
    } else {
      document.body.style.backgroundColor = 'rgb(3 1 12)'
      document.body.style.color = 'white'
      this.setState({ theme: colour })
    }
  }
  updateNEWS = async (URL) => {
    this.setState({
      loading: true,
      progress: this.state.progress + 40
    })
    let NEWS = await fetch(URL);
    this.setState({
      progress: this.state.progress + 10
    })
    let ParsedNEWS = await NEWS.json();
    this.setState({
      progress: this.state.progress + 20
    })
    this.setState({
      loading: false,
      article: ParsedNEWS.articles,
      totalArticles: ParsedNEWS.totalResults,
      progress: 100
    })
  }
  NEWSchanger = async (newstype) => {
    let URL = `https://newsapi.org/v2/top-headlines?language=en&category=${newstype}&apiKey=fda87207fb004d9cb96434b1ecd3c07d&pageSize=${this.state.pageSize}&page=1`
    this.setState({
      category: newstype,
      page: 1
    })
    this.updateNEWS(URL);
  }
  async componentDidMount() {
    let URL = `https://newsapi.org/v2/top-headlines?language=en&category=${this.state.category}&apiKey=fda87207fb004d9cb96434b1ecd3c07d&pageSize=${this.state.pageSize}&page=1`
    this.updateNEWS(URL);
  }
  fetchMoreData = async () => {
    let URL = `https://newsapi.org/v2/top-headlines?language=en&category=${this.state.category}&apiKey=fda87207fb004d9cb96434b1ecd3c07d&pageSize=${this.state.pageSize}&page=${this.state.page + 1}`
    this.setState({
      loading: true,
    })
    let NEWS = await fetch(URL);
    let ParsedNEWS = await NEWS.json();
    this.setState({
      loading: false,
      article: this.state.article.concat(ParsedNEWS.articles),
      totalArticles: ParsedNEWS.totalResults,
      progress: 100,
      page: this.state.page + 1
    })
  }
  render() {
    return (
      <div>
        <LoadingBar color='#f11946' progress={this.state.progress}
          onLoaderFinished={() => this.setState({ progress: 0 })} />
        <Navbar NEWSchanger={this.NEWSchanger} category={this.state.category} themeChanger={this.themeChanger} theme={this.state.theme} />
        <NewsITemContainer theme={this.state.theme} NEWS={this.state.category} Article={this.state.article} updatePage={this.updatePage}
          page={this.state.page} totalArticles={this.state.totalArticles} loading={this.state.loading} fetchMoreData={this.fetchMoreData} />
      </div>
    )
  }
}