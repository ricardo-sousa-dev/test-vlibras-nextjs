/*eslint-disable */
import { Component } from 'react';

export default class VLibras extends Component<{
  forceOnload?: boolean;
}> {
  widgetSrc: string;

  scriptSrc: string;

  script: any;

  constructor(props: any);

  init(): void;

  componentDidMount(): void;

  render(): JSX.Element;
}
