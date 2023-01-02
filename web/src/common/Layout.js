// Imports
import React from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

// App imports
import routes from '../routes'
import Notification from './Notification.js'
import Header from './Header'
import PagesHome from '../pages/Home'
import PagesAbout from '../pages/About'
import UserRegister from '../user/Register'
import UserLogin from '../user/Login'
import UserDashboard from '../user/Dashboard'
import NoteList from '../note/List'
import NoteCreate from '../note/Create'

// Component
const Layout = () => {
  // render
  return (
    <Router>
      {/* navigation */}
      <Header />

      <hr />

      {/* body */}
      <main>
        {/* notification */}
        <Notification />

        {/* routes */}
        <Routes>
          {/* pages */}
          <Route path={routes.pages.home} element={<PagesHome/>} exact />
          <Route path={routes.pages.about} element={<PagesAbout/>} />

          {/* user */}
          <Route path={routes.user.register} element={<UserRegister/>} />
          <Route path={routes.user.login} element={<UserLogin/>} />
          <Route path={routes.user.dashboard} element={<UserDashboard/>} />

          {/* note */}
          <Route path={routes.note.list} element={<NoteList/>} />
          <Route path={routes.note.create} element={<NoteCreate/>} />
        </Routes>
      </main>
    </Router>
  )
}

export default Layout
