module.exports = {
  title: '个人主页',
  description: 'Personal Website',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', {
      rel: 'icon',
      href: '/images/photo.jpg'
    }],
    ['link', {
      rel: 'manifest',
      href: '/images/photo.jpg'
    }],
    ['link', {
      rel: 'apple-touch-icon',
      href: '/images/photo.jpg'
    }],
    ['meta', {
      'http-quiv': 'pragma',
      cotent: 'no-cache'
    }],
    ['meta', {
      'http-quiv': 'pragma',
      cotent: 'no-cache,must-revalidate'
    }],
    ['meta', {
      'http-quiv': 'expires',
      cotent: '0'
    }]
  ],
  // serviceWorker: true, // 是否开启 PWA
  base: '/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  themeConfig: {
    logo: '/images/photo.jpg', //个人主页左侧logo
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 1,
    nav: [ // 导航栏配置
      {
        text: '前端基础',
        link: '/accumulate/'
      },
      {
        text: '算法题库',
        link: '/algorithm/'
      },
      {
        text: '诗和远方',
        link: '/others/'
      },
      {
        text: 'vuepress',
        link: '/vuepress/'
      },
      {
        text: '微博',
        link: 'https://baidu.com'
      }
    ],
    sidebar: {
      '/vuepress/': [
        ['', '概况'],
        {
          title: '展开菜单',
          collapsable: false, //设置 collapsable: false 来让一个组永远都是展开状态 默认值是 true
          children: [
            'zhangkai/zhangkai'
          ]
        },
        ['neihan/neihan', '左侧菜单内含'],
        ['other/', '其他'],
      ]
    }
  }
};