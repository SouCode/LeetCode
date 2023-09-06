/* Finding the Shortest Route in a City
Imagine you're in a city, and you want to find the shortest route from your home 
to various important places like the grocery store, the bank, the post office, etc. 
The city roads have different lengths (or distances), and some routes are shorter than others.

You start at your home and check the distance to all nearby places. 
You note down the shortest distance to each place. Then, 
you move to the closest place and repeat the process, 
updating the shortest distance to other places if you find a shorter route. 
You continue this process until you've found the shortest route to all places.
*/

/* Home (H): Your starting point.
Grocery Store (G)
Bank (B)
Post Office (P)
The routes (or roads) between these places have the following distances:

Home to Grocery Store: 5 units
Home to Bank: 10 units
Grocery Store to Bank: 3 units
Grocery Store to Post Office: 2 units
Bank to Post Office: 4 units
*/

function shortestRoute(cityMap, start) {
    const distances = {};
    for (let place in cityMap) {
        distances[place] = Infinity;
    }
    distances[start] = 0;

    const unvisited = new Set(Object.keys(cityMap));

    while (unvisited.size > 0) {
        let currentPlace = null;
        for (let place of unvisited) {
            if (currentPlace === null || distances[place] < distances[currentPlace]) {
                currentPlace = place;
            }
        }

        if (distances[currentPlace] === Infinity) break;

        for (let [neighbor, distance] of cityMap[currentPlace]) {
            let newDistance = distances[currentPlace] + distance;
            if (newDistance < distances[neighbor]) {
                distances[neighbor] = newDistance;
            }
        }

        unvisited.delete(currentPlace);
    }

    return distances;
}

const cityMap = {
    'H': [['G', 5], ['B', 10]],
    'G': [['H', 5], ['B', 3], ['P', 2]],
    'B': [['H', 10], ['G', 3], ['P', 4]],
    'P': [['G', 2], ['B', 4]]
};

console.log(shortestRoute(cityMap, 'H'));

