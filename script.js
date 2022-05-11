const talk = document.querySelector('.talk');
const content = document.querySelector('.content');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const Recognition = new SpeechRecognition();

Recognition.onstart = () => {
    console.log('You Can Speak Now');
}

Recognition.onresult = (event) => {
    console.log(event)
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;

    content.textContent = transcript;
    ReadOutLoud(transcript)
}

talk.addEventListener('click', () => {
    Recognition.start();
})

let GoodMorning = ["Good Morning Boss",
                   "Have A Nice Day Boss"];

let GoodAfternoon = ["Good Afternoon Boss", 
                     "Have A Nice Lunch Boos"];

let GoodEvening = ["Good Evening Boss",
                   "Same To You Boss"];

let GoodNight = ["Goodnight Boss See you tomorrow",
                 "Have A Sweet Dreams Boss"];

function ReadOutLoud(message)
    {
        const speech = new SpeechSynthesisUtterance();

        speech.text = "I Cannot Under Stand Please Tell It Clearly";

        //---------->>>Starting

        if(message.includes("good morning"))
            {
                let finalSpeech = GoodMorning[Math.floor(Math.random() * GoodMorning.length)];
                speech.text = finalSpeech;
            }
        else if(message.includes("good afternoon"))
            {
                let finalSpeech = GoodAfternoon[Math.floor(Math.random() * GoodAfternoon.length)];
                speech.text = finalSpeech;
            }
        else if(message.includes("good evening"))
            {
                let finalSpeech = GoodEvening[Math.floor(Math.random() * GoodEvening.length)];
                speech.text = finalSpeech;
            }
        else if(message.includes("good night"))
            {
                let finalSpeech = GoodNight[Math.floor(Math.random() * GoodNight.length)];
                speech.text = finalSpeech;
            }
        else if(message.includes("hello"))
            {
                speech.text = "Hai Boss";
            }
        else if(message.includes("hai"))
            {
                speech.text = "Hello Boss";
            }

        //---------->>>Ending

        speech.volume = 1;
        speech.pitch = 1;
        speech.rate = 1; 
        speech.lang = 'en-US';
        
        window.speechSynthesis.speak(speech);
    }