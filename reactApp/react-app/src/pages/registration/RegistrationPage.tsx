import RegForm from "./../../components/RegistrationForm";
import InviteToSomewhere from "../../components/InviteToSomewhere";
import "./RegPageStyles.sass";

export default function RegistrationPage() {
    return(
        <>
            <RegForm/>

            <InviteToSomewhere path={"/"} text={"Есть логин для входа?"}/>
        </>
    )
}