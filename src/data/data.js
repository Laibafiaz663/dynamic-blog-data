 export const navitems=[
    {
      name: "Home",
      link: "https://www.youtube.com/",
      class: "navstyle",
    },
    {
      name: "About",
      link: "https://www.youtube.com/",
      class: "navstyle",
    },
    {
      name: "Contact",
      link: "https://www.youtube.com/",
      class: "navstyle",
    },
    {
      name: "Services",
      link: "https://www.youtube.com/",
      class: "navstyle",
    },
  ]

  export const cardarray = Array.from({ length: 30 }, (_, index) => ({
    title: `Card ${index + 1}`,
    subtitle: `This is card ${index + 1}`,
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    id: `${index + 1}`,
    link1: `Card link ${index + 1}`,
    link2: `Another link ${index + 1}`
  }));

  export const cardarraydata=cardarray;