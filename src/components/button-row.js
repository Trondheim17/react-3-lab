import React from 'react'
import Button from './button'
import PropTypes from 'prop-types'

const ButtonRow = (props) => {
    return (
        <div className='ButtonRow'>
            <Button className='button' name={'< Previous'} handleOnClick={() => props.handleOnClick('previous')}/>
            <Button className='button' name={'Next >'} handleOnClick={() => props.handleOnClick('next')}/>
        </div>
    )

}

ButtonRow.propTypes = {
    handleOnClick: PropTypes.func.isRequired,
}


export default ButtonRow