import React, {Suspense, useState, useEffect} from 'react'
import debounce from 'lodash/debounce'

// components
import SearchBox from './components/SearchBox'
import {Spinner} from './components/Spinner';
import Scroll from './components/Scroll'

// interfaces
import {IRobot} from "./interfaces/IRobot";

const CardList = React.lazy(() => import('./components/CardList'));

const App = () => {
  const [searchText, changeSearchText] = useState('');
  const [robotsList, setRobotsList] = useState([]);

  const onChangeHandler = (text: string) => {
    changeSearchText(text);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setRobotsList(users));
  }, []);

  const getRobots = () => robotsList
      .filter(
        (robot: IRobot) =>
          robot
            .name
            .toLowerCase()
            .search(searchText.toLowerCase()) > -1
      )
  ;

  return (
    <Suspense fallback={<div className="full-screen"><Spinner /></div>}>
      <div className="tc">
        <h1 className="main-title f1">RoboFriends</h1>
        <SearchBox onChangeHandler={debounce(onChangeHandler, 500)}/>
        {robotsList?.length > 0 && <Scroll><CardList robots={getRobots()} /></Scroll>}
      </div>
    </Suspense>
  )
};

export default App;