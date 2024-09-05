/*
 * Copyright (c) 2024 by Lonly, All Rights Reserved. 
 * @file: main.js
 * @Author: Lonly
 * @Since: 2024-09-05 17:24:15
 * @Description: Header file of xxx module   // 用于详细说明此程序文件完成的主要功能，与其他模块  npm
 *                                           // 或函数的接口，输出值、取值范围、含义及参数间的控 
 *                                           // 制、顺序、独立或依赖等关系
 * @attention:             //注意事项
 * ------------------------------------------------
 * @version: v0.1
 * @LastAuthor: Lonly
 * @LastEditTime: 2024-09-05 17:56:15
 * @Modification: 本次版本修改添加了xxxx
 *  
 * @History:        // 修改历史记录表
 *   1.Version: 历史版本号
 *       Author: 
 *       date: 历史版本日期
 *       Modification: 历史版本修改内容
 *   2.Version: 历史版本号
 *       ...
 */
const {app, BrowserWindow} = require('electron')

app.on('ready', () => {
    //当app准备好后，执行createWindow创建窗口
    const win = new BrowserWindow({
        width: 800,//窗口宽度
        height: 600,//窗口高度
        autoHideMenuBar: true,//自动隐藏菜单档
        alwaysOnTop: true,//置顶
        x: 0,//窗口位置x坐标
        y: 0//窗口位置y坐标
    })
    //加载一个远程页面
   win.loadURL('https://blog.csdn.net/qq_33650655/article/details/140353815')
})
