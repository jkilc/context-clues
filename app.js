$(document).ready(function () {

    var suspects = ['Renoir', 'Vincent', 'Tang', 'J.Beige', 'Wallace Kimberlin']
    var weapons = ['dagger', 'bottle', 'candlestick', 'glass shard', 'torch', 'sword', 'warhammer', 'great axe', 'lance', 'halbert', 'blowgun', 'crossbow', 'scimitar', 'rapier', 'whip', 'chainsaw', 'rope', 'fire poker', 'gun']
    var locations = ['the cobblestone alley', 'the bank vault', 'the stables', 'the salon', 'the atrium', 'the study', 'the garden', 'the attic', 'the chemistry lab', 'the dressing room']
    
    // $('.acc').click(function(){
        
        for (var i = 1; i <= 100; i++) {
            let acc = $(`<h3>Accusation ${i}</h3>`)
            $(".board").append(acc)
            acc.click(clickAlert(i));
        }
        
        function clickAlert(i) {
            
            var sus = suspects[i % 5];
            
            var loc = locations[i % 10];
                                
            var weap = weapons[i % 20];
            
            return function () {
                alert("Accusation " + i + ": I accuse " + sus + " with the " + weap + " in " + loc + "!");
            }
            
            
            console.log("Accusation " + i + ": I accuse " + sus + " with the " + weap + " in " + loc +" !")
            
        }

    // });
    
    
    
});

// for (var i = 1; i <= 100; i++) {
//             $('.acc').click(getAlert(i));
//         }
        
//         function getAlert(i) {
            
//             var sus = suspects[i % 5];
            
//             var loc = locations[i % 10];
            
//             var weap = weapons[i % 20];
            
//             function accuAlert() {
//                 alert("Accusation " + i + ": I accuse " + sus + " with the " + weap + " in " + loc + "!");
//             }
            
            
//             console.log("Accusation " + i + ": I accuse " + sus + " with the " + weap + " in " + loc +" !")
//             accuAlert();


// var suspects = ['1', '2', '3', '4', '5']
// var weapons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '1']
// var locations = ['12', '13', '15', '16', '17', '81', '19', '100', '19', '133']

// function randAcc(a, b, c) {
    //     a = suspects    
    //     b = weapons
    //     c = locations
    //     function randSus() {
        //         return Math.floor(Math.random() * suspects.length);    
        //     }
        //     var randSus = a.Math.floor(Math.random() * suspects.length);
        //     var randWeap = b.Math.floor(Math.random() * weapons.length);
        //     var randLoc = c.Math.floor(Math.random() * locations.length);
        
        //     console.log ("I accuse "+ randSus + ", with the "+ randWeap + " in "+randLoc+"!")
        
        // }
        // randAcc();
        
        
        // function counter (){
            //     counter = 1; 
            //     counter >= 100; 
            //     counter = counter + 1; 
            
            // }
            
            // console.log(counter)
            // $('.acc').innerHTML = 'Accusation' + counter 
            
            
            
            
                // function randAcc() {
            //     a = suspects.shuffle();
            //     b = weapons.shuffle();
            //     c = locations.shuffle();
            //     console.log("I accuse " + a + ", with the " + b + " in " + c + "!")
            
            
            
            // }
            // randAcc();