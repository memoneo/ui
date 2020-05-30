import * as React from "react"
import * as cx from "classnames"

interface Props {
  className?: string
}

// do this as stateless functional component
export default class Error extends React.Component<Props, {}> {
  render(): JSX.Element {
    const { children, className } = this.props

    return (
      <Text>
        {children}
      </Text>
    )
  }
}
