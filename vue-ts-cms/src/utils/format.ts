import dayjs from "dayjs"
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

export function formatUTC(utcString: string, formatStr: string = 'YYYY-MM-DD HH:mm:ss') {
  const timeRes = dayjs.utc(utcString).utcOffset(8).format(formatStr)
  return timeRes
}
