import React, {Suspense, useEffect} from 'react'
import debounce from 'lodash/debounce'
import {connect} from 'react-redux'

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

const CardList = React.lazy(() => import('./components/CardList'));

interface PropsFromState {
  searchField: string,
  robots: IRobot[],
  isLoading: boolean,
  error: string
}

interface PropsFromDispatch {
  setSearchField: Function,
  getRobotsPending: Function
}

interface IProps extends PropsFromState, PropsFromDispatch{
}

const App = ({setSearchField, searchField, isLoading, robots, error, getRobotsPending}: IProps) => {
  const onChangeHandler = (text: string) => {
    setSearchField(text);
  };

  useEffect(() => {
    getRobotsPending()
  }, []);

  const getRobots = (searchText: string) => {
    if (searchText) return robots.filter(
      (robot: IRobot) => robot.name.toLowerCase().search(searchText.toLowerCase()) > -1);
    else return robots
  };

  return isLoading ? (<Spinner />) :
  (<Suspense fallback={<Spinner />}>
    <div className="tc">
      <h1 className="main-title f1">RoboFriends</h1>
      <SearchBox onChangeHandler={debounce(onChangeHandler, 500)}/>
      {robots && robots.length > 0 &&
        <Scroll>
          <ErrorBoundary>
            <CardList robots={getRobots(searchField)} />
          </ErrorBoundary>
        </Scroll>
      }
    </div>
    </Suspense>)
};

const mapStateToProps = (state: ApplicationState) => ({
  searchField: state.search.searchField,
  robots: state.robots.robotsList,
  isLoading: state.robots.loading,
  error: state.robots.error
});

const mapDispatchToProps: PropsFromDispatch = ({
  setSearchField,
  getRobotsPending
});

export default connect(mapStateToProps, mapDispatchToProps)(App);