import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setFilterStatus } from './filterSlice'
import styled from 'styled-components';

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;

`
const ExtensionList = styled.h2`
color: ${({ theme }) => theme.titleColor};

`
const FilterButton = styled.div`
display: flex;
justify-content: space-between;;
align-items: center;


& button {
fontsize: 16px;
padding: 10px 20px;
}

`
const tabs = ['all', 'active', 'inactive'];

const FilterTabs = () => {
    const dispatch = useDispatch();
    const currentStatus = useSelector((state) => state.filter.status);
    console.log(`Current filter status: ${currentStatus}`);
    
    const handleClick = (status) => {
        dispatch(setFilterStatus(status));
        console.log(`Filter status set to: ${status}`);
    }
  return (
    <FilterContainer>
        <ExtensionList>
            Extension List
        </ExtensionList>
        {
            <FilterButton>
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => handleClick(tab)}
                        style={{
                            backgroundColor: currentStatus === tab ? 'hsl(3, 77%, 44%)' : 'white',
                            color: currentStatus === tab ? 'white' : 'black',
                            
                            border: 'none',
                            cursor: 'pointer',
                            margin: '0 5px',
                            borderRadius: '22px',
                            height: 'auto',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
            </FilterButton>
        }
    </FilterContainer>
  )
}

export default FilterTabs