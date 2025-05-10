document.addEventListener('DOMContentLoaded', () => {
    const themeSelector = document.getElementById('themeSelector');
    const savePrefsButton = document.getElementById('savePrefsButton');
    const actionButton = document.getElementById('actionButton');
    const animatedImage = document.getElementById('animatedImage');

    // Function to apply saved preferences or default
    function applyPreferences() {
        const savedTheme = localStorage.getItem('userTheme');
        // Default to 'light' theme if no preference is saved or if an invalid value was somehow saved
        const currentTheme = (savedTheme === 'light' || savedTheme === 'dark') ? savedTheme : 'light';

        document.body.className = currentTheme + '-theme';
        themeSelector.value = currentTheme;
        console.log(`Applied theme: ${currentTheme}-theme`);
    }

    // Function to save user preferences
    function savePreferences() {
        const selectedTheme = themeSelector.value;
        localStorage.setItem('userTheme', selectedTheme);
        document.body.className = selectedTheme + '-theme'; // Apply selected theme class
        // Provide more descriptive feedback
        const themeName = themeSelector.options[themeSelector.selectedIndex].text;
        alert(`Preferences saved! Theme set to: ${themeName}`);
        console.log(`Preferences saved. Theme: ${selectedTheme}-theme`);
    }

    // Event listener for the save preferences button
    if (savePrefsButton) {
        savePrefsButton.addEventListener('click', savePreferences);
    }

    // Apply preferences when the page loads
    applyPreferences();

    // Function to trigger the CSS animation on the image
    function triggerImageAnimation() {
        console.log('Action button clicked, triggering animation for animatedImage.');

        // Remove the class to allow re-triggering the animation
        animatedImage.classList.remove('start-animation');

        // This is a trick to force a reflow, ensuring the animation restarts.
        // void animatedImage.offsetWidth; // You might not always need this, but it's a common fix.

        // Using requestAnimationFrame for smoother animation restart
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                animatedImage.classList.add('start-animation');
            });
        });
    }

    // Event listener for the action button
    if (actionButton) {
        actionButton.addEventListener('click', triggerImageAnimation);
    }

    // Log current date and time to console (optional, for context based on your prompt)
    console.log("Page loaded and script executed on: " + new Date().toLocaleString() + " (SAST: " + new Date().toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" }) + ")");

});