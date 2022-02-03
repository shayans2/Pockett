import * as React from 'react';

export type KeyValue<V> = { [key: string]: V };

// Button
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isLoading?: boolean;
  large?: boolean;
}

// FlexBox
export type AlignContent =
  | 'start'
  | 'end'
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'initial';
export type AlignItems =
  | 'start'
  | 'end'
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'stretch'
  | 'baseline'
  | 'initial';
export type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type Justify =
  | 'start'
  | 'end'
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'initial';
export type Wrap = 'nowrap' | 'wrap' | 'wrap-reverse';

export interface FlexProps {
  inline?: boolean;
  justify?: Justify;
  alignContent?: AlignContent;
  alignItems?: AlignItems;
  direction?: Direction;
  wrap?: Wrap;
  flex?: string;
  gap?: string;
}

// Space
export type SpaceSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
