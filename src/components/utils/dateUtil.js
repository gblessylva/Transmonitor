function dateUtils(date) {
    var today = new Date();
    var month = '';
    if (today.getMonth() === 0) {
      month = 'January'
    } else if (today.getMonth() === 1) {
      month = 'February'
    } else if (today.getMonth() === 2) {
      month += 'March'
    } else if (today.getMonth() === 3) {
      month += 'April'
    } else if (today.getMonth() === 4) {
      month += 'May'
    } else if (today.getMonth() === 5) {
      month += 'June'
    } else if (today.getMonth() === 6) {
      month = 'July'
    } else if (today.getMonth() === 7) {
      month += 'August'
    } else if (today.getMonth() === 8) {
      month += 'September'
    } else if (today.getMonth() === 9) {
      month += 'October'
    } else if (today.getMonth() === 10) {
      month += 'November'
    } else if (today.getMonth() === 11) {
      month += 'December'
    }


  return date = `${today.getDate() },  ${month} ${today.getFullYear()} `
}
export default dateUtils()