import { useCallback, useEffect } from 'react';

export function useOutsideClick(refEl: any, fn: any, additionalCheck: any) {
  const handleClickOutside = useCallback(
    (e: any) => {
      if (
        refEl.current &&
        !refEl.current.contains(e.target) &&
        additionalCheck
      ) {
        fn();
      }
    },
    [refEl, fn, additionalCheck],
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);
}
