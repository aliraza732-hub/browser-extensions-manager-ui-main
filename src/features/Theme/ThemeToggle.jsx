import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./themeSlice";
import { Moon, Sun } from "lucide-react";
import styled from "styled-components";

const StyledButton = styled.button`

  border: none;
      
`;

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  return (
    <StyledButton onClick={() => dispatch(toggleTheme())}>
      {theme === "dark" ? <Moon /> : <Sun />}
    </StyledButton>
  );
};

export default ThemeToggle;
