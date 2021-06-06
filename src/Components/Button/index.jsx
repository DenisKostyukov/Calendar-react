import React from 'react';
import cn from 'classnames';
function Button (props) {
  const {className, children, ...others} = props
  return (
    <>
      <button className={cn(className)} {...others}  >{children}</button>
    </>
  );
}

export default Button;
