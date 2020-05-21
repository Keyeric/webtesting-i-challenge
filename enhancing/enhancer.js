module.exports = {
  succeed,
  fail,
  repair,
  get,
};

/*
const item = {
  name: "Iron Sword",
  durability: 47,
  enhancement: 3,
};
*/

function succeed(item) {
  /*
  When enhancement succeeds
The item's enhancement increases by 1.
If the item enhancement level is 20, the enhancement level is not changed.
The durability of the item is not changed.
*/
  const newItem = {
    ...item,
    enhancement: item.enhancement + 1,
  };

  if (item.enhancement >= 0 && item.enhancement < 20) {
    // console.log("Enhancement increased");
    return newItem;
  } else if (item.enhancement == 20) {
    // console.log("Enhancement not changed");
    return item;
  } else if (item.enhancement < 0 || item.enhancement > 20) {
    // console.log("Not Valid");
    return null;
  }
}

function fail(item2) {
  /*
  When enhancement fails
If the item's enhancement is less than 15, the durability of the item is decreased by 5.
If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17). 
*/
  if (item2.enhancement <= 14) {
    if (item2.durability <= 100 && item2.durability >= 5) {
      return {
        ...item2,
        durability: item2.durability - 5,
      };
    } else if (item2.durability <= 100 && item2.durability < 5) {
      return {
        ...item2,
        durability: 0,
      };
    }
  } else if (item2.enhancement == 15 || item2.enhancement == 16) {
    if (item2.durability <= 100 && item2.durability >= 10) {
      return {
        ...item2,
        durability: item2.durability - 10,
      };
    } else if (item2.durability <= 100 && item2.durability < 10) {
      return {
        ...item2,
        durability: 0,
      };
    }
  } else if (item2.enhancement > 16) {
    if (item2.durability <= 100 && item2.durability >= 10) {
      return {
        ...item2,
        enhancement: item2.enhancement - 1, //Error here, pls fix later
        durability: item2.durability - 10,
      };
    } else if (item2.durability <= 100 && item2.durability < 10) {
      return {
        ...item2,
        enhancement: item2.enhancement - 1, //error here, pls fix later
        durability: 0,
      };
    }
  } else if (item2.durability < 0 || item2.durability > 100) {
    return null;
  }
}

function repair(item) {
  /*
   Return durability to 100
  */
  return {
    ...item,
    durability: 100,
  };
}

function get(item) {
  /*
  returns a new item with the name property modified according to the following rules: 
  if the enhancement level is 0, the the name is not modified; 
  if the enhancement level is greater than 0, change the name to include the enhancement level, preceded by a plus sign ( + ), between square brackets before the item's name.
  */
  if (item.enhancement === 0) {
    return {
      ...item,
    };
  } else if (item.enhancement >= 1 && item.enhancement <= 20) {
    return {
      ...item,
      name: `[+${item.enhancement}] ${item.name}`,
    };
  }
}
