const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const usersWithThree = users.filter((user) => user.languages.length > 2);

const usersEmails = users.map((user) => user.email);

const totalYearsOfExp = users.reduce((total, user) => {
    return total + user.yearsOfExperience
}, 0);

const average = totalYearsOfExp / users.length;

const longestEmail = users.reduce((longestCurrent, user)=> {
    if (user.email > longestCurrent) {
        return user.email
    }
    return longestCurrent
}, '');

const instructorNames = users.reduce((stringMessage, user) => {
    return `${stringMessage} ${user.name},`
}, 'Your instructors are: ');

