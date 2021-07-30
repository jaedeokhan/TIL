var CONST = require("./const");

module.exports = {
  title: `Today JaeDeok Learned`,
  description: `JaeDeok's Personal Wiki (Today I Learned)`,
  base: "/TIL/",
  dest: 'build',
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo.png'
    }]
  ],
  themeConfig: {
    sidebar: [
      {
        title: 'Java',
        children: CONST.JavaList
      },
      {
        title: 'Spring',
        children: CONST.SpringList
      },
      {
        title: 'Git',
        children: CONST.GitList
      },
      {
        title: 'Algorithm',
        children: CONST.AlgorithmList
      },
      {
        title: 'Java Algorithm Review',
        children: CONST.JavaAlgorithmReviewList
      }
    ],
    nav: [{
      text: 'GitHub',
      link: 'https://github.com/jaedeokhan/'
    }, {
      text: 'Blog',
      link: 'https://co-deok.tistory.com/'
    }
    ]
  },
}