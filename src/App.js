import React, { Suspense } from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderConteiner from './components/Header/HeaderConteiner';
import NavBar from './components/NavBar/NavBar';
import ProfileContainer from './components/ProFile/ProfileConteiner';
import Paginator from './components/common/Preloader/Paginator/Paginator';
import Preloader from './components/common/Preloader/Preloader';
import Login from './components/login/login';
import { initializedApp } from './redux/app-reducer';


const DialogsConteiner = React.lazy(() => import('./components/Dialogs/DialogsConteiner'));
const UsersConteiner = React.lazy(() => import('./components/Users/UsersConteiner'));
const MusicConteiner = React.lazy(() => import('./components/music/MusicConteiner'));



class App extends React.Component {

  componentDidMount() {
    this.props.initializedApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <HeaderConteiner />
          <NavBar />
          <div className='appWrapper'>
            <Suspense fallback={<Paginator />}>
              <Routes>
                <Route path='/profile/:userId?' element={<ProfileContainer />} />
                <Route path='/dialogs/*' element={<DialogsConteiner />} />
                <Route path='/friends/*' element={<UsersConteiner />} />
                <Route path='/music/*' element={<MusicConteiner />} />
                <Route path='/login/*' element={<Login />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </BrowserRouter >
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})
export default connect(mapStateToProps, { initializedApp })(App);

