// src/components/ExtensionCard.jsx
import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { toggleExtensionStatus, removeExtension } from "./extensionSlice";


// import { lightTheme, darkTheme }  from '../../theme';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  padding: 16px 0;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.cardBackground};

  border-radius: 12px;
  padding: 20px;
  gap: 16px;
  transition: background 0.3s ease;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  width: 100%;
  height: 70%;
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 1.2em;
  margin: 0;
  color: ${({ theme }) => theme.titleColor};
  margin-bottom: 7px;
`;

const Description = styled.p`
  font-size: 0.9em;
  margin: 0;
  color: ${({ theme, active }) =>
    active ? theme.descriptionColorActive : theme.descriptionColorInactive};
`;

const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RemoveButton = styled.button`
  background: #374151;
  color: white;
  font-size: 0.8rem;
  padding: 6px 12px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  &:hover {
    background: #4b5563;
  }
`;

const Toggle = styled.label`
  position: relative;
  display: inline-block;
  width: 36px;
  height: 20px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #6b7280;
    border-radius: 9999px;
    transition: 0.4s;
  }

  span:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
  }

  input:checked + span {
    background-color: #ef4444;
  }

  input:checked + span:before {
    transform: translateX(16px);
  }
`;

const ExtensionCard = () => {
  const dispatch = useDispatch();
  const extensions = useSelector((state) => state.extension.items);
  const filter = useSelector((state) => state.filter.status);

  const filteredExtensions = extensions.filter((ext) => {
    if (filter === "all") return true;
    if (filter === "active") return ext.active;
    if (filter === "inactive") return !ext.active;
    return true;
  });

  return (
    <CardContainer>
     {filteredExtensions.map((extension) => (

    <Card>
      <Header>
        <IconWrapper>
          <img
            src={extension.logo.replace('./', '/')}
            alt={extension.name}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </IconWrapper>
        <div>
          <Title>{extension.name}</Title>
          <Description active={extension.active}>
            {extension.description}
          </Description>
        </div>
      </Header>

      <BottomBar>
        <RemoveButton onClick={() => dispatch(removeExtension(extension.name))}>
          Remove
        </RemoveButton>
        <Toggle>
          <input
            type="checkbox"
            checked={extension.active}
            onChange={() => dispatch(toggleExtensionStatus(extension.name))}
          />
          <span></span>
        </Toggle>
      </BottomBar>
    </Card>

))}
    </CardContainer>
  );
};

export default ExtensionCard;
