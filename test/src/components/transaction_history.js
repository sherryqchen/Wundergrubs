import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class transaction_history extends Component {
	render() {
		return (
			<div className="transaction">
                <h5>Home->transaction history</h5>
                <h2>Transaction Histroy</h2>
				<h4>You have no transaction now.</h4>
				<Link className="link"to="/home">return home</Link>
			</div>
		);
	}
}

export default transaction_history;