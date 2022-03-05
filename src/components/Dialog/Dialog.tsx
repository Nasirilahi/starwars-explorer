import React, { Fragment, forwardRef, Ref, ReactElement } from "react";
import {
  styled,
  Dialog,
  DialogTitle,
  IconButton,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Divider,
  DialogContent,
  Slide,
  useMediaQuery,
  useTheme
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { TransitionProps } from '@mui/material/transitions';
import { stringAvatar } from "../../utils/stringAvatar";
import { keyMapper } from "../../utils/valueMapper";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props: any) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

interface listItem {
  gender?: string;
  height?: string;
  birth_year?: string;
  hair_color?: string;
  skin_color?: string;
  mass?: string;
  terrain?: string;
  population?: string;
  title?: string;
  producer?: string;
  release_date?: string;
  director?: string;
}

interface DialogProps {
  onClose: any;
  open: boolean;
  title: string;
  list: listItem;
  showAvatar: boolean;
}

const DialogContainer = ({
  onClose,
  open,
  title,
  list,
  showAvatar,
}: DialogProps): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <BootstrapDialog
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      TransitionComponent={Transition}
      fullWidth
      fullScreen={isMobile}
    >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={onClose}>
        <div style={{ display: "flex", alignContent: "center" }}>
          {
            showAvatar && <Avatar {...stringAvatar(title)} />
          }
          {title}
        </div>
      </BootstrapDialogTitle>
      <DialogContent dividers>
        <List
          sx={{
            width: "100%",
            maxWidth: "778px",
            bgcolor: "background.paper",
          }}
        >
          {Object.entries(list).map(
            ([key, value]: [string, string], index: number) => (
              <Fragment key={index}>
                <ListItem>
                  <ListItemText primary={`${keyMapper[key]} -  ${value}`} />
                </ListItem>
                {index !== Object.entries(list).length - 1 && <Divider />}
              </Fragment>
            )
          )}
        </List>
      </DialogContent>
    </BootstrapDialog>
  );
};

export default DialogContainer;
