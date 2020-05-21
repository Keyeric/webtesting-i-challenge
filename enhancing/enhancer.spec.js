const { succeed, fail, repair, get } = require("./enhancer");

// test away!

const item = {
  name: "Diamond Sword",
  durability: 50,
  enhancement: 15,
};
const item2 = {
  name: "Steel Sword",
  durability: 10,
  enhancement: 0,
};
const item3 = {
  name: "Iron Sword",
  durability: 100,
  enhancement: 20,
};
const item4 = {
  name: "Iron Sword",
  durability: 82,
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
    const dang = fail(item2);
    it("should pass when it is lower than 15", () => {
      if (item2.enhancement <= 14) {
        if (item2.durability >= 5) {
          expect(dang.durability).toBe(item2.durability - 5);
        } else if (item2.durability < 5) {
          expect(dang.durability).toBe(0);
        }
      }
    });

    it("should pass when it is 15 or higher", () => {
      if (item2.enhancement > 14) {
        if (item2.durability > 9) {
          expect(dang.durability).toBe(item2.durability - 10);
        } else if (item2.durability < 10) {
          expect(dang.durability).toBe(0);
        }
      }
    });

    it("should pass when it is higher than 16", () => {
      if (item2.enhancement > 16) {
        //Enhancement range from 0-20
        expect(dang.enhancement).toBe(item2.enhancement - 1); // FIX LATER, NEEDS TO SUBTRACT ONE
        if (item2.durability > 10) {
          expect(dang.durability).toBe(item2.durability - 10);
        } else if (item2.durability <= 10) {
          expect(dang.durability).toBe(0);
        }
      }
    });
  });

  describe("Repair()", () => {
    const fix = repair(item);
    const fix2 = repair(item2);

    it("returns a new item with the durability restored to 100.", () => {
      expect(fix.durability).toBe(100);
      expect(fix2.durability).toBe(100);
    });
  });

  describe("Get()", () => {
    const gimme2 = get(item2);
    const gimme3 = get(item3);
    const gimme4 = get(item4);
    it("should return an item with the enhancement level in the name", () => {
      expect(gimme4.name).toBe(`[+${item4.enhancement}] ${item4.name}`);
      expect(gimme3.name).toBe(`[+${item3.enhancement}] ${item3.name}`);
    });
    it("should return level 0 enhancement as just the name", () => {
      expect(gimme2.name).toBe(`${item2.name}`);
    });
  });
});
