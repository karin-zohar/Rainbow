import './styles/main.css'
import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'
import { Palette } from './cmps/palette'

function RootCmp() {

  return (
    <div className="app-container grid grid-rows-[100px_1fr_100px] min-h-screen">
      <AppHeader />
      <main className="min-h-[calc(100vh-200px)] flex place-content-around">
        <Palette />
      </main>
      <AppFooter />
    </div>
  )
}

export default RootCmp
