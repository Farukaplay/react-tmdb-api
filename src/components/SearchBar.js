import React from "react"


class SearchBar extends React.Component{


    render(){

        return(
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-row mb-4 mt-5">
                    <div className="col-12">
                        <input onChange={this.props.searchMovieProp} type="text" className="form-control" placeholder="Search"/>
                    </div> 
                </div>
            </form> 
        )
    }
}

export default SearchBar