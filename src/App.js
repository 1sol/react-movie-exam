import React, { Component} from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state = {
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Matrix",
            poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY1200_CR84,0,630,1200_AL_.jpg"
          },
          {
            title: "Full Metal Jacket",
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZtokyqrOsga2TogvQccVfH57JAXnQDPdWkA0Z1lab81Fnn2CR7g&s"
          },
          {
            title: "Oldboy",
            poster: "https://images-na.ssl-images-amazon.com/images/I/41YK2JYRMJL._SY445_.jpg"
          },
          {
            title: "Star wars",
            poster: "https://lumiere-a.akamaihd.net/v1/images/star-wars-the-rise-of-skywalker-theatrical-poster-600_889ecbb6.jpeg?region=0%2C0%2C600%2C889"
          },
          {
            title: "IRON MAN",
            poster: "https://is1-ssl.mzstatic.com/image/thumb/Video128/v4/89/74/cf/8974cfa0-5e27-1c5e-390a-e97e5d12a51d/contsched.rdzrzprk.lsr/268x0w.jpg"
          }
        ]
      })
    }, 1000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
