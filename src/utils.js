function getFullYear() {
  return new Date().getFullYear();
}

function getFooterCopy(isIndex) {
    return isIndex? "Holberton School" : "Holberton School main dashboard"
}


function getLatestNotification() {
    return `<strong> Urgent requirement</strong> - completed by EOD`;
}

module.exports = {  getFullYear, getFooterCopy, getLatestNotification };
