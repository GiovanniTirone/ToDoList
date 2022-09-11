function projectCreator ( ) {

    let core = document.getElementById("core");
    let headline = document.getElementById("headline");

function createEmptyProject () {
    let project_div = document.createElement("div");
    project_div.id="empty_project_div";
    let add_project_btn = document.createElement("button");
    add_project_btn.innerHTML = "Add project";
    add_project_btn.id = "add_project_btn";
    core.appendChild(project_div); 
    project_div.appendChild(add_project_btn);
    add_project_btn.addEventListener("click",clickAddProjectBtn);
}

    let project_add_menu = document.createElement("div");
    project_add_menu.id="project_add_menu";
    
    let project_title_div = document.createElement("div");
    let project_description_div = document.createElement("div");
    let project_dueDate_div = document.createElement("div");
    let project_priority_div = document.createElement("div");
    
    project_title_div.id = "project_title_div";
    project_description_div.id = "project_description_div";
    project_dueDate_div.id = "project_dueDate_div";
    project_priority_div.id = "project_priority_div";
    
    let project_title_label = document.createElement("label"); 
    let project_description_label = document.createElement("label"); 
    let project_dueDate_label = document.createElement("label"); 
    let project_priority_label = document.createElement("label"); 
    
    project_title_label.id = "project_title_label";
    project_description_label.id = "project_description_label";
    project_dueDate_label.id = "project_dueDate_label";
    project_priority_label.id = "project_priority_label";
    
    project_title_label.innerHTML = "project_Title: ";
    project_description_label.innerHTML = "project_Description: ";
    project_dueDate_label.innerHTML = "project_Duedate: ";
    project_priority_label.innerHTML = "project_Priority: ";
    
    let project_title_input = document.createElement("input");
    let project_description_input = document.createElement("input");
    let project_dueDate_input = document.createElement("input");
    let project_priority_input = document.createElement("div");
    
    project_title_input.id = "project_title_input";
    project_description_input.id = "project_description_input";
    project_dueDate_input.id = "project_dueDate_input";
    project_priority_input.id = "project_priority_input";
    
    project_dueDate_input.type = "date";
    
    let project_add_btn = document.createElement("button");
    project_add_btn.id = "project_add_btn";
    project_add_btn.innerHTML = "Add";


    let project_low_priority_btn = document.createElement("button");
    let project_medium_priority_btn = document.createElement("button");
    let project_high_priority_btn = document.createElement("button");

    project_low_priority_btn.innerHTML = "Low";
    project_medium_priority_btn.innerHTML = "Medium";
    project_high_priority_btn.innerHTML = "High";

    project_low_priority_btn.id =  "project_low_priority_btn";
    project_medium_priority_btn.id = "project_medium_priority_btn";
    project_high_priority_btn.id = "project_high_priority_btn";

    project_low_priority_btn.setAttribute("press",false);
    project_medium_priority_btn.setAttribute("press",false);
    project_high_priority_btn.setAttribute("press",false);
    

    function clickAddProjectBtn () {

        core.removeChild(document.getElementById("empty_project_div"));
        core.appendChild(project_add_menu);
        
        project_add_menu.appendChild(project_title_div);
        project_add_menu.appendChild(project_description_div);
        project_add_menu.appendChild(project_dueDate_div);
        project_add_menu.appendChild(project_priority_div);
        project_add_menu.appendChild(project_add_btn);
    
        project_title_div.appendChild(project_title_label);
        project_title_div.appendChild(project_title_input);
    
        project_description_div.appendChild(project_description_label);
        project_description_div.appendChild(project_description_input);
    
        project_dueDate_div.appendChild(project_dueDate_label);
        project_dueDate_div.appendChild(project_dueDate_input);
    
        project_priority_div.appendChild(project_priority_label);
        project_priority_div.appendChild(project_priority_input);
        
        project_priority_input.appendChild(project_low_priority_btn);
        project_priority_input.appendChild(project_medium_priority_btn);
        project_priority_input.appendChild(project_high_priority_btn);

        project_low_priority_btn.addEventListener("click",clickPriority);
        project_medium_priority_btn.addEventListener("click",clickPriority);
        project_high_priority_btn.addEventListener("click",clickPriority);
    
    }

    function clickAddBtn () { 
        //  console.log("dueDate: "+ dueDate_input.innerHTML);
        //  console.log("title_input"+title_input.innerHTML);
          console.log("clickAddBtn");
          let priority = "";
          let title = project_title_input.value;
          let description = project_description_input.value;
          let dueDate = project_dueDate_input.value;

          console.log("dueDate: " , dueDate);
          
          if(project_low_priority_btn.getAttribute("press")=="true"){
              priority = "low";
              project_low_priority_btn.setAttribute("press",false);
          } else if (project_medium_priority_btn.getAttribute("press")=="true"){
              priority ="medium";
              project_medium_priority_btn.setAttribute("press",false);
          } else if (project_high_priority_btn.getAttribute("press")=="true"){    
              priority = "high";
              project_high_priority_btn.setAttribute("press",false);
          } 
          
          headline.innerHTML = "Project: " + title;

          removeAllChild(project_add_menu);
          core.removeChild(project_add_menu);
          createProject(title,description,dueDate,priority,false);
          createEmptyProject();

    }

    function clickPriority (e) {
        console.log("clickPriority");
        switch(e.target.id){
            case "project_low_priority_btn":
                project_low_priority_btn.setAttribute("press",true);
                break;
            case "project_medium_priority_btn":
                project_medium_priority_btn.setAttribute("press",true);
                break;
            case "project_high_priority_btn":
                project_high_priority_btn.setAttribute("press",true);
                break;
        }
    }

    function createProject (newTitle,newDescription,newDueDate,newPriority){
        console.log("createProject");
        let project_div = document.createElement("div");
        project_div.id = newTitle+"_project";
        project_div.classList.add("project_div");
        project_div.setAttribute("storaged",false);

        let title_div = document.createElement("div");
        let description_div = document.createElement("div");
        let dueDate_div = document.createElement("div");
        let priority_div = document.createElement("div");
        
        title_div.classList.add("project_title_div");
        description_div.classList.add("project_description_project_div");
        dueDate_div.classList.add("project_dueDate_div");
        priority_div.classList.add("project_priority_div");
    
        title_div.id = newTitle + "_project_title_div";
        description_div.id = newTitle +"_project_description_div";
        dueDate_div.id = newTitle +"_project_dueDate_div";
        priority_div.id = newTitle + "_project_priority_div";
    

        let dueDate_label = document.createElement("label"); 
        let priority_label = document.createElement("label"); 
        
        dueDate_label.classList.add("project_dueDate_label");
        priority_label.classList.add( "project_priority_label");
    
        dueDate_label.id = newTitle +"_project_dueDate_label";
        priority_label.id = newTitle + "_project_priority_label";
    
        dueDate_label.innerHTML = "Duedate: ";
        priority_label.innerHTML = "Priority: ";

        let dueDate_text = document.createElement("div"); 
        let priority_text = document.createElement("div"); 
        
        dueDate_text.classList.add("project_dueDate_text");
        priority_text.classList.add( "project_priority_text");
    
        dueDate_text.id=newTitle+"_dueDate_text";
        priority_text.id =newTitle+"_priority_text";
    
        title_div.innerHTML = newTitle;
        description_div.innerHTML = newDescription;
        dueDate_text.innerHTML = newDueDate;
        priority_text.innerHTML = newPriority;
    
        let remove_div = document.createElement("div");
        remove_div.classList.add("project_remove_div");
        let remove_btn = document.createElement("button");
        remove_btn.classList.add("project_remove_btn");
        remove_btn.innerHTML = "Remove";
        remove_btn.id = newTitle + "_project_remove_btn";
    
        
        let view_div = document.createElement("div");
        remove_div.classList.add("project_view_div");
        let view_btn = document.createElement("button");
        view_btn.classList.add("project_view_btn");
        view_btn.innerHTML = "View project";
        view_btn.id = newTitle + "_project_view_btn";

    
        project_div.appendChild(title_div);
        project_div.appendChild(description_div);
        project_div.appendChild(dueDate_div);
        project_div.appendChild(priority_div);
        project_div.appendChild(remove_div);
        project_div.appendChild(view_div);
    
       // title_div.appendChild(title_label);
       // title_div.appendChild(title_text);
    
       // description_div.appendChild(description_label);
      //  description_div.appendChild(description_text);
    
        dueDate_div.appendChild(dueDate_label);
        dueDate_div.appendChild(dueDate_text);
    
        priority_div.appendChild(priority_label);
        priority_div.appendChild(priority_text);
    
        remove_div.appendChild(remove_btn);
        view_div.appendChild(view_btn);
        
        console.log("the project created is: ", project_div);
        
        function clickView (e) {
            console.log("clickView");
            console.log(e.target);
            console.log(e.target.id);
            let id = e.target.id; 
            let title = id.substring(0,id.length-17);
            console.log(title);
            //core.setAttribute("view_project",title);
            removeAllChild(core);
            //core.setAttribute("view_project",undefined);
            createEmptyProjectToDo(title) ;
            
        }
    

        remove_btn.addEventListener("click",clickRemoveBtn);
        view_btn.addEventListener("click",clickView);
        
        storageProject(newTitle,newDescription,newDueDate,newPriority);
        core.appendChild(project_div);
    
    }

    function createEmptyProjectToDo (title) {
        let project_toDo_div = document.createElement("div");
        project_toDo_div.id = title + "_empty_project_toDo_div";
        project_toDo_div.classList.add("empty_project_toDo_div");
        let add_project_toDo_btn = document.createElement("button");
        add_project_toDo_btn.innerHTML = "Add to do";
        add_project_toDo_btn.id = title + "_add_project_toDo_btn";
        core.appendChild(project_toDo_div); 
        project_toDo_div.appendChild(add_project_toDo_btn);
        add_project_toDo_btn.addEventListener("click",clickAddProjectToDoBtn);
    }

    function clickAddProjectToDoBtn (e) {
        console.log("clickAddProjectToDoBtn");
        console.log(e.target);
        console.log(e.target.id);
        let id = e.target.id;
        let title = e.target.id.substring(0,id.length-21);
        let target_container = document.getElementById(title + "_empty_project_toDo_div");
        core.removeChild(target_container);
    }


    function storageProject (newTitle,newDescription,newDueDate,newPriority) {
    
            localStorage.setItem(`project_titleOf_${newTitle}`,newTitle);
            localStorage.setItem(`project_descriptionOf_${newTitle}`,newDescription);
            localStorage.setItem(`project_dueDateOf_${newTitle}`,newDueDate);
            localStorage.setItem(`project_priorityOf_${newTitle}`,newPriority); 

            let project_div = document.getElementById(newTitle+"_project");
            console.log(project_div);
            if(project_div != null){
                project_div.setAttribute("storaged",true);
            }
    }
    
    function clickRemoveBtn (e) {
        let id = e.target.id ; 
        let target_title =  id.substring(0,id.length - 19);
        let target_project_id = target_title + "_project";
        let target_project = document.getElementById(target_project_id);
        removeProjectFromLocalStorage(target_title);
        removeAllChild(target_project);
        core.removeChild(target_project);
    }
    
    function removeProjectFromLocalStorage (target_title) {
        localStorage.removeItem(`project_titleOf_${target_title}`);
        localStorage.removeItem(`project_descriptionOf_${target_title}`);
        localStorage.removeItem(`project_dueDateOf_${target_title}`);
        localStorage.removeItem(`project_priorityOf_${target_title}`);
        let target_project = document.getElementById(target_title+"_project");
        if(target_project != null){
            target_project.setAttribute("storaged",false);
        }
    }

    //clickPriority    view_btn  clickAddBtn project_add_btn project_low_priority_btn
    // project_medium_priority_btn project_high_priority_btn

    let obj = {removeProjectFromLocalStorage, createEmptyProjectToDo ,storageProject, project_add_btn,createEmptyProject,createProject,clickAddProjectBtn,clickAddBtn,project_add_btn,
                /*project_title_input, project_dueDate_input, project_dueDate_input,project_low_priority_btn,
    project_high_priority_btn,project_medium_priority_btn*/};
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




export {projectCreator};