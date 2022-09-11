function createToDo (newTitle,newDescription,newDueDate,newPriority){
    let toDo_div = document.createElement("div");
    let title_div = document.createElement("div");
    let description_div = document.createElement("div");
    let dueDate_div = document.createElement("div");
    let priority_div = document.createElement("div");
    
    title_div.id = "toDo_title_div";
    description_div.id = "toDo_description_toDo_div";
    dueDate_div.id = "toDo_dueDate_div";
    priority_div.id = "toDo_priority_div";

    let title_label = document.createElement("label"); 
    let description_label = document.createElement("label"); 
    let dueDate_label = document.createElement("label"); 
    let priority_label = document.createElement("label"); 
    
    title_label.id = "toDo_title_label";
    description_label.id = "toDo_description_label";
    dueDate_label.id = "toDo_dueDate_label";
    priority_label.id = "toDo_priority_label";

    let title_text = document.createElement("div"); 
    let description_text = document.createElement("div"); 
    let dueDate_text = document.createElement("div"); 
    let priority_text = document.createElement("div"); 
    
    title_text.id = "toDo_title_text";
    description_text.id = "toDo_description_text";
    dueDate_text.id = "toDo_dueDate_text";
    priority_text.id = "toDo_priority_text";

    title_text.innerHTML = newTitle;
    description_text.innerHTML = newDescription;
    dueDate_text.innerHTML = newDueDate;
    priority_text.innerHTML = newPriority;

    toDo_div.appendChild(title_div);
    toDo_div.appendChild(description_div);
    toDo_div.appendChild(dueDate_div);
    toDo_div.appendChild(priority_div);

    let title = {title_div,title_label,title_text};
    let description = {description_div,description_label,description_text};
    let dueDate = {dueDate_div,dueDate_label,dueDate_text};
    let priority = {priority_div,priority_label,priority_text}; 

    let obj = {title,description,dueDate,priority};
    return obj; 
}
/*
updateToDo (toDo,newTitle,newDescription,newDueDate,newPriority ){
    toDo.title = newTitle;
    toDo.description = newDescription;
    toDo.DueDate = newDueDate;
    toDo.priority = newPriority;
}*/

export {createToDo}; 