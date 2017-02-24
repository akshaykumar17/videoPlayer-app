import { connect } from 'react-redux';
import React, { Component } from 'react';
import videoSearch from '../actions/videoSearch';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = { input: '' };
    }
    handleChange(e) {
        this.setState({ input: e.target.value })
    }
    searchInput()
    {
        this.props.videoSearch(this.state.input);        
    }
    render() {
        return (
            <div className="search">
                <input placeholder="search video"
                        value={this.state.input}
                        onChange={this.handleChange.bind(this)}
                />
                <button type="submit" onClick={this.searchInput.bind(this)}>Search</button>
            </div>
        );
    }
};

export default connect(null, { videoSearch })(SearchBar);