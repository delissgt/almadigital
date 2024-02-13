export const puzzlesTestPython = [
  {
    id: 1,
    puzzle: (<span><span>a = 2</span><br/><span>print(type(a))</span></span>),
    options: [{key: 1, value: "int"}, {key: 2, value: "str"}, {key: 3, value: "boolean"}],
    answer: 1,
   explanation: (<span>We assign the value <strong>2</strong> to variable <strong>a</strong></span>),
},

{
  id: 2,
  puzzle: "print('p2')",
  explanation: "i2222222222",
},

{
  id: 3,
  puzzle: "print('p3')",
  explanation: "333333333333333",
},
]

// <span>a = 2</span><span>print(type(a))</span>
// [{"1": "int"}, {"2": "str"}, {"3": "boolean"}]