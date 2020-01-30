import React, {Suspense, useState, useEffect} from 'react'
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

const CardList = React.lazy(() => import('./components/CardList'));

interface PropsFromState {
  searchField: string
}

interface PropsFromDispatch {
  setSearchField: Function
}

interface IProps extends PropsFromState, PropsFromDispatch{
}

const App = ({setSearchField, searchField}: IProps) => {
  const [robotsList, setRobotsList] = useState([]);

  const onChangeHandler = (text: string) => {
    setSearchField(text);
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
            .search(searchField.toLowerCase()) > -1
      )
  ;

  return (
    <Suspense fallback={<div className="full-screen"><Spinner /></div>}>
      <div className="tc">
        <h1 className="main-title f1">RoboFriends</h1>
        <SearchBox onChangeHandler={debounce(onChangeHandler, 500)}/>
        {robotsList?.length > 0 &&
          <Scroll>
            <ErrorBoundary>
              <CardList robots={getRobots()} />
            </ErrorBoundary>
          </Scroll>
        }
      </div>
    </Suspense>
  )
};

const mapStateToProps = (state: any) => ({
  searchField: state.searchField
});

const mapDispatchToProps: PropsFromDispatch = ({
  setSearchField
});

export default connect(mapStateToProps, mapDispatchToProps)(App);