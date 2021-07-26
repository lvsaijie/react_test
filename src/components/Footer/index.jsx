import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<input type="checkbox" />
				<span>已完成/全部</span>
				<button>清除全部</button>
			</div>
		)
	}
}
