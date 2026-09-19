const playButton = document.getElementById("playStory");
const storyScreen = document.getElementById("storyScreen");

const introAnimation = document.getElementById("introAnimation");
const storyChapters = document.getElementById("storyChapters");

const storyTitle = document.getElementById("storyTitle");
const storyText = document.getElementById("storyText");
const nextButton = document.getElementById("nextStory");

const proposalButtons = document.getElementById("proposalButtons");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

const yesScreen = document.getElementById("yesScreen");
const loveMusic = document.getElementById("loveMusic");


const chapters = [
    {
        title: "It all started with you...",
        text: "And somehow, you became my favorite part of every day. ❤️"
    },

    {
        title: "Then you became my favorite person.",
        text: "Every conversation, every laugh, every little moment became something I wanted to keep forever. ❤️"
    },

    {
        title: "You made ordinary days special.",
        text: "Even the smallest moments with you became some of my favorite memories."
    },

    {
        title: "And now I have one question...",
        text: "A question I've been wanting to ask you for a very long time. ❤️"
    },

    {
        title: "Will you be mine?",
        text: "Not just for one season... but for every season that comes next. ❤️"
    }
];


let currentChapter = 0;


// ================================
// PLAY STORY
// ================================

playButton.addEventListener("click", function () {

    storyScreen.style.display = "flex";

    introAnimation.style.display = "block";
    storyChapters.style.display = "none";

    proposalButtons.style.display = "none";
    nextButton.style.display = "none";

    currentChapter = 0;


    // Intro lasts 2 seconds

    setTimeout(function () {

    introAnimation.classList.add("intro-hidden");

    storyChapters.classList.add("chapters-visible");

    showChapter();

}, 2000);

});


// ================================
// SHOW CHAPTER
// ================================

function showChapter() {

    storyTitle.textContent = chapters[currentChapter].title;

    storyText.textContent = chapters[currentChapter].text;


    // Final chapter

    if (currentChapter === chapters.length - 1) {

        nextButton.style.display = "none";

        proposalButtons.style.display = "flex";

    }

    // Normal chapters

    else {

        nextButton.style.display = "block";

        proposalButtons.style.display = "none";

        nextButton.textContent = "Continue ❤️";

    }

}


// ================================
// CONTINUE
// ================================

nextButton.addEventListener("click", function () {

    currentChapter++;

    if (currentChapter < chapters.length) {

        showChapter();

    }

});


// ================================
// YES
// ================================

yesButton.addEventListener("click", function () {

    storyScreen.style.display = "none";

    yesScreen.style.display = "flex";


    // Start music

    if (loveMusic) {

        loveMusic.currentTime = 0;

        loveMusic.volume = 1;

        loveMusic.play().catch(function (error) {

            console.log("Music could not start:", error);

        });

    }


    // Falling hearts

    for (let i = 0; i < 100; i++) {

        const heart = document.createElement("div");

        heart.classList.add("heart");

        heart.textContent = "❤️";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.animationDelay =
            Math.random() * 2 + "s";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";


        document.body.appendChild(heart);


        setTimeout(function () {

            heart.remove();

        }, 6000);

    }

});


// ================================
// MAYBE
// ================================

noButton.addEventListener("click", function () {

    alert("Are you sure? 🥺❤️");

});