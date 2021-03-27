import {parseISO, format} from 'date-fns'

export const transformDate = (date:string):string =>{
  const parseDateToIso = parseISO(date);
  const parseFormatDate = format(parseDateToIso,"dd-MM-yyyy kk:mm:ss")
  return parseFormatDate
}
