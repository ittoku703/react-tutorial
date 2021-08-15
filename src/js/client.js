import React from "react"
import ReactDOM from "react-dom"

import BasicOfLayout from './components/basic_of_react/Layout'
import ReactRouterLayout from './components/react_router/Layout'

const app = document.getElementById('app');

// basic of react
// ReactDOM.render(<BasicOfLayout/>, app);
// react router
ReactDOM.render(<ReactRouterLayout />, app);

