import React, {Suspense, useState, useEffect} from 'react'
import debounce from 'lodash/debounce'

// components
import SearchBox from './components/SearchBox'
import {Spinner} from "./components/Spinner";

// utils
import {robots} from './utils/db/robots'

const CardList = React.lazy(() => import('./components/CardList'));

const App = () => {
  const [searchText, changeSearchText] = useState('');
  const [robotsList, setRobotsList] = useState(robots);

  const onChangeHandler = (text: string) => {
    changeSearchText(text);
  };

  useEffect(() => {
    if (searchText) {
      setRobotsList(
        robots
          .filter(
            robot =>
              robot
                .name
                .toLowerCase()
                .search(searchText.toLowerCase()) > -1
          )
      )
    } else {
      setRobotsList(robots)
    }}, [searchText]);

  return (
    <Suspense fallback={<div className="full-screen"><Spinner /></div>}>
      <div className="tc">
        <h1 className="main-title f1">RoboFriends</h1>
        <SearchBox onChangeHandler={debounce(onChangeHandler, 500)}/>
        {robotsList?.length > 0 && <CardList robots={robotsList} />}
      </div>
    </Suspense>
  )
};

export default App;