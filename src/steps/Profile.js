import MainContainer from "../components/MainContainer";
import Typography from "@material-ui/core/Typography";

// export const Profile = () => {
//     const { data, setValues } = useData();
//     const [open, setOpen] = React.useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);
//     return (
//         <MainContainer>
//             <Typography component="h5" variant="h5">
//                 Добро пожаловать, {localStorage.firstName}
//             </Typography>
//             {/* <button type="button" onClick={handleOpen}>
//   Open modal
// </button>
// <StyledModal
//   aria-labelledby="unstyled-modal-title"
//   aria-describedby="unstyled-modal-description"
//   open={open}
//   onClose={handleClose}
//   BackdropComponent={Backdrop}
// >
//   <Box sx={style}>
//     <h2 id="unstyled-modal-title">Text in a modal</h2>
//     <p id="unstyled-modal-description">Aliquid amet deserunt earum!</p>
//   </Box>
// </StyledModal> */}

//         </MainContainer>
//     );
// };

import * as React from "react";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";

const StyledModal = styled(ModalUnstyled)`
    position: fixed;
    z-index: 1300;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Backdrop = styled("div")`
    z-index: -1;
    position: fixed;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    -webkit-tap-highlight-color: transparent;
`;

const style = {
    width: 400,
    bgcolor: "red",
    border: "2px solid #000",

    p: 2,
    px: 4,
    pb: 3,
};

export const Profile = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <MainContainer>
            <Typography component="h5" variant="h5">
                Добро пожаловать на страницу профиля
            </Typography>
            <div>
                <button type="button" onClick={handleOpen}>
                    Open modal
                </button>
                <StyledModal
                    aria-labelledby="unstyled-modal-title"
                    aria-describedby="unstyled-modal-description"
                    open={open}
                    onClose={handleClose}
                    BackdropComponent={Backdrop}
                >
                    <Box sx={style}>
                        <h2 id="unstyled-modal-title">Text in a modal</h2>
                        <p id="unstyled-modal-description">
                            Aliquid amet deserunt earum!
                        </p>
                    </Box>
                </StyledModal>
            </div>
        </MainContainer>
    );
};
