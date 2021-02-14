const defaultGeneralStoreInventory = [
    {
        name: 'Bread',
        type: 'food',
        basePrice: 10,
        itemId: 1
    },
    {
        name: "Iron Sword",
        type: 'weapon',
        baseDamage: 10,
        basePrice: 25,
        itemId: 2
    },
    {
        name: 'Steel Axe',
        type: 'weapon',
        baseDamage: 15,
        basePrice: 15,
        itemId: 3
    },
    {
        name: 'Health potion',
        type: 'potion',
        basePrice: 5,
        itemId: 4
    }
];


const worldLocations = [
    {
        name: 'General goods store',
        type: 'store',
        invenory: defaultGeneralStoreInventory
    },
    {
        name: 'Abondoned mineshaft',
        type: 'dungeon'
    }
]


function randomNumber(min, max) {  
    min = Math.ceil(min); 
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}


// console.log(randomNumber(1, 300))
// console.log(randomNumber(1, 300))
// console.log(randomNumber(1, 300))
// console.log(randomNumber(1, 300))
// console.log(randomNumber(1, 300))


function generateRandomLocations(w, h) {
    let resutltArr = [];
    for(let i=0; i<20; i++) {
        let randonX = randomNumber(1, w);
        let randomY = randomNumber(1, h);
        let newLocation = {
            name: 'General goods store',
            type: 'store',
            invenory: defaultGeneralStoreInventory,
            cords: [randonX, randomY]
        }
        resutltArr.push(newLocation)
    }
    return resutltArr;
}


const map1 = {
    locations: generateRandomLocations(300, 300),
    width: 300,
    heigth: 300
}


const player1 = {
    currentPosition: [0, 0],
    currentMap: map1,
    travel(x, y) {
        this.currentPosition[0] = x;
        this.currentPosition[1] = y;
    },
    gold: 200,
    inventory: [],
    buy(goodId) {
        let nearStore = this.exEnv().type === 'store';
        //console.log(nearStore)
        let currentGold = this.gold;
        if(nearStore) {
            let store = this.exEnv();
            let storeItem = store.invenory.find(item => {
                return item.itemId === goodId;
            })
            if(storeItem) {
                this.inventory.push(storeItem);
                let storeItemPrice = storeItem.basePrice;
                this.gold -= storeItemPrice;
            }
        }
    },
    sell() {

    },
    exEnv() {
        let cords = this.currentPosition;
        let currentMap = this.currentMap;
        let hasLocation = this.currentMap.locations.some(x => {
            return x.cords[0] === cords[0] && x.cords[1] === cords[1]
        });
        let locationItem;
        if(hasLocation) {
            locationItem = currentMap.locations.filter(item => {
                return item.cords[0] === cords[0] && item.cords[1] === cords[1];
            })
            return locationItem[0];
        }
        //console.log(hasLocation)
        //console.log(locationItem)
    }
};







function testBuy() {
    let firstStoreCords = map1.locations[0].cords;
    console.log(firstStoreCords)
    player1.travel(firstStoreCords[0], firstStoreCords[1]);
    player1.buy(10)
    console.log(player1)
}
testBuy()
testBuy()
testBuy()
testBuy()