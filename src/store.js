import createStore from 'redux-zero';


let QUIZ = [
    {
        questions: "Which is the oldest airline in the world?",
        options: ["Avianca", "KLM", "Qantas"],
        image: "https://ihatetomatoes.net/react-tutorials/abc-quiz/images/plane.svg"
    },
    {
        questions: "Which is the largest port in the world?",
        options: ["Port of Shanghai", "Port of Singapore", "Port of Rotterdam"],
        image: "https://ihatetomatoes.net/react-tutorials/abc-quiz/images/ship.svg"

    },
    {
        questions: "What is the longest distance cycling backwards?",
        options: ["89.30 km", "675.10 km", "337.60 km"],
        image: "https://ihatetomatoes.net/react-tutorials/abc-quiz/images/bycicle.svg"

    },
    {
        questions: "What is the highest speed ever reached by a school bus?",
        options: ["590 km/h", "320 km/h", "245 km/h"],
        image: "https://ihatetomatoes.net/react-tutorials/abc-quiz/images/bus.svg"

    },
    {
        questions: "What is the longest car trip on one tank of gas?",
        options: ["2617 km", "3568 km", "1732 km"],
        image: "https://ihatetomatoes.net/react-tutorials/abc-quiz/images/car.svg"
    }
];



const initialState = {
    quiz: QUIZ,
    answers : [],
    index : 0
};

const store = createStore(initialState);
export default store;

