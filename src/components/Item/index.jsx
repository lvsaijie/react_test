import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
	render() {
		const { content, isChecked } = this.props
		return (
			<div className="item">
				<input type="checkbox" defaultChecked={isChecked} />
				<h4 className="content">{content}</h4>
				<button>删除</button>
			</div>
		)
	}
}
