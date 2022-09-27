const paginate = (data) => {
  const itemPerPage = 10;
  const pages = Math.ceil(data.length / itemPerPage);

  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemPerPage;
    return data.slice(start, start + itemPerPage);
  });

  return newFollowers;
  //   console.log(newFollowers);
};

export default paginate;
