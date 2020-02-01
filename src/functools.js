export const getTimeTitle = date => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  //we represent clocls as 01 not just 1
  return `${hours > 9 ? hours : `0${hours}`}:${
    minutes > 9 ? minutes : `0${minutes}`
  }`;
};

export const getDayTitle = date => {
  const day = date.getDate();
  //in js month start from 0, so we add 1
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  //we represent days as 01 not just 1
  return `${day > 9 ? day : `0${day}`}/${
    month > 9 ? month : `0${month}`
  }/${year}`;
};
