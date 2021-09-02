import React from 'react';
import styled from 'styled-components';
import IShip from '../models/IShip';
import SearchResultItem from './SearchResultItem';

type SearchResultListProps = {
    list: IShip[]
}

const SearchResultList = (props : SearchResultListProps) => {
    return (
        <ListContainer>
            <TableHeader>
                <ItemExpansion/>
                <ItemField> Name: </ItemField>
                <ItemField> Year: </ItemField>
                <ItemField> Capacity: </ItemField>
            </TableHeader>
            {
                props.list.map(ship => {
                    return  <SearchResultItem key={ship.shipId} {...ship}/>
                })
            }
        </ListContainer>
    )
}

const ListContainer = styled.table`
    background-color: #fafafa;
    width: 60%;
    margin: 2em 10em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

const TableHeader = styled.tr`
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 1em;
    font-weight: bold;
`

const ItemExpansion = styled.td`
    width: 3em;
`

const ItemField = styled.td`
    width: 30%;
`

export default SearchResultList
