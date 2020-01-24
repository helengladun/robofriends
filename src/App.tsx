import React, {Suspense, useState} from 'react'

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
    if (text) {
      changeSearchText(text.toLowerCase());
      setRobotsList(
        robotsList
          .filter(
  robot =>
              robot
                .name
                .toLowerCase()
                .search(searchText) > -1
          )
        );
    } else {
      setRobotsList(robots)
    }
  };

  return (
    <Suspense fallback={<div className="full-screen"><Spinner /></div>}>
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox onChangeHandler={onChangeHandler}/>
        {robotsList?.length > 0 && <CardList robots={robotsList} />}
      </div>
    </Suspense>
  )
};

export default App;