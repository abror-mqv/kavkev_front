import "../App.css";
import { useParams, useHistory } from "react-router-dom";
import MainContainer from "../components/MainContainer";
import Typography from "@material-ui/core/Typography";
import Form from "../components/Form";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "../components/PromaryButton";

export const Step1 = () => {
    const { tokenSlug } = useParams();
    const history = useHistory();
    const { handleSubmit } = useForm({
        mode: "onBlur",
    });

    const onSubmit = () => {
        localStorage.setItem("token", tokenSlug);
        console.log(tokenSlug);

        if (typeof localStorage.userToken !== "undefined") {
            history.push("/profile");
        } else {
            history.push("/chose-log-reg");
        }
    };

    return (1
        <MainContainer>
            <div className="increment">
                <div className="white-text-1">
                    +1
                </div>
            </div>
            <Typography component="h2" variant="h2">
                Поздравляем!
                Вы активировали QR-код:
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Typography component="h5" variant="h5" style={{color: "green", marginTop: "30px"}}>
                   ...{tokenSlug}...
                </Typography>

                <PrimaryButton type="submit">Забрать</PrimaryButton>
            </Form>
            
        </MainContainer>
    );
};
