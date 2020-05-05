import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>  response.json())
    .then(users => {
      this.setState({robots: users})
    })
    
  }
  // Use Arrow Functions for own methods, 'this'
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value});
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    });

    //Loading Status
    if(this.state.robots.length === 0) {
      return <h1>LOADING</h1>
    } else {
      return(
        <div className='tc'>
          <h1>RoboFriends</h1>
           {/*COMPONENTS */}
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots}/>
          </Scroll>
        </div>
        );
    }
  }
}

export default App;