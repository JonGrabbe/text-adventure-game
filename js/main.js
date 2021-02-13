let standardInventory = [
    {
        name: 'Iron Sword',
        price: 55,
        itemId: 1,
        itemType: 'weapon'
    },
    {
        name: 'War Hammer',
        price: 20,
        itemId: 2,
        itemType: "weapon"
    },
    {
        name: 'bread',
        price: 10,
        itemId: 3,
        itemType: 'food'
    }
]


let shops = [
    {
        name: 'Riverwood trader',
        inventory: standardInventory
    }
]


let player1 = {
    currentLocation: [20, 20],
    travel(x, y) {
            this.currentLocation[0] = x;
            this.currentLocation[1] = y;
    },
    exEnv(map) {
        let currentLocation;
        let px = this.currentLocation[0];
        let py = this.currentLocation[1];
        map.locations.forEach(item => {
            if(item.locationCords.x === px && item.locationCords.y === py) {
                currentLocation = item
            }
        })
        if(currentLocation) {
            console.log(currentLocation.name)
        } else {
            console.log('i see nothing')
        }
    },
    gold: 200,
    buy(shop, goodId) {
        let currentGold = this.gold;
        let di = shop.inventory.filter(x => x.itemId === goodId)
        di = di[0]
        console.log(di)
        if(currentGold >= di.price) {
            this.inventory.push(di);
            this.gold -= di.price
        }
    },
    sell(shop, goodId) {
        let currentGold = this.gold;
        let currentInventory = this.inventory;
        let sellItem = currentInventory.filter(x => x.itemId === goodId)[0];
        if(currentGold >= sellItem.price) {
            const index = currentInventory.indexOf(x => x.itemId = goodId);
            if (index > -1) {
                array.splice(index, 1);
            }
            this.gold += sellItem.price
        }
    },
    inventory: [shops[0].inventory[0]]
}



let map1 = {
    locations: [
        {
            name: 'Riverwood trader',
            locationType: 'general-goods',
            locationCords: {x: 10, y: 12}
        },
        {
            name: 'Abondoned mine',
            locationType: 'cave',
            locationCords: {x: 20, y: 20}
        },
        {
            name: 'Whiterun castle',
            locationType: 'hold',
            locationCords: {x: 40, y: 40}
        }
    ],
    mapWidth: 100,
    mapHeight: 100,
    currentPlayer: player1
}
