import { Input } from "../components/Input";
import "../App.css";
import { useHistory } from "react-router-dom";
import MainContainer from "../components/MainContainer";
import Typography from "@material-ui/core/Typography";
import Form from "../components/Form";
import { useData } from "../DataContext";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "../components/PromaryButton";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export const Login = () => {
    const history = useHistory();
    const { data, setValues } = useData();
    const [value, setValue] = useState();

    const { register, handleSubmit } = useForm({
        defaultValues: {
            password: data.password,
        },

        mode: "onBlur",
    });

    const handleShowHide = () => {
        setShow(!show);
    };

    const [show, setShow] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
        setValues(data);

        axios
            .post("http://api-kavkev.kg/api/login/", {
                username: value,
                password: data.password,
            })
            .then(function (response) {
                console.log(response.data.token);
                localStorage.setItem("userToken", response.data.token);
                history.push("/profile");
            })
            .catch(function (error) {
                console.log(error);
                history.push("/login");
            });
    };

    return (
        <MainContainer>
            <Typography component="h5" variant="h5">
                Введите свой номер
            </Typography>

            <Form onSubmit={handleSubmit(onSubmit)}>

                <PhoneInput
                    defaultCountry="KG"
                    inputComponent={ Input }
                    placeholder="Enter phone number"
                    value={value}
                    onChange={setValue}
                />

                <Input
                    {...register("password", { required: true, maxLength: 30 })}
                    id="password"
                    type={show ? "text" : "password"}
                    label="password"
                    name="password"
                    placeholder="Введите пароль"
                />
                {show ? (
                    <FontAwesomeIcon
                        icon={faEye}
                        id="show_hide"
                        onClick={handleShowHide}
                    />
                ) : (
                    <FontAwesomeIcon
                        icon={faEyeSlash}
                        id="show_hide"
                        onClick={handleShowHide}
                    />
                )}
                <PrimaryButton type="submit">Отправить</PrimaryButton>
            </Form>
        </MainContainer>
    );
};
