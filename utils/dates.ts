const formatDate = (dateStr: string) => {
 const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
 ]

 const date = new Date(dateStr)
 const monthIndex = date.getMonth()
 const monthName = months[monthIndex]
 const day = date.getDate()
 const year = date.getFullYear()

 return `${monthName}, ${day}, ${year}`
}

export { formatDate }
