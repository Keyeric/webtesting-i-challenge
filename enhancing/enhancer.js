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

function fail(item) {
  /*
  When enhancement fails
If the item's enhancement is less than 15, the durability of the item is decreased by 5.
If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17). 
*/
  if (item.enhancement <= 14) {
    console.log("< 14", item.enhancement);
    if (item.durability <= 100 && item.durability >= 5) {
      console.log(item.durability);
      return {
        ...item,
        durability: item.durability - 5,
      };
    } else if (item.durability <= 100 && item.durability < 5) {
      return {
        ...item,
        durability: 0,
      };
    }
  } else if (item.enhancement >= 15) {
    console.log(">= 15", item.enhancement);
    if (item.durability <= 100 && item.durability >= 10) {
      return {
        ...item,
        durability: item.durability - 10,
      };
    } else if (item.durability <= 100 && item.durability < 10) {
      return {
        ...item,
        durability: 0,
      };
    }
  } else if (item.enhancement == 17) {
    console.log(">16", item.enhancement);
    if (item.durability <= 100 && item.durability >= 10) {
      return {
        ...item,
        enhancement: item.enhancement - 1, //Error here, pls fix later
        durability: item.durability - 10,
      };
    } else if (item.durability <= 100 && item.durability < 10) {
      return {
        ...item,
        enhancement: item.enhancement - 1, //error here, pls fix later
        durability: 0,
      };
    }
  } else if (item.durability < 0 || item.durability > 100) {
    return null;
  }
}

function repair(item) {
  /*
   Return durability to 100
  */
  return { ...item };
}

function get(item) {
  return { ...item };
}
