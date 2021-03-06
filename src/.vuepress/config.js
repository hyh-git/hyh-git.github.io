module.exports = {
  base: '/blog/',
  dest: 'docs',
  title:'Yunhao\'s Blog',
  description:'但行好事，莫问前程',
  head:[
    ['link', { rel: 'icon', href: 'favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  themeConfig: {
    sidebarDepth: 3,
    navBar: true,
    nav: [
      {
        text: '教程',
        items: [
          { text: '环境配置', link: '/share/env'},
          { text: 'eslint规则', link: '/share/eslint'},
          { text: '性能优化', link: '/share/opt'},
          { text: '深入webpack', link: '/share/webpack' },
          { text: 'webpack随手记', link: '/share/webpack-note' },
          { text: 'webpack配置vue', link: '/share/webpack-vue' },
          { text: 'webpack入门', link: '/share/webpack-base' },
          { text: '公众号开发总结', link: '/share/wechat' },
          { text: '深入浅出前端脚手架', link: '/share/scaffold' },
          { text: '移动端性能优化(一)', link: '/share/optimize' },
          { text: '移动端性能优化(二)', link: '/share/optimize2' },
          { text: '移动端的那些坑(一)', link: '/share/mobile-bug' },
          { text: 'markdown语法', link: '/share/md' },
          { text: 'Electron初步', link: '/share/electron-base' },
        ]
      },
      {
        text: '重点技术',
        items: [
          { text: '深入skulpt', link: '/skulpt/1'},
          { text: '深入scratch', link: '/scratch/links' },
        ]
      },
      {
        text: '技术积累',
        items: [
          { text: 'webpack学习', link: '/technology/webpack'},
          { text: '面试题总结', link: '/technology/interview'},
        ]
      },
      {
        text: '计算机英语',
        items: [
          { text: 'webpack 英文', link: '/en/webpack'},
          { text: 'npm 英文', link: '/en/npm'},
          { text: 'skulpt 英文', link: '/en/skulpt'},
          { text: 'scratch 英文', link: '/en/scratch'},
          { text: 'ecma 英文', link: '/en/ecma'},
        ]
      },
      {
        text: '常用网址',
        link: '/url/fe'
      },
      {
        text: 'github',
        link: 'https://github.com/hyh-git'
      },
    ],
    sidebar: {
      '/skulpt/': genSidebarConfig('skulpt', ['links', '1']),
      '/scratch/': genSidebarConfig('深入scratch', ['links', '1', 'sb3']),
      '/technology/webpack': genSidebarConfig('webpack学习', ['ltb', 'jy', 'gxl', 'yh', 'xd']),
      '/technology/interview': genSidebarConfig('面试相关', ['interview-topics', 'interview-summary']),
    }
  }
}

function genSidebarConfig (title, children) {
  return [
    { title, children }
  ]
}
