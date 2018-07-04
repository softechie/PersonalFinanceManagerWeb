import React from 'react'
import PropTypes from 'prop-types'
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap'

const SearchBar = (props) => {
  return(
    <InputGroup>
      <Input placeholder={props.searchName}
             value={props.searchValue}
             onChange={props.searchChange}/>
      <InputGroupAddon addonType="append">
        <Button onClick={props.searchSubmit}><i className="fa fa-search" aria-hidden="true"></i></Button>
      </InputGroupAddon>
    </InputGroup>
  )
}

SearchBar.propTypes = {
  searchName: PropTypes.string.isRequired,
  searchValue: PropTypes.string.isRequired,
  searchChange: PropTypes.func.isRequired,
  searchSubmit: PropTypes.func.isRequired
}

export default SearchBar