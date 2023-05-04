export const addNewTask = (task, data) => {
  data.push(task);

  localStorage.setItem('list', JSON.stringify(data));
};

export const removeTask = (i, data) => {
  document.querySelector('.active').remove();

  data = data.filter((item) => item.index !== i + 1)
    .map((item, index) => ({ ...item, index: index + 1 }));

  localStorage.setItem('list', JSON.stringify(data));

  return data;
};

export const editTask = (element, i, data) => {
  data = data
    .map((item) => (item.index === i + 1 ? { ...item, description: element.value } : item));
  localStorage.setItem('list', JSON.stringify(data));
  return data;
};
