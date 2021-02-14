/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return 'Just now'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + 'Mins'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + 'Hours'
  } else if (diff < 3600 * 24 * 2) {
    return '1 Day'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      'Month' +
      d.getDate() +
      'Day' +
      d.getHours() +
      'Hour' +
      d.getMinutes() +
      'Min'
    )
  }
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
  if (!search) {
    return {}
  }
  const obj = {}
  const searchArr = search.split('&')
  searchArr.forEach(v => {
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  return obj
}
