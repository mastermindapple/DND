var dateObj = new Date();
var year = dateObj.getFullYear();



async function getData(){
    var database = firebase.database();
    database.ref('/Streams').on('value', snapshot => {
        classify(snapshot.val());
    })
}


function classify(streams){
    var previousStreams = {};
    var futureStreams = {};

    var dateObj = new Date();
    var currDate = dateObj.getDate();
    var currMonth = dateObj.getMonth()+1;
    var currYear = dateObj.getFullYear();

    for(var i in streams){
        var timeArr = i.split(',');
        var year = parseInt(timeArr[0]);
        var month = parseInt(timeArr[1]);
        var date = parseInt(timeArr[2]);

        if(year<currYear){
            previousStreams[i] = streams[i];
        }
        else if(year > currYear){
            futureStreams[i] = streams[i];
        }
        else if(year == currYear){
            if(month < currMonth){
                previousStreams[i] = streams[i];
            }
            else if(month > currMonth){
                futureStreams[i] = streams[i];
            }
            else if(month == currMonth){
                if(date < currDate){
                    previousStreams[i] = streams[i];
                }
                else if(date > currDate){
                    futureStreams[i] = streams[i];
                }
                else if(date == currDate){
                    futureStreams[i] = streams[i];
                }
            }
        }
    }
    represent(previousStreams, futureStreams);
}

function represent(previousStreams, futureStreams){
    var months = [ "January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December" ];

    //future
    for(var i=0; i<Object.keys(futureStreams).length; i++){
        var timeArr = Object.keys(futureStreams)[i].split(",");
        var loc = futureStreams[Object.keys(futureStreams)[i]].link;
        var timeD = futureStreams[Object.keys(futureStreams)[i]].time + " I.S.T.";
        var yearD = timeArr[0];
        var monthD = timeArr[1];
        var dateD = timeArr[2];
        monthD = months[monthD-1];
        var displayStringD = dateD + " " + monthD + ", " + yearD;
        var descriptionD = futureStreams[Object.keys(futureStreams)[i]].description;
        var nameD = futureStreams[Object.keys(futureStreams)[i]].name;

        var a = document.createElement('a');
        a.className = 'link';
        a.target = '_blank'
        a.href = loc;

        var parent = document.createElement('div');
        parent.className = 'future-stream-container';
    
        var pictureContainer = document.createElement('div');
        pictureContainer.className = 'picture-container';
    
        var picture = document.createElement('img');
        picture.className = 'picture';
        picture.src = 'trial.png';
        picture.alt = nameD;
    
        var infoContainer = document.createElement('div');
        infoContainer.className = 'info-container';
    
        var name = document.createElement('h1');
        name.className = 'name';
        name.innerHTML = nameD;

        var time = document.createElement('h1');
        time.className = "time";
        time.innerHTML = timeD;
    
        var date = document.createElement('h1');
        date.className = 'date';
        date.innerHTML = displayStringD;
    
        var description = document.createElement('p');
        description.className = 'description';
        description.innerHTML = descriptionD;
    
        pictureContainer.appendChild(picture);
        infoContainer.appendChild(name);
        infoContainer.appendChild(time);
        infoContainer.appendChild(date);
        infoContainer.appendChild(description);
        parent.appendChild(pictureContainer);
        parent.appendChild(infoContainer);
        a.appendChild(parent);
        document.getElementById('divs-container').appendChild(a);
    }

    //past
    console.log(previousStreams);

    for(var i=0; i<Object.keys(previousStreams).length; i++){
        var timeArr = Object.keys(previousStreams)[i].split(",");
        var loc = previousStreams[Object.keys(previousStreams)[i]].link;
        var yearD = timeArr[0];
        var monthD = timeArr[1];
        var dateD = timeArr[2];
        monthD = months[monthD-1];

        var displayStringD = dateD + " " + monthD + ", " + yearD;
        var descriptionD = previousStreams[Object.keys(previousStreams)[i]].description;
        var nameD = previousStreams[Object.keys(previousStreams)[i]].name;
        
        var a = document.createElement('a');
        a.className = 'link';
        a.target = '_blank'
        a.href = loc;

        var parent = document.createElement('div');
        parent.className = 'future-stream-container';
    
        var pictureContainer = document.createElement('div');
        pictureContainer.className = 'picture-container';
    
        var picture = document.createElement('img');
        picture.className = 'picture';
        picture.src = 'trial.png';
    
        var infoContainer = document.createElement('div');
        infoContainer.className = 'info-container';
    
        var name = document.createElement('h1');
        name.className = 'name';
        name.innerHTML = nameD;
    
        var date = document.createElement('h1');
        date.className = 'date';
        date.innerHTML = displayStringD;
    
        var description = document.createElement('p');
        description.className = 'description';
        description.innerHTML = descriptionD;
    
        pictureContainer.appendChild(picture);
        infoContainer.appendChild(name);
        infoContainer.appendChild(date);
        infoContainer.appendChild(description);
        parent.appendChild(pictureContainer);
        parent.appendChild(infoContainer);
        a.appendChild(parent);
        document.getElementById('past-divs-container').appendChild(a);
    }
}
getData();