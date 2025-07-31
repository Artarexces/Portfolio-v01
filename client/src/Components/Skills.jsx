import React from 'react'

const Skills = () => {
  return (
    <section id="Skills" className="w-full py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
        {/* Front-end */}
        <div className="bg-slate-800 p-8 rounded-2xl w-68 flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-6">Front-end</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="w-12 h-12 hover:scale-110 transition-transform duration-300" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className="w-12 h-12 hover:scale-110 transition-transform duration-300" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="w-12 h-12 hover:scale-110 transition-transform duration-300" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="w-12 h-12 hover:scale-110 transition-transform duration-300" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="w-12 h-12 hover:scale-110 transition-transform duration-300" />
          </div>
        </div>

        {/* Back-end */}
        <div className="bg-slate-800 p-8 rounded-2xl w-68 flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-6">Back-end</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" className="w-14 h-14 hover:scale-110 transition-transform duration-300" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className="w-14 h-14 hover:scale-110 transition-transform duration-300" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="w-12 h-12 hover:scale-110 transition-transform duration-300" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" className="w-12 h-12 hover:scale-110 transition-transform duration-300" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" className="w-12 h-12 hover:scale-110 transition-transform duration-300" />
          </div>
        </div>

        {/* Tools */}
        <div className="bg-slate-800 p-8 rounded-2xl w-68 flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-6">Tools</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" className="w-12 h-12 hover:scale-110 transition-transform duration-300" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" className="w-12 h-12 hover:scale-110 transition-transform duration-300" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" className="w-12 h-12 hover:scale-110 transition-transform duration-300" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" className="w-12 h-12 hover:scale-110 transition-transform duration-300" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" className="w-12 h-12 hover:scale-110 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
