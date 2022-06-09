// Global Variable
const sections = document.body.querySelectorAll("section")
const loadingIntro = document.body.querySelector('.loading-intro');

const app = () => {
    // Loading Intro
    setTimeout(() => {
        loadingIntro.style.display = "none"
        document.body.classList.add('content');
    }, 2000);

    // Add the "anim" class to the section when the section is on the viewport 
    const options = {
            threshold: 0.3,
        },
        observer = new IntersectionObserver((sections) => {
            sections.forEach((sec) => {
                sec.isIntersecting && sec.target.classList.add("anim");
            });
        }, options),
        // Setup function to execute the observer
        callObserver = (sec) => {
            observer.observe(sec);
        };
    sections.forEach((sec) => {
        sec.style.opacity = "0";
        callObserver(sec);
    });
}

export default app;