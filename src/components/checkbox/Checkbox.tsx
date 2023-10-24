import React from "react";

const Checkbox = ({
  content,
  checked,
  setChange,
}: {
  content: string;
  checked: boolean;
  setChange: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <label style={{ fontSize: "18px" }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChange((current) => !current)}
      />
      {content}
    </label>
  );
};

export default Checkbox;
