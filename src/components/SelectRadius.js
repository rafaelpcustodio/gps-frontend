
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'

import { not, isNotEmpty } from '../utils/functions'

import SelectRadiusContainer from './SelectRadiusContainer'
import SelectList from './SelectList'
import StyledSelect from './StyledSelect'

const SelectRadius = props => {
    
    const {
        defaultConstant,
        disabled,
        onSelect,
        options,
        selected
    } = props

    const [ expanded, updateExpanded ] = useState(false)
    const [ optionSelected, updateOptionSelected ] = useState(defaultConstant)

    const handleDropdownClick = () => updateExpanded(not(expanded))

    const handleSelectClick = option => {
        updateExpanded(not(expanded))
        updateOptionSelected(option)
        onSelect(option)
    }

    useEffect(() => {
        if(isNotEmpty(selected)) {
            updateOptionSelected(selected)
        }
    }, [selected])
    
    return (
        <StyledSelect disabled={disabled}>
            <SelectRadiusContainer
                disabled={disabled}
                expanded={ expanded }
                hasCaret={ true }
                onClick={ handleDropdownClick }
                optionSelected={ optionSelected }/>
            <SelectList
                expanded={ expanded }
                onSelect={ handleSelectClick }
                options={ options }
            />
        </StyledSelect>
    )
}

SelectRadius.defaultProps = {
    defaultConstant: '',
    disabled: false,
    onSelect: null,
    options: [],
}

SelectRadius.propTypes = {
    defaultConstant: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    selected: PropTypes.string
}

export default SelectRadius
