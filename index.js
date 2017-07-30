  function theTruth(){
    return true;
  }

  function sayHey(){
    return "Hey!"
  }

  function sayHeyFriend(name){
    return `Hey, ${name}!`;
  }

  function favoriteIceCream(){
    if(arguments.length > 0) return `I love ${arguments[0]}`;
  }

  function shouting(){
    return arguments[0].toUpperCase();
  }

  function roundDown(number){
    return Math.floor(number);
  }
