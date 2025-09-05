import books from "./books.json";
import bocksTemplate from "./boock-templete.hbs";


const listRef = document.querySelector(".list-js");

listRef.innerHTML = bocksTemplate({books})