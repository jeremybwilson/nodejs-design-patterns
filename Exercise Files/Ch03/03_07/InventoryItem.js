class InventoryItem {

    constructor(name, price) {
        this.name = name
        this.price = price
    }

    print() {
        console.log(`${item.name} costs ${item.price}`)
    }

}

class GoldenInventoryItem {

  constructor(name, price) {
      this.name = name
      this.price = price
  }

  print() {
      console.log(`${item.name} costs ${item.price}`)
  }

}

class DiamondInventoryItem {

  constructor(name, price) {
      this.name = name
      this.price = price
  }

  print() {
      console.log(`${item.name} costs ${item.price}`)
  }

}
module.exports = { InventoryItem, GoldenInventoryItem, DiamondInventoryItem };
