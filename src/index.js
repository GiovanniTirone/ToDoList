import {createAddMenu,removeAllChild} from './add_menu';
import {projectCreator} from './projects';
import './add_menu.css';
import './index.css';
import './projects.css';

// --------------------------- DOM --------------------------

let projects_btn = document.getElementById("projects_btn");
let headline = document.getElementById("headline");

// ----------------------- EVENT LISTENERS ----------------------------

add_btn.addEventListener("click",clickAddBtn);
all_btn.addEventListener("click",clickAllBtn);
remove_all_btn.addEventListener("click",clickRemoveAllBtn);
projects_btn.addEventListener("click",clickProjectsBtn);
core.addEventListener("DOMNodeInserted",activateToDoButtons);
core.addEventListener("DOMNodeInserted",activateProjectButtons);
core.addEventListener("DOMNodeInserted",activateAddToDoProjectBtn);


// -----------------------Listener Functions ------------------------

function clickAddBtn () {
    AddMenu.open();
    AddMenu.low_priority_btn.addEventListener("click",AddMenu.clickPriority);
    AddMenu.medium_priority_btn.addEventListener("click",AddMenu.clickPriority);
    AddMenu.high_priority_btn.addEventListener("click",AddMenu.clickPriority);
    AddMenu.add_btn.addEventListener("click",clickAddMenuAddBtn);
}

function clickAddMenuAddBtn () {
    console.log("CLICKADDMENUADDBTN");

    let priority = "";
    let title = title_input.value;
    let description = description_input.value;
    let dueDate = dueDate_input.value;
    let project = headline.innerHTML.substring(9);  //AddMenu.add_menu.getAttribute("project");
    //AddMenu.add_menu.setAttribute("project","");
    console.log("PROJECT:" + project);

    if(low_priority_btn.getAttribute("press")=="true"){
        priority = "low";
        low_priority_btn.setAttribute("press",false);
    } else if (medium_priority_btn.getAttribute("press")=="true"){
        priority ="medium";
        medium_priority_btn.setAttribute("press",false);
    } else if (high_priority_btn.getAttribute("press")=="true"){    
        priority = "high";
        high_priority_btn.setAttribute("press",false);
    } 

    removeAllChild(add_menu);
    core.removeChild(add_menu);

    AddMenu.createToDo(title,description,dueDate,priority,project);
    AddMenu.storageToDo(title,description,dueDate,priority,project);
    toDoes[title] =  new createToDoObj(title,description,dueDate,priority,project,true);

}

function clickAllBtn  ( ) {
    headline.innerHTML = "All to Does";
    removeAllChild(core);
    for(let title in toDoes) {
        let toDo = toDoes[title];
        AddMenu.createToDo(title,toDo["description"],toDo["dueDate"],toDo["priority"],toDo["project"],true);
    }
}

function clickProjectsBtn () {
    console.log("clickProjectsBtn");
    headline.innerHTML = "My projects!!";
    removeAllChild(core);
    openProjects();
    ProjectCreator.createEmptyProject();
    ProjectCreator.project_add_btn.addEventListener("click",()=>{
        let priority = "";
        let title = project_title_input.value;
        let description = project_description_input.value;
        let dueDate = project_dueDate_input.value;
        
        if(project_low_priority_btn.getAttribute("press")=="true"){
            priority = "low";
            //ProjectCreator.project_low_priority_btn.setAttribute("press",false);
        } else if (project_medium_priority_btn.getAttribute("press")=="true"){
            priority ="medium";
            //ProjectCreator.project_medium_priority_btn.setAttribute("press",false);
        } else if (project_high_priority_btn.getAttribute("press")=="true"){    
            priority = "high";
            //ProjectCreator.project_high_priority_btn.setAttribute("press",false);
        } 

        //ProjectCreator.storageProject(title,description,dueDate,priority);
        Projects[title] = new createProjectObj(title,description,dueDate,priority,true);
        //document.getElementById(title+"_project").setAttribute("storaged",true); // PROBLEMA
        console.log(Projects);

        });    
        ProjectCreator.project_add_btn.addEventListener("click",ProjectCreator.clickAddBtn);
}

function activateProjectButtons (e) {
    console.log("activateProjectButtons");
    let project_div = e.target;
    let id = project_div.id;  
    console.log(id);
    console.log(id.substring(id.length - 8));
    if(id.substring(id.length - 8) != "_project"){return}
    let title = id.substring(0,id.length-8);
    let view_btn = document.getElementById(title +"_project_view_btn");
    let remove_btn = document.getElementById(title + "_project_remove_btn");
    console.log(view_btn);
    project_div.setAttribute("storaged",true);
    view_btn.addEventListener("click", clickViewBtn);
    remove_btn.addEventListener("click",removeToDoesOfTheRemovedProject);
    remove_btn.addEventListener("click",removeProjectObj);
}

function clickViewBtn (e) {
    console.log("clickViewBtn");
    let id = e.target.id;  
    let title = id.substring(0,id.length-17);
    openProjectToDoes(title);
    let add_project_toDo_btn = document.getElementById(title + "_add_project_toDo_btn");
    console.log("add_project_toDo_btn:",add_project_toDo_btn);
    add_project_toDo_btn.addEventListener("click",clickAddProjectToDoBtn);
}

