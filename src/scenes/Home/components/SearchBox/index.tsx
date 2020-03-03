import React from 'react';

interface IProps {
  onChangeHandler(event: React.SyntheticEvent<HTMLInputElement>): void
}

const SearchBox = ({ onChangeHandler }: IProps) => (
  <div className="pa2">
    <input
      aria-label="search robots"
      className="pa3 ba b--green bg-lightest-blue"
      type="search"
      placeholder="search robots"
      onChange={onChangeHandler}
    />
  </div>
);

export default SearchBox;
SearchBox.whyDidYouRender = true;
