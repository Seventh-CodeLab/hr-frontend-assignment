import _ from 'lodash';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import IShip from '../models/IShip';

type SearchFormProps = {
    setSearchResult(result: IShip[]) : void
    setIsLoading(isLoading: boolean) : void
}

const SearchForm = ({setSearchResult, setIsLoading} : SearchFormProps) => {

    const [search, setSearch] = useState<string>("");

    const Submit = (e : any) => {
        e.preventDefault()
        FetchShips(search)
    }

    const FetchShips = async (param : string) => {
        setIsLoading(true);
        
        const url = `http://localhost:4000/api/ships/${param}`
        
        const response = await fetch(url);
        const body = await response.json();
        
        setIsLoading(false);
        setSearchResult(body);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const DebouncedCall = useCallback(_.debounce(e => FetchShips(e), 500), []);

    return (
        <FormContainer onSubmit={Submit}>
            <SearchInput 
                type="text" 
                placeholder="Search" value={search} 
                onChange={e => {
                    setSearch(e.target.value)
                    DebouncedCall(e.target.value);
                }}/>
            { 
                search &&
                <ClearInputButton type="reset" onClick={() => setSearch("")}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M19.3536 4.64645C19.5488 4.84171 19.5488 5.15829 19.3536 5.35355L5.35355 19.3536C5.15829 19.5488 4.84171 19.5488 4.64645 19.3536C4.45118 19.1583 4.45118 18.8417 4.64645 18.6464L18.6464 4.64645C18.8417 4.45118 19.1583 4.45118 19.3536 4.64645Z" />
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M4.64645 4.64645C4.84171 4.45118 5.15829 4.45118 5.35355 4.64645L19.3536 18.6464C19.5488 18.8417 19.5488 19.1583 19.3536 19.3536C19.1583 19.5488 18.8417 19.5488 18.6464 19.3536L4.64645 5.35355C4.45118 5.15829 4.45118 4.84171 4.64645 4.64645Z" />
                    </svg>
                </ClearInputButton>
            }
            <SearchButton type="submit" disabled={search.length === 0 ? true : false}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill={search ? "white" : "#aaa"} xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                        d="M9.5455 3.5C6.20666 3.5 3.5 6.20666 3.5 9.5455C3.5 12.8843 6.20666 15.591 9.5455 15.591C12.8843 15.591 15.591 12.8843 15.591 9.5455C15.591 6.20666 12.8843 3.5 9.5455 3.5ZM2.5 9.5455C2.5 5.65438 5.65438 2.5 9.5455 2.5C13.4366 2.5 16.591 5.65438 16.591 9.5455C16.591 13.4366 13.4366 16.591 9.5455 16.591C5.65438 16.591 2.5 13.4366 2.5 9.5455Z" />
                    <path fillRule="evenodd" clipRule="evenodd"
                        d="M14.101 14.1008C14.2963 13.9055 14.6129 13.9055 14.8081 14.1008L21.3536 20.6463C21.5489 20.8416 21.5489 21.1581 21.3536 21.3534C21.1584 21.5487 20.8418 21.5487 20.6465 21.3534L14.101 14.8079C13.9058 14.6126 13.9058 14.2961 14.101 14.1008Z" />
                </svg>
            </SearchButton>
        </FormContainer>
    )
}

const FormContainer = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: 2px 2px 3px #ccc;
    background-color: #fff;

    width: 40%;

    :focus-within {
        outline: solid blue 2px;
    }
`

const SearchInput = styled.input`
    border: none;
    padding: 1em;
    margin-right: .5em;
    width: 100%;

    :focus {
        outline: none;
        ::placeholder {
            color: transparent;
        }
    }


`;

const ClearInputButton = styled.button`
    border: none;
    background-color: transparent;
    padding: 1em;
    :hover {
        cursor: pointer;
    }
`

const SearchButton = styled.button`
    height: 100%;
    padding: 1em;
    border: none;
    background-color: #4b42f5;
    color: white;
    transition: .2s ease;

    :hover {
        cursor: pointer;
    }

    :disabled, [disabled] {
        background-color: transparent;
        color: #aaa;
        :hover {
            cursor: default;
        }
    }

`

export default SearchForm;
