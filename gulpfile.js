const gulp = require("gulp"),
	log = require("fancy-log"),
	critical = require("critical").stream;

gulp.task("critical", () => {
  return gulp
    .src("docs/**/*.html")
    .pipe(critical({
      base: "./",
      inline: true,
			minify: true,
			timeout: 30000,
      css: [
        "docs/css/style.min.css"
      ],
			dimensions: [
					{height: 768, width: 1366}
			]
    }))
    .on("error", err => {
      log.error(err.message);
    })
    .pipe(gulp.dest("docs"));
});
