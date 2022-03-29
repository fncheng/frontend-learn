import Mock from 'mockjs'

Mock.mock('/test', {
  code: 200,
  data: {
    'id|+1': 1,
  },
})
