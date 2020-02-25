<!-- # config.js配置 -->

# 概况

## 配置详情

```js
  module.exports = {
    base: '/yzy/',  // 部署到github相关的配置
    title: '标题',
    description: '描述',
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
    serviceWorker: true, // 是否开启 PWA
    markdown: {
      lineNumbers: true // 代码块是否显示行号
    },
    themeConfig: {
      logo: '/logo.png',  //个人主页左侧Logo
      lastUpdated: '最后更新时间', //获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
      sidebarDepth: 1, //最大的深度为 2，它将同时提取 h2 和 h3 标题。
      // displayAllHeaders: true, // 默认值：false,显示所有页面的标题链接
      // sidebar: 'auto', //自动生成侧栏
      // search: false, //禁用默认的搜索框  内置搜索只会为页面的标题、h2 和 h3 构建搜索索引
      // searchMaxSuggestions: 10, //搜索结果数量
      // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接 (翻篇功能暂时测试没效果)
      // nextLinks: false,
      // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
      // prevLinks: false,
      // smoothScroll: true, //启用页面滚动效果。
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
        'vuepress' : [
          '',
          ['vuepress/LeftLink', '左侧名字']
        ]
      },
    }
  }
```
