import React from 'react';

import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import classes from './Arrows.module.css';

function Arrow({
  children,
  disabled,
  onClick,
}) {
  return (
    <div
      disabled={disabled}
      onClick={onClick}
      className={classes['btn-scroll']}
      style={{ opacity: disabled ? '0' : '1', cursor: disabled ? 'default' : 'pointer' }}
    >
      {children}
    </div>
  );
}

export function LeftArrow() {
  const {
    isFirstItemVisible,
    scrollPrev,
    visibleItemsWithoutSeparators,
    initComplete,
  } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !initComplete || (initComplete && isFirstItemVisible),
  );
  React.useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleItemsWithoutSeparators]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollPrev()}>
      <div className={`${classes['btn-scroll-line']} ${classes['left-up']}`} />
      <div className={`${classes['btn-scroll-line']} ${classes['left-down']}`} />
    </Arrow>
  );
}

export function RightArrow() {
  const {
    isLastItemVisible,
    scrollNext,
    visibleItemsWithoutSeparators,
  } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !visibleItemsWithoutSeparators.length && isLastItemVisible,
  );
  React.useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleItemsWithoutSeparators]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollNext()}>
      <div className={`${classes['btn-scroll-line']} ${classes['right-up']}`} />
      <div className={`${classes['btn-scroll-line']} ${classes['right-down']}`} />
    </Arrow>
  );
}
