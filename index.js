const axios = require('axios')
const fs = require('fs')

/**
 * 搜索md文档中的图片地址
 */
function search_image() {
    // 读取md文档
    fs.readFile('base01.md', 'utf-8', function (err, data) {
        if (err) {
            console.log(err)
        } else {
            // 正则表达式
            let reg = /!\[.*?\]\((.*?)\)/g
            // 匹配结果
            let result = data.match(reg)
            // 遍历匹配结果
            for (let i = 0; i < result.length; i++) {
                // 获取图片地址
                let url = result[i].replace(reg, '$1')
                // console.log(url)

                // 替换图片地址
                // ../images/
                let name = url.replace(/.*\//, '');
                let newImageUrl = '../images/' + name;

                // 将 data 中的图片地址替换为新地址
                data = data.replace(url, newImageUrl);

                // 下载图片
                download_image(url)
            }

            // 将替换后的内容写入到文件中
            fs.writeFile('base01.md', data, function (err) {
                if (err) {
                    console.log(err)
                }
            });

            // 等待10s钟后结束程序
            sleep(10000);
        }
    })
}

/**
 * 睡眠
 * @param {*} delay 
 */
function sleep(delay) {
    var start = (new Date()).getTime();
    while ((new Date()).getTime() - start < delay) {
        continue;
    }
}

/**
 * 下载图片
 * @param url 图片地址
 */
async function download_image(url) {
    // 使用axios下载图片
    // https://gitee.com/haoyu3/photo_gallery/raw/master/rust/001/rustc%E5%91%BD%E4%BB%A4.png
    let response = await axios.get(url, {
        responseType: 'arraybuffer'
    });
    if (response.status === 200) {
        // 更改图片的名称
        const name = url.replace(/.*\//, '')
        console.log(name)

        // 将图片存入到本地
        fs.writeFile(name, response.data, function (err) {
            if (err) {
                console.log(err)
            }
        })
    }


    // .then(function (response) {
    //     // 将图片存入到本地
    //     fs.writeFile('rustc命令.png', response.data, function (err) {
    //         if (err) {
    //             console.log(err)
    //         }
    //     })
    // })
}


// search_image()
//download_image('https://gitee.com/haoyu3/photo_gallery/raw/master/rust/001/run.png')