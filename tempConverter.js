const convertFtoC = temp => {
  return (temp - 32) * 5 / 9;
}

const convertCtoF = temp => {
  return (temp * 9 / 5) + 32;
}

const tempConverter = (temp, convertTo) => {
  
  if(convertTo === 'c') {
    return convertFtoC(temp)
  }

  else if (convertTo === 'f') {
    return convertCtoF(temp)
  }

  else {s
    return 'Please enter a valid temperature type';
  }

}

console.log(tempConverter(0, 'f'));
