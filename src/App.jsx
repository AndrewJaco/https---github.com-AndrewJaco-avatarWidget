import './App.css'
import Calendar_Widget from './Calendar_Widget'
import Avatar_Widget from './components/Avatar_Widget'


import * as SVG from './assets/svg/index.jsx'



function App() {
  return(
    <>
    <section className="w-full h-screen mx-auto px-4 m-4 border-2 border-red-600">
      <div className="grid  h-full md:grid-cols-12 gap-5 p-4 m-2">
        <main className="md:col-span-9 p-4 border-2 border-green-600">
          <Calendar_Widget/>
        </main>
        <aside className="h-full md:col-span-3 md:pt-0 p-2 border-2 border-blue-600">
          <Avatar_Widget/>
        </aside>
      </div>
    </section>
    </>
  )
}

export default App
