# Web Gradient Picker

Clean, interactive React single-page application (SPA) with Vite and Tailwind CSS letting the user chose the page background animation from a set of defined gradients

## Demo

You can find the website [here](https://web-gradient-picker.vercel.app/)

![Demo](/assets/showcase.gif)

## Key features & project value

### Interactivity

The core functionality relies on clean ans functional components. It uses the useState hook to manage the `currentBackground` class, which is a user-controlled interface in React. A single click triggers a state update, instantly rendering the entire page with the new visual style

### UI & animation

The application's UI is built entirely with Tailwind CSS, showcasing my ability to configure and use a utility-first framework. It implements custom color definitions in `tailwind.config.js` for a consistent design system (e.g. `pinkbtn`, `gradient-pink`).

The animation is achieved using a custom CSS `@keyframes` that shifts the background-position on a large gradient (`background-size: 600% 600%`). This technique creates a smooth ans continuous loop

### Interactive UI details

I focused on polished details to elevate the user experience:
* The control box uses `backdrop-blur-sm` for a modern glass effect that ensures the text remains readable against the changing animated background
* The "How does it work?" button features a tooltip with smooth transitions (`transition-all duration-500 ease-in-out`) which is managed using the `onMouseEnter` and `onMouseLeave` handlers in the React component

### Technical stack

- React : Javascript library 
- Tailwind CSS : CSS framework
- Vite : Build tool
- Vercel : Online hosting  

## Available gradients

The application is already loaded with five uniquely designed color themes, all from [Schemecolor](https://www.schemecolor.com/)
 
<table>
  <tr>
     <td>Gray (base)</td>
     <td>Pink</td>
     <td>Purple</td>
     <td>Blue</td>
     <td>Rainbow</td>
  </tr>
  <tr>
    <td><img src="assets/gray.png"></td>
    <td><img src="assets/pink.png"></td>
    <td><img src="assets/purple.png"></td>
    <td><img src="assets/blue.png"></td>
    <td><img src="assets/rainbow.png"></td>
  </tr>
 </table>