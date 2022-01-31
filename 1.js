const photoList = [];

const urlList = photoList.map((item) => {
  return {
    url: item.url,
    shoottime: item.shoottime,
  };
});
console.log("urlList: ", urlList);
