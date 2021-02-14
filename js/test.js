function testBuy() {
    let firstStoreCords = map1.locations[0].cords;
    console.log(firstStoreCords)
    player1.travel(firstStoreCords[0], firstStoreCords[1]);
    player1.buy(2)
    console.log(player1.inventory)
    player1.sell(2)
    player1.sell(1)
    player1.sell(3)
}
// testBuy()


function testBuy2(buyArr, sellArr) {
    let firstStoreCords = map1.locations[0].cords;
    console.log(firstStoreCords)
    player1.travel(firstStoreCords[0], firstStoreCords[1]);
    if(buyArr) {
        buyArr.forEach(x => {
            player1.buy(x)
        })
    }
    if(sellArr) {
        sellArr.forEach(x => {
            player1.sell(x)
        })
    }
    console.log(player1)
    console.log(player1.inventory)
}
let buyArr1 = [1, 1, 1, 4, 4, 3];
let sellArr1 = [4, 1]
// testBuy2(buyArr1, sellArr1)


function getValidStoreCords(num) {
    let resultsArr = [];
    for(let i=0; i<num; i++) {
        let vl = player1.currentMap.locations[i].cords;
        resultsArr.push(vl)
    }
    return resultsArr;
}

function testWalk(maxWidth, maxHeigt) {
    function getRandomCord() {
        let x = randomNumber(1, 300);
        let y = randomNumber(1, 300);
        return [x, y];
    }
    let randomWalkCords = [];
    for(let i=0; i<1000; i++) {
        randomWalkCords.push(getRandomCord())
    }
    console.log('random cords: ', randomWalkCords)
    // console.log('valid cords: ', getValidStoreCords(10))
    randomWalkCords.forEach(x => {
        player1.travel(x[0], x[1])
        player1.exEnv()
    })
}
// testWalk()


function testWalkValid() {
    getValidStoreCords(5).forEach(item => {
        console.log(item)
        player1.travel(item[0], item[1])
        player1.exEnv()
    })
}
// testWalkValid()