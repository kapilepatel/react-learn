export function filterData (_searchText, _restaurants) {
    return _restaurants.filter((_restaurants) =>
      _restaurants.info.name.toUpperCase().includes(_searchText.toUpperCase())
    );
  };

  return filterData;
