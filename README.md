# CSS3 Transitions, Animations, and Advanced JavaScript Functions
# Interactive Web Page with Themes and Animations

## Description

This web page demonstrates interactive features using HTML, CSS, and JavaScript. It includes:

* **Theming:** Users can select between "Sakura Light" and "Cherry Blossom Night" themes, with distinct color schemes and background images.  Theme preferences are saved using local storage.
* **Animations:** A button triggers a CSS animation on a decorative image.
* **Interactive Elements:** A hover effect is applied to a box element using CSS transitions.

## Key Features

* **Dynamic Theme Switching:** JavaScript allows users to change the website's appearance (colors, background) by selecting a theme.
* **Persistent Preferences:** The selected theme is saved in the user's browser using `localStorage`, so it persists across page reloads.
* **CSS Animations:** CSS keyframes and transitions are used to create visual effects, such as the animation triggered by a button click and the hover effect on a box.
* **Responsive Design:** The page is designed to be responsive.
* **Image Integration**: Uses a background image and a separate animated image.

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Local Storage

## Setup Instructions

1.  **Clone the repository (or download the files):** If you have the files provided to you, you can skip this step.  If this project were in a git repository, you'd clone it.
2.  **Prepare the image files:**
    * Create a folder named `images` in the same directory as your `index.html` file.
    * Place the following image files into the `images` folder:
        * `school-girls-with-cherry-blossoms.jpg` (This is the main background image)
        * `pink-flower.jpg` (This is the image that is animated)
3.  **Open the HTML file:** Open the `index.html` file in a web browser (e.g., Chrome, Firefox, Safari).

## File Structure

The project should have the following file structure:

project-root/├── index.html├── style.css├── script.js└── images/├── school-girls-with-cherry-blossoms.jpg└── pink-flower.jpg
## How to Use

1.  **Theme Selection:** Use the dropdown menu labeled "Select Theme" to choose between "Sakura Light" and "Cherry Blossom Night".
2.  **Save Preferences:** Click the "Save Preferences" button to save your theme selection.  The chosen theme will be applied, and it will be remembered when you reload the page.
3.  **Trigger Animation:** Click the "Animate Image!" button to see the decorative image perform a spin and fade animation.
4.  **Hover Effect:** Hover your mouse over the "Hover Me" box to see a CSS transition effect.

## Customization

* **Themes:** You can modify the `light-theme` and `dark-theme` classes in the `style.css` file to change the colors, fonts, and background images.
* **Animations:** The `spinAndPop` animation is defined in the `@keyframes` section of the `style.css` file.  You can modify this animation or create new ones.  The JavaScript in `script.js` applies the animation.
* **Images:** Ensure the image paths in the `index.html` and `style.css` files are correct, relative to the location of the files.  The images should be placed in the `images` folder.
* **Content:** The text content in `index.html` can be changed to suit your needs.


