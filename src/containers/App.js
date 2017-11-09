import React from 'react'
import SongList from '../components/SongList'

// on the stateful page is the ONLY page you write "this"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(id) {
    this.setState({
      id: id
    })
  }

  render(){

    return(

      <div>
        <h1>JukeBox!</h1>
        <SongList
          data={this.props.data}
          stateId={this.state.id}
          handleClick={this.handleClick}
        />
      </div>
    )
  }
}


export default App;
