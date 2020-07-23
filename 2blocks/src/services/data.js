import digitalMarketing from '../assets/digital-marketing.jpg'

const listArticles = [
  {
    title: "Introducing Digital Marketing",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    ],
    button: {
      name: "read more"
    },
    image: {
      src: digitalMarketing,
      alt: "Introducing Digital Marketing",
      isLeft: false
    }
  },
  {
    title: "Introducing Digital Marketing",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    ],
    button: null,
    image: {
      src: digitalMarketing,
      alt: "Introducing Digital Marketing",
      isLeft: false
    }
  },
  {
    title: "Introducing Digital Marketing",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    ],
    button: {
      name: "button text"
    },
    image: {
      src: digitalMarketing,
      alt: "Introducing Digital Marketing",
      isLeft: true
    }
  }
]

const categories = [
  "Design",
  "Development",
  "Photography"
]

export { categories, listArticles }

