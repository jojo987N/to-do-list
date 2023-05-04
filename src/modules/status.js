export const updateStatus = (e, i, data) => {
  data = data
    .map((item) => (item.index === i + 1 ? { ...item, completed: e.target.checked } : item));

  localStorage.setItem('list', JSON.stringify(data));

  return data;
};

export const clearAllCompleted = (data) => {
  data = data
    .filter((item) => !item.completed).map((item, index) => ({ ...item, index: index + 1 }));

  localStorage.setItem('list', JSON.stringify(data));

  return data;
};