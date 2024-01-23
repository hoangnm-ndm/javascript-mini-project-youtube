import Navigo from "navigo";

export const router = new Navigo("/", { linksSelector: "a" });

export const render = (position, content) => {
  position.innerHTML = content();
};
