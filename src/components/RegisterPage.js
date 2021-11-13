import React, { Component } from "react";
import loginImg from "../image/loginImg.svg";

export class RegisterPage extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="base-container" ref={this.props.containerRef}>
				<div className="header">Register</div>
				<div className="content">
					<div className="image">
						<img src={loginImg} />
					</div>
					<div className="form">
						<div className="form-group">
							<label htmlFor="username">Username</label>
							<input type="text" name="username" placeholder="username" />
						</div>
						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input type="email" name="email" placeholder="email" />
						</div>
						<div className="form-group">
							<label htmlFor="password">Password</label>
							<input type="password" name="password" placeholder="password" />
						</div>
					</div>
				</div>

				<button type="button" className="btn">
					Register
				</button>
			</div>
		);
	}
}

export default RegisterPage;
