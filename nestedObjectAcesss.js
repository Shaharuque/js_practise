const initialState = {
  list: [
    {
      id: 1,
      title: "Learn React JS",
      completed: true,
      color: "yellow",
    },
    {
      id: 2,
      title: "Learn Redux",
      completed: false,
      color: "red",
    },
  ],
};

//now I want to change inside one of list object
//need to map the whole list array
//immutability need to be maintained

const result = (state) => {
  return {
    ...state,
    list: [
      ...state?.list?.map((l) => {
        return {
          ...l,
          color: "purple",
        };
      }),
    ],
  };
};

console.log(result(initialState));

const num = [12, 3, 4];
num[0] = 16;
console.log(num);

const state = {
  status: "all",
  color: [],
};
