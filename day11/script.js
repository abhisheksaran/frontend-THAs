const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');

class Question{
	constructor(question){
		this.question = question;
		//this.options = [];
	}
	set answer(ans){
		this.ans = ans;
	}
	get answer(){
		return `${this.ans}`;
	}
}

class TrueFalse extends Question{
	constructor(question){
		super(question);
		this.options = [];
		this.options.push(true);
		this.options.push(false);
	}
	
}

class Mcq extends Question{
	constructor(question){
		super(question);
		//this.options = [];
	}
	
	set ops(ops){
		console.log(ops);
		this.options = [];
		this.options.push(ops[0]);
		this.options.push(ops[1]);
		this.options.push(ops[2]);
		this.options.push(ops[3]);
	}
	
}

questions = [];

function addQuestions(){
	const q1 = new TrueFalse('Does arrow  functions resolves laxically?');
	q1.answer = 0;

	const q2 = new Mcq('What kind of programming language JS is?');
	ops = ['OOP','Functionl','Both','There is not a right answer to this question.'];
	//console.log(ops);
	q2.options = ops;
	q2.answer = 3;

	const q3 = new TrueFalse('Did I use classes to implement this assignment?');
	q3.answer = 0;

	questions.push(q1);
	questions.push(q2);
	questions.push(q3);
}

function buildQuiz(){

	quiz = [];
	for(let i=0;i<questions.length;i++){
		options = [];
		for(let j =0;j<questions[i].options.length;j++){
			options.push(
				`<label>
					<input type="radio" name="Question${i}" value="${j}">
						${j+1}:
						${questions[i].options[j]}
				</label>`
			)
		}
		quiz.push(
			`<div class="question">${i+1}. ${questions[i].question}</div>
			<div class="options">${options.join('')}</div> <br>`
		)
	}
	quizContainer.innerHTML = quiz.join('');

}

function showResults(){
	const answerContainers = quizContainer.querySelectorAll('.options');
	let cntAC = 0;
	for(let i=0;i<questions.length;i++){
		const answerContainer = answerContainers[i];
		const selector = `input[name=Question${i}]:checked`;
		const userAnswer = (answerContainer.querySelector(selector)||{}).value;
		console.log(userAnswer, questions[i].answer);	
		if( userAnswer === questions[i].answer){
			cntAC++;
			answerContainer.style.color = 'lightgreen';
		}
		else{
			answerContainer.style.color = 'red';
		}
	}
	resultContainer.innerHTML = `$ Buddy your score is: ${cntAC} out of ${questions.length}`;
	
}

addQuestions();
buildQuiz();
submitButton.addEventListener('click',showResults);
//https://www.sitepoint.com/simple-javascript-quiz/