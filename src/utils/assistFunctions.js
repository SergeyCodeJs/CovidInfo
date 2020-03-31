export default function difference(today, yesterday) {
  if (today >= yesterday) {
    return '+ ' + (today - yesterday)
  } else {
    return -(yesterday - today)
  }
}