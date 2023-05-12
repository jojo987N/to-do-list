export const updateStatus = (element) => {
  data = data
    .map((item) => (item.index === parseInt(element.parentElement.parentElement.id, 10) ? { ...item, completed: element.checked } : item));

  localStorage.setItem('list', JSON.stringify(data));

  return data;
};

export const clearAllCompleted = (data) => {
  data = data
    .filter((item) => !item.completed).map((item, index) => ({ ...item, index: index + 1 }));

  localStorage.setItem('list', JSON.stringify(data));

  return data;
};