const isProduction = process.env.NODE_ENV === 'production';
module.exports = {
	productionSourceMap: false,
	configureWebpack:  {
		externals: {
			"Vue": "Vue",
			"axios": "axios",
			"Vuex": "Vuex",
			"VueRouter": "VueRouter",
		}
	},
	pages: {
	  index: {
	    entry: 'src/main.js',
	    template: 'public/index.html',
	    filename: 'index.html',
		},
		article: {
		  entry: 'src/otherPage/article.js',
		  template: 'public/article.html',
		  filename: 'article.html',
		},
	  // 当使用只有入口的字符串格式时，
	  // 模板会被推导为 `public/subpage.html`
	  // 并且如果找不到的话，就回退到 `public/index.html`。
	  // 输出文件名会被推导为 `subpage.html`。
	}
};
