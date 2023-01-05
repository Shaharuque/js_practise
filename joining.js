const tags = ["java", "paython", "c++"];

let id = 8;
let limit = 2;
const newArray =
  tags.length > 0
    ? tags?.map((t) => `tags_like=${t}`).join("&") +
      `&id_ne=${id}` +
      `&_limit=${limit}`
    : `id_ne=${id}` + `&_limit=${limit}`;

console.log(newArray);
