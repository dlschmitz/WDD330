     // Get your shorts on - this is an array workout!
     // ## Array Cardio Day 1

     // Some data we can work with

     const inventors = [{
             first: 'Albert',
             last: 'Einstein',
             year: 1879,
             passed: 1955
         },
         {
             first: 'Isaac',
             last: 'Newton',
             year: 1643,
             passed: 1727
         },
         {
             first: 'Galileo',
             last: 'Galilei',
             year: 1564,
             passed: 1642
         },
         {
             first: 'Marie',
             last: 'Curie',
             year: 1867,
             passed: 1934
         },
         {
             first: 'Johannes',
             last: 'Kepler',
             year: 1571,
             passed: 1630
         },
         {
             first: 'Nicolaus',
             last: 'Copernicus',
             year: 1473,
             passed: 1543
         },
         {
             first: 'Max',
             last: 'Planck',
             year: 1858,
             passed: 1947
         },
         {
             first: 'Katherine',
             last: 'Blodgett',
             year: 1898,
             passed: 1979
         },
         {
             first: 'Ada',
             last: 'Lovelace',
             year: 1815,
             passed: 1852
         },
         {
             first: 'Sarah E.',
             last: 'Goode',
             year: 1855,
             passed: 1905
         },
         {
             first: 'Lise',
             last: 'Meitner',
             year: 1878,
             passed: 1968
         },
         {
             first: 'Hanna',
             last: 'Hammarström',
             year: 1829,
             passed: 1909
         }
     ];

     const people = [
         'Beck, Glenn',
         'Becker, Carl',
         'Beckett, Samuel',
         'Beddoes, Mick',
         'Beecher, Henry',
         'Beethoven, Ludwig',
         'Begin, Menachem',
         'Belloc, Hilaire',
         'Bellow, Saul',
         'Benchley, Robert',
         'Benenson, Peter',
         'Ben-Gurion, David',
         'Benjamin, Walter',
         'Benn, Tony',
         'Bennington, Chester',
         'Benson, Leana',
         'Bent, Silas',
         'Bentsen, Lloyd',
         'Berger, Ric',
         'Bergman, Ingmar',
         'Berio, Luciano',
         'Berle, Milton',
         'Berlin, Irving',
         'Berne, Eric',
         'Bernhard, Sandra',
         'Berra, Yogi',
         'Berry, Halle',
         'Berry, Wendell',
         'Bethea, Erin',
         'Bevan, Aneurin',
         'Bevel, Ken',
         'Biden, Joseph',
         'Bierce, Ambrose',
         'Biko, Steve',
         'Billings, Josh',
         'Biondo, Frank',
         'Birrell, Augustine',
         'Black, Elk',
         'Blair, Robert',
         'Blair, Tony',
         'Blake, William'
     ];

     // Array.prototype.filter()
     // 1. Filter the list of inventors for those who were born in the 1500's

     const oldGuys = inventors.filter(inventor => (inventor.year > 1500 && inventor.year < 1600));

     // Array.prototype.map()
     // 2. Give us an array of the inventors' first and last names

     const names = inventors.map(inventor => `${inventor.first} ${inventor.last}`);

     // Array.prototype.sort()
     // 3. Sort the inventors by birthdate, oldest to youngest

     const ages = [...inventors].sort((a,b) => a.year > b.year ? 1 : -1);

     // Array.prototype.reduce()
     // 4. How many years did all the inventors live?

     const approxAge = inventors.reduce((final, inventor) => final + (inventor.passed - inventor.year), 0);

     function updateTotalAge() {
        return `<ul><li>${approxAge}</li></ul>`;
    
    }

     // 5. Sort the inventors by years lived

     const youngToOld = [...inventors].sort(function (a, b) {
        const aInventor = a.passed - a.year;
        const bInventor = b.passed - b.year;
        return bInventor > aInventor ? 1 : -1;
    });

     // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
     // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
     // goto the link above and open the console. Paste the following two lines in.  That will create a list of links in memory that you can reference through the console. Use that list to finish the problem.
     // const category = document.querySelector('.mw-category');
     // const links = Array.from(category.querySelectorAll('a'));

     // 7. sort Exercise
     // Sort the people alphabetically by last name

     // 8. Reduce Exercise
     // Sum up the instances of each of these
     const data = [
         'car',
         'car',
         'truck',
         'truck',
         'bike',
         'walk',
         'car',
         'van',
         'bike',
         'walk',
         'car',
         'van',
         'car',
         'truck'
     ];

     const countOccurances = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

     function countThem() {
        const car = countOccurances(data,'car');
        const truck = countOccurances(data,'truck');
        const bike = countOccurances(data,'bike');
        const van = countOccurances(data,'van');
        const walk = countOccurances(data,'walk');
    
        return `<ul><li>Cars: ${car}</li><li>Trucks: ${truck}</li><li>Bikes: ${bike}</li><li>Vans: ${van}</li><li>Walkers: ${walk}</li></ul>`
    
    }


     function finalResults(invList, outcome) {
        let display = '<ol>';
        for (let i = 0, total = invList.length; i < total; i++) {
            if(typeof invList[i] === 'object') {
                display += '<li>';
                display += invList[i].first + ' ' + invList[i].last;
                display += '<ul>'
                display += '<li>'
                    if(invList === youngToOld) {
                    display += "Approx. age at time of death: " + (invList[i].passed - invList[i].year);
                }
                display += '</li>'
                display += '</ul>'
                display += '</li>';
            } else {
                display += '<li>' + invList[i] + '</li>';
            }
        }
        display += '</ol>';
    
        document.getElementById(outcome).innerHTML = display;
    }

    function displaySingleEntity(context, location) {
        document.getElementById(location).innerHTML = context;
    }
    