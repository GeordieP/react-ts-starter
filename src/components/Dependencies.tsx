import React from "react";
import styled from "@emotion/styled";
import { dependencies, devDependencies } from "../../package.json";

const mapDeps = deps =>
  Object.keys(deps).map((name: string) => (
    <li>
      {name} <Version>{deps[name]}</Version>
    </li>
  ));

export default function Dependencies() {
  return (
    <div>
      <div>
        <h4>Dependencies</h4>
        <ul>{mapDeps(dependencies)}</ul>
      </div>
      <div>
        <h4>Dev Dependencies</h4>
        <ul>{mapDeps(devDependencies)}</ul>
      </div>
    </div>
  );
}

const Version = styled.span`
  background: #f0f4f8;
  color: #829ab1;
  margin-left: 5px;
  font-size: 0.9rem;
  padding: 1px 4px;
  border-radius: 3px;
`;
