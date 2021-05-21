/*
 * @Description: 
 * @Version: 1.0
 * @Author: wenbin
 * @Date: 2021-05-08 16:11:52
 * @LastEditors: wenbin
 * @LastEditTime: 2021-05-17 14:39:06
 * @FilePath: /maguscloud-driver-ui/src/mock/index.js
 * Copyright (C) 2021 wenbin. All rights reserved.
 */
import Mock from 'mockjs'

Mock.mock(/\/magustest\/menu/, 'get', {
  code: 2000,
  message: '',
  data: [
    {
      nodeId: 1,
      nodePid: '',
      entityId: '',
      entityType: '',
      icon: 'magusdipjiankong-',
      text: '网关管理',
      leaf: false,
      checked: false,
      expanded: false,
      extend: {
        appUri: '',
        uri: '',
        uriType: '',
        params: ""
      },
      children: [
        {
          nodeId: 11,
          nodePid: '',
          entityId: '',
          entityType: '',
          icon: 'magusdipjiankong-',
          text: '网关监控',
          leaf: false,
          checked: false,
          expanded: false,
          extend: {
            appUri: '',
            uri: '/monitor/page',
            uriType: '',
            params: ""
          },
          children: [
            
          ]
        },
        {
          nodeId: 12,
          nodePid: '',
          entityId: '',
          entityType: '',
          icon: 'magusdipjiankong-',
          text: '网关配置',
          leaf: false,
          checked: false,
          expanded: false,
          extend: {
            appUri: '',
            uri: '/config/page',
            uriType: '',
            params: ""
          },
          children: []
        }
      ]
    },
    {
      nodeId: 2,
      nodePid: '',
      entityId: '',
      entityType: '',
      icon: 'magusdipjiankong-',
      text: '电厂设备管理',
      leaf: false,
      checked: false,
      expanded: false,
      extend: {
        appUri: '',
        uri: '',
        uriType: '',
        params: ""
      },
      children: [
        {
          nodeId: 21,
          nodePid: '',
          entityId: '',
          entityType: '',
          icon: 'magusdipjiankong-',
          text: '电厂设备管理',
          leaf: false,
          checked: false,
          expanded: false,
          extend: {
            appUri: '',
            uri: '/point/page',
            uriType: '',
            params: ""
          },
          children: []
        },
        {
          nodeId: 22,
          nodePid: '',
          entityId: '',
          entityType: '',
          icon: 'magusdipjiankong-',
          text: '设备层级配置',
          leaf: false,
          checked: false,
          expanded: false,
          extend: {
            appUri: '',
            uri: '/group/page',
            uriType: '',
            params: ""
          },
          children: []
        }
      ]
    },
    {
      nodeId: 3,
      nodePid: '',
      entityId: '',
      entityType: '',
      icon: 'magusdipjiankong-',
      text: '平台管理',
      leaf: false,
      checked: false,
      expanded: false,
      extend: {
        uri: '/platform',
        uriType: '1',
        params: ""
      },
      children: [
        {
          nodeId: 31,
          nodePid: '',
          entityId: '',
          entityType: '',
          icon: 'magusdipjiankong-',
          text: '数据分发服务',
          leaf: false,
          checked: false,
          expanded: false,
          extend: {
            uri: '',
            uriType: '',
            params: ""
          },
          children: []
        },
        {
          nodeId: 32,
          nodePid: '',
          entityId: '',
          entityType: '',
          icon: 'magusdipjiankong-',
          text: '数据接收服务',
          leaf: false,
          checked: false,
          expanded: false,
          extend: {
            uri: '',
            uriType: '',
            params: ""
          },
          children: []
        },
        {
          nodeId: 33,
          nodePid: '',
          entityId: '',
          entityType: '',
          icon: 'magusdipjiankong-',
          text: '驱动管理',
          leaf: false,
          checked: false,
          expanded: false,
          extend: {
            uri: '/drivers/page',
            uriType: '',
            params: ""
          },
          children: []
        },
        {
          nodeId: 34,
          nodePid: '',
          entityId: '',
          entityType: '',
          icon: 'magusdipjiankong-',
          text: '用户管理',
          leaf: false,
          checked: false,
          expanded: false,
          extend: {
            uri: '',
            uriType: '',
            params: ""
          },
          children: []
        },
        {
          nodeId: 35,
          nodePid: '',
          entityId: '',
          entityType: '',
          icon: 'magusdipjiankong-',
          text: '角色管理',
          leaf: false,
          checked: false,
          expanded: false,
          extend: {
            uri: '',
            uriType: '',
            params: ""
          },
          children: []
        },
        {
          nodeId: 36,
          nodePid: '',
          entityId: '',
          entityType: '',
          icon: 'magusdipjiankong-',
          text: '菜单管理',
          leaf: false,
          checked: false,
          expanded: false,
          extend: {
            uri: '',
            uriType: '',
            params: ""
          },
          children: []
        },
        {
          nodeId: 37,
          nodePid: '',
          entityId: '',
          entityType: '',
          icon: 'magusdipjiankong-',
          text: '授权配置',
          leaf: false,
          checked: false,
          expanded: false,
          extend: {
            uri: '',
            uriType: '',
            params: ""
          },
          children: []
        },
      ]
    },
    {
      nodeId: 4,
      nodePid: '',
      entityId: '',
      entityType: '',
      icon: 'magusdipjiankong-',
      text: '异常清单',
      leaf: false,
      checked: false,
      expanded: false,
      extend: {
        uri: '/exceptionList/geteway/page',
        uriType: '1',
        params: ""
      },
      children: [
        {
          nodeId: 41,
          nodePid: '',
          entityId: '',
          entityType: '',
          icon: 'magusdipjiankong-',
          text: '网关异常',
          leaf: false,
          checked: false,
          expanded: false,
          extend: {
            uri: '/exceptionList/geteway/page',
            uriType: '',
            params: ""
          },
          children: []
        },
        {
          nodeId: 42,
          nodePid: '',
          entityId: '',
          entityType: '',
          icon: 'magusdipjiankong-',
          text: '数据异常',
          leaf: false,
          checked: false,
          expanded: false,
          extend: {
            uri: '/exceptionList/data/page',
            uriType: '',
            params: ""
          },
          children: []
        }
      ]
    }
  ]
})