import $http from './index'

export function getRoutes(data) {
  return $http({
    url: '/route',
    method: 'get',
    params: data,
  })
}

export function getTest(data) {
  return $http({
    url: '/test',
    method: 'get',
    params: data,
  })
}

export function getLogin(data) {
  return $http({
    url: '/login',
    method: 'post',
    data,
  })
}
