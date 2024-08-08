import './styles/main.css'
import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'

function RootCmp() {

  return (
    <div className="app-container grid grid-rows-[100px_1fr_100px] min-h-screen">
      <AppHeader />
      <main className="bg-pink-300 min-h-[calc(100vh-200px)]">
        main section
      </main>
      <AppFooter />
    </div>
  )
}

export default RootCmp
