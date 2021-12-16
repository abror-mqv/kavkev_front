import MainContainer from "../components/MainContainer";
import Button from "@mui/material/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

export const ChoseLogReg = () => {
    const history = useHistory();

    const buttonReg = () => {
        history.push("/registration");
    };

    const buttonLog = () => {
        history.push("/login")
    }

    return (
        <MainContainer>
            <Typography component="h3" variant="h3">
                Выберите вариант входа:
            </Typography>
                <Button onClick={buttonReg} style={{marginTop: "40px",  width: "80%", fontSize: "4vw"}} variant="contained" disableElevation>
                    Зарегестрироваться
                </Button>

                <Button onClick={buttonLog} style={{marginTop: "40px", backgroundColor: "green", width: "80%", fontSize: "4vw"}} variant="contained" disableElevation>
                    У меня уже есть аккаунт
                </Button>
        </MainContainer>
    );
};
