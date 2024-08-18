let sidebar = document.getElementById('sidebar');
let hamburgerMenu = document.getElementById('hamburgerMenu');
let ulElements = sidebar.querySelector('ul');
let liElements = ulElements.querySelectorAll('li');
let isSidebarMenuClicked = false;
let isSkillMenuClicked = false;
let skillSidebar = document.getElementById('sidebar2');
let sidebar2content = document.getElementById('sidebar2content');

const sidebarMenuClicked = () => {
    if (isSidebarMenuClicked === false) {
        sidebar.style.width = "100%";
        liElements.forEach(li => {
            li.style.display = "block";
        });
        document.body.classList.add('noscroll');
        isSidebarMenuClicked = true;
    } else {
        sidebar.style.width = "0";
        liElements.forEach(li => {
            li.style.display = "none";
        });
        document.body.classList.remove('noscroll');
        isSidebarMenuClicked = false;
    }
};

const btn1Content = document.getElementById('btn1Content');
const btn2Content = document.getElementById('btn2Content');
const btn3Content = document.getElementById('btn3Content');
const btn4Content = document.getElementById('btn4Content');
const btn5Content = document.getElementById('btn5Content');
const btn6Content = document.getElementById('btn6Content');
const skillHeader = document.getElementById('skillHeader');

const btnClicked = (btn) => {
    btnId = btn.id;
    const allbuttons = document.getElementsByClassName('skillbtn');
    Array.from(allbuttons).forEach(button => {
        button.style.backgroundColor = "";
    });

    thisBtn = document.getElementById(btnId);
    thisBtn.style.backgroundColor = "#5B8FB9";
    switch (btnId){
        case "btn1":
            btn1Content.style.display = "block";  
            btn2Content.style.display = "none";   
            btn3Content.style.display = "none";  
            btn4Content.style.display = "none";  
            btn5Content.style.display = "none";  
            btn6Content.style.display = "none";
            skillHeader.innerHTML = "Full Stack Web Developing" ;
            break;
        case "btn2":
            btn1Content.style.display = "none";  
            btn2Content.style.display = "block";  
            btn3Content.style.display = "none";  
            btn4Content.style.display = "none";  
            btn5Content.style.display = "none";  
            btn6Content.style.display = "none"; 
            skillHeader.innerHTML = "Professional Video Editing" ;
            break;
        case "btn3":
            btn1Content.style.display = "none";  
            btn2Content.style.display = "none";  
            btn3Content.style.display = "block";  
            btn4Content.style.display = "none";  
            btn5Content.style.display = "none";  
            btn6Content.style.display = "none"; 
            skillHeader.innerHTML = "Coding" ;
            break;
        case "btn4":
            btn1Content.style.display = "none";  
            btn2Content.style.display = "none";    
            btn3Content.style.display = "none";  
            btn4Content.style.display = "block";  
            btn5Content.style.display = "none";  
            btn6Content.style.display = "none";
            skillHeader.innerHTML = "Electronic and Robotics Developing" ; 
            break;
        case "btn5":
            btn1Content.style.display = "none";  
            btn2Content.style.display = "none";    
            btn3Content.style.display = "none";  
            btn4Content.style.display = "none";  
            btn5Content.style.display = "block"; 
            btn6Content.style.display = "none";
            skillHeader.innerHTML = "VTOL UAV Developing" ; 
            break;
        case "btn6":
            btn1Content.style.display = "none";  
            btn2Content.style.display = "none";    
            btn3Content.style.display = "none";  
            btn4Content.style.display = "none";  
            btn5Content.style.display = "none";  
            btn6Content.style.display = "block";
            skillHeader.innerHTML = "Languages";
            break;
    }
};

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');

const buttons = [btn1, btn2, btn3, btn4, btn5, btn6];
const btncontents = [btn1Content, btn2Content, btn3Content, btn4Content, btn5Content, btn6Content]

