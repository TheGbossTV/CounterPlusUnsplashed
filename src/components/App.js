import React from 'react'

import Counter from './Counter'
import ImageList from './ImageList'
import unsplashed from '../APIs/unsplashed'

class App extends React.Component {
    state = { image: [], searchTerm: '' }//starting the image state here to send it to the ImageList

    //Function that will be called once the user presses enter on the SearchBar
    //It has to be asynchronous because getting data takes a while (could also use promises)
    onSearchImage = async (searchTerm, numOfSearches) => {
        const response = await unsplashed.get('/search/photos', {//using the get method and getting the data from "https://api.unsplash.com/search/photos"
            params: {//paramaters for the search
                'query': searchTerm,
                'per_page': numOfSearches
            }
        })

        //console.log(response.data.results)
        //console.log(typeof (response.data.results))
        this.setState({ image: response.data.results, searchTerm: searchTerm })//setting the new values for the states
    }

    render() {
        return (
            <div>
                <Counter SubmitForm={this.onSearchImage} />{/*Send this callback so it can later be called by the child */}

                <ImageList images={this.state.image} term={this.state.searchTerm} />{/*Sending the images and the search term */}
            </div>
        )
    }
}

export default App