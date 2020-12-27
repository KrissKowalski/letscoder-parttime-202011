import { useEffect, useState } from 'react';
import {
    withRouter,
    Route,
    Redirect,
    Switch
} from "react-router-dom";

import Nav from './Nav'
import Search from './Search'
import AllCars from './AllCars'
import Profile from './Profile'
import MyCars from './MyCars'

function Home({ history, onLogout }) {
    const [homeView, setHomeView] = useState('search')

    const handleSearchClick = (event) => {
        event.preventDefault()

        setHomeView('search')
        history.push('/home/search')
    }
    const handleAllCarsClick = (event) => {
        event.preventDefault()

        setHomeView('all-cars')
        history.push('/home/all-cars')
    }
    const handleProfileClick = (event) => {
        event.preventDefault()

        setHomeView('profile')
        history.push('/home/profile')
    }
    const handleMyCarsClick = (event) => {
        event.preventDefault()

        setHomeView('my-cars')
        history.push('/home/my-cars')
    }

    return (<>
        <Nav
            selected={homeView}
            searchClick={handleSearchClick}
            allCarsClick={handleAllCarsClick}
            profileClick={handleProfileClick}
            myCarsClick={handleMyCarsClick}
        />
        {/* <Redirect to='/home/search' /> */}
        <Switch>
            <Route exact path='/home' render={() => <Redirect to='/home/search' />} />
            <Route path='/home/search' render={() => <Search />} />
            <Route path='/home/all-cars' render={() => <AllCars />} />
            <Route path='/home/profile' render={() => <Profile onLogout={onLogout} />} />
            <Route path='/home/my-cars' render={() => <MyCars />} />
        </Switch>
    </>);
}

export default withRouter(Home)