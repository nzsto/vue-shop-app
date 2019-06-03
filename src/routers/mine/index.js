export default {
  name: 'mine',
  path: '/mine',
  component: () =>import ("@views/mine/Mine"),
  meta: {
      TabBarFlag: true
  }
}