import React from "react";
import { FilterWrapper,FilterLabel,FilterInput } from "./Filter.styled";
export const Filter =({onChange, value})=> {


    return (
        <FilterWrapper>

        <FilterLabel>Find contacts by name
        <FilterInput type="text"
                name="filter"
                onChange={onChange}
                value={value}
                />
        </FilterLabel>

        </FilterWrapper>
        
        
            )

}