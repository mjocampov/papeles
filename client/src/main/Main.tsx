import React from "react";
import { observer } from "mobx-react-lite";
import { Canvas } from "./Canvas";
import { CanvasList } from "./CanvasList";
import Resizer from "../components/Resizer";
import { VariablesTable } from "./VariablesTable";
import styled from "styled-components";
import { CanvasMenu } from "./CanvasMenu";

const StyledDiv = styled.div`
  height: 100%;
  max-width: 100%;

  #list-col{
    min-width: 200px;
    flex: 1;
  }
  #canvas-col{
    min-width: 300px;
    flex: 2;
  }
  #table-col{
    min-width: 200px;
    flex: 1;
  }
`;
type Props = {};

export const Main: React.FC<Props> = observer(() => {
  return (
    <StyledDiv className="row">
      <Resizer id="list-col">
        <CanvasList />
      </Resizer>
      <Resizer id="canvas-col">
        <CanvasMenu showAlways={true}/>
        <CanvasMenu showAlways={false}/>
        <Canvas />
      </Resizer>
      <div className="col" id="table-col">
        <VariablesTable />
      </div>
    </StyledDiv>
  );
});