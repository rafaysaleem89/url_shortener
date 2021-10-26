import React from "react";
import { withStyles, WithStyles, createStyles } from "@material-ui/core/styles";
import { ThemeWithColor } from "../../theme";
import { Box, AppBar, Typography } from "@material-ui/core";

const styles = ({ spacing, palette }: ThemeWithColor) => createStyles({});

interface Props extends WithStyles<typeof styles> {}

const AppHeader: React.FC<Props> = (props: Props) => {
  return (
    <AppBar position="relative">
      <Box bgcolor="secondary.500" p={2} display="flex">
        <Typography variant="h2">Shortner</Typography>
      </Box>
    </AppBar>
  );
};

export default withStyles(styles as any)(AppHeader);