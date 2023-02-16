export const isDate = 
  (dateString) => 
    `${dateString}`.indexOf('-') == 4 &&
    `${dateString}`.indexOf('T') == 10 &&
    `${dateString}`.indexOf('Z') == 23
