const foodObj = [
  {
    name: "A",
    id: 1,
    rating: "4.1",
    ETA: "15",
    tags: ["fast food", "indian"],
  },
  {
    name: "B",
    id: 2,
    rating: "3.1",
    ETA: "20",
    tags: ["fast food", "indian"],
  },
  {
    name: "B",
    id: 3,
    rating: "5.0",
    ETA: "25",
    tags: ["fast food", "indian"],
  },
];
let list;
const cardContainer = document.getElementById("card-container");
const getData = () => {
  list = foodObj;
  console.log("lin29", list);
};

const generateView = (list) => {
  list.map((item) => {
    return cardContainer.appendChild(getCard(item));
  });
};
const getCard = (item) => {
  const parentBox = document.createElement("div");
  const childImage = document.createElement("img");
  //childImage.src = "../images/nick-karvounis-Ciqxn7FE4vE-unsplash.jpg";
  const childtext = document.createElement("div");
  childtext.innerText = item.name;
  const rating = document.createElement("div");
  rating.innerText = item.rating;
  const tag = document.createElement("div");
  tag.innerText = item.tag;
  parentBox.append(childImage, childtext, rating, tag);
  return parentBox;
};
function sortedBy(e) {
  alert("Sorted By" + e.value);
}
function filterBy() {
  alert("filter By");
}
function searchRestaurant() {
  alert("searchRestaurant");
}
generateView(foodObj);
getData();
