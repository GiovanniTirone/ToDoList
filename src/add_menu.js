function createAddMenu () {

    let add_menu = document.createElement("div");
    add_menu.id="add_menu";
    add_menu.setAttribute("project","");
    
    let title_div = document.createElement("div");
    let description_div = document.createElement("div");
    let dueDate_div = document.createElement("div");
    let priority_div = document.createElement("div");
    
    title_div.id = "title_div";
    description_div.id = "description_div";
    dueDate_div.id = "dueDate_div";
    priority_div.id = "priority_div";
    
    let title_label = document.createElement("label"); 
    let description_label = document.createElement("label"); 
    let dueDate_label = document.createElement("label"); 
    let priority_label = document.createElement("label"); 
    
    title_label.id = "title_label";
    description_label.id = "description_label";
    dueDate_label.id = "dueDate_label";
    priority_label.id = "priority_label";
    
    title_label.innerHTML = "Title: ";
    description_label.innerHTML = "Description: ";
    dueDate_label.innerHTML = "Duedate: ";
    priority_label.innerHTML = "Priority: ";
    
    let title_input = document.createElement("input");
    let description_input = document.createElement("input");
    let dueDate_input = document.createElement("input");
    let priority_input = document.createElement("div");
    
    title_input.id = "title_input";
    description_input.id = "description_input";
    dueDate_input.id = "dueDate_input";
    priority_input.id = "priority_input";
    
    dueDate_input.type = "date";
    
    let add_btn = document.createElement("button");
    add_btn.id = "add_menu_add_btn";
    add_btn.innerHTML = "Add";


    let low_priority_btn = document.createElement("button");
    let medium_priority_btn = document.createElement("button");
    let high_priority_btn = document.createElement("button");

    low_priority_btn.innerHTML = "Low";
    medium_priority_btn.innerHTML = "Medium";
    high_priority_btn.innerHTML = "High";

    low_priority_btn.id =  "low_priority_btn";
    medium_priority_btn.id = "medium_priority_btn";
    high_priority_btn.id = "high_priority_btn";

    low_priority_btn.setAttribute("press",false);
    medium_priority_btn.setAttribute("press",false);
    high_priority_btn.setAttribute("press",false);
    

    function open () {

        core.appendChild(add_menu);
    
        add_menu.appendChild(title_div);
        add_menu.appendChild(description_div);
        add_menu.appendChild(dueDate_div);
        add_menu.appendChild(priority_div);
        add_menu.appendChild(add_btn);
    
        title_div.appendChild(title_label);
        title_div.appendChild(title_input);
    
        description_div.appendChild(description_label);
        description_div.appendChild(description_input);
    
        dueDate_div.appendChild(dueDate_label);
        dueDate_div.appendChild(dueDate_input);
    
        priority_div.appendChild(priority_label);
        priority_div.appendChild(priority_input);
        
        priority_input.appendChild(low_priority_btn);
        priority_input.appendChild(medium_priority_btn);
        priority_input.appendChild(high_priority_btn);
    
    }


    function clickPriority (e) {
        console.log("clickPriority");
        switch(e.target.id){
            case "low_priority_btn":
                low_priority_btn.setAttribute("press",true);
                break;
            case "medium_priority_btn":
                medium_priority_btn.setAttribute("press",true);
                break;
            case "high_priority_btn":
                high_priority_btn.setAttribute("press",true);
                break;
        }
    }

    function createToDo(newTitle,newDescription,newDueDate,newPriority,project){
        
        console.log("createToDo");

        let toDo_div = document.createElement("div");
        toDo_div.id = newTitle+"_toDo";
        toDo_div.classList.add("toDo_div");
        toDo_div.setAttribute("storaged",false);
        toDo_div.setAttribute("project",project);

        let title_div = document.createElement("div");
        let description_div = document.createElement("div");
        let dueDate_div = document.createElement("div");
        let priority_div = document.createElement("div");
        
        title_div.classList.add("toDo_title_div");
        description_div.classList.add("toDo_description_toDo_div");
        dueDate_div.classList.add("toDo_dueDate_div");
        priority_div.classList.add("toDo_priority_div");
    
        title_div.id = newTitle + "_toDo_title_div";
        description_div.id = newTitle +"_toDo_description_div";
        dueDate_div.id = newTitle +"_toDo_dueDate_div";
        priority_div.id = newTitle + "_toDo_priority_div";
    

        let dueDate_label = document.createElement("label"); 
        let priority_label = document.createElement("label"); 
        
        dueDate_label.classList.add("toDo_dueDate_label");
        priority_label.classList.add( "toDo_priority_label");
    
        dueDate_label.id = newTitle +"_toDo_dueDate_label";
        priority_label.id = newTitle + "_toDo_priority_label";
    
        dueDate_label.innerHTML = "Duedate: ";
        priority_label.innerHTML = "Priority: ";

        let dueDate_text = document.createElement("div"); 
        let priority_text = document.createElement("div"); 
        
        dueDate_text.classList.add("toDo_dueDate_text");
        priority_text.classList.add( "toDo_priority_text");
    
        dueDate_text.id=newTitle+"_dueDate_text";
        priority_text.id =newTitle+"_priority_text";
    
        title_div.innerHTML = newTitle;
        description_div.innerHTML = newDescription;
        dueDate_text.innerHTML = newDueDate;
        priority_text.innerHTML = newPriority;
    
        let remove_div = document.createElement("div");
        remove_div.classList.add("toDo_remove_div");
        let remove_btn = document.createElement("button");
        remove_btn.classList.add("toDo_remove_btn");
        remove_btn.innerHTML = "Remove";
        remove_btn.id = newTitle + "_remove_btn";

        let project_div = document.createElement("div");
        project_div.id  = newTitle + "_toDo_project_div";
        project_div.classList.add("toDo_project_div");
        let project_label = document.createElement("div");
        project_label.id = newTitle + "_toDo_project_label";
        project_label.classList.add("toDo_project_label");
        project_label.innerHTML = "Project: ";
        let project_text = document.createElement("div");
        project_text.id = newTitle + "_project_toDo_text";
        project_text.classList.add("project_toDo_text");
        
        toDo_div.appendChild(title_div);
        toDo_div.appendChild(description_div);
        toDo_div.appendChild(dueDate_div);
        toDo_div.appendChild(priority_div);
        toDo_div.appendChild(remove_div);
    
        dueDate_div.appendChild(dueDate_label);
        dueDate_div.appendChild(dueDate_text);
    
        priority_div.appendChild(priority_label);
        priority_div.appendChild(priority_text);

        remove_div.appendChild(remove_btn);

        if(toDo_div.getAttribute("project")!=""){
            toDo_div.appendChild(project_div);
            project_div.appendChild(project_label);
            project_div.appendChild(project_text);
            project_text.innerHTML = project;
        }
    
        console.log("the toDo created is: ", toDo_div);
    
        remove_btn.addEventListener("click",clickRemoveBtn);
    
        core.appendChild(toDo_div);
    
    }
    
    function storageToDo (newTitle,newDescription,newDueDate,newPriority,project) {

        localStorage.setItem(`titleOf_${newTitle}`,newTitle);
        localStorage.setItem(`descriptionOf_${newTitle}`,newDescription);
        localStorage.setItem(`dueDateOf_${newTitle}`,newDueDate);
        localStorage.setItem(`priorityOf_${newTitle}`,newPriority); 
        localStorage.setItem(`projectOf_${newTitle}`,project);

        let toDo_div = document.getElementById(newTitle + "_toDo");
        toDo_div.setAttribute("storaged",true);

    }


    function clickRemoveBtn (e) {
        let id = e.target.id ;
        let target_title =  id.substring(0,id.length - 11);
        let target_toDo_id = target_title + "_toDo";
        let target_toDo = document.getElementById(target_toDo_id);

        removeToDoFromLocalStorage(target_title);

        removeAllChild(target_toDo);
        core.removeChild(target_toDo);
    }

    function removeToDoFromLocalStorage (target_title) {

        let target_toDo = document.getElementById(target_title + "_toDo");

        localStorage.removeItem(`titleOf_${target_title}`);
        localStorage.removeItem(`descriptionOf_${target_title}`);
        localStorage.removeItem(`dueDateOf_${target_title}`);
        localStorage.removeItem(`priorityOf_${target_title}`);
        localStorage.removeItem(`projectOf_${target_title}`);

        if (target_toDo != null){
            target_toDo.setAttribute("storaged",false);
        }
    }


    let obj = {removeToDoFromLocalStorage ,add_menu,storageToDo, clickPriority,open,createToDo,add_btn,low_priority_btn,medium_priority_btn,high_priority_btn};
    return obj; 

};


function removeAllChild (container) {
    let child = container.lastElementChild;
    while (child) {
        if(child.lastElementChild==null){
            container.removeChild(child);
            child = container.lastElementChild;
        } else {
            removeAllChild(child);
        }
    }
}



export {createAddMenu,removeAllChild};