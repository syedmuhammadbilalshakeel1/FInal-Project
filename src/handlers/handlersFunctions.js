export function addCountFilter(e, dispatch, increment, decrement) {
    return e.target.checked ? dispatch(increment()) : dispatch(decrement());
  }

export function toggleFilter(filterFull, filterMini, setIsFilterCollapsed) {
    const filter = filterFull.current;
    const isHidden = filter.classList.contains("hidden");
    if (isHidden) {
      filter.classList.remove("hidden");
      filter.classList.add("hidden-closed");
    } else {
      filter.classList.add("hidden");
      filter.classList.remove("hidden-closed");
    }
    filterMini.current.classList.toggle("visibility");
    setIsFilterCollapsed(!filterMini.current.classList.contains("visibility"));
  }