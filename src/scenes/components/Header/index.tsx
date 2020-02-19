import React from 'react';

const Header = () => (
  <h1 className="main-title f1">RoboFriends</h1>
);

export default React.memo(Header)
Header.whyDidYouRender = true;