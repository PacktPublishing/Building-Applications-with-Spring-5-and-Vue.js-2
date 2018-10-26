console.log('Inside tasks module');
export default function completeTask(user) {
  console.log(`${user.name} completed a task`);
  completedCount++;
}
// Keep track of the count of completed task
export let completedCount = 0;