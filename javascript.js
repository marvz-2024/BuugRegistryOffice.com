const textArray = ["Civil registration is the system by which a government records the vital events (births, marriages, and deaths) of its citizens and residents."," The resulting repository or database has different names in different countries and even in different subnational jurisdictions."," It can be called a civil registry,[1] civil register (but this is also an official term for an individual file of a vital event),[2] vital records, and other terms,"," and the office responsible for receiving the registrations can be called a bureau of vital statistics, registry of vital records and statistics,[3] registrar, registry, register, registry office (officially register office), or population registry.","The primary purpose of civil registration is to create a legal document (usually called a certificate) that can be used to establish and protect the rights of individuals."," A secondary purpose is to create a data source for the compilation of vital statistics."];
let textIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
const typingText = document.querySelector('.typing-text');

function type() {
   
    if (textIndex < textArray.length) {
        if (!isDeleting && charIndex < textArray[textIndex].length) {
            currentText += textArray[textIndex].charAt(charIndex);
            charIndex++;
        } else if (isDeleting && charIndex > 0) {
            currentText = currentText.slice(0, -1);
            charIndex--;
        }

        typingText.textContent = currentText;

        let typingSpeed = isDeleting ? 20 : 100;

        if (!isDeleting && charIndex === textArray[textIndex].length) {
            typingSpeed = 2000; // Pause after typing
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            textIndex++;
            isDeleting = false;
        }

        setTimeout(type, typingSpeed);
    } else {
        textIndex = 0; // Restart after last text
        setTimeout(() => {
            currentText = '';
            charIndex = 0;
            isDeleting = false;
            type();
        }, 2000); // Delay before restarting
    }
}

type();

