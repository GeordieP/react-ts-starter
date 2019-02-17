import React, { useState } from "react";
import styled from "@emotion/styled";

const now = () => new Date().toLocaleString();

export default function Greeting() {
  const [time, setTime] = useState(now());

  setInterval(() => setTime(now()), 1000);

  return (
    <div className="u-flexV u-centerBoth u-fullHeight">
      <h1>
        Hello, <EditableSpan contentEditable={true}>world</EditableSpan>!
      </h1>
      <p>{time}</p>
    </div>
  );
}

const EditableSpan = styled.span`
  border-bottom: 1px solid #f0f4f8;
  padding: 4px;
`;
