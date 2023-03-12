import React from 'react';
import '@styles/MyAccount.scss';

const MyAccount = () => {
	return (
		<div className="MyAccount">
			<div className="MyAccount-container">
				<h1 className="title">My account</h1>
				<form action="/" className="form">
					<div>
						<label for="name" className="label">
							Name
							<input className="value">Camila Yokoo</input>						
						</label>
						<label for="email" className="label">
							Email
							<input className="value">camilayokoo@gmail.com</input>						
						</label>
						<label for="password" className="label">
							Password
							<input className="value">*********</input>						
						</label>
					</div>
					<input type="submit" value="Edit" className="secondary-button login-button" />
				</form>
			</div>
		</div>
	);
};

export default MyAccount;
