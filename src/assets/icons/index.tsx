import React from "react";
import clsx from "clsx";
import {
  WithStyles,
  withStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";

import { Icon, IconProps, Box } from "@material-ui/core";

const styles = ({ palette, spacing, typography, breakpoints }: Theme) =>
  createStyles({
    xsmall: {
      fontSize: "0.6875rem",
    },
    small: {
      fontSize: "0.875rem",
    },
    med: {
      fontSize: "1rem",
    },
    large: {
      fontSize: "1.25rem",
    },
    inherit: {
      fontSize: "inherit",
    },
  });

interface Props extends WithStyles<typeof styles> {
  size?: "xsmall" | "small" | "med" | "large" | "inherit";
  IconProps?: IconProps;
  style?: React.CSSProperties;
  className?: string;
  component?: React.FC;
}

export const CopyIcon = withStyles(styles)((props: Props) => (
  <Icon
    style={props.style}
    className={clsx("fas", "fa-copy", props.classes[props.size || "small"])}
    {...props.IconProps}
  />
));