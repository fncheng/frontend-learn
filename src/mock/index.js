import Mock from 'mockjs'

Mock.mock('/test', {
  code: 200,
  'data|20': [
    {
      'id|+1': 1,
      name: '@cname',
      'age|1-100': 20,
    },
  ],
})
