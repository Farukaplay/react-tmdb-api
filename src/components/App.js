import React from "react";
import SearchBar from "./SearchBar"
import MovieList from "./MovieList"
import Axios from "axios";

class App extends React.Component{

    state = {
        movies: [ ],

        searchMovie: ""
    }

    // async componentDidMount(){
    //   const apiURL = "http://localhost:3004/movies"
    //   const response = await fetch(apiURL)
    //   const data = await response.json()
      
    //   this.setState({movies: data})
      
    // }

    //https://api.themoviedb.org/3/list/8242122?api_key=${process.env.REACT_APP_API_KEY}&language=en-US

    async componentDidMount(){
      const apiURL = `https://api.themoviedb.org/3/list/8242122?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      const res = await (await Axios.get(apiURL)).data.items
      console.log(res);
      this.setState({movies: res})
    }


    deleteMovie = async (movie) => {
      Axios.post(`https://api.themoviedb.org/3/list/8242122/remove_item?media_id=${movie.id}&session_id=${process.env.REACT_APP_API_SESSION_ID}&api_key=${process.env.REACT_APP_API_KEY}`)
      const newMovieList = this.state.movies.filter(m => m.id !== movie.id)
      
      this.setState({movies: newMovieList})
      // this.setState(this.state = ({movies: newMovieList}))
    }



    searchMovie = (e) => {
      this.setState({searchMovie: e.target.value})
    }
    

    render(){

      let filteredList = this.state.movies.filter(movie => {

        if(movie.original_title){
          
          return movie.original_title.toLowerCase().includes(this.state.searchMovie.toLowerCase()) != 0
        }else{
          return movie.original_name.toLowerCase().includes(this.state.searchMovie.toLowerCase()) != 0
        }
      })

      return(
        <div className="container">
          <SearchBar searchMovieProp={this.searchMovie}/>
          <MovieList moviesList={filteredList} deleteMovieProp= {this.deleteMovie}/> 
        </div>
        )
    }
}

export default App