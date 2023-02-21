import React from "react"

const MovieList = (props) => {
    

    return(
        <div className="row">
            <h2 className="text-center mb-4">TMDB</h2>
            {props.moviesList.map(movie => 

                <div key={movie.id} className="col-lg-2">
                    <div className="card mb-4 shadow-sm">
                        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt="movie afiş"/>
                            <div className="card-body">
                                {/* <h5 className="card-title py-3 border-bottom">{movie.original_title || movie.original_name}</h5> */}
                                <p className="card-text">Popularity: {movie.popularity}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <button name="btn-delete" type="button" onClick={() => props.deleteMovieProp(movie)} className="btn btn-md btn-outline-danger">Delete</button>
                                    <h2><span className="badge bg-info">{movie.vote_average}</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
                )}
        </div>
        )
    }

export default MovieList