function clickAddProjectToDoBtn () {
    //let project_title = e.target.id.substring(0,e.target.id.length -23);
    AddMenu.open();
    //AddMenu.add_menu.setAttribute("project",project_title);
    AddMenu.low_priority_btn.addEventListener("click",AddMenu.clickPriority);
    AddMenu.medium_priority_btn.addEventListener("click",AddMenu.clickPriority);
    AddMenu.high_priority_btn.addEventListener("click",AddMenu.clickPriority);
    AddMenu.add_btn.addEventListener("click",clickAddMenuAddBtn);
    AddMenu.add_btn.addEventListener("click",ProjectCreator.createEmptyProjectToDo);
}

function activateAddToDoProjectBtn (e) {
    console.log("activateAddToDoProjectBtn");
    let id = e.target.id ;
    if (id.substring(id.length - 23) != "_empty_project_toDo_div") {return};
    let title = id.substring(0,id.length - 23);
    let empty_div = document.getElementById(title + "_empty_project_toDo_div");
    console.log("empty_div: ", empty_div);
    empty_div.addEventListener("DOMNodeInserted",()=>{
        let  add_project_toDo_btn = document.getElementById(title + "_add_project_toDo_btn");
        console.log(add_project_toDo_btn);
        add_project_toDo_btn.addEventListener("click",clickAddProjectToDoBtn);
    });
}

function activateToDoButtons (e) {
    let id = e.target.id ; 
    if(id.substring(id.length - 5)!= "_toDo" ){return}
    let title = id.substring(0,id.length-5);
    let remove_btn = document.getElementById(title + "_remove_btn");
    remove_btn.addEventListener("click",removeToDoObj);
}


function clickRemoveAllBtn () {
    localStorage.clear();
    removeAllChild(core);
    for(let toDo_title in toDoes){
        delete toDoes[toDo_title];
    }
    for(let project_title in Projects){
        delete Projects[project_title];
    }
}

// ------------------------- Remove functions -----------------------------


function removeToDoesOfTheRemovedProject (e) {
    console.log("removeToDoesOfTheRemovedProject");
    let id = e.target.id ; 
    let target_title =  id.substring(0,id.length - 19);
    console.log(target_title);
    for(let toDo_title in toDoes){
        if(toDoes[toDo_title]["project"] == target_title){
            delete toDoes[toDo_title];
            AddMenu.removeToDoFromLocalStorage(target_title);
        }
    }
    console.log(toDoes);
}

function removeProjectObj (e) {
    console.log("removeProjectObj");
    let project_div = e.target; 
    let id = project_div.id ; 
    let title = id.substring(0,id.length-19);
    delete Projects[title];
    console.log(Projects);
}

function removeToDoObj (e) {
    console.log("removeToDoObj");
    let toDo_div = e.target; 
    let id = toDo_div.id ; 
    let title = id.substring(0,id.length-11);
    delete toDoes[title];
    console.log(toDoes);
}
 
// ----------------------- OBJECTS --------------------------------------

let AddMenu = createAddMenu();
let ProjectCreator = projectCreator();
let toDoes = taketoDoesFromLocalStorage() ;
let Projects = takeProjectsFromLocalStorage();


// ----------------------------FUNCTIONS ----------------------------------


function createToDoObj (title,description,dueDate,priority,project,storaged) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.storaged = storaged;
}

function createProjectObj (title,description,dueDate,priority,storaged) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.storaged = storaged;
}

function openProjectToDoes (project_title) {
    console.log("openProjectToDoes");
    let empty_div = document.getElementById(project_title + "_empty_project_toDo_div");
    for(let toDo_title in toDoes) {
        let toDo = toDoes[toDo_title];
        if(toDo["project"] == project_title ) {
            let toDo_div = AddMenu.createToDo(toDo_title,toDo["description"],toDo["dueDate"],toDo["priority"],toDo["project"],true);
            core.insertBefore(toDo_div , empty_div);
        }
    }
}

function openProjects () {
    for(let project_title in  Projects){
        let project = Projects[project_title];
        ProjectCreator.createProject(project_title,project["description"],project["dueDate"],project["priority"]);
    }
}


// --------------------------------TAKE FROM LOCAL STORAGE-------------------------

function taketoDoesFromLocalStorage () {
    console.log("taketoDoesFromLocalStorage");
    let storage_keys = Object.keys(localStorage);
    let toDoes = {};
    for(let key of storage_keys){
        if(key.substring(0,8)=="titleOf_"){
            let title = key.substring(8);
            toDoes[title] = {};
            toDoes[title]["title"] = title;
            for(let key1 of storage_keys){
                switch (key1) { 
                    case "descriptionOf_"+title :
                    toDoes[title]["description"] = localStorage.getItem(key1);
                    break;
                    case "dueDateOf_" + title : 
                    toDoes[title]["dueDate"] = localStorage.getItem(key1);
                    break;
                    case "priorityOf_" +title : 
                    toDoes[title]["priority"] = localStorage.getItem(key1);
                    break;
                    case "projectOf_" + title : 
                    toDoes[title]["project"] = localStorage.getItem(key1);
                    break; 
                }
            }
        }
    }
    return toDoes ; 
}

