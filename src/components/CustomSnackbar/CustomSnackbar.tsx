import React from "react";
import { withStyles, WithStyles, createStyles } from "@material-ui/core/styles";
import { ThemeWithColor } from "../../theme";
import { Snackbar } from "@material-ui/core";
import { Alert, Color } from "@material-ui/lab";

const styles = ({ spacing, palette }: ThemeWithColor) =>
  createStyles({
    alertStyle: {
      width: "100%",
    },
  });

interface Props extends WithStyles<typeof styles> {
  snackbarOpen: boolean;
  onSnackbarClose: () => void;
  duration: number;
  severity: Color;
  text: string;
}

const CustomSnackbar: React.FC<Props> = (props: Props) => {
  const { snackbarOpen, onSnackbarClose, duration, severity, text, classes } =
    props;

  return (
    <Snackbar
      open={snackbarOpen}
      autoHideDuration={duration}
      onClose={onSnackbarClose}
      role="note"
    >
      <Alert
        onClose={onSnackbarClose}
        severity={severity}
        className={classes.alertStyle}
      >
        {text}
      </Alert>
    </Snackbar>
  );
};

export default withStyles(styles as any)(CustomSnackbar);
