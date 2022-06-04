import displayItems from "../index.js";
const handleSearchInput = (event) => {
  if(event.key === "Enter") {
    displayItems(event.target.value);
  }
};

export default handleSearchInput;