function takeProjectsFromLocalStorage () {
    console.log("takeProjectsFromLocalStorage");
    let storage_keys = Object.keys(localStorage);
    let Projects = {};
    for(let key of storage_keys){
        if(key.substring(0,16)=="project_titleOf_"){
            let title = key.substring(16);
            Projects[title] = {};
            Projects[title]["title"] = title;
            for(let key1 of storage_keys){
                switch (key1) { 
                    case "project_descriptionOf_"+title :
                    Projects[title]["description"] = localStorage.getItem(key1);
                    break;
                    case "project_dueDateOf_" + title : 
                    Projects[title]["dueDate"] = localStorage.getItem(key1);
                    break;
                    case "project_priorityOf_" +title : 
                    Projects[title]["priority"] = localStorage.getItem(key1);
                    break;
                    case "project_projectOf_" + title : 
                    Projects[title]["project"] = localStorage.getItem(key1);
                    break; 
                }
            }
        }
    }
    return Projects ; 
}




// ------------------------------ CLICK TODAY / WEEK --------------------------

let today = new Date ();
let currentDayOfWeek = today.getDay();
let currentDay = String(today.getDate()).padStart(2, '0');
let currentMonth = String(today.getMonth() + 1).padStart(2, '0'); 
let currentYear = String(today.getFullYear());
let todayStr = currentYear +"-" + currentMonth +"-"+ currentDay;  

today_btn.addEventListener("click",clickToday);
week_btn.addEventListener("click",clickWeek);

function clickToday () {
    console.log("clickToday");
    headline.innerHTML = "Oooooops I have to finish all this stuff within today!!!";
    removeAllChild(core);
    for (let title in toDoes){
        let toDo = toDoes[title];
        if (todayStr == toDo["dueDate"]) {
            AddMenu.createToDo(toDo["title"],toDo["description"],toDo["dueDate"],toDo["priority"],toDo["project"],true);
        }
        else{ 
            continue; 
        }
    }
}


function clickWeek () {
    console.log("clickWeek");
    headline.innerHTML = "Week to does.";
    removeAllChild(core);
    for (let title in toDoes){
        console.log("title: " +title);
        let toDo = toDoes[title];
        let toDo_day = Number(toDo["dueDate"].slice(-2));
        let toDo_month = Number(toDo["dueDate"].substring(5,7));
        let toDo_year = Number(toDo["dueDate"].substring(0,4));
        console.log(toDo_day, toDo_month, toDo_year);
        let smWk = sameWeek(Number(currentMonth),toDo_month,Number(currentYear),toDo_year,Number(currentDay),toDo_day,Number(currentDayOfWeek));
        console.log(smWk);
        if(smWk){
            AddMenu.createToDo(toDo["title"],toDo["description"],toDo["dueDate"],toDo["priority"],toDo["project"],true);
        }
    }
}

function sameWeek (thisMonth,month,thisYear,year,thisDay,day,thisDayOfWeek) {
    
    console.log("sameWeek");

    let distance = undefined; 

    if(thisYear == year){
        if(thisMonth == month){  
            if(thisDay>thisDayOfWeek){
                console.log("same year and month, thisDay > thisDayOfWeek");
                distance =  Math.abs((thisDay-thisDayOfWeek)-day);
            }
            else{
                console.log("same year and month, thisDay < thisDayOfWeek");
                distance = (thisDayOfWeek-thisDay)+day; 
            }
        } 
        else if(thisMonth==month+1){
            console.log("same year, thisMonth=month+1");
            distance = (numeberDayOfMonth(thisMonth)-thisDay-thisDayOfWeek)+day; 
        }
        else if(month==thisMonth+1){
            console.log("same year, thisMonth=month-1");
            distance = (numeberDayOfMonth(month)-day)+(thisDay-thisDayOfWeek); 
        }
    }
    else if(thisYear == year +1){
        if (thisMonth=="01" && month==12){
            console.log("thisYear = year+1, thisMonth=month+1");
            distance = (numeberDayOfMonth(month)-day)+(thisDay-thisDayOfWeek);
        }
        else if(month=="01" && thisMonth==12){
            console.log("thisYear = year+1, thisMonth=month-1");
            distance = (numeberDayOfMonth(thisMonth)-thisDay-thisDayOfWeek)+day; 
        }
    }
    
    if(distance < 7) {return true}
    else {return false}

}

let numeberDayOfMonth = (m,y) => {
    if(m==1 || m==3 || m==5 || m==7 || m==8 || m==10 || m==12){return 31}
    if(m==4 || m==6 || m==9 || m==11){return 30}
    if(m==2){if(bisestilYear(y)){return 29}else{return 28};}
}

function bisestilYear (y) {
    if(y%4 == 0 ){
        if(y%100 != 0){
            return true;
        } 
        else if (y%400 == 0){
            return true;
        } 
        else {
            return false;
        }
    }
    else {
        return false; 
    }
}



