import Vue from 'vue'
import Router from 'vue-router'
import Profile from './page/profile/profile.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'city',
      component: () => import('./page/city/City.vue')
    },
    {
      path: '/shoplist',
      name: 'shoplist',
      component: () => import('./shop/shopList.vue')
    },
    {
      path: '/oneShop',
      name: 'oneShop',
      component: () => import('./shop/oneShop.vue'),
      children: [
        {
          path: 'foodlist',
          name: 'foodlist',
          component: () => import('./shop/oneshop/foodList.vue')
        },
        {
          path: 'comment',
          name: 'comment',
          component: () => import('./shop/oneshop/comment.vue')
        },
      ],
      redirect: "/oneShop/foodlist"
    },
    {
      path: '/shopDetails',
      name: 'shopDetails',
      component: () => import('./shop/oneshop/shopDetails.vue')
    },
    {
      path: '/screenshop',
      name: 'screenshop',
      component: () => import('./shop/screenShop.vue'),
      children: [
        {
          path: 'msite',
          name: 'msite',
          component: () => import('./page/msite/msite')
        },
      ],
      redirect: "/screenshop/msite"
    },
    {
      path: '/onefood',
      name: 'onefood',
      component: () => import('./page/food/oneFood.vue')
    },
    {
      path: '/searchshop',
      name: 'searchshop',
      component: () => import('./search/searchShop.vue')
    },
    {
      path: '/security',
      name: 'security',
      component: () => import('./shop/oneshop/security.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./components/login/login.vue')
    },
    //ldf
    {
      path: '/clickcity',
      name: 'clickcity',
      //懒加载
      component: () => import('./page/city/Clickcity.vue')
    },
    {
      path: '/orders',
      name: 'orders',
      //懒加载
      component: () => import('./page/Order/Orders.vue')
    },
    {
      path: '/message',
      name: 'message',
      //懒加载
      component: () => import('./page/Order/Message.vue')
    },
    {
      path: '/pay',
      name: 'pay',
      //懒加载
      component: () => import('./page/pay/Pay.vue')
    },
    {
      path: '/chooseaddress',
      name: 'chooseaddress',
      //懒加载
      component: () => import('./page/pay/ChooseAddress.vue')
    },
    {
      path: '/remarks',
      name: 'remarks',
      //懒加载
      component: () => import('./page/pay/Remarks.vue')
    },
    {
      path: '/bill',
      name: 'bill',
      //懒加载
      component: () => import('./page/pay/Bill.vue')
    },
    {
      path: '/addaddress',
      name: 'addaddress',
      //懒加载
      component: () => import('./page/pay/Addaddress.vue')
    },
    {
      path: '/search',
      name: 'search',
      //懒加载
      component: () => import('./page/pay/Search.vue')
    },
    //ryc
    {
      path: "/profile",
      name: "profile",
      component: Profile,

    },
    {
      path: '/balance',
      name: 'balance',
      component: () => import('./page/balance/balance.vue'),
    },
    {
      path: '/points',
      name: 'points',
      component: () => import('./page/points/points.vue'),
    },
    {
      path: '/myPoints',
      name: 'myPoints',
      component: () => import('./page/points/myPoints.vue'),
    },
    {
      path: '/poDetail',
      name: 'poDetail',
      component: () => import('./page/points/children/detail.vue'),
    },
    {
      path: '/baDetail',
      name: 'baDetail',
      component: () => import('./page/balance/children/detail.vue'),
    },
    {
      path: '/balance',
      name: 'balance',
      component: () => import('./page/balance/balance.vue'),
    },

    {
      path: '/vipcard',
      name: 'vipcard',
      component: () => import('./page/vipcard/vipcard.vue'),
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('./page/service/service.vue'),
    },
    {
      path: '/vipDescription',
      name: 'vipDescription',
      component: () => import('./page/vipcard/children/vipDescription.vue'),
    },
    {
      path: '/useCard',
      name: 'useCard',
      component: () => import('./page/vipcard/children/useCard.vue'),
    },
    {
      path: '/invoiceRecord',
      name: 'invoiceRecord',
      component: () => import('./page/vipcard/children/invoiceRecord.vue'),
    },
    {
      path: '/payFor',
      name: 'payFor',
      component: () => import('./page/vipcard/children/payFor.vue'),
    },
    {
      path: '/SuperMemberStatement',
      name: 'SuperMemberStatement',
      component: () => import('./page/service/children/SuperMemberStatement.vue'),
    },




    {
      path: '/AppearRule',
      name: 'AppearRule',
      component: () => import('./page/service/children/AppearRule.vue'),
    },
    {
      path: '/UserGradeStatement',
      name: 'UserGradeStatement',
      component: () => import('./page/service/children/UserGradeStatement.vue'),
    },
    {
      path: '/ScoreIssue',
      name: 'ScoreIssue',
      component: () => import('./page/service/children/ScoreIssue.vue'),
    },
    {
      path: '/Photograph',
      name: 'Photograph',
      component: () => import('./page/service/children/Photograph.vue'),
    },
    {
      path: '/PayStatement',
      name: 'PayStatement',
      component: () => import('./page/service/children/PayStatement.vue'),
    },
    {
      path: '/OtherIssue',
      name: 'OtherIssue',
      component: () => import('./page/service/children/OtherIssue.vue'),
    },
    {
      path: '/ArriveOnTime',
      name: 'ArriveOnTime',
      component: () => import('./page/service/children/ArriveOnTime.vue'),
    },
    {
      path: '/VipStatement',
      name: 'VipStatement',
      component: () => import('./page/service/children/VipStatement.vue'),
    },
    {
      path: '/VipIssue',
      name: 'VipIssue',
      component: () => import('./page/service/children/VipIssue.vue'),
    },
    {
      path: '/Bag',
      name: 'Bag',
      component: () => import('./page/service/children/Bag.vue'),
    },
    {
      path: '/ActiveRule',
      name: 'ActiveRule',
      component: () => import('./page/service/children/ActiveRule.vue'),
    },
    {
      path: '/SupplementRule',
      name: 'SupplementRule',
      component: () => import('./page/service/children/SupplementRule.vue'),
    },
    {
      path: '/PreferentialStatement',
      name: 'PreferentialStatement',
      component: () => import('./page/service/children/PreferentialStatement.vue'),
    },
    {
      path: '/ResponsibleStatement',
      name: 'ResponsibleStatement',
      component: () => import('./page/service/children/ResponsibleStatement.vue'),
    },
    {
      path: '/Voucher',
      name: 'Voucher',
      component: () => import('./page/service/children/Voucher.vue'),
    },
    {
      path: '/Cooperate',
      name: 'Cooperate',
      component: () => import('./page/service/children/Cooperate.vue'),
    },
    {
      path: '/PayIssue',
      name: 'PayIssue',
      component: () => import('./page/service/children/PayIssue.vue'),
    },
    {
      path: '/SuperSeller',
      name: 'SuperSeller',
      component: () => import('./page/service/children/SuperSeller.vue'),
    },
    {
      path: '/AnonymousBy',
      name: 'AnonymousBy',
      component: () => import('./page/service/children/AnonymousBy.vue'),
    },
    {
      path: '/ActiveIssue',
      name: 'ActiveIssue',
      component: () => import('./page/service/children/ActiveIssue.vue'),
    },
    {
      path: '/downLoad',
      name: 'downLoad',
      component: () => import('./page/download/download.vue'),
    },
    {
      path: '/benefit',
      name: 'benefit',
      component: () => import('./page/benefit/benefit.vue'),
    },
    {
      path: '/hbHistory',
      name: 'hbHistory',
      component: () => import('./page/benefit/children/hbHistory.vue'),
    },
    {
      path: '/exchange',
      name: 'exchange',
      component: () => import('./page/benefit/children/exchange.vue'),
    },
    {
      path: '/commend',
      name: 'commend',
      component: () => import('./page/benefit/children/commend.vue'),
    },
    {
      path: '/hbDescription',
      name: 'hbDescription',
      component: () => import('./page/benefit/children/hbDescription.vue'),
    },
  ]
})
