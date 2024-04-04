import { SunIcon } from '@heroicons/react/24/outline'

function HomePage() {
  return (

    <main>
  <div className="flex flex-col items-center justify-center h-screen px-2 text-white">

<h1 className='text-5xl font-bold mb-20'>PL 09 Flask GPT</h1>

<div>
  <div>
    <div className="flex flex-col items-center justify-center">
      <SunIcon className="h-6 w-6" />
      <h2>Examples</h2>
    </div>
      <div className="space-y-2">
        <p className="infoText">Explain to me python</p>
        <p className="infoText">Difference between OOP in python and C#</p>
        <p className="infoText">Which Code Editors are used with python</p>
      </div>
    </div>
    <div className="flex flex-col items-center justify-center">
      <SunIcon className="h-6 w-6" />
      <h2>ComputerPowers</h2>
    </div>
      <div className="space-y-2">
        <p className="infoText">Generate python syntax with near perfect accuracy</p>
        <p className="infoText">Generate flask code for project setup </p>
        <p className="infoText">Write code for different code editors </p>
      </div>
      <div className="flex flex-col items-center justify-center">
      <SunIcon className="h-6 w-6" />
      <h2>Examples</h2>
    </div>
      <div className="space-y-2">
        <p className="infoText">Explain to me python</p>
        <p className="infoText">Difference between OOP in python and C#</p>
        <p className="infoText">Which Code Editors are used with python</p>
      </div>
  </div>
</div>
    </main>
  
  )
}

export default HomePage
