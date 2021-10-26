import React from "react";
import { withStyles, WithStyles, createStyles } from "@material-ui/core/styles";
import { ThemeWithColor } from "../../theme";
import { Box } from "@material-ui/core";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const styles = ({ spacing, palette }: ThemeWithColor) => createStyles({});

interface Props extends WithStyles<typeof styles> {
  shortUrl: string;
}

const ShareButtons: React.FC<Props> = (props: Props) => {
  const { shortUrl } = props;

  return (
    <Box display="flex" justifyContent="space-between" width={120} mt={1}>
      <FacebookShareButton url={shortUrl} quote={"Your Text Here"}>
        <FacebookIcon size={25} />
      </FacebookShareButton>
      <LinkedinShareButton
        url={shortUrl}
        title={"Your Title Here"}
        summary={"Your Text"}
        source={shortUrl}
      >
        <LinkedinIcon size={25} />
      </LinkedinShareButton>
      <TwitterShareButton url={shortUrl}>
        <TwitterIcon size={25} />
      </TwitterShareButton>
      <WhatsappShareButton url={shortUrl}>
        <WhatsappIcon size={25} />
      </WhatsappShareButton>
    </Box>
  );
};

export default withStyles(styles as any)(ShareButtons);
