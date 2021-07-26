import React, { Component } from 'react'
import Item from '../Item'
export default class index extends Component {
	render() {
		const todoList = this.props.todoList
		return (
			<div>
				{todoList.map((item, index) => {
					return <Item {...item} key={item.id} />
				})}
			</div>
		)
	}
}
