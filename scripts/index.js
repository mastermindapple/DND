document.getElementById('review-title').innerHTML = '"This team has infectious energy. Ishnoor is an inspiring leader and who knows there will be more inspired future leaders from this group." <br><br>-Harshpreet Kaur'
var arr = [].slice.call(document.getElementsByClassName('review-buttons'));
var reviews = ['"This team has infectious energy. Ishnoor is an inspiring leader and who knows there will be more inspired future leaders from this group." <br><br>-Harshpreet Kaur',
'"This world has made every set of institution as business, you guys are breaking all the boundaries to make it so noble and availing FOC to the aspirants." <br> <br> -Jasdeep Kaur',
'"It has been a great journey so far, and I am excited for the future!"<br><br>-Aruhi',
'"I feel really honoured to be a part of this group. I have learnt many new things about debates and discussions. It is impossible to put in words what I was before joining this group and what I am now."<br><br>-Mohak',
'"Before joining this group, I was a big introvert . However, by talking in this extremely diverse group, my shyness slowly and slowly evaporated."<br><br>-Samar'];

arr.forEach(elt => {
    elt.addEventListener('click', e => {
        document.getElementById('review-title').innerHTML = reviews[arr.indexOf(elt)];
        arr.forEach(elt2 => {
            elt2.style.color = '#c0c0c0';
        })
        console.log('worked')
        elt.style.color = '#000000';    
    })
})
var links = document.getElementsByTagName('a');
console.log(links)
for(var x of links){
    x.href = "404.html";
}








//animations
/*
var VIPS = ['first-heading-container','first-subheading-container','intro-heading-wrapper','intro-content-wrapper','img-div-1-heading','teaching-heading-container','teaching-content-wrapper','ways-heading-wrapper',];
var VIP = {};
for(var x of VIPS){
    VIP[x] = {};
    VIP[x].ele = document.getElementById(x);
    VIP[x].status = 'not';
}


$(document).scroll(function(){
    var scroll = $(window).scrollTop();


   
    for(var x=0; x<VIPS.length; x++){
        var curr = VIP[VIPS[x]].ele;
        var state = VIP[VIPS[x]].status;
        
        var height = $(window).scrollTop();
        var position = curr.getBoundingClientRect();
        var eleHeight = position.top;
        if(state == 'not'){
            if(eleHeight > height && eleHeight < height+window.innerHeight){
                curr.style.transition = '0.6s';
                curr.style.transform = 'translateY(20px)';
                //curr.style.color='blue';
                VIP[VIPS[x]].status = 'done';
            }
        }
        else{
            //continue;
        }
        
    }

  });





function isHidden(ele,state){

    
}
*/