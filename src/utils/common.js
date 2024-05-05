function getAppID() {
    let arr = location.hash.slice(2).split("/");
    let id = 0;
    for (let i = arr.length - 1; i > -1; i--) {
        if (arr[i] && !isNaN(arr[i])) {
            id = arr[i];
            break;
        }
    }
    return id;
}

function getAppType() {
    let arr = location.hash.slice(2).split("/");
    return arr?.[0];
}

function getStarSign(birthdate) {
    const dateParts = birthdate.split("-");
    const day = parseInt(dateParts[2]);
    const month = parseInt(dateParts[1]);

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return "Aries";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return "Taurus";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        return "Gemini";
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        return "Cancer";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return "Leo";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return "Virgo";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        return "Libra";
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        return "Scorpio";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        return "Sagittarius";
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        return "Capricorn";
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        return "Aquarius";
    } else {
        return "Pisces";
    }
}

function isPhone() {
    let mobile = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    );
    return mobile !== null;
}

function escapeHtml(str) {
    return str.replace(/[<>"']/g, function (match) {
        switch (match) {
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case '"':
                return "&quot;";
            case "'":
                return "&#39;";
        }
    });
}

function modifyAlpha(rgbaString, newAlpha) {
    // 正则表达式匹配 rgba 中的数字
    const rgbaRegex = /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)/;

    // 使用正则表达式提取 rgba 值
    const matches = rgbaString.match(rgbaRegex);

    // 如果匹配失败，返回原始的 rgba 字符串
    if (!matches) {
        console.error("Invalid rgba string");
        return rgbaString;
    }

    // 提取 r, g, b 和 a 的值
    const [, r, g, b, a] = matches;

    // 确保新的 alpha 值在 0 到 1 之间
    const alpha = Math.min(1, Math.max(0, parseFloat(newAlpha)));

    // 重新组合 rgba 字符串，并返回
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export { getAppID, getAppType, getStarSign, isPhone, escapeHtml, modifyAlpha };
