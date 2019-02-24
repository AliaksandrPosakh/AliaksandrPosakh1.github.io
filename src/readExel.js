let fs = require('fs');
let xlsx = require('node-xlsx').default;
const mentorStudent = xlsx.parse('Mentor-students-pairs.xlsx');
const Tasks = xlsx.parse('Tasks.xlsx');
const mentorsList = [];
let mentors = {};
let arr = [];


    for (let i = 1; i < mentorStudent[0].data.length-1; i++) {

    if(mentorStudent[0].data[i][0] == mentorStudent[0].data[i+1][0]) {
      arr.push(mentorStudent[0].data[i][1]);
        
    }

    if(mentorStudent[0].data[i][0] != mentorStudent[0].data[i+1][0]) {
        mentorsList.push(mentorStudent[0].data[i][0]);
        arr.push(mentorStudent[0].data[i][1]);
        mentors[mentorStudent[0].data[i][0]] = arr;
        arr = [];
    }
}
mentors.task = [];
Tasks[0].data.forEach(item => {
    mentors.task.push(item[0]);
    mentors.task.push(item[2]);
});
mentors = JSON.stringify(mentors);
fs.writeFile("data.js", mentors, function(err) {
    if(err) throw err;
    
})

