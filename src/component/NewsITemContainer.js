import React, { Component } from 'react'
import NewsITem from './NewsITem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";


export default class NewsITemContainer extends Component {
    render() {
        return (
            <>
                <h3 style={{ marginTop: '90px' }} className='text-center'>PaperWala - Top Headlines
                    - {this.props.NEWS[0].toUpperCase() + this.props.NEWS.slice(1)}</h3>
                {this.props.loading && <Spinner theme={this.props.theme} />}
                <InfiniteScroll
                    dataLength={this.props.Article.length}
                    next={this.props.fetchMoreData}
                    hasMore={this.props.Article.length <= this.props.totalArticles}
                    loader={this.props.Article.length !== 0 && <Spinner theme={this.props.theme} />}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>You have caught all NEWS</b>
                        </p>
                    }>
                    <div className='container'>
                        <div className='row'>
                            {this.props.Article.map((element) => {
                                return <div className='col-md-4' key={element.url}>
                                    <NewsITem theme={this.props.theme} title={element.title} description={element.description}
                                        imageURL={element.urlToImage}
                                        newsURL={element.url} author={element.author} date={element.publishedAt} name={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}
