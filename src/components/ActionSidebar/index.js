import React from 'react'
import { useStore } from 'react-redux'
import { Col } from 'react-grid-system'

/**
* @author zilahir
* @function ActionSidebar
* */

const ActionSidebar = () => {
	const store = useStore()

	return (
		<>
			<Col lg={3}>
				<p>
					editorsidebar
				</p>
			</Col>
		</>
	)
}

export default ActionSidebar
