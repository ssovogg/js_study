// JSON API
/** 오버로딩
 * 함수 일므은 동일하지만 어떤 파라미터를 전달하냐에 따라 각각 다른 방식으로 호출 가능한 것
 */
// 1. Object to JSON(string)
// stringfy(obj)
let json = JSON.stringify(true);

json = JSON.stringify(['apple', 'banana']);
console.log(json); // ["apple", "banana"]

const rabbit = {
  name: 'tori',
  color: "white",
  size: null,
  birtDate: new Date(),
  // symbol: Symbol('id'),
  jump: ()=>{
    console.log(`${name} can jump!`);
  },
}

json = JSON.stringify(rabbit, ["name"]); // ["name":"tori"] (해당하는 프로퍼티만 변환가능)
console.log(json); // symbol과 function은 포함되지 않음(object에 있는 데이터가 아니기 때문)

json = JSON.stringify(rabbit, (key, value)=>{
  console.log(`key: ${key}, value: ${value}`);
  return value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value)=>{
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birtDate' ? new Date(value) : value;
});
console.log(obj);

rabbit.jump();
// obj.jump(); // error

console.log(rabbit.birtDate.getDate());
console.log(obj.birtDate.getDate());