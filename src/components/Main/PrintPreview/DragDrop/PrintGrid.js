import React from 'react'
import { DropTarget } from 'react-dnd'
import { ItemTypes } from './ItemTypes'
const style = {
  height: '9rem',
  width: '9rem',
  color: 'black',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  border: '0.05rem solid black',
  float: 'left',
}
const PrintGrid = ({ canDrop, isOver, connectDropTarget }) => {
  const isActive = canDrop && isOver
  let backgroundColor = '#fff'
  if (isActive) {
    backgroundColor = 'lightpink'
  } else if (canDrop) {
    backgroundColor = 'lightgrey'
  }
  return (
    <div ref={connectDropTarget} style={{ ...style, backgroundColor }}>
      {isActive ? '' : 'Drag label here'}
    </div>
  )
}
export default DropTarget(
  ItemTypes.BOX,
  {
    drop: () => ({ name: 'PrintGrid' }),
  },
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }),
)(PrintGrid)
