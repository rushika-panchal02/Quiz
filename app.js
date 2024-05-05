const question = [{
    'que' : 'Which planet in the solar system is known as the “Red Planet”?',
    'a' : 'Venus',
    'b' : 'Earth',
    'c' : 'Mars',
    'd' : 'Jupiter',
    'correct' : 'c'
},
{
    'que' : 'What is the capital of Japan?',
    'a' : 'Beijing',
    'b' : 'Tokyo',
    'c' : 'Seoul',
    'd' : 'Bangkok',
    'correct' : 'b'
},
{
    'que' : 'Which river is the longest in the world?',
    'a' : 'Amazon',
    'b' : 'Mississippi',
    'c' : 'Nile',
    'd' : 'Yangtze',
    'correct' : 'c'
},
{
    'que' : 'What animal is the national symbol of Australia?',
    'a' : 'Kangaroo',
    'b' : 'Koala',
    'c' : 'Emu',
    'd' : 'Crocodile',
    'correct' : 'a'
},
{
    'que' : 'What chemical element is designated as “Hg”?',
    'a' : 'Silver',
    'b' : 'Tin',
    'c' : 'Copper',
    'd' : 'Mercury',
    'correct' : 'd'
},
{
    'que' : 'In what year was the first international modern Olympiad held?',
    'a' : '1896',
    'b' : '1900',
    'c' : '1912',
    'd' : '1924',
    'correct' : 'a'
},
{
    'que' : 'Which one is the hottest continent?',
    'a' : 'Africa',
    'b' : 'South Asia',
    'c' : 'North America',
    'd' : 'Australia',
    'correct' : 'a'
},
{
    'que' : 'What is the official currency of Japan?',
    'a' : 'Won',
    'b' : 'Yuan',
    'c' : 'Dollars',
    'd' : 'Yen',
    'correct' : 'd'
},
{
    'que' : ' What element is the main constituent of diamonds?',
    'a' : 'Carbon',
    'b' : 'Oxygen',
    'c' : 'Silver',
    'd' : 'Gold',
    'correct' : 'a'
},
{
    'que' : 'What ocean is between Africa and Australia?',
    'a' : 'Pacific',
    'b' : 'Indian',
    'c' : 'Atlantic',
    'd' : 'Arctic',
    'correct' : 'b'
}
]

let index = 0;
let total = question.length;
let right = 0, wrong = 0;
const quesbox = document.getElementById("quesbox")
const optioninputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    if(index === total){
        return endquiz()
    }
    reset();
    const data = question[index]
    quesbox.innerText = ` ${index + 1}) ${data.que}`;
    optioninputs[0].nextElementSibling.innerText = data.a;
    optioninputs[1].nextElementSibling.innerText = data.b;
    optioninputs[2].nextElementSibling.innerText = data.c;
    optioninputs[3].nextElementSibling.innerText = data.d;
}

const submitquiz = () => {
    const data = question[index];
    const ans = getanswer()
    console.log(ans, data.correct)
    if(ans === data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getanswer = () => {
    let answer;
    optioninputs.forEach(
        (input) => {
            if(input.checked){
                answer = input.value;
                
            }
        }
    )
    return answer;
}

const reset = () => {
    optioninputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endquiz = () => {
    document.getElementById("box").innerHTML = `
    <div style = "text-align : center">
    <h3>Thank You</h3>
    <h2> ${right} / ${total} are correct </h2>
    </div>
    `
}
loadQuestion();