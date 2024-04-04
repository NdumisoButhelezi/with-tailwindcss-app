import { ExclamationCircleIcon } from '@heroicons/react/20/solid'
import { BoltIcon, SunIcon } from '@heroicons/react/24/outline'

function HomePage() {
  return (

    <main>
  <div className="flex flex-col items-center justify-center h-screen px-2 text-white">

<h1 className='text-5xl font-bold mb-20'>PL 09 Flask GPT</h1>

<div className='flex space-x-2 text-center'>
  <div>
    <div className="flex flex-col items-center justify-center">
      {/*SunIcon */}
      <SunIcon className="h-6 w-6"/>
      <h2>Examples</h2>
    </div>
      <div className="space-y-2">
        <p className="infoText">Explain to me python</p>
        <p className="infoText">Difference between OOP in python and C#</p>
        <p className="infoText">Which Code Editors are used with python</p>
      </div>
    </div>
    <div>
    <div className="flex flex-col items-center justify-center">
      {/*SunIcon */}
      <BoltIcon className="h-6 w-6" />
      <h2>Examples</h2>
    </div>
      <div className="space-y-2">
        <p className="infoText">Explain to me python</p>
        <p className="infoText">Difference between OOP in python and C#</p>
        <p className="infoText">Which Code Editors are used with python</p>
      </div>
    </div>
    <div>
    <div className="flex flex-col items-center justify-center">
      {/*SunIcon */}
      <ExclamationCircleIcon className="h-6 w-6" />
      <h2>Examples</h2>
    </div>
      <div className="space-y-2">
        <p className="infoText">Explain to me python</p>
        <p className="infoText">Difference between OOP in python and C#</p>
        <p className="infoText">Which Code Editors are used with python</p>
      </div>
    </div>
  </div>
</div>
    </main>
  
  )
}

export default HomePage
