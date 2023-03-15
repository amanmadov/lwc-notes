import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selectedAnswers = {} 
    correctAnswers = 0 
    isSubmitted = false
    
    questionList = [
        {
            id: "1",
            question: "Which one of the following is not a template loop?",
            answers: {
                a: "for:each",
                b: "iterator",
                c: "map loop"
            },
            correctAnswer: "c"
        },
        {
            id: "2",
            question: "Which of the file is invald in LWC component folder?",
            answers: {
                a: ".svg",
                b: ".apex",
                c: ".js"
            },
            correctAnswer: "b"
        },
        {
            id: "3",
            question: "Which one of the following is not a directive?",
            answers: {
                a: "for:each",
                b: "if:true",
                c: "@track"
            },
            correctAnswer: "c"
        }
    ]

    get allNotSelected() {
        return Object.keys(this.selectedAnswers).length !== this.questionList.length
    }

    get isScoredFull() {
        return `slds-text-heading_large ${this.questionList.length === this.correctAnswers ? 'slds-text-color_success' : 'slds-text-color_error'}`
    }

    changeHandler(event) {
        const { name, value } = event.target
        this.selectedAnswers = { ...this.selectedAnswers, [name]: value }
    }

    submitHandler(event) {
        event.preventDefault()
        let correct = this.questionList.filter(item => this.selectedAnswers[item.id] === item.correctAnswer)
        this.correctAnswers = correct.length
        this.isSubmitted = true
    }

    resetHandler() {
        this.selectedAnswers = {}
        this.correctAnswers = 0
        this.isSubmitted = false
    }
}