import React, {useState} from 'react'

// components
import SearchBox from './SearchBox'

const CardList = React.lazy(() => import('./CardList'));

// utils
import {robots} from './utils/db/robots'

const App = () => {
  const [searchText, changeSearchText] = useState('');
  const [robotsList, setRobotsList] = useState(robots);

  const onChangeHandler = (text: string) => {
    if (text) {
      changeSearchText(text);
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

  return (<div className="tc">
    <h1>RoboFriends</h1>
    <SearchBox onChangeHandler={onChangeHandler}/>
    {robotsList?.length > 0 && <CardList robots={robotsList} />}
  </div>)
};

export default App;