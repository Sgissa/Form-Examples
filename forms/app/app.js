function changeRoute() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", ""); //removes hashtag
    // console.log(hashTag + " " + pageID); 

    if (pageID != "" ) {
        $.get(`pages/${pageID}/${pageID}.html`, function(data){

            console.log("data " + data)
            $("#app").html(data)
        })


        
    } else {
        $.get(`pages/home/home.html`, function(data){

            // console.log("data " + data)
            $("#app").html(data)
        })
    }

    

}

let createSub = "#submit";

let logBtn = "#logBtn";

let signUp = "#signUp"

let editor = "#edit";

function initListeners(){
    $(window).on("hashchange", changeRoute);
    changeRoute();

    $(document).on("click", createSub, function(e){
        e.preventDefault();
        let firstName = $("#fname").val();
        let middleName = $("#mname").val();
        let lastName = $("#lname").val();
        let contact = $("#contact").val();
        let street = $("#street").val();
        let city = $("#city").val();
        let state = $("#state").val();
        let zip = $("#zip").val();
        let race = $("#race").val();
        let gender = $("#gender").val();
        console.log("inputs " + firstName + " " + middleName + " " + lastName + " " + contact + " " + street + " " + city + " " + state + " " + zip + " " + race + " " + gender);

        
    });
    
    
    $(document).on("click", editor, function(e){
        e.preventDefault();
        
        let userObj = {
            fname: "Sam",
            mname: "John",
            lname: "Jackson",
            contact: "3176257890",
            street: "420 University Blvd",
            city: "indianapolis",
            state: "indiana",
            zip: "46202",
            race: "black",
            gender: "male",

        };

        console.log(userObj);
        $("#fname").val(userObj.fname);
        $("#mname").val(userObj.mname);
        $("#lname").val(userObj.lname);
        $("#contact").val(userObj.contact);
        $("#street").val(userObj.street);
        $("#city").val(userObj.city);
        $("#state").val(userObj.state);
        $("#zip").val(userObj.zip);
        $("#race").val(userObj.race);
        $("#gender").val(userObj.gender);
        
    }); 

    $(document).on("click", signUp, function(e){
        e.preventDefault();
        let email = $("#email").val();
        let password = $("#pass2").val();
        let firstName = $("#fname2").val();
        let lastName = $("#lname2").val();
        console.log("inputs " + email + " " + password + " " + firstName + " " +lastName);
    });

    $(document).on("click", logBtn, function(e){
        e.preventDefault();
        let login = $("#log").val();
        let password = $("#pass").val();
        console.log("inputs " + login + " " + password);
    });

}





$(document).ready(function(){
initListeners()
});