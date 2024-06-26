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

export { getAppID, getAppType, getStarSign, isPhone };
