function SearchContainer(props) {
    return ( 
        <section className="search-bg text-light py-4">
        <div className="container">
            <div className="d-flex flex-column align-items-start justify-content-between">
               <img className="search-logo" src={props.logo} alt="" />
               <div className="input-group mt-2">
                    <input ref={props.getRef}  type="text" className ="form-control" 
                        placeholder="Search for a word"/>
                    <button  onClick={props.handleClick} className="btn search-button btn-lg" 
                        type="button" id="button-addon2"><i className="fas fa-search"></i>
                    </button>
                    
              </div>
              
            </div>
        </div>
    </section>
     );
}

export default SearchContainer;