const skillMenuClicked = () => {
if (isSkillMenuClicked === false) {
    skillSidebar.style.width = "100%";
    sidebar2content.style.display = "block";
    isSkillMenuClicked = true;

    var visibleContent = btncontents.find(function(content) {
        return window.getComputedStyle(content).getPropertyValue('display') === 'block';
    });

    buttons.forEach(function(button) {
        button.style.backgroundColor = "";
    });

    switch (visibleContent) {
        case btn1Content:
            btn11.style.backgroundColor = "#5B8FB9";
            break;
        case btn2Content:
            btn12.style.backgroundColor = "#5B8FB9";
            break;
        case btn3Content:
            btn13.style.backgroundColor = "#5B8FB9";
            break;
        case btn4Content:
            btn14.style.backgroundColor = "#5B8FB9";
            break;
        case btn5Content:
            btn15.style.backgroundColor = "#5B8FB9";
            break;
        case btn6Content:
            btn16.style.backgroundColor = "#5B8FB9";
            break;
    }
} else {
    skillSidebar.style.width = "0px";
    sidebar2content.style.display = "none";
    isSkillMenuClicked = false;
}
};

const btnClicked2 = (btn) => {
    btnId = btn.id;
    const allbuttons = document.getElementsByClassName('skillbtn2');
    Array.from(allbuttons).forEach(button => {
        button.style.backgroundColor = "";
    });

    thisBtn = document.getElementById(btnId);
    thisBtn.style.backgroundColor = "#5B8FB9";
    switch (btnId){
        case "btn11":
            btn1Content.style.display = "block";  
            btn2Content.style.display = "none";   
            btn3Content.style.display = "none";  
            btn4Content.style.display = "none";  
            btn5Content.style.display = "none";  
            btn6Content.style.display = "none";
            skillHeader.innerHTML = "Full Stack Web Developing" ;
            skillSidebar.style.width = "0px";
            sidebar2content.style.display = "none";
            isSkillMenuClicked = false;
            break;
        case "btn12":
            btn1Content.style.display = "none";  
            btn2Content.style.display = "block";  
            btn3Content.style.display = "none";  
            btn4Content.style.display = "none";  
            btn5Content.style.display = "none";  
            btn6Content.style.display = "none"; 
            skillHeader.innerHTML = "Professional Video Editing" ;
            skillSidebar.style.width = "0px";
            sidebar2content.style.display = "none";
            isSkillMenuClicked = false;
            break;
        case "btn13":
            btn1Content.style.display = "none";  
            btn2Content.style.display = "none";  
            btn3Content.style.display = "block";  
            btn4Content.style.display = "none";  
            btn5Content.style.display = "none";  
            btn6Content.style.display = "none"; 
            skillHeader.innerHTML = "Coding" ;
            skillSidebar.style.width = "0px";
            sidebar2content.style.display = "none";
            isSkillMenuClicked = false;
            break;
        case "btn14":
            btn1Content.style.display = "none";  
            btn2Content.style.display = "none";    
            btn3Content.style.display = "none";  
            btn4Content.style.display = "block";  
            btn5Content.style.display = "none";  
            btn6Content.style.display = "none";
            skillHeader.innerHTML = "Electronic and Robotics Developing" ; 
            skillSidebar.style.width = "0px";
            sidebar2content.style.display = "none";
            isSkillMenuClicked = false;
            break;
        case "btn15":
            btn1Content.style.display = "none";  
            btn2Content.style.display = "none";    
            btn3Content.style.display = "none";  
            btn4Content.style.display = "none";  
            btn5Content.style.display = "block"; 
            btn6Content.style.display = "none";
            skillHeader.innerHTML = "VTOL UAV Developing" ; 
            skillSidebar.style.width = "0px";
            sidebar2content.style.display = "none";
            isSkillMenuClicked = false;
            break;
        case "btn16":
            btn1Content.style.display = "none";  
            btn2Content.style.display = "none";    
            btn3Content.style.display = "none";  
            btn4Content.style.display = "none";  
            btn5Content.style.display = "none";  
            btn6Content.style.display = "block";
            skillHeader.innerHTML = "Languages" ;
            skillSidebar.style.width = "0px";
            sidebar2content.style.display = "none";
            isSkillMenuClicked = false;
            break;
    }
};
