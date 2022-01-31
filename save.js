const request = require("request");
const fs = require("fs");
const async = require("async");
const downloadPic = function (src, dest) {
  request(src)
    .pipe(fs.createWriteStream(dest))
    .on("close", function () {});
};

// downloadPic使用
// downloadPic(
//   "http://m.qpic.cn/psc?/V10Mv1if1L1cw0/ruAMsa53pVQWN7FLK88i5nUfSKMv7jMt2.ivhScEjYT..7p.H2RYcSlc*4IGoY6AeKZBOWfhGvTvd66Mc62ExbXLKs8qEo7epDP9ROIma30!/b&bo=OASgBQAAAAABB7k!",
//   "./pictures/1.jpg"
// );

const picList = [
  {
    url: "http://m.qpic.cn/psc?/V10Mv1if1L1cw0/ruAMsa53pVQWN7FLK88i5nUfSKMv7jMt2.ivhScEjYT..7p.H2RYcSlc*4IGoY6AeKZBOWfhGvTvd66Mc62ExbXLKs8qEo7epDP9ROIma30!/b&bo=OASgBQAAAAABB7k!",
    shoottime: "2022-01-30",
  },
];

async.mapSeries(
  picList,
  function (item, callback) {
    setTimeout(function () {
      downloadPic(item.url, `./pictures/${item.shoottime}.jpg`);
      callback(null, item);
    }, 400);
  },
  function (err, results) {}
);
