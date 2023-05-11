export const addNewTask = (task) => {
  data.push(task);

  localStorage.setItem('list', JSON.stringify(data));
};

export const removeTask = (i) => {
  document.querySelector('.active').remove();

  data = data.filter((item) => item.index !== i + 1)
    .map((item, index) => ({ ...item, index: index + 1 }));

  localStorage.setItem('list', JSON.stringify(data));

  return data;
};

export const editTask = (element) => {

  data = data
    .map((item) => (item.index === parseInt(element.parentElement.parentElement.id, 10) ? { ...item, description: element.value } : item));
  localStorage.setItem('list', JSON.stringify(data));
  return data;
};
