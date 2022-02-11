import React from "react";
import styled from "@emotion/styled";
import { borderRadius, grid } from "../constants";






// const Avatar = styled.img`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   margin-right: ${grid}px;
//   flex-shrink: 0;
//   flex-grow: 0;
// `;



// const BlockQuote = styled.div`

//   &::before {
   
//   }
//   &::after {
   
//   }
// `;

const Footer = styled.div`
  display: flex;
  margin-top: ${grid}px;
  align-items: center;
`;

const Author = styled.small`
  flex-grow: 0;
  margin: 0;
  background-color: ${props => props.colors.soft};
  border-radius: ${borderRadius}px;
  font-weight: normal;
  padding: ${grid / 2}px;
`;

const QuoteId = styled.small`
  flex-grow: 1;
  flex-shrink: 1;
  margin: 0;
  font-weight: normal;
  text-overflow: ellipsis;
  text-align: right;
`;

// Previously this extended React.Component
// That was a good thing, because using React.PureComponent can hide
// issues with the selectors. However, moving it over does can considerable
// performance improvements when reordering big lists (400ms => 200ms)
// Need to be super sure we are not relying on PureComponent here for
// things we should be doing in the selector as we do not know if consumers
// will be using PureComponent
export default class QuoteItem extends React.PureComponent {
  render() {
    const { quote, isDragging, isGroupedOver, provided } = this.props;

    return (
      <a 
        className="link-item"
        href={quote.author.url}
        isDragging={isDragging}
        isGroupedOver={isGroupedOver}
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        {/* <Avatar src={quote.author.avatarUrl} alt={quote.author.name} /> */}
        <div className="card-item">
          <div className="teste">{quote.content}</div>
          <Footer>
            <Author colors={quote.author.colors}>{quote.responsavel}</Author>
            <QuoteId></QuoteId>
          </Footer>
        </div>
      </a>
    );
  }
}
