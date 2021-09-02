import React, { useState } from 'react';
import styled from 'styled-components';
import IShip from '../models/IShip';
import SearchResultItem from './SearchResultItem';

type SearchResultListProps = {
    list: IShip[]
}

const SearchResultList = (props : SearchResultListProps) => {
    const [sortedBy, setSortedBy] = useState<string>()

    // Sorts the search result passed in props
    const sortBy = (byValue : string) => {
        switch (byValue) {
            case "name":
                props.list.sort((l, r) => {
                    if(sortedBy === "name") {
                        return l.heading < r.heading ? 1 : -1;
                    } 
                    return l.heading > r.heading ? 1 : -1
                }) 
                sortedBy === "name" ? setSortedBy("namedesc") : setSortedBy("name");
                break;

            case "year": 
                sortedBy === "year" ?
                props.list.sort((l, r) => {
                    if(!l.yearOfConstruction || !r.yearOfConstruction) return 1
                    return parseInt(l.yearOfConstruction) > parseInt(r.yearOfConstruction) ? 1 : -1
                })
                : 
                props.list.sort((l, r) => {
                    if(!l.yearOfConstruction || !r.yearOfConstruction) return 1
                    return parseInt(l.yearOfConstruction) > parseInt(r.yearOfConstruction) ? -1 : 1
                })
                sortedBy === "year" ? setSortedBy("yeardesc") : setSortedBy("year");
                break;

            case "capacity":
                sortedBy === "capacity" ?
                props.list.sort((l, r) => {
                    if(!l.passengerCapacity || !r.passengerCapacity) return 1
                    return parseInt(l.passengerCapacity) > parseInt(r.passengerCapacity) ? 1 : -1
                })
                : 
                props.list.sort((l, r) => {
                    if(!l.passengerCapacity || !r.passengerCapacity) return 1
                    return parseInt(l.passengerCapacity) < parseInt(r.passengerCapacity) ? 1 : -1
                })
                sortedBy === "capacity" ? setSortedBy("capacitydesc") : setSortedBy("capacity");
                break;
            default:
                break;
        }
    }

    return (
        <ListContainer>
            <TableHeader>
                <ItemExpansion/>
                <ItemField onClick={() => {
                    sortBy("name")
                }}> Name: </ItemField>
                <ItemField onClick={() => {
                    sortBy("year")
                }}> Year: </ItemField>
                <ItemField onClick={() => {
                    sortBy("capacity")
                }}> Capacity: </ItemField>
            </TableHeader>
            <hr style={{width: "90%", border: "solid lightgray 1px"}}/>
            {
                props.list.map(ship => {
                    return  <SearchResultItem key={ship.shipId} {...ship}/>
                })
            }
            {
                props.list.length === 0 &&
                <div>
                    <NoResults>No results</NoResults>
                </div>
            }
        </ListContainer>
    )
}

const ListContainer = styled.div`
    background-color: #fafafa;
    width: 60%;
    margin: 2em 10em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

const TableHeader = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 1em;
    font-weight: bold;
`

const ItemExpansion = styled.div`
    width: 3em;
`

const ItemField = styled.div`
    width: 30%;
    user-select: none;
    transition: .1s ease;
    :hover {
        cursor: pointer;
        color: #5555ff
    }
`

const NoResults = styled.h3`
    color: #ababab;
`

export default SearchResultList
