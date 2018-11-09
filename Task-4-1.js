//__________myForEach - тот же самый forEach_____________

var arrForEach = ["Яблоко", "Апельсин", "Груша"];

Array.prototype.myForEach = function () {
    this.forEach(function(item, i, arr) {
        alert( i + ": " + item + " (массив:" + arr + ")" );
    });
};

arrForEach.myForEach();
//__________myMap - тот же самый map_____________

var namesMap = ['HTML', 'CSS', 'JavaScript'];

Array.prototype.myMap =function () {
    var nameLengths = this.map(function(name) {
        return name.length;
    });
    alert( nameLengths );
};

namesMap.myMap();

//__________mySort - тот же самый sort_____________

var arrSort = [ 1, 2, 15 ];

Array.prototype.mySort = function () {
    // this.sort();
    // alert( this );
    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
    }
    this.sort(compareNumeric);

    alert(this);
};

arrSort.mySort();

//__________myFilter - тот же самый filter_____________

var arrFilter = [1, -1, 2, -2, 3];

Array.prototype.myFilter = function () {
    var positiveArr = this.filter(function(number) {
        return number > 0;
    });
    alert( positiveArr );
};

arrFilter.myFilter();

// ________________________________________________________________________________________________________________________________________________

// Closure - Create a constructor function which will use closure for working with private data. It should have 2
// private methods and 2 private props which we can change only with that private methods.


function User(name) {
    this.name = function init() {
        function displayName() {

            var sayHello = function () {
                return {
                    Hello: function () {
                        alert("Hello, " + name);
                    }
                };
            };

            var qqq = sayHello();

            qqq.Hello();
        }

        displayName();
    };
}

var ivan = new User("Иван");

ivan.name();

// _____




