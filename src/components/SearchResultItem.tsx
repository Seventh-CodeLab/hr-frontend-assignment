import React, { useState } from 'react'
import styled from 'styled-components';
import IShip from '../models/IShip'

const SearchResultItem = ({shipId, heading, body, yearOfConstruction, shipyard, passengerCapacity, beds} : IShip) => {
    const [expanded, setExpanded] = useState<boolean>(false);

    const toggleExpanded = (e: any) => {
        setExpanded(!expanded)
    }

    function createMarkup() {

        return {__html: body ? body : "Nothing"};
      }

    return (
        <>
            <ItemContainer onClick={toggleExpanded}>
                <ItemExpansion>
                    <svg 
                        style={{rotate: expanded ? "180deg" : "0deg", transition: ".2s ease"}} 
                        width="16" height="16" 
                        viewBox="0 0 16 16" 
                        fill="currentColor" 
                        xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                            <path fillRule="evenodd" clipRule="evenodd"
                            d="M15.8536 11.8536C15.6583 12.0488 15.3417 12.0488 15.1464 11.8536L8 4.70711L0.853554 11.8536C0.658291 12.0488 0.341709 12.0488 0.146446 11.8536C-0.0488167 11.6583 -0.0488166 11.3417 0.146446 11.1464L7.64645 3.64645C7.84171 3.45118 8.15829 3.45118 8.35355 3.64645L15.8536 11.1464C16.0488 11.3417 16.0488 11.6583 15.8536 11.8536Z" />
                        </g>
                    </svg>
                </ItemExpansion>
                <ItemField>{heading}</ItemField>
                <ItemField>{yearOfConstruction ? yearOfConstruction : "Unknown"}</ItemField>
                <ItemField>{passengerCapacity ? passengerCapacity + " Passengers" : "Unknown"}</ItemField>
            </ItemContainer>
            {
                expanded &&
                
                // NOTE: I would ***NEVER*** actually use this type of XSS injection prone method in a real environment.
                <ExpansionContent dangerouslySetInnerHTML={createMarkup()}></ExpansionContent>
            }
            <Divider/>
        </>
    )
}

const ItemContainer = styled.tr`
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 1em;

    :hover {
        cursor: pointer;
    }
`

const ItemExpansion = styled.td`
    width: 3em;
`

const ItemField = styled.td`
    width: 30%;
`

const Divider = styled.hr`
    width: 90%;
    border: solid #ececec 1px;
`

const ExpansionContent = styled.div`
    margin: 2em;
`

export default SearchResultItem
