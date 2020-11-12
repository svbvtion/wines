module.exports = () => {
	$.gulp.task('svg', () => {
		return $.gulp.src(['./src/static/img/svg/**/*.svg', '!./src/static/img/svg/true/**.svg'])
			.pipe($.svgmin({
				js2svg: {
					pretty:true
				}
			}))
			.pipe($.cheerio({
				run: ($) => {
					$('[fill]').removeAttr('fill');
					$('[stroke]').removeAttr('stroke');
					$('[style]').removeAttr('style');
				},
				parserOptions: { xmlMode: true }
			}))
			.pipe($.gulpReplace('&gt;', '>'))
			.pipe($.svgSprite({
				mode: {
					symbol: {
						sprite: '../sprite.svg',
						render: {
							sass: {
								dest: '../../../../../src/static/sass/utils/_sprite.sass',
								template: 'src/static/sass/utils/_sprite_template.sass'
							}
						}
					}
				}
			}))
			.pipe($.gulp.dest('./build/static/img/svg/'))
	});
};