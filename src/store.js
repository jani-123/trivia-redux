import createStore from 'redux-zero';


let QUIZ = [
    {
        questions: "Which is the oldest airline in the world?",
        options: [["Avianca", "KLM", "Qantas"]],
        image: ""
    },
    {
        questions: "Which is the largest port in the world?",
        options: ["Port of Shanghai", "Port of Singapore", "Port of Rotterdam"],
        image: ""

    },
    {
        questions: "What is the longest distance cycling backwards?",
        options: ["89.30 km", "675.10 km", "337.60 km"],
        image: ""

    },
    {
        questions: "What is the highest speed ever reached by a school bus?",
        options: ["590 km/h", "320 km/h", "245 km/h"],
        image: ""

    },
    {
        questions: "What is the longest car trip on one tank of gas?",
        options: ["2617 km", "3568 km", "1732 km"],
        image: ""
    }
];
const answers = [];
const index =0;


const InitialState = {
    quiz: QUIZ,

}

const store = createStore(initialState);
export default store;
/* {
    this.images = ["plane.svg","ship.svg","bicycle.svg","bus.svg","car.svg","truck.svg"];
    this.index = 0;
    this.questions = ["What is the highest speed ever reached by a school bus?","What is the longest car trip on one tank of gas?"];
    this.correctAnswers = ["KLM","Port of Shanghai","337.60 km","590 km/h","2617 km"];
    this.answers = [];
    this.options = [["Avianca","KLM","Qantas"],
              ["Port of Shanghai","Port of Singapore","Port of Rotterdam"],
              ["89.30 km","675.10 km","337.60 km"],
              ["590 km/h","320 km/h","245 km/h"],
              ["2617 km","3568 km","1732 km"]];
    this.callback = null;*/
