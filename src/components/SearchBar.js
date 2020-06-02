import React, { useState } from 'react'
import styled from 'styled-components'
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = (props) => {
  const [activeSearch, setActiveSearch] = useState(false);

  const handleSearchSubmit = e => {
    e.preventDefault();
    props.handleSearch();
  }

  return (
    <StyledSearchBar activeSearch={activeSearch}>
        <StyledForm
          onSubmit={handleSearchSubmit}
          className={`search-bar ${activeSearch ? "open" : ""}`}
        >
          <StyledButton>
            <SearchIcon />
          </StyledButton>
          <StyledInput
            autoFocus
            placeholder="Search City"
            value={props.query}
            onChange={(event) => props.setQuery(event.target.value)}
          />
        </StyledForm>
    </StyledSearchBar>
  );};

const StyledSearchBar = styled.div`
  transition: width 1.25s;
`;

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 32px;
  margin: 0 auto;
  transition: .5s;
  max-width: 600px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const StyledInput = styled.input.attrs(() => ({
  id: "search",
}))`
  background-color: transparent;
  border: none;
  font-size: 1.8rem;
  font-weight: 300;
  color: #fff;
  caret-color: #fff;
  margin-left: 16px;
  padding: 4px 0;
  width: 100%;
  line-height: 1;
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
    font-weight: 300;
    font-style: italic;
  }
`;

const StyledButton = styled.button`
  background-color: transparent;
  border-radius: 8px;
  border: none;
  outline: none;
  padding: 8px 10px;
  cursor: pointer;
  &&& {
    color: #fff;
  }
`

export default SearchBar;