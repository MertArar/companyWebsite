import planet01 from "../Home/Explore/images/planet-01.png";

import { people01 } from "../Home/Testimonials/images/people01.png";
import { people02 } from "../Home/Testimonials/images/people02.png";
import { people03 } from "../Home/Testimonials/images/people03.png";

export const exploreWorlds = [
  {
    id: "world-1",
    imgUrl: { planet01 },
    title: "The Hogwarts",
  },
  {
    id: "world-2",
    imgUrl: "../../assets/planet-02.png",
    title: "The Upside Down",
  },
  {
    id: "world-3",
    imgUrl: "../../assets/planet-03.png",
    title: "Kadirojo Permai",
  },
  {
    id: "world-4",
    imgUrl: "../../assets/planet-04.png",
    title: "Paradise Island",
  },
  {
    id: "world-5",
    imgUrl: "../../assets/planet-05.png",
    title: "Hawkins Labs",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];
