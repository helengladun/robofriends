import React from 'react';

const Scroll = (props: React.PropsWithChildren<{}>) => {
  return <div className="overflow-y-scroll ba bw3 scroll">{props.children}</div>;
};

export default Scroll;

Scroll.whyDidYouRender = true;
