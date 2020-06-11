module.exports = {
	purge: {
    content: ["./layouts/**/*.html"],
    options: {
      whitelist: ["opacity-25"]
    }
  },
  theme: {
    extend: {
      screens: {
        "xs": "340px"
      }
    }
  }
}
