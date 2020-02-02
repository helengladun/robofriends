import React from 'react';

interface IProps {
}

const Scroll = (props: React.PropsWithChildren<IProps>) => {
  return (
    <div className="overflow-y-scroll ba bw3 scroll">
      {props.children}
    </div>
  )
};

export default Scroll