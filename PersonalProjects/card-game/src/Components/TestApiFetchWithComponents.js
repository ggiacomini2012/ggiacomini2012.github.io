import React from 'react'

class TestApiFetchWithComponents extends React.Component {
constructor(){
  super()
  this.state = {
    apiObjectRandomDogImage: ''
  }
}

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((returnedJsonObject) => returnedJsonObject.json())
      .then((translatedObject) => {
        console.log(`You succeded in building a fetchApi`)
        console.log(translatedObject)
        this.setState({
          apiObjectRandomDogImage: translatedObject
        })
      })
      .catch((error) => {
      console.log(`${error}
      Something went wrong with
      fetch inside the class TestApi`)})
  }
  
  render() {
    return (
      <div>
        <div>{ `${this.state.apiObjectRandomDogImage.message}` }</div>
        <img src={ this.state.apiObjectRandomDogImage.message } alt="" />
      </div>
    )
  }
}

export default TestApiFetchWithComponents