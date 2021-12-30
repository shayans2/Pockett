import React from 'react';

export const useNoScroll = (condition) => {
  React.useEffect(() => {
    if (condition) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.inset = 0;
    }

    return () => {
      document.body.style.removeProperty('overflow');
      document.body.style.removeProperty('position');
      document.body.style.removeProperty('inset');
    };
  }, [condition]);
};
