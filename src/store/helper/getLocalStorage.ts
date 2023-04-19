const getLocalStorage = (key: string, initial: any) => {
  try {
    const localItem = window.localStorage.getItem(key);

    if (localItem !== null) {
      return JSON.parse(localItem);
    }
    return initial;
  } catch (error) {
    return initial;
  }
};

export default getLocalStorage;
