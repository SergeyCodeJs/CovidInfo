function difference(today, yesterday) {
  if (today >= yesterday) {
    return '+ ' + (today - yesterday)
  } else {
    return -(yesterday - today)
  }
}

function addSpaceToNumber(number) {
  let newNumber = String(number)
  newNumber = newNumber.split('');
  let numberLength = newNumber.length;
  if (numberLength === 4) {
    newNumber.splice(1, 0, ' ');
  }
  if (numberLength === 5) {
    newNumber.splice(2, 0, ' ');
  }
  if (numberLength === 6) {
    newNumber.splice(3, 0, ' ');
  }
  if (numberLength === 7) {
    newNumber.splice(1, 0, ' ');
    newNumber.splice(5, 0, ' ');
  }
  if (numberLength === 8) {
    newNumber.splice(2, 0, ' ');
    newNumber.splice(6, 0, ' ');
  }
  newNumber = newNumber.join('')
  
  return newNumber
}

export {difference, addSpaceToNumber}