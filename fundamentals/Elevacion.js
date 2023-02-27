// 1
console.log(hello); 
var hello = 'world';  
                                
// consola reproduce undefined, ya que variable es llamada antes de ser declarada

// 2

var needle = 'haystack';
test();
function test(){
        var needle = 'magnet';
        console.log(needle);
}
// consola reproduce magnet, ya que la varible que es llamada dentro de la funcion es justamente declarada dentro de la misma funcion

// 3

var brendan = 'super cool';
function print(){
        brendan = 'only okay';
        console.log(brendan);
}
console.log(brendan);

// consola reproduce super cool, ya que la variable que es llamada fuera de la funcion es declarada fuera de la funcion, y la fucion no es llamada


// 4

var food = 'chicken';
console.log(food);
eat();
function eat(){
        food = 'half-chicken';
        console.log(food);
        var food = 'gone';
}

// consola reproduce chicken y half-chicken

// 5

mean()
console.log(food);
var mean = function() {
        food = "chicken";
        console.log(food);
        var food = "fish";
        console.log(food);
}
console.log(food);

// consola reproduce error, ya que la variable mean es llamada antes de ser declarada

// 6

console.log(genre);
var genre = "disco";
rewind();

function rewind() {
        genre = "rock";
        console.log(genre);
        var genre = "r&b";
        console.log(genre);
}
console.log(genre);

// consola reproduce undefined, rock, r&b, disco

// 7

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    
        dojo = "seattle";
        console.log(dojo);
        var dojo = "burbank";
        console.log(dojo);
}
console.log(dojo);

// consola reproduce san jose, seattle, burbank, san jose

// 8

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}

// consola reproduce error, ya que la variable dojo es declarada como constante y no puede ser reasignada