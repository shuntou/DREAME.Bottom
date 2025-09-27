/*
 * QuanX 脚本: 替换插件配置包的 URL 和 MD5
 * 作者: Gemini
 * 目的: 指向用户自定义的插件包（已修改底部导航栏配置）。
 */

// ** ----------------- 用户自定义配置开始 ----------------- **
// 替换成您的新 ZIP 文件的 MD5 值
const NEW_MD5 = "ffcba5b0072acb1f1c53aba76bb22100"; 

// 替换成您的新 ZIP 文件的可访问 URL
const NEW_URL = "https://raw.githubusercontent.com/shuntou/shuntou/main/f3c3ed6090bbd787576ac97ef028cbe0___UNI__EDB922E.zip";
// ** ----------------- 用户自定义配置结束 ----------------- **


let body = $response.body;

try {
    // 尝试解析原始响应体
    let obj = JSON.parse(body);

    // 检查响应体结构是否正确（确保 data 字段存在）
    if (obj && obj.data) {
        // 修改 data 字段下的 url 和 md5 
        obj.data.url = NEW_URL;
        obj.data.md5 = NEW_MD5;

        // 将修改后的对象重新转为 JSON 字符串
        body = JSON.stringify(obj);
    } else {
        console.log("JSON 结构异常或缺少 data 字段，未修改。");
    }
} catch (e) {
    console.log("解析 JSON 响应体时出错: " + e.message);
}

// 完成替换操作
$done({body});
