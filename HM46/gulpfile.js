import gulp from "gulp";

import { path } from "./gulp/config/path.js";
import { plagins } from "./gulp/config/plagins.js";

global.app = {
  path: path,
  gulp: gulp,
  plagins: plagins,
};

import { reset } from "./gulp/task/reset.js";
import { html } from "./gulp/task/html.js";
import { scss } from "./gulp/task/scss.js";
import { js } from "./gulp/task/js.js";
import { concats } from "./gulp/task/concat.js";

function watcher() {
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
}

const mainTasks = gulp.parallel(html, scss, js, concats);

const dev = gulp.series(reset, mainTasks, watcher);

gulp.task("default", dev);