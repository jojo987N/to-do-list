const dragAndDrop = (data, dragged, listItem) => {
  const temp = data.filter((item) => item.index === parseInt(dragged.id, 10))[0];
  data[dragged.id - 1] = { ...data[listItem.id - 1], index: parseInt(dragged.id, 10) };
  data[listItem.id - 1] = { ...temp, index: parseInt(listItem.id, 10) };
  localStorage.setItem('list', JSON.stringify(data));

  return data;
};

export default dragAndDrop;
