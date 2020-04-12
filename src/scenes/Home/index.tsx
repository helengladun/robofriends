import React, { useCallback, useEffect, useState } from 'react';
import debounce from 'lodash/debounce';
import { useDispatch, useSelector } from 'react-redux';

// components
import Spinner from '../components/Spinner';
import Header from '../components/Header';
import SearchBox from './components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import CardList from './components/CardList';

// interfaces
import { IRobot } from '../models/IRobot';

// actions
import { requestRobots } from '../services/robots/actions';
import { setSearchField } from '../services/search/actions';

// reducers
import { IApplicationState } from '../../store/rootReducer';
import { IRobotsState } from '../services/robots/reducers';
import { ISearchState } from '../services/search/reducers';

const App = () => {
    const dispatch = useDispatch();
  const { robotsList, error, loading }: IRobotsState = useSelector(
    (state: IApplicationState) => state.robots
  );
  const { searchField }: ISearchState = useSelector((state: IApplicationState) => state.search);
  const [searchResult, setSearchResults] = useState<IRobot[]>([]);

  const debouncedChange = debounce(value => {
    dispatch(setSearchField(value));
  }, 500);

  const onChangeHandler = useCallback(
    (event: React.SyntheticEvent<HTMLInputElement>): void => {
      event.persist();
      debouncedChange(event.currentTarget.value);
    },
    [debouncedChange]
  );

  useEffect(() => {
    dispatch(requestRobots());
  }, [dispatch]);

  useEffect(() => {
    const results = robotsList.filter(
      (robot: IRobot) => robot.name.toLowerCase().search(searchField.toLowerCase()) > -1
    );
    setSearchResults(results);
  }, [robotsList, searchField]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="tc">
      <Header />
      <SearchBox onChangeHandler={onChangeHandler} />
      {error && <div className="red">{error}</div>}
      {robotsList && robotsList.length > 0 && (
        <Scroll>
          <ErrorBoundary>
            {searchField === '' ? (
              <CardList robots={robotsList} />
            ) : (
              <CardList robots={searchResult} />
            )}
          </ErrorBoundary>
        </Scroll>
      )}
    </div>
  );
};

export default App;
