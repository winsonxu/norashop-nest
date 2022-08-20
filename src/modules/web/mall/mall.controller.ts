import { Controller, Get, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { CrudController } from "@nestjsx/crud";
import { UserEntity } from "src/modules/entities/user.entity";

@Controller('web/mall')
@UseGuards(AuthGuard('jwt'))
export class MallController  {
  @Get('menu')
  menu(){
    return [
      {
        path: '/',
        name: '/',
        component: 'layout/index.vue',
        redirect: '/home',
        meta: {
          title: '/',
          isKeepAlive: true,
        },
        children: [
          {
            path: '/home',
            name: 'home',
            component: 'views/home/index.vue',
            meta: {
              title: '概况',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: true,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'iconfont icon-shouye',
            },
          },
          {
            path: '/mall',
            name: 'mall',
            meta: { title: '门店', isLink: '', isHide: false, isKeepAlive: true, isAffix: false, isIframe: false, roles: ['admin'], icon: 'iconfont icon-caidan', },
            children: [
              {
                path: '/mall/desgin',
                name: 'mall-desgin',
                meta: { title: '店铺设计', isLink: '', isHide: false, isKeepAlive: true, isAffix: false, isIframe: false, roles: ['admin'], icon: 'iconfont icon-caidan', },
                children: [
                  {
                    path: '/mall/banner',
                    name: 'mall-banner',
                    component: 'views/mall/mall-banner.vue',
                    meta: {
                      title: '轮播图',
                      isLink: '',
                      isHide: false,
                      isKeepAlive: true,
                      isAffix: false,
                      isIframe: false,
                      roles: ['admin'],
                      icon: 'iconfont icon-caidan',
                    },
                  },
                  {
                    path: '/mall/home-nav',
                    name: 'mall-home-nav',
                    component: 'views/mall/mall-banner.vue',
                    meta: {
                      title: '导航图标',
                      isLink: '',
                      isHide: false,
                      isKeepAlive: true,
                      isAffix: false,
                      isIframe: false,
                      roles: ['admin'],
                      icon: 'iconfont icon-caidan',
                    },
                  },
                  {
                    path: '/mall/theme-color',
                    name: 'mall-theme-color',
                    component: 'views/mall/mall-banner.vue',
                    meta: {
                      title: '商城风格',
                      isLink: '',
                      isHide: false,
                      isKeepAlive: true,
                      isAffix: false,
                      isIframe: false,
                      roles: ['admin'],
                      icon: 'iconfont icon-caidan',
                    },
                  },
                  {
                    path: '/mall/home-block',
                    name: 'mall-home-block',
                    component: 'views/mall/mall-banner.vue',
                    meta: {
                      title: '图片魔方',
                      isLink: '',
                      isHide: false,
                      isKeepAlive: true,
                      isAffix: false,
                      isIframe: false,
                      roles: ['admin'],
                      icon: 'iconfont icon-caidan',
                    },
                  },
                  {
                    path: '/mall/navbar',
                    name: 'mall-navbar',
                    component: 'views/mall/mall-banner.vue',
                    meta: {
                      title: '标签栏',
                      isLink: '',
                      isHide: false,
                      isKeepAlive: true,
                      isAffix: false,
                      isIframe: false,
                      roles: ['admin'],
                      icon: 'iconfont icon-caidan',
                    },
                  },
                  {
                    path: '/mall/home-page',
                    name: 'mall-home-page',
                    component: 'views/mall/mall-banner.vue',
                    meta: {
                      title: '首页布局',
                      isLink: '',
                      isHide: false,
                      isKeepAlive: true,
                      isAffix: false,
                      isIframe: false,
                      roles: ['admin'],
                      icon: 'iconfont icon-caidan',
                    },
                  },
                ],
              },
              {
                path: '/mall/rule',
                name: 'mall-rule',
                component: 'views/mall/mall-banner.vue',
                meta: { title: '物流设置', isLink: '', isHide: false, isKeepAlive: true, isAffix: false, isIframe: false, roles: ['admin'], icon: 'iconfont icon-caidan', },
                children: []
              },
              {
                path: '/mall/wx-app-config',
                name: 'mall-wx-app-config',
                component: 'views/mall/mall-banner.vue',
                meta: { title: '微信小程序', isLink: '', isHide: false, isKeepAlive: true, isAffix: false, isIframe: false, roles: ['admin'], icon: 'iconfont icon-caidan', },
                children: []
              },
            ],
          },
          {
            path: '/store',
            name: 'store',
            meta: { title: '服务点', isLink: '', isHide: false, isKeepAlive: true, isAffix: false, isIframe: false, roles: ['admin'], icon: 'iconfont icon-caidan', },
            children: [
              {
                path: '/store/list',
                name: 'store-list',
                meta: { title: '服务点列表', isLink: '', isHide: false, isKeepAlive: true, isAffix: false, isIframe: false, roles: ['admin'], icon: 'iconfont icon-caidan', },
                children: []
              },
              {
                path: '/store/stock',
                name: 'mall-stock',
                component: 'views/mall/mall-banner.vue',
                meta: { title: '服务点库存', isLink: '', isHide: false, isKeepAlive: true, isAffix: false, isIframe: false, roles: ['admin'], icon: 'iconfont icon-caidan', },
                children: []
              },
              {
                path: '/store/clerk',
                name: 'store-clerk',
                component: 'views/mall/mall-banner.vue',
                meta: { title: '核销员', isLink: '', isHide: false, isKeepAlive: true, isAffix: false, isIframe: false, roles: ['admin'], icon: 'iconfont icon-caidan', },
                children: [
                  {
                    path: '/store/clerk/list',
                    name: 'store-clerk-list',
                    component: 'views/mall/mall-banner.vue',
                    meta: { title: '核销员', isLink: '', isHide: false, isKeepAlive: true, isAffix: false, isIframe: false, roles: ['admin'], icon: 'iconfont icon-caidan', },
                  },
                  {
                    path: '/store/clerk/order',
                    name: 'store-clerk-order',
                    component: 'views/mall/mall-banner.vue',
                    meta: { title: '核销订单', isLink: '', isHide: false, isKeepAlive: true, isAffix: false, isIframe: false, roles: ['admin'], icon: 'iconfont icon-caidan', },
                  },
                  {
                    path: '/store/clerk/card',
                    name: 'store-clerk-card',
                    component: 'views/mall/mall-banner.vue',
                    meta: { title: '核销卡券', isLink: '', isHide: false, isKeepAlive: true, isAffix: false, isIframe: false, roles: ['admin'], icon: 'iconfont icon-caidan', },
                  },
                ],
              },
            ],
          },
          {
            path: '/goods',
            name: 'goods',
            meta: { title: '商品', isLink: '', isHide: false, isKeepAlive: true, isAffix: false, isIframe: false, roles: ['admin'], icon: 'iconfont icon-caidan', },
            children: [
              {
                path: '/goods/cat',
                name: 'goods-cat',
                component: 'views/mall/mall-banner.vue',
                meta: { title: '商品分类', isLink: '', isHide: false, isKeepAlive: true, isAffix: false, isIframe: false, roles: ['admin'], icon: 'iconfont icon-caidan', },
                children: []
              },
              {
                path: '/goods/list',
                name: 'goods-list',
                component: 'views/mall/mall-banner.vue',
                meta: { title: '商品管理', isLink: '', isHide: false, isKeepAlive: true, isAffix: false, isIframe: false, roles: ['admin'], icon: 'iconfont icon-caidan', },
                children: []
              },
              {
                path: '/goods/second-hand',
                name: 'goods-second-hand',
                component: 'views/mall/mall-banner.vue',
                meta: { title: '二手物品', isLink: '', isHide: false, isKeepAlive: true, isAffix: false, isIframe: false, roles: ['admin'], icon: 'iconfont icon-caidan', },
                children: [],
              },
            ],
          },
          {
            path: '/order',
            name: 'order',
            meta: { title: '订单', isLink: '', isHide: false, isKeepAlive: true, isAffix: false, isIframe: false, roles: ['admin'], icon: 'iconfont icon-caidan', },
            children: [
              {
                path: '/order/list',
                name: 'order-list',
                component: 'views/mall/mall-banner.vue',
                meta: { title: '订单列表', isLink: '', isHide: false, isKeepAlive: true, isAffix: false, isIframe: false, roles: ['admin'], icon: 'iconfont icon-caidan', },
                children: []
              },
              {
                path: '/order/comments',
                name: 'order-comments',
                component: 'views/mall/mall-banner.vue',
                meta: { title: '评价管理', isLink: '', isHide: false, isKeepAlive: true, isAffix: false, isIframe: false, roles: ['admin'], icon: 'iconfont icon-caidan', },
                children: []
              },
            ],
          },
          {
            path: '/user',
            name: 'user',
            meta: { title: '会员', isLink: '', isHide: false, isKeepAlive: true, isAffix: false, isIframe: false, roles: ['admin'], icon: 'iconfont icon-caidan', },
            children: [
              {
                path: '/user/list',
                name: 'user-list',
                component: 'views/mall/mall-banner.vue',
                meta: { title: '会员列表', isLink: '', isHide: false, isKeepAlive: true, isAffix: false, isIframe: false, roles: ['admin'], icon: 'iconfont icon-caidan', },
                children: []
              },
              {
                path: '/user/integral',
                name: 'user-integral',
                component: 'views/mall/mall-banner.vue',
                meta: { title: '会员积分', isLink: '', isHide: false, isKeepAlive: true, isAffix: false, isIframe: false, roles: ['admin'], icon: 'iconfont icon-caidan', },
                children: [
                  {
                    path: '/user/integral/setting',
                    name: 'user-integral-setting',
                    component: 'views/mall/mall-banner.vue',
                    meta: { title: '积分设置', isLink: '', isHide: false, isKeepAlive: true, isAffix: false, isIframe: false, roles: ['admin'], icon: 'iconfont icon-caidan', },
                  },
                  {
                    path: '/user/integral/log',
                    name: 'user-integral-log',
                    component: 'views/mall/mall-banner.vue',
                    meta: { title: '积分记录', isLink: '', isHide: false, isKeepAlive: true, isAffix: false, isIframe: false, roles: ['admin'], icon: 'iconfont icon-caidan', },
                  },
                  {
                    path: '/user/integral/statistics',
                    name: 'user-integral-statistics',
                    component: 'views/mall/mall-banner.vue',
                    meta: { title: '积分统计', isLink: '', isHide: false, isKeepAlive: true, isAffix: false, isIframe: false, roles: ['admin'], icon: 'iconfont icon-caidan', },
                  },
                ]
              },
              {
                path: '/user/coupon',
                name: 'user-coupon',
                component: 'views/mall/mall-banner.vue',
                meta: { title: '优惠券', isLink: '', isHide: false, isKeepAlive: true, isAffix: false, isIframe: false, roles: ['admin'], icon: 'iconfont icon-caidan', },
                children: [
                  {
                    path: '/user/coupon/list',
                    name: 'user-coupon-list',
                    component: 'views/mall/mall-banner.vue',
                    meta: { title: '券管理', isLink: '', isHide: false, isKeepAlive: true, isAffix: false, isIframe: false, roles: ['admin'], icon: 'iconfont icon-caidan', },
                  },
                  {
                    path: '/user/coupon/send',
                    name: 'user-coupon-send',
                    component: 'views/mall/mall-banner.vue',
                    meta: { title: '券发放', isLink: '', isHide: false, isKeepAlive: true, isAffix: false, isIframe: false, roles: ['admin'], icon: 'iconfont icon-caidan', },
                  },
                  {
                    path: '/user/coupon/log',
                    name: 'user-coupon-log',
                    component: 'views/mall/mall-banner.vue',
                    meta: { title: '使用记录', isLink: '', isHide: false, isKeepAlive: true, isAffix: false, isIframe: false, roles: ['admin'], icon: 'iconfont icon-caidan', },
                  }, {
                    path: '/user/coupon/statistics',
                    name: 'user-coupon-statistics',
                    component: 'views/mall/mall-banner.vue',
                    meta: { title: '发放统计', isLink: '', isHide: false, isKeepAlive: true, isAffix: false, isIframe: false, roles: ['admin'], icon: 'iconfont icon-caidan', },
                  },
                ]
              },
              {
                path: '/user/balance-log',
                name: 'user-balance-log',
                component: 'views/mall/mall-banner.vue',
                meta: { title: '余额记录', isLink: '', isHide: false, isKeepAlive: true, isAffix: false, isIframe: false, roles: ['admin'], icon: 'iconfont icon-caidan', },
                children: [],
              },
            ],
          },
          {
            path: '/role-user',
            name: 'role-user',
            meta: { title: '员工', isLink: '', isHide: false, isKeepAlive: true, isAffix: false, isIframe: false, roles: ['admin'], icon: 'iconfont icon-caidan', },
            children: [
              {
                path: '/role-user/list',
                name: 'role-user-list',
                component: 'views/role-user/list.vue',
                meta: { title: '员工列表', isLink: '', isHide: false, isKeepAlive: true, isAffix: false, isIframe: false, roles: ['admin'], icon: 'iconfont icon-caidan', },
                children: []
              },
              {
                path: '/role-user/action',
                name: 'role-user-action',
                component: 'views/mall/mall-banner.vue',
                meta: { title: '操作记录', isLink: '', isHide: false, isKeepAlive: true, isAffix: false, isIframe: false, roles: ['admin'], icon: 'iconfont icon-caidan', },
                children: []
              },
            ],
          },
          {
            path: '/integral-mall',
            name: 'integral-mall',
            meta: { title: '积分商城', isLink: '', isHide: false, isKeepAlive: true, isAffix: false, isIframe: false, roles: ['admin'], icon: 'iconfont icon-caidan', },
            children: [
              {
                path: '/integral-mall/goods',
                name: 'integral-mall-goods',
                component: 'views/mall/mall-banner.vue',
                meta: { title: '积分商品', isLink: '', isHide: false, isKeepAlive: true, isAffix: false, isIframe: false, roles: ['admin'], icon: 'iconfont icon-caidan', },
                children: []
              },
              {
                path: '/integral-mall/order',
                name: 'integral-mall-order',
                component: 'views/mall/mall-banner.vue',
                meta: { title: '订单管理', isLink: '', isHide: false, isKeepAlive: true, isAffix: false, isIframe: false, roles: ['admin'], icon: 'iconfont icon-caidan', },
                children: []
              },
            ],
          },
          {
            path: '/monthly',
            name: 'monthly',
            meta: { title: '月结', isLink: '', isHide: false, isKeepAlive: true, isAffix: false, isIframe: false, roles: ['admin'], icon: 'iconfont icon-caidan', },
            children: [
              {
                path: '/monthly/clerk',
                name: 'monthly-clerk',
                component: 'views/mall/mall-banner.vue',
                meta: { title: '客户经理', isLink: '', isHide: false, isKeepAlive: true, isAffix: false, isIframe: false, roles: ['admin'], icon: 'iconfont icon-caidan', },
                children: []
              },
              {
                path: '/monthly/user',
                name: 'monthly-user',
                component: 'views/mall/mall-banner.vue',
                meta: { title: '月结会员', isLink: '', isHide: false, isKeepAlive: true, isAffix: false, isIframe: false, roles: ['admin'], icon: 'iconfont icon-caidan', },
                children: []
              },
              {
                path: '/monthly/bill',
                name: 'monthly-bill',
                component: 'views/mall/mall-banner.vue',
                meta: { title: '月结账单', isLink: '', isHide: false, isKeepAlive: true, isAffix: false, isIframe: false, roles: ['admin'], icon: 'iconfont icon-caidan', },
                children: []
              },
              {
                path: '/monthly/settle-bill',
                name: 'monthly-settle-bill',
                component: 'views/mall/mall-banner.vue',
                meta: { title: '结清账单', isLink: '', isHide: false, isKeepAlive: true, isAffix: false, isIframe: false, roles: ['admin'], icon: 'iconfont icon-caidan', },
                children: []
              },
            ],
          }
        ]
      }
    ];
  }
}