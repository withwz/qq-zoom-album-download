<a name="BOF2M"></a>
## 爬取数据
电脑端打开空间相册，过滤请求cgi_list_photo<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/432716/1643629218243-a56a27d4-a16e-4c96-abb5-396e40614ff5.png#clientId=u9b46c22b-d321-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=634&id=u05964e6e&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1268&originWidth=2866&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1648117&status=done&style=stroke&taskId=u8fb3669b-1a7d-4e26-8c4d-ba3945c6d5e&title=&width=1433)<br />
<br />复制这个请求
```
https://h5.qzone.qq.com/proxy/domain/photo.qzone.qq.com/fcgi-bin/cgi_list_photo?g_tk=1987381833&callback=shine4_Callback&t=433437617&mode=0&idcNum=4&hostUin=1632534087&topicId=V10Mv1if1L1cw0&noTopic=0&uin=1632534087&pageStart=0&pageNum=1000000&skipCmtCount=0&singleurl=1&batchId=&notice=0&appid=4&inCharset=utf-8&outCharset=utf-8&source=qzone&plat=qzone&outstyle=json&format=jsonp&json_esc=1&callbackFun=shine4&_=1643626219591
```
请求中有个参数pageStart=0&pageNum=1000000<br />pageNum最大为500，可以分页多次爬取，我只有1677张，所以就手动爬了。<br />获取的结构是一个类似下边的结构，可以取自己想要的数据。
```json
{
  "code": 0,
  "subcode": 0,
  "message": "",
  "default": 0,
  "data": {
    "limit": 0,
    "photoList": [
      {
        "batchId": "884755853",
        "browser": 0,
        "cameratype": "Apple iPhone XR",
        "cp_flag": false,
        "cp_x": 0,
        "cp_y": 0,
        "desc": "",
        "exif": {
          "exposureCompensation": "0",
          "exposureMode": "0",
          "exposureProgram": "2",
          "exposureTime": "",
          "flash": "16",
          "fnumber": "2.2",
          "focalLength": "2.87",
          "iso": " 640",
          "lensModel": "",
          "make": "Apple",
          "meteringMode": "5",
          "model": "iPhone XR",
          "originalTime": "2021:11:01 22:54:34"
        },
        "forum": 0,
        "frameno": 0,
        "height": 1440,
        "id": 4294967295,
        "is_video": false,
        "is_weixin_mode": 0,
        "ismultiup": 0,
        "lloc": "NR8AVjZiQ2dBeE5qTXlOVE0wTURnM3ZQOSpZWXZLbUIwIQcAcGhvdG9neg!!",
        "modifytime": 1635778492,
        "name": "2021-11-01",
        "origin": 0,
        "origin_upload": 0,
        "origin_url": "",
        "owner": "1632534087",
        "ownername": "1632534087",
        "photocubage": 66267,
        "phototype": 1,
        "picmark_flag": 0,
        "picrefer": 22,
        "platformId": 52,
        "platformSubId": 2,
        "poiName": "",
        "pre": "http://photogz.photo.store.qq.com/psc?/V10Mv1if1L1cw0/ruAMsa53pVQWN7FLK88i5v0y1iaoHUkJ6L5KHCqdg642wKdLYEWGWgIWjjSIJhohOkvPoCnGgHdy0KYj373W3yJfzUF6ZjrPhrJ47ScObg0!/m&bo=OASgBQAAAAABB7k!",
        "raw": "",
        "raw_upload": 0,
        "rawshoottime": "2021-11-01 22:54:34",
        "shoottime": "2021-11-01 ",
        "shorturl": "",
        "sloc": "NR8AVjZiQ2dBeE5qTXlOVE0wTURnM3ZQOSpZWXZLbUIwIQcAcGhvdG9neg!!",
        "tag": "",
        "uploadtime": "2021-11-01 22:54:52",
        "url": "http://photogz.photo.store.qq.com/psc?/V10Mv1if1L1cw0/ruAMsa53pVQWN7FLK88i5v0y1iaoHUkJ6L5KHCqdg642wKdLYEWGWgIWjjSIJhohOkvPoCnGgHdy0KYj373W3yJfzUF6ZjrPhrJ47ScObg0!/b&bo=OASgBQAAAAABB7k!",
        "width": 1080,
        "yurl": 0
      }
      // ...
    ],
    "t": "433437617",
    "topic": {
      "bitmap": "10000010",
      "browser": 0,
      "classid": 106,
      "comment": 1,
      "cover_id": "NR8AVjZiQ2dBeE5qTXlOVE0wTURnM001VDJZWGFmQWkwIQcAcGhvdG90ag!!",
      "createtime": 1487917751,
      "desc": "每天一张",
      "handset": 0,
      "id": "V10Mv1if1L1cw0",
      "is_share_album": 0,
      "lastuploadtime": 1643549755,
      "modifytime": 1643549770,
      "name": "每天一张20170224",
      "ownerName": "1632534087",
      "ownerUin": "1632534087",
      "pre": "http://m.qpic.cn/psc?/V10Mv1if1L1cw0/ruAMsa53pVQWN7FLK88i5nUfSKMv7jMt2.ivhScEjYT..7p.H2RYcSlc*4IGoY6AeKZBOWfhGvTvd66Mc62ExbXLKs8qEo7epDP9ROIma30!/a",
      "priv": 5,
      "pypriv": 3,
      "share_album_owner": 0,
      "total": 1677,
      "url": "http://m.qpic.cn/psc?/V10Mv1if1L1cw0/ruAMsa53pVQWN7FLK88i5nUfSKMv7jMt2.ivhScEjYT..7p.H2RYcSlc*4IGoY6AeKZBOWfhGvTvd66Mc62ExbXLKs8qEo7epDP9ROIma30!/b",
      "viewtype": 2
    },
    "totalInAlbum": 1677,
    "totalInPage": 10
  }
}

```
​

​<br />
<a name="Glrdb"></a>
## nodejs下载到本地
```javascript
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

```
