# Meme Generator

Visit the live site

This is a *heavily-modified* project from the [Scrimba Frontend Developer Career Path](https://scrimba.com/learn/frontend) that I began long ago, but just returned to in April 2024.  

That was actually a huge benefit, as it gave me practice reading my old code to dive back in.  

There were some changes I made right off the bat, including:
- Using **React 18** rather than React 17 like in the course,
- Adding **Tailwind CSS** to speed up the styling, and
- Making it more **modular** for great **reusability**.

<br/>

![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)  ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)  ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

Built with JavaScript, React, Tailwind CSS, Vite, PNPM, and the [ImgFlip API](https://imgflip.com/api)

## The Project 🗒️

Meme Generator pulls popular meme images from an API and allows the user to find their fave and add top and bottom text to them.  

![sample screenshot](./src/assets/meme-gen.png)

The learning goals were:
- Employing more **Event Listeners**
- Practing **State**
- **Conditional Rendering**
- Working with **Forms** in React,
- And managing **side effects**

<br/>

## My Extras 💪
1. I wanted to use **Tailwind CSS**, because, when I had began this project (maybe a year ago? 🤔) I hadn't had too much practice with it.  During *coding-phase 2*, I only had issues with the styling of the meme text.  (More about that below.)
2. I made it more **modular** by breaking out the `Input`, `Meme` and `Button` custom elements into their own components.  This also challenged me, because I had to consider the implications for **State** a lot more. 😅
3. I made one **accessibility** feature by adding the meme's returned name to the **alt text**.