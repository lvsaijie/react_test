import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
export default class Add extends Component {
	handleKeyUp = (event) => {
		const { value } = event.target
		if (event.keyCode !== 13) return
		if (value.trim() === '') return alert("输入的内容不能为空")
		const todoObj = { id: uuidv4(), content: value, isChecked: false }
		// 将todoObj传给父亲
		this.props.addTodo(todoObj)
	}
	render() {
		return (
			<div>
				<input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入内容后按回车" />
			</div>
		)
	}
}
