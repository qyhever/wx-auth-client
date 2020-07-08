module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: name => `${name}/style/less`
    }, 'vant'],
    ['transform-modules', {
      'cube-ui': {
        'transform': 'cube-ui/lib/${member}',
        'kebabCase': true,
        'style': {
          'ignore': [
            'create-api',
            'better-scroll',
            'locale'
          ]
        }
      }
    }]
  ]
}
