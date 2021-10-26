import React from "react";
import { withStyles, WithStyles, createStyles } from "@material-ui/core/styles";
import { ThemeWithColor } from "../../theme";
import { Box, ButtonBase, Typography } from "@material-ui/core";

const styles = ({ spacing, palette }: ThemeWithColor) => createStyles({});

interface Props extends WithStyles<typeof styles> {
  onClick: () => void;
  fullWidth?: boolean
}

const Button: React.FC<Props> = (props: Props) => {
  const { onClick, fullWidth=false } = props;

  return (
    <ButtonBase onClick={onClick}>
      <Box width={fullWidth?'100%':'initial'} color="primary.50" padding={2} bgcolor="secondary.400">
        <Typography variant="h5">Shorten</Typography>
      </Box>
    </ButtonBase>
  );
};

export default withStyles(styles as any)(Button);
