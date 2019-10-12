const gulp = require("gulp");
const connect = require("gulp-connect");
const sass = require("gulp-sass");

gulp.task("watchall", async() => {
    gulp.watch("*.html", async() => {
        gulp.src("*.html")
            .pipe(gulp.dest("D:\\AdidasDist"));
    });

    gulp.watch("js/**/*", async() => {
        gulp.src("js/**/*")
            .pipe(gulp.dest("D:\\AdidasDist\\js"))
    })

    gulp.watch("img/**/*", async() => {
        gulp.src("img/**/*")
            .pipe(gulp.dest("D:\\AdidasDist\\img"))
    })

    gulp.watch("swiper-5.0.4/**/*", async() => {
        gulp.src("swiper-5.0.4/**/*")
            .pipe(gulp.dest("D:\\AdidasDist\\swiper-5.0.4"))
    })

    gulp.watch("sass/**/*", async() => {
        gulp.src("sass/**/*")
            .pipe(sass())
            .pipe(gulp.dest("D:\\Adidas1908-\\css"))
    })

    gulp.watch("sass/**/*", async() => {
        gulp.src("sass/**/*")
            .pipe(sass())
            .pipe(gulp.dest("D:\\AdidasDist\\css"))
    })


})


gulp.task("server", async() => {
    connect.server({
        root: "D:\\Adidas1908-"
    })
});

gulp.task("copy", async() => {
    connect.server({
        root: "D:\\Adidas1908-"
    })
});