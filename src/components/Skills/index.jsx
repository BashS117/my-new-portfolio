import React from 'react'
import './skills.css'

function Skills() {
  return (
    <section id='skills'>
      <h2 className='number-heading section-list-item before:[content:"03."]'>Skills</h2>

      <div class="skills-container mt-[150px] ">
        <div class="skill-icon"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
          <path fill="#f7df1e" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 L17.952,33.029z"></path>
        </svg></div>
        <div class="skill-icon">
          <img width="64" height="64" src="https://img.icons8.com/nolan/64/html-filetype.png" alt="html-filetype" />
        </div>
        <div class="skill-icon">
          <img width="48" height="48" src="https://img.icons8.com/parakeet/48/css-filetype.png" alt="css-filetype" />           </div>
        <div class="skill-icon">
        <img width="48" height="48" src="https://img.icons8.com/color/48/react-native.png" alt="react-native"/>        </div>

        <div class="skill-icon">
          <img width="50" height="50" src="https://www.cdnlogo.com/logos/n/80/next-js.svg" />
        </div>

        <div class="skill-icon">

          <img width="48" height="48" src="https://img.icons8.com/color/48/tailwindcss.png" alt="tailwindcss" />

        </div>
        <div class="skill-icon">

<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 256 256"><defs><linearGradient id="logosAntDesign0" x1="62.102%" x2="108.197%" y1="0%" y2="37.864%"><stop offset="0%" stop-color="#4285EB"/><stop offset="100%" stop-color="#2EC7FF"/></linearGradient><linearGradient id="logosAntDesign1" x1="69.644%" x2="54.043%" y1="0%" y2="108.457%"><stop offset="0%" stop-color="#29CDFF"/><stop offset="37.86%" stop-color="#148EFF"/><stop offset="100%" stop-color="#0A60FF"/></linearGradient><linearGradient id="logosAntDesign2" x1="69.691%" x2="16.723%" y1="-12.974%" y2="117.391%"><stop offset="0%" stop-color="#FA816E"/><stop offset="41.473%" stop-color="#F74A5C"/><stop offset="100%" stop-color="#F51D2C"/></linearGradient><linearGradient id="logosAntDesign3" x1="68.128%" x2="30.44%" y1="-35.691%" y2="114.943%"><stop offset="0%" stop-color="#FA8E7D"/><stop offset="51.264%" stop-color="#F74A5C"/><stop offset="100%" stop-color="#F51D2C"/></linearGradient></defs><g fill="none"><path fill="url(#logosAntDesign0)" d="M116.85 4.545L4.53 116.775a15.396 15.396 0 0 0 0 21.812l112.32 112.229c6.039 6.033 15.792 6.033 21.83 0l47.095-47.056c5.408-5.404 5.408-14.165 0-19.568c-5.408-5.404-14.176-5.404-19.584 0l-35.702 35.672c-1.503 1.502-3.784 1.502-5.287 0l-89.696-89.622c-1.503-1.502-1.503-3.781 0-5.283l89.696-89.623c1.503-1.501 3.784-1.501 5.287 0l35.702 35.673c5.408 5.404 14.176 5.404 19.584 0c5.408-5.404 5.408-14.164 0-19.568l-47.09-47.05c-6.063-5.904-15.82-5.856-21.835.154Z"/><path fill="url(#logosAntDesign1)" d="M116.85 4.545L4.53 116.775a15.396 15.396 0 0 0 0 21.812l112.32 112.229c6.039 6.033 15.792 6.033 21.83 0l47.095-47.056c5.408-5.404 5.408-14.165 0-19.568c-5.408-5.404-14.176-5.404-19.584 0l-35.702 35.672c-1.503 1.502-3.784 1.502-5.287 0l-89.696-89.622c-1.503-1.502-1.503-3.781 0-5.283l89.696-89.623c3.742-3.226 9.849-9.76 18.815-11.29c6.664-1.135 13.95 1.365 21.857 7.5L138.686 4.39c-6.064-5.903-15.82-5.855-21.836.155Z"/><path fill="url(#logosAntDesign2)" d="M196.647 173.754c5.408 5.404 14.176 5.404 19.584 0l34.739-34.71a15.396 15.396 0 0 0 0-21.812l-35.041-34.89c-5.421-5.397-14.192-5.389-19.603.018c-5.408 5.404-5.408 14.164 0 19.568l23.667 23.648c1.503 1.502 1.503 3.781 0 5.283l-23.346 23.327c-5.408 5.404-5.408 14.165 0 19.568Z"/><ellipse cx="128.327" cy="128.242" fill="url(#logosAntDesign3)" rx="30.327" ry="30.302"/></g></svg>
        </div>
        <div class="skill-icon">
          <img width="48" height="48" src="https://img.icons8.com/fluency/48/vite.png" alt="vite" />
        </div>
        <div class="skill-icon">

          <img width="48" height="48" src="https://img.icons8.com/color/48/git.png" alt="git" />

        </div>
        <div class="skill-icon">
          <img width="64" height="64" src="https://img.icons8.com/glyph-neue/64/github.png" alt="github" />
        </div>
       
        <div class="skill-icon">
          <img width="68" height="68" src="https://img.icons8.com/color/48/npm.png" alt="npm" />
        </div>

       

      </div>

    </section>
  )
}

export default Skills