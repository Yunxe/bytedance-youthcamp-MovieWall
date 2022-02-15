/**
 * 过滤对象中某些属性
 * @param { Object } obj
 * @param { Array<string> } blacklist
 */
const filterObject = (obj, blacklist) => {
  const filteredObject = {};
  const set = new Set(Object.keys(obj));
  blacklist.forEach((v) => set.delete(v));
  set.forEach((k) => (filteredObject[k] = obj[k]));
  return filteredObject;
};

class Restful {
  constructor(code, msg, data) {
    this.code = code;
    this.msg = msg;
    this.data = data;
  }
}

module.exports = { Restful, filterObject };
