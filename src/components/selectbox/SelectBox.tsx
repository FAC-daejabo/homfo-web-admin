import React, { useState } from "react";
import styled from "styled-components";

const SelectBox = ({
  options,

  setSearchCategory,
}: {
  options: string[];
  setSearchCategory: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [currentValue, setCurrentValue] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  return (
    <SelectBoxContainer onClick={() => setShowOptions((prev) => !prev)}>
      <Label>{currentValue}</Label>
      <SelectOptions show={showOptions}>
        {options.map((option, index) => (
          <Option
            key={index}
            onClick={() => {
              setSearchCategory(option);
              setCurrentValue(option);
            }}
          >
            {option}
          </Option>
        ))}
      </SelectOptions>
    </SelectBoxContainer>
  );
};

export default SelectBox;

const SelectBoxContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 8px;
  height: 30px;
  border: 1px solid #e9ebed;
  border-radius: 4px;
  background-color: #ffffff;
  align-self: center;
  cursor: pointer;
  &::before {
    content: "⌵";
    position: absolute;
    top: 1px;
    right: 8px;
    color: #e9ebed;
    font-size: 20px;
  }
`;
const Label = styled.label`
  font-size: 14px;
  margin-left: 4px;
  text-align: center;
  color: #aeaeae;
`;

interface ISelectOptions {
  show: boolean;
}

const SelectOptions = styled.ul<ISelectOptions>`
  position: absolute;
  list-style: none;
  top: 35px;
  left: 0;
  width: 100%;
  overflow: hidden;
  /* height: 90px; */
  z-index: 1;
  max-height: ${(props) => (props.show ? "none" : "0")};
  padding: 0;
  border-radius: 8px;
  border-left: 1px solid #e9ebed;
  border-right: 1px solid #e9ebed;
  border-bottom: ${(props) => (props.show ? "1px solid #e9ebed" : "none")};
  background-color: #ffffff;
  color: #aeaeae;
`;

const Option = styled.li`
  font-size: 14px;
  padding: 10px 10px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #e9ebed;
  }
`;
