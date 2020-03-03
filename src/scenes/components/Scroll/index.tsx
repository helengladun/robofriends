import React from 'react';

type Props = {
  children?: JSX.Element
};

const Scroll = (props: Props) => {
  return <div className="overflow-y-scroll ba bw3 scroll">{props.children}</div>;
};

export default Scroll;

Scroll.whyDidYouRender = true;
