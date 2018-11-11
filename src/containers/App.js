import React from 'react';
import {Provider}from 'react-redux';
import {configureStore} from "../store";
import {BrowserRouter} from 'react-router-dom';
import NavBar from './Navbar'
import Main from "./Main";
import {setAuthorizationToken, setCurrentUser} from "../store/actions/auth";
import jwtDecode from 'jwt-decode'

const store = configureStore();


if (localStorage.jwtToken) {
    // use persisted token in all future requests
    setAuthorizationToken(localStorage.jwtToken);
    // re-hydrate store with persisted currentUser
    try {
        // prevent someone from manually tampering with the key of jwtToken in localStorage
        const decodedPayload = jwtDecode(localStorage.jwtToken);
        /*

            Explanation: The payload is just base64 encoded, every well formed token`s payload can be decrypted.
            The import part is the verification of the signature, which has to happen server-side, where
            the secret Salt to code/encode the token is stored.
         */
        store.dispatch(
            setCurrentUser(decodedPayload)
        )
    } catch (e) {
        console.error('Failed to decode token on app start: ', e)
        // enforce logout
        store.dispatch(
            setCurrentUser({})
        )
    }
}

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="onboarding">
          <NavBar/>
          <Main/>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
