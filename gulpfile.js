/**
 * 自动添加命名空间
 * 1 从element-ui-plus下载主题
 * 2 可以在加命名空间前先自定义css内容，然后用gulp-cssmin打包（这里没包括这一步）
 * 3 按固定格式放好主题包（命名为index.css），然后配置global-config.json的themeList
 * 4 运行命令npm run css-tran
 * 5 运行成功后，在main.ts中引入所有的主题
 * 6 动态地在body上添加相应的类名即可实现动态主题
 */
const { task, src, dest } = require('gulp');
const postcss = require("gulp-postcss");
const prefixwrap = require("postcss-prefixwrap");
const { themeList } = require('./config/global-config.json')

const processList = themeList.map(
  item => {
    return {
      customThemeName: item,
      cssInfo: {
        src: `./src/assets/themeSrc/${item}/index.css`,
        dest: `./src/assets/theme/${item}`,
      },
      font: {
        src: `./src/assets/themeSrc/${item}/fonts/**`,
        dest: `./src/assets/theme/${item}/fonts`,
      }
    }
  }
)

function generateThemeTask(info) {
  const { cssInfo, font } = info
  return new Promise((resolve,reject) => {
    src(cssInfo.src)
      .pipe(postcss([prefixwrap(`.theme-${info.customThemeName}`, {
        ignoredSelectors: [":root"]
      })]))
      .pipe(dest(cssInfo.dest)).on('end', () => {
        src([font.src]).pipe(dest(font.dest)).on('end', () => {
          resolve()
        }).on('error', error => {
          reject(error)
        });
      }).on('error', error => {
        reject(error)
      })
  })
}

function generateThemeTasks(cb) {
  const taskList = processList.map(
    info => {
      return generateThemeTask(info)
    }
  )
  Promise.all(taskList).then(() => {
    cb()
  })
}

task('css-wrap', generateThemeTasks);