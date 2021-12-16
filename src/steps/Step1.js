import "../App.css";
import { useParams, useHistory } from "react-router-dom";
import MainContainer from "../components/MainContainer";
import Typography from "@material-ui/core/Typography";
import Form from "../components/Form";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "../components/PromaryButton";
import axios from "axios";
import { useState } from "react";
import Link from '@mui/material/Link';

export const Step1 = () => {

    async function getProfile() {
        let res = await axios({
            method: "GET",
            url: "http://www.api-kavkev.kg/api/profile/my/",
            headers: {
                Authorization: `Token ${localStorage.userToken}`,
            },
            data: {},
        });
        if (res.status === 200) {
            console.log(res.status);
        }
        return res.data;
    }

    const { tokenSlug } = useParams();
    const history = useHistory();
    const { handleSubmit } = useForm({
        mode: "onBlur",
    });

    const sendToken = () => {
        axios({
            method: "put",
            url: `http://api-kavkev.kg/api/token/${tokenSlug}/`,
            headers: {
                Authorization: `Token ${localStorage.userToken}`,
            },
            data: {},
        })
            .then((response) => {
                console.log(response.status, "9999999999999");
                localStorage.removeItem("isTook")
            })
            .catch((error) =>
                localStorage.setItem("isTook", error.response.status)
            );

        console.log("tokkkenennn sentt");
    };

    const onSubmit = () => {
        localStorage.setItem("token", tokenSlug);
        console.log(tokenSlug);
        sendToken();


        if (typeof localStorage.userToken !== "undefined") {
            getProfile()
                .then((res) => {
                    console.log(res);
                    localStorage.setItem('pro_obj', JSON.stringify(res.profile));
                    localStorage.setItem('pro_tokens', JSON.stringify(res.tokens));
                    localStorage.setItem('pro_contests', JSON.stringify(res.contests));
                    history.push("/profile");
                })
                .catch((error) => {
                    console.log(error);
                });            
        } else {
            history.push("/chose-log-reg");
        }
    };


    return (
        <MainContainer>
            <div className="increment">
                <div className="white-text-1">+1</div>
            </div>
            <Typography component="h2" variant="h2">
                Поздравляем! Вы отсканировали QR-код:
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Typography
                    component="h5"
                    variant="h5"
                    style={{ color: "green", marginTop: "30px" }}
                >
                    ...{tokenSlug}...
                </Typography>

                <PrimaryButton type="submit">Забрать</PrimaryButton>
            </Form>
            <Typography component="h5" variant="h6" style={{margin: "80vh 0 0 0", position: "absolute"}}> 
                <Link href="/about">Условия акции</Link>
            </Typography>
        </MainContainer>
    );
};
