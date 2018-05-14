import * as React from "react";

export interface LinkProps extends React.Props<any> {
  active: boolean;
  children: any;
  onClick: any;
}

export default class Link extends React.Component<LinkProps, any> {
  if(active) {
    return <span>{this.props.children}</span>;
  }

  render() {
    return (
      <a
        href="#"
        onClick={e => {
          e.preventDefault();
          this.props.onClick();
        }}
      >
        {this.props.children}
      </a>
    );
  }
}
