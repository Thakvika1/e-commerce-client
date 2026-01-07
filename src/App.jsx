import { BrowserRouter } from 'react-router-dom'
import HomepageRoute from './routes/HomepageRoute'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <HomepageRoute />
      </BrowserRouter>
    </>
  )
}

export default App
