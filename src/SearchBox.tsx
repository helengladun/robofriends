import React, { ChangeEvent } from 'react';

interface IProps {
    onChangeHandler: Function
}

const SearchBox = ({onChangeHandler}: IProps) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={(event: ChangeEvent<HTMLInputElement>) => onChangeHandler(event.target.value)}
      />
    </div>
  );
};

export default SearchBox