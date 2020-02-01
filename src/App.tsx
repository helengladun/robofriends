import React, {Suspense, useCallback, useEffect} from 'react'
import debounce from 'lodash/debounce'
import {useDispatch, useSelector} from 'react-redux'

// components
import ErrorBoundary from "./components/ErrorBoundary";
import SearchBox from './components/SearchBox'
import {Spinner} from './components/Spinner';
import Scroll from './components/Scroll'

// interfaces
import {IRobot} from "./interfaces/IRobot";

// actions
import {setSearchField} from "./store/actions";
import {ApplicationState} from "./index";
import {getRobotsPending} from "./modules/robots/store/actions";
import {IRobotsState} from "./modules/robots/store/reducers";
import {ISearchState} from "./store/reducers";

const CardList = React.lazy(() => import('./components/CardList'));

const App = () => {
  const dispatch = useDispatch();
  const {robotsList, error, loading}: IRobotsState = useSelector((state: ApplicationState) => state.robots);
  const {searchField}: ISearchState = useSelector((state: ApplicationState) => state.search);

  const onChangeHandler = (text: string) => {
    dispatch(setSearchField(text));
  };

  const fetchRobots = useCallback(
    () => dispatch(getRobotsPending()),
    [dispatch]
  );

  useEffect(() => {
    fetchRobots()
  }, [fetchRobots]);

  const getRobots = (searchText: string) => {
    if (searchText) return robotsList.filter(
      (robot: IRobot) => robot.name.toLowerCase().search(searchText.toLowerCase()) > -1);
    else return robotsList
  };

  return loading ? (<Spinner />) :
  (<Suspense fallback={<Spinner />}>
    <div className="tc">
      <h1 className="main-title f1">RoboFriends</h1>
      <SearchBox onChangeHandler={debounce(onChangeHandler, 500)}/>
      {<div className="red">{error}</div>}
      {robotsList && robotsList.length > 0 &&
        <Scroll>
          <ErrorBoundary>
            <CardList robots={getRobots(searchField)} />
          </ErrorBoundary>
        </Scroll>
      }
    </div>
    </Suspense>)
};

export default App;