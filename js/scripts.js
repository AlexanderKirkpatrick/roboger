function inputArray (number) {
  let inputtedArray = [];
  for (let i = 0; i <= number; i++) {
    inputtedArray.push(i.toString());
  }
  return inputtedArray; 
  }

  function numberSwap (element) {
    if (element.includes(3)) {
      return "Won't you be my neighbor?";
    
    } else if (element.includes(2)) {
      return "Boop!";

    } else if (element.includes(1)) {
      return "Beep!";

    } else {
      return element;
    }
  }

  function userResponse (number) {
    const robogerInputArray = inputArray (number);
    const robogerOutputArray = robogerInputArray.map (function(element) {
      return numberSwap (element);
    })
    return robogerOutputArray;
  }
