import _ from 'lodash'
import React from 'react'


const If = ({ children, condition, el }) => {

    if (condition) {
        if (_.isFunction(children)) {
            return React.createElement(children)
        }
        return children
    }

    if (_.isFunction(el)) {
        return React.createElement(el)
    }

    return el

}

export default If