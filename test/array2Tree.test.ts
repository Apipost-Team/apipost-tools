import ATools from '../src/index';


describe('works', () => {
  const { array2Tree } = ATools;
  const array = [{id:1,pid:0,name:'目录1'},{id:2,pid:1,name:'目录1-接口1'},{id:3,pid:1,name:'目录1-接口2'}];
  const tree=[{
    "id": 1,
    "name": "目录1",
    "pid": 0,
    "children": [{
      "children": [],
      "id": 2,
      "name": "目录1-接口1",
      "pid": 1
    }, {
      "children": [],
      "id": 3,
      "name": "目录1-接口2",
      "pid": 1
    }]
  }]
  const str = [1];
  it('测试array2Tree pass', () => {
    expect(array2Tree(array)).toEqual(tree);
  });
  it('测试array2Tree faild', () => {
    expect(array2Tree(str)).toEqual([]);
  });
});

