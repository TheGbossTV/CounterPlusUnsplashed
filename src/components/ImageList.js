import React from 'react'

import ImageCard from './ImageCard'

class ImageList extends React.Component {

    render() {
        const { images, term } = this.props//destructuring the props in a class

        const listOfImages = images.map((singularImage) => { //listing an image at a time
            //Create an ImageCard for each element in the images array,
            //This ImageCard will have a key because it is required when listing items
            return <ImageCard image={singularImage} key={singularImage.id} />
        })

        if (!term) {//When there is no term
            return <div>Image List</div>
        }

        return (
            <div>
                <div>Image List</div>
                <div>There are: {images.length} images for {term}</div>
                <hr />
                <div>
                    {listOfImages}
                </div>
            </div>
        )
    }
}

export default ImageList