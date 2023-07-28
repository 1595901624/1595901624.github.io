const axios = require('axios')
const fs = require('fs')

/**
 * 搜索md文档中的图片地址
 */
function search_image() {
    // 读取md文档
    fs.readFile('RUST  学习日记 第1课 ——Hello World.md', 'utf-8', function (err, data) {
        if (err) {
            console.log(err)
        } else {
            // 正则表达式
            const reg = /!\[.*?\]\((.*?)\)/g
            // 匹配结果
            const result = data.match(reg)
            // 遍历匹配结果
            for (let i = 0; i < result.length; i++) {
                // 获取图片地址
                const url = result[i].replace(reg, '$1')
                console.log(url)
                
                // 替换图片地址
                

                // 下载图片
                // download_image(url)
            }
        }
    })
}

/**
 * 下载图片
 * @param url 图片地址
 */
function download_image(url) {
    // 使用axios下载图片
    // https://gitee.com/haoyu3/photo_gallery/raw/master/rust/001/rustc%E5%91%BD%E4%BB%A4.png
    axios.get(url, {
        responseType: 'arraybuffer'
    }).then(function (response) {
        // 将图片存入到本地
        fs.writeFile('rustc命令.png', response.data, function (err) {
            if (err) {
                console.log(err)
            }
        })
    })
}


search_image()