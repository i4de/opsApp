
 
module.exports = {
	port: 8008, //服务启动的端口号
	source: './docs', //引入的md文件路径
	exclude: /should-be-ignore/,
	theme: 'bisheng-theme-one',
	themeConfig: {
		home: '/',
		sitename: '目录结构名',
		tagline: 'The one theme for bisheng',
		// navigation: [{
		//   title: 'BiSheng',
		//   link: 'https://github.com/benjycui/bisheng',
		// }],
		// footer: 'Copyright and so on...',
		// hideBisheng: true,
		github: 'https://github.com/benjycui/bisheng',
	},
	root: '/bisheng/',
}