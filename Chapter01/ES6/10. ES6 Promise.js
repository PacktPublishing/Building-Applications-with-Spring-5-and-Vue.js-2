function getProjects(callback) {
  // Use setTimeout to stimulate calling server API
  setTimeout(() => {
    callback([{id:1, name:'Project A'},{id:2, name:'Project B'}]);
  }, 100);
}

function getTasks(projects, callback) {  
  // Use setTimeout to stimulate calling server API
  setTimeout(() => {
    // Return tasks of specified projects
    callback([{id: 1, projectId: 1, title: 'Task A'}, 
              {id: 2, projectId: 2, title: 'Task B'}]);
  }, 100);    
}

function render({projects, tasks}) {
  console.log(`Render ${projects.length} projects and ${tasks.length} tasks`);
}

getProjects((projects) => {
  getTasks(projects, (tasks) => {
    render({projects, tasks});
  });
});


function getProjects() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([{id:1, name:'Project A'},{id:2, name:'Project B'}]);
    }, 100);
  });  
}

function getTasks(projects) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({projects, tasks:['Buy three tickets', 'Book a hotel']});
    }, 100);
  });
}

function render({projects, tasks}) {  
  console.log(`Render ${projects.length} projects and ${tasks.length} tasks`);
}

getProjects()
.then(getTasks)
.then(render)
.catch((error) => {
  console.log('Hanlding error', error);
});