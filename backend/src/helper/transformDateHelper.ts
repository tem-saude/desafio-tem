import {parseISO, format,} from 'date-fns'

export const parseDateToFormatDate = (date:string):string =>{
  const parseDate = parseISO(date)
  const formatDate = format(parseDate, "yyyy-MM-dd kk:mm:ss")
  return formatDate;
}
