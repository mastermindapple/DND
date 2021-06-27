var database = firebase.database();

function signUp(){
    var name = 'jd';
    var age = '12';
    var email = 'brh';
    var number = '9953';

    if(!name || !age || !email || !number){
        console.log('Enter all Values.');
    }
    else{
        database.ref('/Users/'+name+'/').set({
            age: age,
            email: email,
            number, number
        })
    }
}