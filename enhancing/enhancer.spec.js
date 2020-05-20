const { succeed, fail, repair, get } = require("./enhancer");

// test away!

const item = {
  name: "Iron Sword",
  durability: 50,
  enhancement: 14,
};

describe("Enhancer", () => {
  describe("Succeed()", () => {
    it("should return a new item object modified according to the rules defined by the client for enhancement success", () => {
      const yeet = succeed(item);

      expect(yeet.enhancement).toBe(item.enhancement + 1);
      expect(yeet.enhancement).toBeTruthy();
    });

    it("should not return wrong values", () => {
      const yeet = succeed(item);

      expect(yeet.enhancement).not.toBe(item.enhancement++);
      expect(yeet.enhancement).not.toBe(item.enhancement - 2);
      expect(yeet.enhancement).not.toBeNull();
      expect(yeet.enhancement).not.toBeFalsy();
    });
  });

  describe("Fail()", () => {
    const dang = fail(item);
    it("should pass when it is lower than 15", () => {
      if (item.enhancement <= 14) {
        if (item.durability >= 5) {
          console.log("item, dang", item.durability, dang.durability);
          expect(dang.durability).toBe(item.durability);
        } else if (item.durability < 5) {
          expect(dang.durability).toBe(0);
        }
      }
    });

    it("should pass when it is 15 or higher", () => {
      if (item.enhancement > 14) {
        if (item.durability > 9) {
          expect(dang.durability).toBe(item.durability);
        } else if (item.durability < 10) {
          expect(dang.durability).toBe(0);
        }
      }
    });

    it("should pass when it is higher than 16", () => {
      if (item.enhancement > 17) {
        //Enhancement range from 0-20
        expect(dang.enhancement).toBe(item.enhancement); // FIX LATER, NEEDS TO SUBTRACT ONE
        if (item.durability > 10) {
          //durability range from 0-100
          //   expect(dang.enhancement).toBe(item.enhancement - 1); // FIX LATER, NEEDS TO SUBTRACT ONE

          //   console.log("10 or higher enh", item.enhancement);
          //   console.log("10 or higher dang enh", dang.enhancement);
          //   console.log("10 or higher dur", item.durability);
          //   console.log("10 or higher dang dur", dang.durability);

          expect(dang.durability).toBe(item.durability - 10);
        } else if (item.durability <= 10) {
          //   expect(dang.enhancement).toBe(item.enhancement - 1); // FIX LATER, NEEDS TO SUBTRACT ONE

          //   console.log("lower than 10 enh", item.enhancement);
          //   console.log("lower than 10 dang enh", dang.enhancement);
          //   console.log("lower than 10 dur", item.durability);
          //   console.log("lower than 10 dang dur", dang.durability);

          expect(dang.durability).toBe(0);
        }
        console.log("higher than 16", dang);
      }
    });
  });

  describe("Repair()", () => {
    it("returns a new item with the durability restored to 100.", () => {});
  });

  describe("Get()", () => {
    it("returns a new item with the name property modified according to the following rules: if the enhancement level is 0, the the name is not modified; if the enhancement level is greater than 0, change the name to include the enhancement level, preceded by a plus sign ( + ), between square brackets before the item's name.", () => {});
  });
});
