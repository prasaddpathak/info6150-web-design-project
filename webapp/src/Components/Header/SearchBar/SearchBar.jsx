import React from "react";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import CancelIcon from "@material-ui/icons/Cancel";
import './SearchBar.scss';
import {useDispatch} from "react-redux";
// import {setSearch} from "../../actions/actions";
import {Link} from "react-router-dom";

class SearchBar extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            isSearchBarOpen : false,
            searchQuery : ""
        };
        this.handleSearchBarOpen = this.handleSearchBarOpen.bind(this);
        this.handleSearchQuery = this.handleSearchQuery.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }


    // const [isSearchBarOpen, setSearchBarOpen] = useState(false);
    
    handleSearchBarOpen() {
        // setSearchBarOpen(!isSearchBarOpen);
        this.setState({
            isSearchBarOpen : !this.state.isSearchBarOpen
        })
    };

    // const [searchQuery, setSearchQuery] = useState("");
    
    handleSearchQuery(e) {
        // setSearchQuery(e.target.value);
        this.setState({
            searchQuery : e.target.value
        });
    };

    // const searchRef = useRef();
    // useEffect(() => {
    //     if (isSearchBarOpen === true) {
    //         searchRef.current.focus();
    //     }
    // });

    // const dispatch = useDispatch();
    // const searchLink = useRef();

    handleSearch(e) {
        e.preventDefault();
        // dispatch(setSearch(searchQuery.toLowerCase()));
        if (this.state.searchQuery !== "")
            // searchLink.current.click();
            console.log(this.state.searchQuery);
    };

    render() {
        return (
            <div className={`${this.state.isSearchBarOpen ? "SearchBar  open" : "SearchBar"}`}>
                <form onSubmit={this.handleSearch} className={"search-container"}>
                    {
                        this.state.isSearchBarOpen &&
                        <>
                            {/* <Link to={"/home/search"} ref={searchLink}/> */}
                            <SearchSharpIcon style={{color: "grey"}} className="search-icon" fontSize="small"/>
                            <input id={"search-input"}
                                   name={"searchQuery"}
                                   value={this.state.searchQuery}
                                   onChange={this.handleSearchQuery}
                                   placeholder={"Search a track..."}
                                   type="text"
                                //    ref={searchRef}
                            />
                        </>
                    }
                </form>
                {
                    !this.state.isSearchBarOpen &&
                    <div className={"SearchBar-customPlaceholderOpen"}
                         onClick={this.handleSearchBarOpen}>
                        <SearchSharpIcon style={{color: "grey"}} className="search-icon" fontSize="small"/>
                        <p className={"hide"}>&nbsp;Search</p>
                    </div>
                }
                {
                    this.state.isSearchBarOpen &&
                    <div className={"SearchBar-customPlaceholderClose"}
                         onClick={this.handleSearchBarOpen}>
                        {/*
                        <p>Close&nbsp;</p>*/}
                        <CancelIcon style={{color: "grey"}} className="cancel hide" fontSize="small"/>
                    </div>
                }
            </div>
        );
    }
};

export default SearchBar;