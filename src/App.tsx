import React, {useEffect, useState} from 'react'
import debounce from 'lodash/debounce'
import {useDispatch, useSelector} from 'react-redux'

// components
import ErrorBoundary from './modules/shared/components/ErrorBoundary';
import SearchBox from './modules/search/components/SearchBox'
import {Spinner} from './modules/shared/components/Spinner';
import Scroll from './modules/shared/components/Scroll'
import Header from './modules/shared/components/Header'

// interfaces
import {IRobot} from "./modules/shared/models/IRobot";

// actions
import {setSearchField} from "./modules/search/store/actions";
import {requestRobots} from "./modules/robots/store/actions";

// reducers
import {IRobotsState} from "./modules/robots/store/reducers";
import {ISearchState} from "./modules/search/store/reducers";
import {ApplicationState} from './store/rootReducer';
import CardList from "./modules/robots/components/CardList";

const App = () => {
  const dispatch = useDispatch();
  const {robotsList, error, loading}: IRobotsState = useSelector((state: ApplicationState) => state.robots);
  const {searchField}: ISearchState = useSelector((state: ApplicationState) => state.search);

  const [searchResult, setSearchResults] = useState<IRobot[]>([]);

  const onChangeHandler = (text: string) => {
    dispatch(setSearchField(text));
  };

  useEffect(() => {
    dispatch(requestRobots());
  }, [dispatch]);

  useEffect(() => {
    const results = robotsList.filter(
      (robot: IRobot) => robot.name.toLowerCase().search(searchField.toLowerCase()) > -1);
    setSearchResults(results)
  }, [searchField, robotsList]);

  if (loading) {
    return <Spinner />
  }

  return (
    <div className="tc red">
      <Header />
      <SearchBox onChangeHandler={debounce(onChangeHandler, 500)}/>
      {error && <div className="red">{error}</div>}
      {robotsList && robotsList.length > 0 &&
        <Scroll>
          <ErrorBoundary>
            { searchField === '' ? <CardList robots={robotsList} /> : <CardList robots={searchResult} /> }
          </ErrorBoundary>
        </Scroll>
      }
    </div>
  )
};

export default App;