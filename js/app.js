const clock = () => {
    const date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let seconds = date.getSeconds();

    let day = date.getDay();
    let month = date.getMonth();
    let datein = date.getDate();
    let year = date.getFullYear();
    let dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let amOrPm = year > 12 ? 'PM' : 'AM';

    let timeFormat = hours > 12 ? hours - 12 : hours;

    let toDay = `${dayArray[day]}, ${monthArray[month]} ${datein}, ${year}`;
    const time = `${timeFormat} : ${mins} : ${seconds} ${amOrPm}`;



    document.getElementById('time-format').innerText = time;

    document.getElementById('day').innerText = toDay;


};
clock();

setInterval(clock, 1000)