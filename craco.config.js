const path = require('path')

const resolvePath = (route) => path.resolve(__dirname, route)

module.exports = {
	webpack: {
		alias: {
			'@src': resolvePath('src'),
			'@assets': resolvePath('src/assets'),
			'@scripts': resolvePath('src/scripts'),
			'@components': resolvePath('src/components'),
			'@constants': resolvePath('src/constants'),
			'@utils': resolvePath('src/utils'),
			'@redux': resolvePath('src/redux')
		}
	}
}
