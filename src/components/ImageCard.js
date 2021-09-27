import React from 'react'

class ImageCard extends React.Component {
    render() {
        const { image } = this.props //destructuring of the props

        return (//presenting the images
            <div>
                <img
                    src={image.urls.small}
                    alt={image.description}
                />
            </div>
        )
    }
}

export default ImageCard