import React from 'react'
import PropTypes from 'prop-types';

const Button = (props) => {
        return (
            <div className='Button'>
                <button onClick={props.handleOnClick}>{props.name}</button>
            </div>
        )
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    handleOnClick: PropTypes.func.isRequired,
}

export default Button